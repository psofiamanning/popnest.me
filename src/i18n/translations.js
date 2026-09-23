// Full EN/ES dictionary for the app. Flat keys, dot-namespaced by screen.
// See DESIGN_SYSTEM.md ("Internationalization") for the architecture this
// belongs to (LanguageContext, IP-based auto-detect, manual toggle).

export const translations = {
  en: {
    // Common / shared across screens
    'common.signUpSignIn': 'Sign Up / Sign In',
    'common.demoTag': 'Portfolio demo',
    'common.perDay': 'per day',
    'common.includesFees': 'Includes fees',
    'common.minutesAwayFrom': '{{minutes}} minutes away from {{place}}',
    'common.mexicoCity': 'Mexico City',
    'common.backToSearch': '← Back to search',

    // Footer.jsx (global, small)
    'footer.disclaimer':
      'is a demo project built to showcase design and user flow. Spaces, prices, and reviews are fictitious; no real payment is processed.',

    // Navbar.jsx
    'navbar.brand': 'popnest.me',

    // HeroSection.jsx
    'hero.title': 'On Demand Coworking Spaces in Mexico City',
    'hero.subtitle': 'FOCUS ON YOUR MEETINGS WE WILL FIND YOU A PRIVATE SPACE WITH CONNECTIVITY',
    'hero.where': 'Where:',
    'hero.when': 'When:',
    'hero.go': 'GO',

    // PromoBar.jsx
    'promoBar.headline': 'Unlock exclusive dining discounts and premium perks at our coworking spaces.',
    'promoBar.body':
      'Enter your phone number to receive your first offer. We value your privacy and only use your information in line with our data policy.',
    'promoBar.phonePlaceholder': 'Mobile Number',
    'promoBar.go': 'GO',

    // PerkBanner.jsx
    'perkBanner.line1': 'Receive one month of LinkedIn premium',
    'perkBanner.line2': 'after spending $6,000 in reservations',
    'perkBanner.validFor': 'Valid for one year. See',
    'perkBanner.terms': 'Terms',

    // WhyPopnest.jsx
    'whyPopnest.heading': 'Here is why people use Popnest',
    'whyPopnest.reason1Title': 'Speed to Book',
    'whyPopnest.reason1Desc': 'Reserve in seconds. No forms, no friction',
    'whyPopnest.reason2Title': 'Beautiful Spaces',
    'whyPopnest.reason2Desc': 'Designed for creatives, teams, and travelers',
    'whyPopnest.reason3Title': 'Perks Coming Soon',
    'whyPopnest.reason3Desc': 'Early members will get perks like restaurant discounts',

    // Testimonials.jsx
    'testimonials.quote1':
      "Definitely one of the best coworking spaces in Coyoacan. For the price/quality ratio and privacy, it's an excellent choice for working. The atmosphere, chairs, and facilities are very comfortable, as is the tea and coffee bar. I'm truly happy with the experience.",
    'testimonials.quote2':
      'The place is very pretty, very colorful, well-lit, clean, and quiet. Excellent service from the staff; definitely a great place to work. I highly recommend it.',
    'testimonials.quote3': 'Excellent place to work with a lot of tranquility',
    'testimonials.quote4':
      "I've been using this coworking space for a few weeks now and it honestly surprised me. The space is very well designed, it gets plenty of natural light, and it feels much more relaxed than the typical chain coworking spaces",

    // LandingFooter.jsx
    'landingFooter.tagline': 'A lifestyle company',
    'landingFooter.link.neighborhoods': 'Our neighborhoods',
    'landingFooter.link.partnerships': 'Our partnerships',
    'landingFooter.link.about': 'About',
    'landingFooter.link.careers': 'Careers',
    'landingFooter.link.hotelPartners': 'Hotel Partners',
    'landingFooter.link.support': 'Support',
    'landingFooter.link.faq': 'FAQ',
    'landingFooter.social': 'We are social!',
    'landingFooter.legal': 'Terms of Service. Privacy Policy. Your privacy Choices',
    'landingFooter.copyright': '2025 Popnest. All rights reserved',

    // WorkspaceFooter.jsx (distinct from LandingFooter.jsx — lists these as separate items)
    'footer.explore': 'Explore',
    'footer.company': 'Company',
    'footer.help': 'Help',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    'footer.privacyChoices': 'Your privacy Choices',
    'footer.copyright': '© 2025 Popnest. All rights reserved',

    // NotFound.jsx
    'notFound.message': 'Page not found.',
    'notFound.backHome': 'Back to home',

    // WorkspaceMap.jsx (desktop) / WorkspaceHeader.jsx
    'map.where': 'Where:',
    'map.when': 'When:',
    'map.filter': 'Filter:',
    'map.unlockOffer': 'Unlock the special offer',

    // MobileMapView.jsx
    'mobileMap.dayPass': '1 Day Pass',
    'mobileMap.deal': 'DEAL',

    // MobileTopBar.jsx / MobileMenu.jsx
    'menu.title': 'Menu',
    'menu.profile': 'Profile',
    'menu.myBookings': 'My Bookings',
    'menu.savedSpaces': 'Saved Spaces',
    'menu.popularCoworkings': 'Popular Coworkings',
    'menu.paymentsBilling': 'Payments / Billing',
    'menu.language': 'Language',
    'menu.currency': 'Currency',
    'menu.helpFaq': 'Help / FAQ',
    'menu.termsPrivacy': 'Terms & Privacy',
    'menu.logout': 'Log out',

    // Workspace detail — shared cards (desktop + mobile)
    'detail.whyWeLikeIt': 'Why We Like It',
    'detail.whyWeLikeItBody':
      "It's all focus, no noise. Work in a space designed for calm and creativity. Step into bold interiors where design sparks new ideas.",
    'detail.whyBookWithUs': 'Why Book with Us',
    'detail.whyBookWithUsBody': 'Receive one month of LinkedIn premium after spending $6,000 in reservations',
    'detail.yourReservation': 'Your Reservation',
    'detail.reserveNow': 'Reserve Now',
    'detail.bookersLiked': '{{pct}}% of Bookers Liked It',
    'detail.ratings': '{{count}} Ratings',
    'detail.amenities': 'Amenities',
    'detail.coworkingSpace': 'Coworking Space',
    'detail.addOns': 'Add Ons',
    'detail.needToKnow': 'Need to Know',
    'detail.keepInMind': 'Things to Keep in Mind',
    'detail.bookNow': 'BOOK NOW',
    'detail.field.date': 'Date',
    'detail.field.people': 'People',
    'detail.field.startTime': 'Start Time',
    'detail.field.endTime': 'End Time',

    // Amenity labels (stable ids — see data/workspaces.js)
    'amenity.wifi': 'Fast, secure WiFi',
    'amenity.coffee': 'Complimentary coffee & tea',
    'amenity.presentation': 'Presentation screen & whiteboard',
    'amenity.ac': 'A/C and natural lighting',
    'amenity.quiet': 'Quiet, professional environment',
    'amenity.access': 'Easy access from Benito Juárez, Del Valle',
    'amenity.wellness': 'Wellness quiet zone',
    'amenity.water': 'Filtered Water & Healthy Snacks',
    'amenity.events': 'Community Events',
    'amenity.furniture': 'Ergonomic Furniture',
    'amenity.printing': 'Printing & Scanning',
    'amenity.kitchenette': 'Kitchenette',
    'amenity.phoneBooths': 'Phone Booths',
    'amenity.lockers': 'Lockers/Storage',
    'amenity.mail': 'Mail & Package Handling',
    'amenity.networking': 'Networking events',
    'amenity.bikeStorage': 'Bike Storage',
    'amenity.access247': '24/7 Access',
    'amenity.conferenceRooms': 'Conference Rooms',

    // Need to know / keep in mind (stable ids)
    'needToKnow.hours': 'Day pass hours: Access from 9am to 7pm. No entry outside these hours.',
    'needToKnow.id': 'Valid photo ID required at check-in for security purposes.',
    'needToKnow.wifi': 'Wi-Fi access included. Details provided at front desk upon check-in.',
    'needToKnow.refreshments': 'Complimentary coffee, tea, and water available in the lounge area.',
    'needToKnow.commonAreas': 'Common areas only: Day pass holders may use hot desks, lounge. Private rooms require separate booking.',
    'needToKnow.lockers': 'Lockers available for day use. Bring your own lock or rent one at reception.',
    'needToKnow.quietZones': 'Quiet zones enforced in designated areas. Please use phone booths for calls.',
    'needToKnow.age': '18+ only. Guests must be legal adults to enter and use the space.',

    'keepInMind.sharedOnly':
      'Day pass grants access to shared spaces only. Private offices and meeting rooms require a separate booking and may incur additional fees.',
    'keepInMind.availability': 'Desk availability is first-come, first-served. During peak hours, seating may be limited.',
    'keepInMind.outsideFood':
      'Outside food is allowed in designated areas only. Please be respectful of shared spaces and clean up after use.',
    'keepInMind.accessibility':
      'This space may not meet all accessibility needs. Accessibility requests can be submitted in advance and are subject to approval and availability.',
    'keepInMind.groups':
      'Coworking access is intended for individual use only. For group bookings or team access, please contact our community manager.',

    // Reviews (shared across all workspaces)
    'review.jackson': "Estudio Popnest is an ideal space for collaborative dynamics and corporate events that seek to get out of the traditional scheme. Its modern design full of natural light and versatile furniture, creates an environment that stimulates creativity, interaction and group productivity.",
    'review.avery': 'This space stands out for its warmth and functionality, perfect for workshops, team sessions or presentations in a relaxed but professional environment. Its strategic location in Berkeley and the included services make it a comprehensive solution for modern corporate meetings.',

    // Room types / tags (stable ids — see data/workspaces.js)
    'roomType.dayPass': 'Day Pass - Shared space',
    'roomType.small': 'Small Room',
    'roomType.medium': 'Medium Room',
    'roomType.large': 'Large Room',
    'roomType.capacity.small': '(2-4 People)',
    'roomType.capacity.medium': '(Up to 8 People)',
    'roomType.capacity.large': '(Up to 15 People)',

    'tag.elegant': 'Elegant',
    'tag.modern': 'Modern',
    'tag.bright': 'Bright',
    'tag.creative': 'Creative',
    'tag.cozy': 'Cozy',
    'tag.corporate': 'Corporate',
    'tag.artsy': 'Artsy',
    'tag.quiet': 'Quiet',
    'tag.premium': 'Premium',

    // MobileCheckout.jsx
    'checkout.backToSpaceDetails': 'Back to space details',
    'checkout.guest': 'Guest',
    'checkout.required': 'Required',
    'checkout.roomType': 'Room Type',
    'checkout.checkIn': 'Check-In',
    'checkout.checkOut': 'Check-Out',
    'checkout.dayX': '1 day x MXN {{price}}',
    'checkout.taxesAndFees': 'Taxes and fees',
    'checkout.total': 'Total (MXN)',
    'checkout.paymentMethod': 'Payment Method',
    'checkout.promoCode': 'Promo Code',
    'checkout.creditCard': 'Credit Card',

    // MobileRoomType.jsx
    'roomTypePage.soloWorkspaces': 'Solo Workspaces',
    'roomTypePage.teamRooms': 'Team Rooms',

    // MobileDatePicker.jsx
    'datePicker.setDate': 'Set Date',
    'datePicker.submit': 'Submit',
    'month.jan': 'Jan',
    'month.feb': 'Feb',
    'month.mar': 'Mar',
    'month.apr': 'Apr',
    'month.may': 'May',
    'month.jun': 'Jun',
    'month.jul': 'Jul',
    'month.aug': 'Aug',
    'month.sep': 'Sep',
    'month.oct': 'Oct',
    'month.nov': 'Nov',
    'month.dec': 'Dec',

    // MobileTimePicker.jsx
    'timePicker.backToDatePicker': 'Back to date picker',
    'timePicker.selectATime': 'Select a Time',
    'timePicker.description': 'Choose the time you would like to book your conference room.',
    'timePicker.setTime': 'Set Time',
    'timePicker.start': 'Start',
    'timePicker.end': 'End',

    // MobilePaymentCard.jsx
    'paymentCard.backToReservationDetails': 'Back to Reservation Details',
    'paymentCard.chooseYourCard': 'Choose your card',
    'paymentCard.pickACard': 'Pick a card to complete your payment securely',
    'paymentCard.newCard': 'New Card',
    'paymentCard.selected': 'Selected',
    'paymentCard.cardholderName': 'Cardholder name',
    'paymentCard.continue': 'Continue',

    // MobileNewCard.jsx
    'newCard.back': 'Back',
    'newCard.title': 'Add a new payment card',
    'newCard.subtitle': 'Enter your card details securely to add a new payment method',
    'newCard.nameOnCard': 'Name on Card',
    'newCard.cardNumber': 'Card Number',
    'newCard.expiredDate': 'Expired Date',
    'newCard.securityCode': 'Security Code',
    'newCard.setAsDefault': 'Set as default payment method',
    'newCard.billingContact': 'Billing Contact',
    'newCard.optional': '(Optional)',
    'newCard.saveCard': 'Save Card',

    // Confirmation (both desktop Confirmation.jsx and MobileConfirmation.jsx)
    'confirmation.notFound': "We couldn't find that reservation.",
    'confirmation.backToHome': 'Back to home',
    'confirmation.confirmed': 'Booking confirmed!',
    'confirmation.simulatedNotice': 'This is a simulated booking — no real charge was made.',
    'confirmation.confirmationCode': 'Confirmation code',
    'confirmation.space': 'Space',
    'confirmation.city': 'City',
    'confirmation.roomTypeLabel': 'Room type',
    'confirmation.date': 'Date',
    'confirmation.time': 'Time',
    'confirmation.people': 'People',
    'confirmation.total': 'Total',
    'confirmation.searchAnotherSpace': 'Search another space',
    'confirmation.bookingConfirmation': 'Booking Confirmation',
    'confirmation.guestsAndRoom': '{{count}} guests · {{roomType}}',
    'confirmation.location': 'Location',
    'confirmation.checkInDate': 'Check-in Date',
    'confirmation.map': 'Map',
    'confirmation.checkInTime': 'Check-in Time',
    'confirmation.checkOutTime': 'Check-out Time',
    'confirmation.after': 'After',
    'confirmation.before': 'Before',
    'confirmation.numberOfGuests': 'Number of guests',
    'confirmation.guest1': 'Guest 1',
    'confirmation.guest2': 'Guest 2',
    'confirmation.name': 'Name',
    'confirmation.lastName': 'Last Name',
    'confirmation.email': 'Email',
    'confirmation.spaceRules': 'Space Rules',
    'confirmation.spaceRule1': 'Use the space only for the booked purpose (e.g., meetings, work sessions, shoots).',
    'confirmation.spaceRule2': 'Keep noise at a reasonable level. Avoid disrupting other people or neighbors.',
    'confirmation.spaceRule3': 'Do not share entry codes or access details with unregistered people.',
    'confirmation.cancellationPolicy': 'Cancellation Policy',
    'confirmation.cancellationPolicyBody':
      'At the moment, we don’t offer refunds for cancellations. However, you can reschedule your reservation for another day and time, based on the space’s availability.',
    'confirmation.payment': 'Payment',
    'confirmation.totalMXN': 'Total (MXN)',
    'confirmation.totalDescription':
      'Your total is ${{amount}} MXN, with service fees and taxes already included.',
    'confirmation.getReceipt': 'Get receipt',
    'confirmation.getInvoice': 'Get Invoice',
    'confirmation.thankYou': 'Thank you for booking with us!',
    'confirmation.thankYouBody':
      'Get ready to experience a welcoming work environment where creativity and connection meet in the heart of Mexico City.',
    'confirmation.backToHomePage': 'Back to home page',
  },

  es: {
    'common.signUpSignIn': 'Regístrate / Inicia sesión',
    'common.demoTag': 'Demo de portafolio',
    'common.perDay': 'por día',
    'common.includesFees': 'Incluye cargos',
    'common.minutesAwayFrom': 'A {{minutes}} minutos de {{place}}',
    'common.mexicoCity': 'Ciudad de México',
    'common.backToSearch': '← Volver a la búsqueda',

    'footer.disclaimer':
      'es un proyecto de demostración creado para mostrar diseño y flujo de usuario. Los espacios, precios y reseñas son ficticios; no se procesa ningún pago real.',

    'navbar.brand': 'popnest.me',

    'hero.title': 'Espacios de Coworking Bajo Demanda en la Ciudad de México',
    'hero.subtitle': 'ENFÓCATE EN TUS REUNIONES, NOSOTROS TE ENCONTRAMOS UN ESPACIO PRIVADO CON CONECTIVIDAD',
    'hero.where': 'Dónde:',
    'hero.when': 'Cuándo:',
    'hero.go': 'IR',

    'promoBar.headline': 'Desbloquea descuentos exclusivos en restaurantes y beneficios premium en nuestros espacios de coworking.',
    'promoBar.body':
      'Ingresa tu número de teléfono para recibir tu primera oferta. Valoramos tu privacidad y solo usamos tu información conforme a nuestra política de datos.',
    'promoBar.phonePlaceholder': 'Número de celular',
    'promoBar.go': 'IR',

    'perkBanner.line1': 'Recibe un mes de LinkedIn premium',
    'perkBanner.line2': 'después de gastar $6,000 en reservaciones',
    'perkBanner.validFor': 'Válido por un año. Consulta',
    'perkBanner.terms': 'Términos',

    'whyPopnest.heading': 'Por eso la gente usa Popnest',
    'whyPopnest.reason1Title': 'Reserva rápida',
    'whyPopnest.reason1Desc': 'Reserva en segundos. Sin formularios, sin fricción',
    'whyPopnest.reason2Title': 'Espacios hermosos',
    'whyPopnest.reason2Desc': 'Diseñados para creativos, equipos y viajeros',
    'whyPopnest.reason3Title': 'Beneficios próximamente',
    'whyPopnest.reason3Desc': 'Los primeros miembros obtendrán beneficios como descuentos en restaurantes',

    'testimonials.quote1':
      'Definitivamente uno de los mejores espacios de coworking en Coyoacán. Por la relación precio/calidad y la privacidad, es una excelente opción para trabajar. El ambiente, las sillas y las instalaciones son muy cómodas, al igual que la barra de té y café. Estoy realmente feliz con la experiencia.',
    'testimonials.quote2':
      'El lugar es muy bonito, muy colorido, bien iluminado, limpio y tranquilo. Excelente servicio del personal; definitivamente un gran lugar para trabajar. Lo recomiendo ampliamente.',
    'testimonials.quote3': 'Excelente lugar para trabajar con mucha tranquilidad',
    'testimonials.quote4':
      'Llevo unas semanas usando este espacio de coworking y honestamente me sorprendió. El espacio está muy bien diseñado, tiene mucha luz natural y se siente mucho más relajado que los coworkings de cadena típicos',

    'landingFooter.tagline': 'Una empresa de estilo de vida',
    'landingFooter.link.neighborhoods': 'Nuestros vecindarios',
    'landingFooter.link.partnerships': 'Nuestras alianzas',
    'landingFooter.link.about': 'Acerca de',
    'landingFooter.link.careers': 'Empleos',
    'landingFooter.link.hotelPartners': 'Hoteles asociados',
    'landingFooter.link.support': 'Soporte',
    'landingFooter.link.faq': 'Preguntas frecuentes',
    'landingFooter.social': '¡Síguenos!',
    'landingFooter.legal': 'Términos de servicio. Política de privacidad. Tus opciones de privacidad',
    'landingFooter.copyright': '2025 Popnest. Todos los derechos reservados',

    'footer.explore': 'Explora',
    'footer.company': 'Empresa',
    'footer.help': 'Ayuda',
    'footer.terms': 'Términos de servicio',
    'footer.privacy': 'Política de privacidad',
    'footer.privacyChoices': 'Tus opciones de privacidad',
    'footer.copyright': '© 2025 Popnest. Todos los derechos reservados',

    'notFound.message': 'Página no encontrada.',
    'notFound.backHome': 'Volver al inicio',

    'map.where': 'Dónde:',
    'map.when': 'Cuándo:',
    'map.filter': 'Filtro:',
    'map.unlockOffer': 'Desbloquea la oferta especial',

    'mobileMap.dayPass': '1 Pase de día',
    'mobileMap.deal': 'OFERTA',

    'menu.title': 'Menú',
    'menu.profile': 'Perfil',
    'menu.myBookings': 'Mis reservas',
    'menu.savedSpaces': 'Espacios guardados',
    'menu.popularCoworkings': 'Coworkings populares',
    'menu.paymentsBilling': 'Pagos / Facturación',
    'menu.language': 'Idioma',
    'menu.currency': 'Moneda',
    'menu.helpFaq': 'Ayuda / Preguntas frecuentes',
    'menu.termsPrivacy': 'Términos y privacidad',
    'menu.logout': 'Cerrar sesión',

    'detail.whyWeLikeIt': 'Por qué nos gusta',
    'detail.whyWeLikeItBody':
      'Todo es enfoque, sin ruido. Trabaja en un espacio diseñado para la calma y la creatividad. Entra a interiores llamativos donde el diseño despierta nuevas ideas.',
    'detail.whyBookWithUs': 'Por qué reservar con nosotros',
    'detail.whyBookWithUsBody': 'Recibe un mes de LinkedIn premium después de gastar $6,000 en reservaciones',
    'detail.yourReservation': 'Tu reservación',
    'detail.reserveNow': 'Reservar ahora',
    'detail.bookersLiked': 'Al {{pct}}% de quienes reservaron les gustó',
    'detail.ratings': '{{count}} reseñas',
    'detail.amenities': 'Comodidades',
    'detail.coworkingSpace': 'Espacio de coworking',
    'detail.addOns': 'Adicionales',
    'detail.needToKnow': 'Lo que debes saber',
    'detail.keepInMind': 'Cosas para tener en cuenta',
    'detail.bookNow': 'RESERVAR AHORA',
    'detail.field.date': 'Fecha',
    'detail.field.people': 'Personas',
    'detail.field.startTime': 'Hora de inicio',
    'detail.field.endTime': 'Hora de fin',

    'amenity.wifi': 'WiFi rápido y seguro',
    'amenity.coffee': 'Café y té de cortesía',
    'amenity.presentation': 'Pantalla de presentación y pizarrón',
    'amenity.ac': 'Aire acondicionado y luz natural',
    'amenity.quiet': 'Ambiente tranquilo y profesional',
    'amenity.access': 'Fácil acceso desde Benito Juárez, Del Valle',
    'amenity.wellness': 'Zona de bienestar y silencio',
    'amenity.water': 'Agua filtrada y snacks saludables',
    'amenity.events': 'Eventos comunitarios',
    'amenity.furniture': 'Mobiliario ergonómico',
    'amenity.printing': 'Impresión y escaneo',
    'amenity.kitchenette': 'Kitchenette',
    'amenity.phoneBooths': 'Cabinas telefónicas',
    'amenity.lockers': 'Lockers / almacenamiento',
    'amenity.mail': 'Recepción de correo y paquetería',
    'amenity.networking': 'Eventos de networking',
    'amenity.bikeStorage': 'Estacionamiento de bicicletas',
    'amenity.access247': 'Acceso 24/7',
    'amenity.conferenceRooms': 'Salas de conferencias',

    'needToKnow.hours': 'Horario del pase de día: acceso de 9am a 7pm. No se permite entrada fuera de este horario.',
    'needToKnow.id': 'Se requiere identificación oficial vigente al registrarte por motivos de seguridad.',
    'needToKnow.wifi': 'Acceso a Wi-Fi incluido. Los detalles se proporcionan en recepción al llegar.',
    'needToKnow.refreshments': 'Café, té y agua de cortesía disponibles en el área de lounge.',
    'needToKnow.commonAreas':
      'Solo áreas comunes: quienes tienen pase de día pueden usar los escritorios compartidos y el lounge. Las salas privadas requieren reservación aparte.',
    'needToKnow.lockers': 'Lockers disponibles para uso diario. Trae tu propio candado o renta uno en recepción.',
    'needToKnow.quietZones': 'Se respetan zonas de silencio en áreas designadas. Usa las cabinas telefónicas para llamadas.',
    'needToKnow.age': 'Solo mayores de 18 años. Los huéspedes deben ser adultos legales para entrar y usar el espacio.',

    'keepInMind.sharedOnly':
      'El pase de día da acceso solo a espacios compartidos. Las oficinas privadas y salas de juntas requieren reservación aparte y pueden tener costo adicional.',
    'keepInMind.availability':
      'La disponibilidad de escritorios es por orden de llegada. En horas pico, los lugares pueden ser limitados.',
    'keepInMind.outsideFood':
      'Se permite comida externa solo en áreas designadas. Por favor respeta los espacios compartidos y limpia después de usarlos.',
    'keepInMind.accessibility':
      'Este espacio podría no cubrir todas las necesidades de accesibilidad. Las solicitudes de accesibilidad pueden enviarse con anticipación y están sujetas a aprobación y disponibilidad.',
    'keepInMind.groups':
      'El acceso de coworking es para uso individual únicamente. Para reservaciones grupales o acceso de equipo, contacta a nuestro community manager.',

    'review.jackson':
      'Estudio Popnest es un espacio ideal para dinámicas colaborativas y eventos corporativos que buscan salir del esquema tradicional. Su diseño moderno, lleno de luz natural y mobiliario versátil, crea un ambiente que estimula la creatividad, la interacción y la productividad grupal.',
    'review.avery':
      'Este espacio destaca por su calidez y funcionalidad, perfecto para talleres, sesiones de equipo o presentaciones en un ambiente relajado pero profesional. Su ubicación estratégica en Berkeley y los servicios incluidos lo convierten en una solución integral para reuniones corporativas modernas.',

    'roomType.dayPass': 'Pase de día - Espacio compartido',
    'roomType.small': 'Sala pequeña',
    'roomType.medium': 'Sala mediana',
    'roomType.large': 'Sala grande',
    'roomType.capacity.small': '(2-4 personas)',
    'roomType.capacity.medium': '(Hasta 8 personas)',
    'roomType.capacity.large': '(Hasta 15 personas)',

    'tag.elegant': 'Elegante',
    'tag.modern': 'Moderno',
    'tag.bright': 'Luminoso',
    'tag.creative': 'Creativo',
    'tag.cozy': 'Acogedor',
    'tag.corporate': 'Corporativo',
    'tag.artsy': 'Artístico',
    'tag.quiet': 'Tranquilo',
    'tag.premium': 'Premium',

    'checkout.backToSpaceDetails': 'Volver al detalle del espacio',
    'checkout.guest': 'Huésped',
    'checkout.required': 'Requerido',
    'checkout.roomType': 'Tipo de sala',
    'checkout.checkIn': 'Entrada',
    'checkout.checkOut': 'Salida',
    'checkout.dayX': '1 día x MXN {{price}}',
    'checkout.taxesAndFees': 'Impuestos y cargos',
    'checkout.total': 'Total (MXN)',
    'checkout.paymentMethod': 'Método de pago',
    'checkout.promoCode': 'Código promocional',
    'checkout.creditCard': 'Tarjeta de crédito',

    'roomTypePage.soloWorkspaces': 'Espacios individuales',
    'roomTypePage.teamRooms': 'Salas de equipo',

    'datePicker.setDate': 'Elige la fecha',
    'datePicker.submit': 'Continuar',
    'month.jan': 'Ene',
    'month.feb': 'Feb',
    'month.mar': 'Mar',
    'month.apr': 'Abr',
    'month.may': 'May',
    'month.jun': 'Jun',
    'month.jul': 'Jul',
    'month.aug': 'Ago',
    'month.sep': 'Sep',
    'month.oct': 'Oct',
    'month.nov': 'Nov',
    'month.dec': 'Dic',

    'timePicker.backToDatePicker': 'Volver al selector de fecha',
    'timePicker.selectATime': 'Selecciona una hora',
    'timePicker.description': 'Elige la hora en la que te gustaría reservar tu sala de conferencias.',
    'timePicker.setTime': 'Elige la hora',
    'timePicker.start': 'Inicio',
    'timePicker.end': 'Fin',

    'paymentCard.backToReservationDetails': 'Volver a los detalles de la reservación',
    'paymentCard.chooseYourCard': 'Elige tu tarjeta',
    'paymentCard.pickACard': 'Elige una tarjeta para completar tu pago de forma segura',
    'paymentCard.newCard': 'Nueva tarjeta',
    'paymentCard.selected': 'Seleccionada',
    'paymentCard.cardholderName': 'Nombre del titular',
    'paymentCard.continue': 'Continuar',

    'newCard.back': 'Atrás',
    'newCard.title': 'Agrega una nueva tarjeta de pago',
    'newCard.subtitle': 'Ingresa los datos de tu tarjeta de forma segura para agregar un nuevo método de pago',
    'newCard.nameOnCard': 'Nombre en la tarjeta',
    'newCard.cardNumber': 'Número de tarjeta',
    'newCard.expiredDate': 'Fecha de vencimiento',
    'newCard.securityCode': 'Código de seguridad',
    'newCard.setAsDefault': 'Establecer como método de pago predeterminado',
    'newCard.billingContact': 'Contacto de facturación',
    'newCard.optional': '(Opcional)',
    'newCard.saveCard': 'Guardar tarjeta',

    'confirmation.notFound': 'No encontramos esa reserva.',
    'confirmation.backToHome': 'Volver al inicio',
    'confirmation.confirmed': '¡Reserva confirmada!',
    'confirmation.simulatedNotice': 'Esta es una reserva simulada — no se realizó ningún cargo real.',
    'confirmation.confirmationCode': 'Código de confirmación',
    'confirmation.space': 'Espacio',
    'confirmation.city': 'Ciudad',
    'confirmation.roomTypeLabel': 'Tipo de sala',
    'confirmation.date': 'Fecha',
    'confirmation.time': 'Hora',
    'confirmation.people': 'Personas',
    'confirmation.total': 'Total',
    'confirmation.searchAnotherSpace': 'Buscar otro espacio',
    'confirmation.bookingConfirmation': 'Confirmación de reservación',
    'confirmation.guestsAndRoom': '{{count}} huéspedes · {{roomType}}',
    'confirmation.location': 'Ubicación',
    'confirmation.checkInDate': 'Fecha de entrada',
    'confirmation.map': 'Mapa',
    'confirmation.checkInTime': 'Hora de entrada',
    'confirmation.checkOutTime': 'Hora de salida',
    'confirmation.after': 'Después de',
    'confirmation.before': 'Antes de',
    'confirmation.numberOfGuests': 'Número de huéspedes',
    'confirmation.guest1': 'Huésped 1',
    'confirmation.guest2': 'Huésped 2',
    'confirmation.name': 'Nombre',
    'confirmation.lastName': 'Apellido',
    'confirmation.email': 'Correo electrónico',
    'confirmation.spaceRules': 'Reglas del espacio',
    'confirmation.spaceRule1': 'Usa el espacio solo para el fin reservado (juntas, sesiones de trabajo, producciones).',
    'confirmation.spaceRule2': 'Mantén el ruido en un nivel razonable. Evita molestar a otras personas o vecinos.',
    'confirmation.spaceRule3': 'No compartas códigos de acceso ni detalles de entrada con personas no registradas.',
    'confirmation.cancellationPolicy': 'Política de cancelación',
    'confirmation.cancellationPolicyBody':
      'Por el momento no ofrecemos reembolsos por cancelaciones. Sin embargo, puedes reprogramar tu reservación para otro día y horario, según la disponibilidad del espacio.',
    'confirmation.payment': 'Pago',
    'confirmation.totalMXN': 'Total (MXN)',
    'confirmation.totalDescription':
      'Tu total es de ${{amount}} MXN, con cargos por servicio e impuestos ya incluidos.',
    'confirmation.getReceipt': 'Obtener recibo',
    'confirmation.getInvoice': 'Obtener factura',
    'confirmation.thankYou': '¡Gracias por reservar con nosotros!',
    'confirmation.thankYouBody':
      'Prepárate para vivir un ambiente de trabajo acogedor donde la creatividad y la conexión se encuentran en el corazón de la Ciudad de México.',
    'confirmation.backToHomePage': 'Volver a la página de inicio',
  },
}
