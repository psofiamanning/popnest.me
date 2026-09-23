// Centralized brand gradients, built from the color tokens in index.css's
// @theme block. See DESIGN_SYSTEM.md ("Gradient consolidation" and
// "Centralized color tokens") for the audit these were built from.
//
// IMPORTANT: each bg*Gradient export below must be one complete, literal
// `bg-[...]` string — not assembled via `${...}` interpolation — because
// Tailwind's class scanner reads source files as plain text and can't
// resolve a class name that's split across a JS template expression.

// The 3 reused, canonical gradients:
export const bgBrandGradient = 'bg-[linear-gradient(180deg,var(--color-brand-indigo)_0%,var(--color-brand-navy)_100%)]'
export const bgBrandGradientLight =
  'bg-[linear-gradient(180deg,var(--color-brand-indigo)_33.17%,var(--color-brand-blue-light)_100%)]'
export const bgCtaGradient = 'bg-[linear-gradient(90deg,var(--color-pink-highlight)_0%,var(--color-brand-indigo)_100%)]'

// Confirmed one-off Figma tokens, kept distinct (see DESIGN_SYSTEM.md) but
// still sourced from the shared palette instead of their own hardcoded hex.
//
// Deliberately pink-free: this backs the PromoBar/PerkBanner promo bands,
// which sit right next to bgCtaGradient buttons — sharing pink-highlight
// made the button blend into its own background, so this one stays in the
// navy/blue-light half of the palette instead.
export const bgPromoGradient = 'bg-[linear-gradient(90deg,var(--color-brand-navy)_0%,var(--color-brand-blue-light)_100%)]'
export const bgMapPageGradient =
  'bg-[linear-gradient(90deg,var(--color-pink-highlight)_21.15%,var(--color-brand-indigo)_50.96%)]'
export const bgTimePickerGradient =
  'bg-[linear-gradient(180deg,var(--color-brand-indigo)_45.19%,var(--color-pink-highlight)_100%)]'
export const bgPolicyCardGradient =
  'bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-brand-indigo)_80%,transparent)_0%,var(--color-brand-navy)_87.5%)]'

// Used via inline `style`, not a Tailwind class, so — unlike the others above —
// this one uses real spaces instead of Tailwind's underscore-for-space escaping.
export const MENU_GRADIENT =
  'linear-gradient(180deg, color-mix(in srgb, var(--color-pink-highlight) 90%, transparent) 7.21%, color-mix(in srgb, var(--color-brand-indigo) 90%, transparent) 26.92%)'
