import { useEffect, useState } from 'react'

const FALLBACK = { r: 63, g: 46, b: 38 }
const SAMPLE_SIZE = 24
const cache = new Map()

// Formula: downsample the image onto a tiny canvas and average every sampled
// pixel's RGB — a fast, dependency-free proxy for "the main color of the photo".
function extractAverageColor(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = SAMPLE_SIZE
      canvas.height = SAMPLE_SIZE
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, SAMPLE_SIZE, SAMPLE_SIZE)
      try {
        const { data } = ctx.getImageData(0, 0, SAMPLE_SIZE, SAMPLE_SIZE)
        let r = 0
        let g = 0
        let b = 0
        const pixelCount = data.length / 4
        for (let i = 0; i < data.length; i += 4) {
          r += data[i]
          g += data[i + 1]
          b += data[i + 2]
        }
        resolve({ r: Math.round(r / pixelCount), g: Math.round(g / pixelCount), b: Math.round(b / pixelCount) })
      } catch (err) {
        reject(err)
      }
    }
    img.onerror = reject
    img.src = src
  })
}

// WCAG relative luminance / contrast ratio — see
// https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
function channelLuminance(c) {
  const s = c / 255
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
}

function relativeLuminance({ r, g, b }) {
  return 0.2126 * channelLuminance(r) + 0.7152 * channelLuminance(g) + 0.0722 * channelLuminance(b)
}

export function contrastRatio(rgbA, rgbB) {
  const lA = relativeLuminance(rgbA)
  const lB = relativeLuminance(rgbB)
  const lighter = Math.max(lA, lB)
  const darker = Math.min(lA, lB)
  return (lighter + 0.05) / (darker + 0.05)
}

// Target: white text at normal size needs >=4.5:1 (WCAG AA) against its
// background. Since the app also uses this text at reduced opacity (which
// blends toward the background and lowers *effective* contrast further),
// aiming for the full 4.5:1 against solid white gives that headroom.
const MIN_CONTRAST_VS_WHITE = 4.5
const WHITE = { r: 255, g: 255, b: 255 }

// Darkens a color toward black so it reliably passes MIN_CONTRAST_VS_WHITE,
// no matter how light the source photo is — a flat "darken by 45%" doesn't
// guarantee that for a pale/pastel photo, so this blends further, in steps,
// until the contrast target is actually met (capped at near-black).
export function darkenForOverlay({ r, g, b }) {
  let amount = 0.45
  let color = { r, g, b }
  while (contrastRatio(color, WHITE) < MIN_CONTRAST_VS_WHITE && amount < 0.97) {
    color = {
      r: Math.round(r * (1 - amount)),
      g: Math.round(g * (1 - amount)),
      b: Math.round(b * (1 - amount)),
    }
    amount += 0.08
  }
  return color
}

export function rgbToRgba({ r, g, b }, alpha) {
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export default function useDominantColor(src) {
  const [color, setColor] = useState(() => (src && cache.has(src) ? cache.get(src) : FALLBACK))

  useEffect(() => {
    if (!src) return
    if (cache.has(src)) {
      setColor(cache.get(src))
      return
    }
    let cancelled = false
    extractAverageColor(src)
      .then((result) => {
        cache.set(src, result)
        if (!cancelled) setColor(result)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [src])

  return color
}
