export type LanguageCode = 'en' | 'es' | 'fr' | 'de' | 'it';

export interface LanguageDefinition {
  code: LanguageCode;
  label: string;
  flag: string;
}

export const LANGUAGES: LanguageDefinition[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
];

export interface Translation {
  // Navigation
  nav: {
    tours: string;
    about: string;
    contact: string;
    blog: string;
    gallery: string;
    bookNow: string;
  };

  // Hero Section
  hero: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    exploreTours: string;
    watchVideo: string;
  };

  // Tours Section
  tours: {
    sectionTitle: string;
    sectionTitleHighlight: string;
    sectionSubtitle: string;
    perPerson: string;
    duration: string;
    bookTour: string;
    learnMore: string;
  };

  // Audio Guide Tour
  audioGuideTour: {
    title: string;
    badge: string;
    price: string;
    duration: string;
    shortDescription: string;
    fullDescription: string;
    oldTownTourTitle: string;
    oldTownTourDescription: string;
    cityWallsTourTitle: string;
    cityWallsTourDescription: string;
    highlights: string[];
    included: string[];
    notIncluded: string[];
    serviceType: string;
    availableLanguages: string;
    pointsOfInterest: {
      oldTown: string;
      cityWalls: string;
    };
    totalDuration: string;
  };

  // Wine Tour
  wineTour: {
    title: string;
    badge: string;
    price: string;
    duration: string;
    shortDescription: string;
    fullDescription: string;
    highlights: string[];
    included: string[];
    notIncluded: string[];
    additionalOptions: {
      title: string;
      winery: string;
      lunch: string;
    };
    wineries: {
      matuskoTitle: string;
      matuskoDesc: string;
      curlinTitle: string;
      curlinDesc: string;
      edivoTitle: string;
      edivoDesc: string;
    };
    stonDescription: string;
    beachStop: string;
    departure: string;
    vehicles: string[];
  };

  // Custom Tour
  customTour: {
    title: string;
    badge: string;
    shortDescription: string;
    createYourOwn: string;
    modalTitle: string;
    modalSubtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      date: string;
      groupSize: string;
      interests: string;
      interestOptions: {
        wine: string;
        history: string;
        beach: string;
        food: string;
        photography: string;
        adventure: string;
      };
      duration: string;
      durationOptions: {
        halfDay: string;
        fullDay: string;
        multiDay: string;
      };
      additionalRequests: string;
      submit: string;
      success: string;
      successMessage: string;
    };
  };

  // City Tour
  cityTour: {
    title: string;
    badge: string;
    price: string;
    duration: string;
    shortDescription: string;
    fullDescription: string;
    highlights: string[];
    included: string[];
    notIncluded: string[];
    serviceType: string;
    vehicle: string;
    departures: string[];
  };

  // Hop-On Hop-Off Tour
  hopOnHopOffTour: {
    title: string;
    badge: string;
    price: string;
    duration: string;
    shortDescription: string;
    fullDescription: string;
    highlights: string[];
    included: string[];
    notIncluded: string[];
    serviceType: string;
    howItWorks: string;
    stops: {
      pile: string;
      postaLapad: string;
      hotelPresident: string;
      hotelKompas: string;
      gruz: string;
      bridge: string;
      viewpoint: string;
    };
    departures: string[];
  };

  // About Section
  about: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    stats: {
      experience: string;
      experienceLabel: string;
      visitors: string;
      visitorsLabel: string;
      rating: string;
      ratingLabel: string;
    };
  };

  // Contact Section
  contact: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    form: {
      fullName: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
      selectTopic: string;
      tourBooking: string;
      groupReservations: string;
      tourInformation: string;
      feedback: string;
      other: string;
      newsletter: string;
      submit: string;
      responseTime: string;
    };
  };

  // Footer
  footer: {
    followUs: string;
    popularTours: string;
    hopOnHopOffTour: string;
    cityTour: string;
    audioGuideTour: string;
    wineTour: string;
    customTour: string;
    blog: string;
    copyright: string;
  };

  // Gallery
  gallery: {
    title: string;
    subtitle: string;
    shareOn: string;
    downloadImage: string;
  };

  // Blog
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    backToBlog: string;
    relatedPosts: string;
    categories: {
      food: string;
      wine: string;
      culture: string;
      travel: string;
    };
    posts: {
      restaurants: {
        title: string;
        excerpt: string;
        content: string[];
      };
      wineries: {
        title: string;
        excerpt: string;
        content: string[];
      };
      oldTown: {
        title: string;
        excerpt: string;
        content: string[];
      };
      beaches: {
        title: string;
        excerpt: string;
        content: string[];
      };
    };
  };

  // Tour Detail Page
  tourDetail: {
    aboutTour: string;
    highlights: string;
    included: string;
    notIncluded: string;
    bestPrice: string;
    freeCancellation: string;
    meetingPoint: string;
    needHelp: string;
    secureBooking: string;
    instantConfirmation: string;
    readyToExplore: string;
    ctaDescription: string;
    bookNow: string;
    callUs: string;
    reviews: string;
    happyTravelers: string;
    averageRating: string;
    customerSupport: string;
    tourNotFound: string;
    tourNotFoundDesc: string;
    backHome: string;
    downloadInfo: string;
    howItWorks: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    itinerary: string;
    additionalOptions: string;
    pickupInfo: string;
  };

  // Common
  common: {
    flexible: string;
    selfGuided: string;
    languages: string;
    hours: string;
    from: string;
    optional: string;
  };
}

export const translations: Record<LanguageCode, Translation> = {
  en: {
    nav: {
      tours: 'Tours',
      about: 'About us',
      contact: 'Contact',
      blog: 'Blog',
      gallery: 'Gallery',
      bookNow: 'Book Now',
    },
    hero: {
      title: 'Hop On Hop Off',
      titleHighlight: 'Dubrovnik Bus Tours',
      subtitle:
        'Explore the Pearl of the Adriatic your way — audio tours, wine experiences, and custom adventures.',
      exploreTours: 'Explore Tours',
      watchVideo: 'Watch Video',
    },
    tours: {
      sectionTitle: 'Our',
      sectionTitleHighlight: 'Tours',
      sectionSubtitle:
        'Choose your adventure: explore Dubrovnik at your own pace with our audio guide, or join us for a gourmet wine tour of the Pelješac Peninsula.',
      perPerson: 'per person',
      duration: 'duration',
      bookTour: 'Book This Tour',
      learnMore: 'Learn More',
    },
    audioGuideTour: {
      title: 'Self-Guided Audio Tour of Dubrovnik Old Town & City Walls',
      badge: 'SELF-GUIDED',
      price: '15€',
      duration: 'Flexible',
      shortDescription:
        'Explore at your own pace with downloadable audio files and custom maps. Two tours available in 13 languages.',
      fullDescription:
        "Would you like to explore Dubrovnik's Old Town at your own pace? Our self-guided audio tour is perfect for travelers who prefer flexibility — whether you want to visit museums, step into historic churches, or take a break for a drink or lunch on the Stradun. You can listen to the information whenever you want and replay any part at any time.",
      oldTownTourTitle: 'Old Town Tour',
      oldTownTourDescription:
        'A relaxed walk lasts about 1.5 hours. Some map locations have an "eye" symbol, indicating that multiple sights can be viewed and explained from one point.',
      cityWallsTourTitle: 'City Walls Tour',
      cityWallsTourDescription:
        "Don't miss St. Lawrence Fortress (Lovrijenac), which played a major defensive role. It's separate from the walls but included in the same-day ticket. Expect around 1.5 hours for the walls and an extra 30 minutes for the fortress.",
      highlights: [
        '37 points of interest in the Old Town',
        '16 points on the City Walls',
        'Rich historical background and cultural insights',
        'Listen at your own pace, replay anytime',
        'Use your own device with headphones',
        'Available in 13 languages',
      ],
      included: [
        'Downloadable audio files (MP3)',
        'PDF map (printing recommended)',
        'Download link sent via email',
      ],
      notIncluded: [
        'Entrance tickets to museums or city walls',
        'Anything not specifically listed',
      ],
      serviceType: 'Self-guided audio tour',
      availableLanguages: '13 languages available',
      pointsOfInterest: {
        oldTown: '37 points in Old Town',
        cityWalls: '16 points on City Walls',
      },
      totalDuration: '2.5–3 hours total (listening continuously)',
    },
    wineTour: {
      title: 'Gastro & Wine – Pelješac Tour',
      badge: 'BESTSELLER',
      price: '95€',
      duration: '6 hours',
      shortDescription:
        'Wine tasting, beach stop & lunch – a relaxing day trip from Dubrovnik. The ultimate wine experience near Dubrovnik.',
      fullDescription:
        'Discover world-class wineries and the historic town of Ston on this gourmet wine tour of the Pelješac Peninsula. Famous for the Plavac Mali grape — ancestor of the renowned Zinfandel — Pelješac offers a perfect blend of tradition, nature and superb wines.',
      highlights: [
        'Visit 3 exceptional wineries',
        'Taste Dingač and Postup premium wines',
        'Explore historic Ston and its medieval walls',
        'Optional seafood lunch with fresh oysters',
        'Optional swim at Prapratno beach',
        'Learn about Plavac Mali, ancestor of Zinfandel',
      ],
      included: [
        'English-speaking driver/guide',
        'Air-conditioned vehicle',
        'Pickup & drop-off',
        'Ston sightseeing',
        'Matuško wine tasting (3 glasses)',
        'Optional beach stop',
      ],
      notIncluded: ['Anything not listed'],
      additionalOptions: {
        title: 'Additional Options',
        winery: '+60 min — visits to Ćurlin & Edivo wineries',
        lunch: '+90 min — seafood lunch (oysters, mussels, grilled dishes)',
      },
      wineries: {
        matuskoTitle: 'Matuško Winery',
        matuskoDesc:
          "At the famous Matuško cellar, you'll enjoy premium wines such as Dingač and Postup and learn about traditional winemaking.",
        curlinTitle: 'Ćurlin Winery (optional)',
        curlinDesc:
          'A family-run winery focused on traditional Plavac Mali production.',
        edivoTitle: 'Edivo Wines (optional)',
        edivoDesc:
          'Home of the fascinating Navis Mysterium — wine aged in amphorae under the sea.',
      },
      stonDescription:
        'Your tour begins with a short visit to Ston, known for its impressive medieval walls and ancient saltworks.',
      beachStop: 'Optional: a refreshing swim at the sandy beach of Prapratno.',
      departure: 'Flexible (recommended 09:00)',
      vehicles: [
        'Opel Vivaro 8+1',
        'Convertible van 8+1 (on request)',
        'Convertible minibus up to 28 pax',
      ],
    },
    customTour: {
      title: 'Custom Made Tour',
      badge: 'PERSONALIZED',
      shortDescription:
        "Create your perfect Dubrovnik experience. Tell us your interests and we'll design a unique tour just for you.",
      createYourOwn: 'Create Your Tour',
      modalTitle: 'Design Your Perfect Tour',
      modalSubtitle:
        "Tell us about your dream Dubrovnik experience and we'll create a personalized itinerary just for you.",
      form: {
        name: 'Your Name *',
        email: 'Email Address *',
        phone: 'Phone Number',
        date: 'Preferred Date',
        groupSize: 'Group Size',
        interests: 'What interests you?',
        interestOptions: {
          wine: 'Wine & Gastronomy',
          history: 'History & Culture',
          beach: 'Beaches & Swimming',
          food: 'Local Food',
          photography: 'Photography Spots',
          adventure: 'Adventure & Nature',
        },
        duration: 'Preferred Duration',
        durationOptions: {
          halfDay: 'Half Day (4-5 hours)',
          fullDay: 'Full Day (8-10 hours)',
          multiDay: 'Multi-Day Experience',
        },
        additionalRequests: 'Additional Requests or Ideas',
        submit: 'Send Request',
        success: 'Request Sent!',
        successMessage:
          "Thank you! We'll get back to you within 24 hours with a personalized tour proposal.",
      },
    },
    cityTour: {
      title: 'City Tour with Cabrio Mini Van',
      badge: 'NEW',
      price: '40€',
      duration: '90-120 min',
      shortDescription:
        'Enjoy a panoramic tour of Dubrovnik and discover the best photo spots while riding in a comfortable cabrio mini van with a local guide.',
      fullDescription:
        'Beyond exploring the Old Town, some of the most breathtaking views of Dubrovnik are found from above. This tour takes you to stunning viewpoints, perfect for capturing unforgettable photos. Your driver-guide will share stories about the city, including stops at several Game of Thrones filming locations.',
      highlights: [
        'Panoramic views from above the city',
        'Best photo spots in Dubrovnik',
        'Visit to Ombla river spring',
        'Mount Srđ viewpoint with free time',
        'Game of Thrones filming locations',
        'Sunset tour available',
      ],
      included: [
        'Panoramic route ride 90-120 minutes',
        'English-speaking driver/guide',
        'Free time in Old Town',
        'Return transfer to ship (if arranged)',
      ],
      notIncluded: [
        'City walls and museum entrance tickets',
      ],
      serviceType: 'Regular / Group tour',
      vehicle: 'Modern tourist cabrio van with free WiFi, capacity up to 8 passengers',
      departures: [
        '08:00-08:20',
        '09:00-09:20',
        '10:00-10:20',
        '11:00-11:20',
        '12:00-12:20',
        '13:00-13:20',
        '14:00-14:20',
        '15:00-15:20',
        'Sunset tour',
      ],
    },
    hopOnHopOffTour: {
      title: 'Hop-On Hop-Off City Bus Tour',
      badge: 'FLEXIBLE',
      price: '20€',
      duration: '60-90 min',
      shortDescription:
        'Flexible sightseeing in Dubrovnik by bus. Get on and off at marked stops throughout the day with one ticket.',
      fullDescription:
        'The hop-on hop-off bus tour is designed for guests who want freedom of movement and their own pace of exploring Dubrovnik. With one ticket you can get on and off the bus at marked stops throughout the day, combining panoramic rides, seaside walks, swimming and photography. The tour connects the most attractive parts of the city – Old Town, Lapad, Babin Kuk, Gruž, Franjo Tuđman Bridge and a panoramic viewpoint.',
      highlights: [
        'Unlimited hop-on hop-off access all day',
        'Panoramic views of Dubrovnik',
        'Visit Lapad beach and promenade',
        'Explore Babin Kuk peninsula',
        'Photo stop at Franjo Tuđman Bridge',
        'Best viewpoint of Old Town and Elaphiti Islands',
      ],
      included: [
        'Hop-on hop-off ticket (valid all day)',
        'Panoramic bus tour of Dubrovnik',
        'Air-conditioned tourist bus',
        'Marked stops and regular departures',
      ],
      notIncluded: [
        'Museum and city walls entrance tickets',
        'Food and drinks',
        'Other services not listed',
      ],
      serviceType: 'Private / Regular hop-on hop-off bus tour',
      howItWorks: 'Entry and exit is only possible at marked stops. At each stop you can: exit and explore the area, continue walking, swimming or photography, board the next bus with a valid ticket.',
      stops: {
        pile: 'PILE – Old Town Dubrovnik (Starting point)',
        postaLapad: 'Pošta Lapad – Seaside walk, cafés, coastal promenade',
        hotelPresident: 'Hotel President – Babin Kuk peninsula, beach, swimming',
        hotelKompas: 'Hotel Kompas – Lapad beach, promenade, restaurants',
        gruz: 'Gruž – Main bus station, cruise port, Gruž harbor walk',
        bridge: 'Franjo Tuđman Bridge – Ombla river view, panoramic photos',
        viewpoint: 'Panoramic Viewpoint – Best view of Old Town, Adriatic Sea and Elaphiti Islands',
      },
      departures: [
        '08:00-08:20',
        '09:00-09:20',
        '10:00-10:20',
        '11:00-11:20',
        '12:00-12:20',
        '13:00-13:20',
        '14:00-14:20',
        '15:00-15:20',
        '16:00-16:20',
        '17:00-17:20',
        '18:00-18:20',
      ],
    },
    about: {
      title: 'About',
      titleHighlight: 'Our Story',
      subtitle:
        "Discover the passion and dedication behind Dubrovnik's premier tour experiences.",
      paragraph1:
        "For over a decade, we've been passionate about showcasing the breathtaking beauty of Dubrovnik and the surrounding region through immersive experiences that bring history and culture to life.",
      paragraph2:
        'From self-guided audio tours of the Old Town to exclusive wine experiences on the Pelješac Peninsula, we offer something for every type of traveler.',
      paragraph3:
        "What started as a family project has grown into Dubrovnik's most trusted tour experience, helping over 100,000 visitors discover the Pearl of the Adriatic.",
      stats: {
        experience: '10+',
        experienceLabel: 'Years Experience',
        visitors: '100K+',
        visitorsLabel: 'Happy Visitors',
        rating: '4.8',
        ratingLabel: 'Average Rating',
      },
    },
    contact: {
      title: 'Get in',
      titleHighlight: 'Touch',
      subtitle:
        "Have questions about our tours? Planning a group visit? We'd love to hear from you!",
      form: {
        fullName: 'Full Name *',
        email: 'Email Address *',
        phone: 'Phone Number',
        subject: 'Subject',
        message: 'Message *',
        selectTopic: 'Select a topic',
        tourBooking: 'Tour Booking',
        groupReservations: 'Group Reservations',
        tourInformation: 'Tour Information',
        feedback: 'Feedback',
        other: 'Other',
        newsletter:
          "I'd like to receive updates about new tours and special offers",
        submit: 'Send Message',
        responseTime:
          'We typically respond within 2 hours during business hours',
      },
    },
    footer: {
      followUs: 'Follow Us',
      popularTours: 'Our Tours',
      hopOnHopOffTour: 'Hop-On Hop-Off Bus Tour',
      cityTour: 'City Tour',
      audioGuideTour: 'Audio Guide Tour',
      wineTour: 'Pelješac Wine Tour',
      customTour: 'Custom Made Tour',
      blog: 'Blog',
      copyright: '© 2024 All rights reserved.',
    },
    gallery: {
      title: 'Photo Gallery',
      subtitle: 'Memories from our tours around Dubrovnik and beyond',
      shareOn: 'Share on WhatsApp',
      downloadImage: 'Download Image',
    },
    blog: {
      title: 'Dubrovnik Travel Blog',
      subtitle:
        'Discover insider tips, local favorites, and travel guides for the Pearl of the Adriatic',
      readMore: 'Read More',
      backToBlog: 'Back to Blog',
      relatedPosts: 'Related Posts',
      categories: {
        food: 'Food & Dining',
        wine: 'Wine & Gastronomy',
        culture: 'Culture & History',
        travel: 'Travel Tips',
      },
      posts: {
        restaurants: {
          title: '10 Best Restaurants in Dubrovnik Old Town',
          excerpt:
            'From traditional Dalmatian cuisine to modern Mediterranean fusion, discover where locals and foodies eat in the heart of the Old Town.',
          content: [
            "Dubrovnik's Old Town is a treasure trove of culinary experiences. Behind its ancient stone walls, you'll find everything from family-run konobas serving recipes passed down through generations to innovative restaurants pushing the boundaries of Croatian cuisine.",
            "Proto Restaurant has been a Dubrovnik institution since 1886. Located on Široka ulica, it's famous for its fresh seafood and traditional Dalmatian dishes. The black risotto and grilled fish are must-tries.",
            'Nautika Restaurant offers spectacular views of the Adriatic and Fort Lovrijenac. This fine-dining establishment is perfect for special occasions, with a menu featuring premium seafood and an extensive wine list.',
            'For a more casual experience, head to Konoba Ribar near the Old Port. This family-run spot serves some of the freshest fish in town at reasonable prices.',
            'Azur Restaurant brings Asian-Mediterranean fusion to Dubrovnik. Their creative dishes combine local ingredients with Asian techniques, creating unique flavor combinations.',
          ],
        },
        wineries: {
          title: 'Best Wineries Near Dubrovnik: A Guide to Pelješac',
          excerpt:
            "Explore the famous wine region of Pelješac Peninsula, home to Croatia's most prestigious red wines including Dingač and Postup.",
          content: [
            "The Pelješac Peninsula, just an hour from Dubrovnik, is Croatia's most renowned wine region. The steep, sun-drenched slopes facing the sea create perfect conditions for the indigenous Plavac Mali grape.",
            'Matuško Winery is a must-visit for any wine enthusiast. Their cellar, carved into the hillside, produces award-winning Dingač wines. The family has been making wine for generations and their passion shows in every bottle.',
            'Saints Hills Winery combines traditional winemaking with modern techniques. Their premium wines have gained international recognition, and the tasting room offers stunning views of the vineyards.',
            'Edivo Winery offers a unique experience with their underwater wine aging. The Navis Mysterium line spends time in amphorae on the sea floor, creating wines with distinctive character.',
            'For an authentic experience, visit Ćurlin, a small family winery where you can taste wines directly from the barrel and learn about traditional production methods.',
          ],
        },
        oldTown: {
          title: 'Hidden Gems of Dubrovnik Old Town',
          excerpt:
            'Beyond the main attractions: secret viewpoints, quiet squares, and local spots that most tourists miss.',
          content: [
            "While Stradun and the city walls attract millions of visitors, Dubrovnik's Old Town hides countless secrets waiting to be discovered by those who venture off the beaten path.",
            'Climb the narrow stairs behind St. Ignatius Church to find Jesuit Stairs, a baroque masterpiece that served as a filming location for Game of Thrones. Early morning offers the best light and fewer crowds.',
            'The tiny Church of St. Sebastian, tucked away near Ploče Gate, dates back to 1466. Its simple facade hides a beautiful interior that most visitors walk right past.',
            'For the best sunset views without the crowds, head to the Buža Bar. This cliff-side establishment offers drinks with a view that rivals any in the Mediterranean.',
            'Wander through the residential streets north of Stradun to experience authentic local life. Laundry hanging between windows and the sound of daily conversations offer a glimpse of real Dubrovnik.',
          ],
        },
        beaches: {
          title: 'Best Beaches Near Dubrovnik',
          excerpt:
            'Crystal clear waters and stunning coastline: your guide to the best swimming spots in and around Dubrovnik.',
          content: [
            'While Dubrovnik is famous for its history and architecture, the crystal-clear Adriatic waters offer some of the best swimming in the Mediterranean. Here are our top picks for beaches.',
            'Banje Beach is the most famous beach in Dubrovnik, located just outside Ploče Gate with stunning views of the Old Town and Lokrum Island. It offers both free areas and a beach club with loungers.',
            'For a more secluded experience, take a kayak to Betina Cave Beach. This hidden gem is only accessible by sea and offers pristine waters and a unique cave formation.',
            'Šunj Beach on Lopud Island is worth the ferry ride. This sandy beach is rare in the region and perfect for families with children.',
            'Copacabana Beach on the Babin Kuk peninsula offers excellent facilities, including water sports, restaurants, and plenty of space even in high season.',
          ],
        },
      },
    },
    tourDetail: {
      aboutTour: 'About This Tour',
      highlights: 'What Makes This Tour Special',
      included: "What's Included",
      notIncluded: 'Not Included',
      bestPrice: 'Best Price Guaranteed',
      freeCancellation: 'Free Cancellation',
      meetingPoint: 'Meeting Point',
      needHelp: 'Need help with your booking?',
      secureBooking: 'Secure Booking',
      instantConfirmation: 'Instant Confirmation',
      readyToExplore: 'Ready to Explore?',
      ctaDescription:
        'Book your tour today and discover the best of Dubrovnik and the Pelješac Peninsula.',
      bookNow: 'Book Now',
      callUs: 'Call Us',
      reviews: 'reviews',
      happyTravelers: 'Happy Travelers',
      averageRating: 'Average Rating',
      customerSupport: 'Customer Support',
      tourNotFound: 'Tour Not Found',
      tourNotFoundDesc: "Sorry, the tour you're looking for doesn't exist.",
      backHome: 'Back to Home',
      downloadInfo: 'Receive download link via email after purchase',
      howItWorks: 'How It Works',
      step1Title: 'Purchase & Download',
      step1Desc:
        'Buy online and receive your download link instantly via email',
      step2Title: 'Transfer to Device',
      step2Desc: 'Download MP3 files and PDF map to your smartphone or tablet',
      step3Title: 'Explore Freely',
      step3Desc:
        'Walk through Dubrovnik at your own pace, listening whenever you want',
      itinerary: 'Tour Itinerary',
      additionalOptions: 'Additional Options',
      pickupInfo: 'Hotel pickup & drop-off included',
    },
    common: {
      flexible: 'Flexible',
      selfGuided: 'Self-Guided',
      languages: '13 Languages',
      hours: 'hours',
      from: 'from',
      optional: 'Optional',
    },
  },

  es: {
    nav: {
      tours: 'Tours',
      about: 'Nosotros',
      contact: 'Contacto',
      blog: 'Blog',
      gallery: 'Galería',
      bookNow: 'Reservar',
    },
    hero: {
      title: 'Hop On Hop Off',
      titleHighlight: 'Dubrovnik Bus Tours',
      subtitle:
        'Explora la Perla del Adriático a tu manera — audioguías, experiencias vinícolas y aventuras personalizadas.',
      exploreTours: 'Ver Tours',
      watchVideo: 'Ver Video',
    },
    tours: {
      sectionTitle: 'Nuestros',
      sectionTitleHighlight: 'Tours',
      sectionSubtitle:
        'Elige tu aventura: explora Dubrovnik a tu ritmo con nuestra audioguía, o únete a nosotros para una excursión gastronómica por la península de Pelješac.',
      perPerson: 'por persona',
      duration: 'duración',
      bookTour: 'Reservar Tour',
      learnMore: 'Más Información',
    },
    audioGuideTour: {
      title:
        'Visita Autoguiada con Audio por el Casco Antiguo de Dubrovnik y las Murallas',
      badge: 'AUTOGUIADA',
      price: '15€',
      duration: 'Libre',
      shortDescription:
        'Explora a tu ritmo con archivos de audio descargables y mapas personalizados. Dos recorridos disponibles en 13 idiomas.',
      fullDescription:
        '¿Desea recorrer el casco antiguo de Dubrovnik a su propio ritmo? Nuestra audioguía autoguiada es ideal para quienes disfrutan explorando sin prisa—haciendo paradas en museos, iglesias o para tomar algo en el Stradun. Puede escuchar la información cuando lo desee y repetir cualquier parte.',
      oldTownTourTitle: 'Recorrido por el Casco Antiguo',
      oldTownTourDescription:
        'El paseo dura aproximadamente 1,5 horas. Algunos puntos tienen un símbolo de ojo, desde donde se explican varios lugares visibles desde la misma posición.',
      cityWallsTourTitle: 'Recorrido por las Murallas',
      cityWallsTourDescription:
        'No se pierda la fortaleza de San Lorenzo (Lovrijenac), esencial en la defensa de Dubrovnik. La entrada está incluida en el boleto del mismo día. El recorrido dura 1,5 horas más unos 30 minutos para la fortaleza.',
      highlights: [
        '37 lugares destacados en el casco antiguo',
        '16 puntos en las murallas',
        'Abundante información histórica y cultural',
        'Escucha a tu ritmo, repite cuando quieras',
        'Usa tu propio dispositivo con auriculares',
        'Disponible en 13 idiomas',
      ],
      included: [
        'Archivos de audio descargables (MP3)',
        'Mapa en PDF (se recomienda imprimirlo)',
        'Enlace de descarga enviado por email',
      ],
      notIncluded: [
        'Entradas a museos o a las murallas',
        'Todo lo no mencionado específicamente',
      ],
      serviceType: 'Visita autoguiada con audioguía',
      availableLanguages: '13 idiomas disponibles',
      pointsOfInterest: {
        oldTown: '37 puntos en el casco antiguo',
        cityWalls: '16 puntos en las murallas',
      },
      totalDuration: '2,5–3 horas en total (escucha continua)',
    },
    wineTour: {
      title: 'Gastro & Vino – Excursión a Pelješac',
      badge: 'MÁS VENDIDO',
      price: '95€',
      duration: '6 horas',
      shortDescription:
        'Cata de vinos, playa y almuerzo – una excursión relajante desde Dubrovnik. La mejor experiencia vinícola cerca de Dubrovnik.',
      fullDescription:
        'Explore bodegas de renombre mundial y descubra la histórica ciudad de Ston en esta ruta gastronómica por la península de Pelješac. Famosa por la uva Plavac Mali, antecesora del Zinfandel, esta región combina tradición, naturaleza y vinos excepcionales.',
      highlights: [
        'Visita a 3 bodegas excepcionales',
        'Degustación de vinos premium Dingač y Postup',
        'Explora la histórica Ston y sus murallas medievales',
        'Almuerzo opcional de mariscos con ostras frescas',
        'Baño opcional en la playa de Prapratno',
        'Conoce el Plavac Mali, antepasado del Zinfandel',
      ],
      included: [
        'Conductor/guía de habla inglesa',
        'Vehículo con aire acondicionado',
        'Recogida y regreso',
        'Visita a Ston',
        'Cata en Matuško (3 copas)',
        'Parada en playa opcional',
      ],
      notIncluded: ['Todo lo no mencionado'],
      additionalOptions: {
        title: 'Opciones Adicionales',
        winery: '+60 min — visitas a bodegas Ćurlin y Edivo',
        lunch:
          '+90 min — almuerzo de mariscos (ostras, mejillones, parrillada)',
      },
      wineries: {
        matuskoTitle: 'Bodega Matuško',
        matuskoDesc:
          'En la famosa bodega Matuško probará vinos premium como Dingač y Postup y conocerá el proceso de producción.',
        curlinTitle: 'Bodega Ćurlin (opcional)',
        curlinDesc:
          'Una bodega familiar centrada en la producción tradicional de Plavac Mali.',
        edivoTitle: 'Edivo Wines (opcional)',
        edivoDesc:
          'Hogar del fascinante Navis Mysterium — vino envejecido en ánforas bajo el mar.',
      },
      stonDescription:
        'El recorrido comienza con una breve visita a Ston, conocido por sus murallas medievales y su antigua salina.',
      beachStop: 'Opcional: tiempo para nadar en la playa de Prapratno.',
      departure: 'Flexible (recomendado 09:00)',
      vehicles: [
        'Opel Vivaro 8+1',
        'Furgoneta descapotable 8+1 (bajo petición)',
        'Minibús descapotable hasta 28 pax',
      ],
    },
    customTour: {
      title: 'Tour Personalizado',
      badge: 'PERSONALIZADO',
      shortDescription:
        'Crea tu experiencia perfecta en Dubrovnik. Cuéntanos tus intereses y diseñaremos un tour único para ti.',
      createYourOwn: 'Crea Tu Tour',
      modalTitle: 'Diseña Tu Tour Perfecto',
      modalSubtitle:
        'Cuéntanos sobre tu experiencia soñada en Dubrovnik y crearemos un itinerario personalizado solo para ti.',
      form: {
        name: 'Tu Nombre *',
        email: 'Correo Electrónico *',
        phone: 'Teléfono',
        date: 'Fecha Preferida',
        groupSize: 'Tamaño del Grupo',
        interests: '¿Qué te interesa?',
        interestOptions: {
          wine: 'Vino y Gastronomía',
          history: 'Historia y Cultura',
          beach: 'Playas y Natación',
          food: 'Comida Local',
          photography: 'Lugares Fotogénicos',
          adventure: 'Aventura y Naturaleza',
        },
        duration: 'Duración Preferida',
        durationOptions: {
          halfDay: 'Medio Día (4-5 horas)',
          fullDay: 'Día Completo (8-10 horas)',
          multiDay: 'Experiencia de Varios Días',
        },
        additionalRequests: 'Solicitudes o Ideas Adicionales',
        submit: 'Enviar Solicitud',
        success: '¡Solicitud Enviada!',
        successMessage:
          '¡Gracias! Te responderemos en 24 horas con una propuesta de tour personalizada.',
      },
    },
    cityTour: {
      title: 'City Tour en Mini Van Cabrio',
      badge: 'NUEVO',
      price: '40€',
      duration: '90-120 min',
      shortDescription:
        'Un recorrido panorámico por Dubrovnik con las mejores vistas para hacer fotos, realizado en un cómodo mini van cabrio con guía.',
      fullDescription:
        'Descubrir Dubrovnik desde lo alto es uno de los modos más impresionantes de conocer la ciudad. Además del casco antiguo, las vistas más espectaculares se encuentran en los puntos elevados. Este tour combina panoramas inolvidables y paradas fotográficas, mientras su conductor-guía local comparte datos interesantes. También visitará algunas localizaciones de Juego de Tronos.',
      highlights: [
        'Vistas panorámicas desde lo alto de la ciudad',
        'Mejores puntos fotográficos de Dubrovnik',
        'Visita al manantial del río Ombla',
        'Mirador del Monte Srđ con tiempo libre',
        'Localizaciones de Juego de Tronos',
        'Tour al atardecer disponible',
      ],
      included: [
        'Recorrido panorámico 90-120 minutos',
        'Conductor/guía de habla inglesa',
        'Tiempo libre en el casco antiguo',
        'Transfer de regreso al barco (si se acuerda)',
      ],
      notIncluded: [
        'Entradas a murallas y museos',
      ],
      serviceType: 'Tour regular / grupal',
      vehicle: 'Mini van cabrio turístico moderno con WiFi gratis, capacidad hasta 8 pasajeros',
      departures: [
        '08:00-08:20',
        '09:00-09:20',
        '10:00-10:20',
        '11:00-11:20',
        '12:00-12:20',
        '13:00-13:20',
        '14:00-14:20',
        '15:00-15:20',
        'Tour al atardecer',
      ],
    },
    hopOnHopOffTour: {
      title: 'Hop-On Hop-Off Tour en Bus',
      badge: 'FLEXIBLE',
      price: '20€',
      duration: '60-90 min',
      shortDescription:
        'Recorrido flexible por Dubrovnik en autobús. Sube y baja en las paradas marcadas durante todo el día con un solo billete.',
      fullDescription:
        'El tour hop-on hop-off está diseñado para huéspedes que desean libertad de movimiento y su propio ritmo para explorar Dubrovnik. Con un billete puede subir y bajar del autobús en las paradas marcadas durante todo el día, combinando paseos panorámicos, caminatas junto al mar, baño y fotografía. El tour conecta las partes más atractivas de la ciudad.',
      highlights: [
        'Acceso ilimitado hop-on hop-off todo el día',
        'Vistas panorámicas de Dubrovnik',
        'Visita la playa y paseo de Lapad',
        'Explora la península de Babin Kuk',
        'Parada fotográfica en el Puente Franjo Tuđman',
        'El mejor mirador del casco antiguo e islas Elafiti',
      ],
      included: [
        'Billete hop-on hop-off (válido todo el día)',
        'Tour panorámico en autobús por Dubrovnik',
        'Autobús turístico climatizado',
        'Paradas marcadas y salidas regulares',
      ],
      notIncluded: [
        'Entradas a museos y murallas',
        'Comida y bebidas',
        'Otros servicios no listados',
      ],
      serviceType: 'Tour hop-on hop-off privado / regular',
      howItWorks: 'La entrada y salida solo es posible en las paradas marcadas. En cada parada puede: salir y explorar la zona, continuar caminando, nadando o fotografiando, subir al siguiente autobús con billete válido.',
      stops: {
        pile: 'PILE – Casco Antiguo de Dubrovnik (Punto de partida)',
        postaLapad: 'Pošta Lapad – Paseo marítimo, cafeterías, paseo costero',
        hotelPresident: 'Hotel President – Península Babin Kuk, playa, baño',
        hotelKompas: 'Hotel Kompas – Playa de Lapad, paseo, restaurantes',
        gruz: 'Gruž – Estación de autobuses, puerto de cruceros, paseo por el puerto',
        bridge: 'Puente Franjo Tuđman – Vista del río Ombla, fotos panorámicas',
        viewpoint: 'Mirador Panorámico – Mejor vista del casco antiguo, Mar Adriático e Islas Elafiti',
      },
      departures: [
        '08:00-08:20',
        '09:00-09:20',
        '10:00-10:20',
        '11:00-11:20',
        '12:00-12:20',
        '13:00-13:20',
        '14:00-14:20',
        '15:00-15:20',
        '16:00-16:20',
        '17:00-17:20',
        '18:00-18:20',
      ],
    },
    about: {
      title: 'Sobre',
      titleHighlight: 'Nosotros',
      subtitle:
        'Descubre la pasión y dedicación detrás de las mejores experiencias turísticas de Dubrovnik.',
      paragraph1:
        'Durante más de una década, hemos sido apasionados de mostrar la impresionante belleza de Dubrovnik y la región circundante a través de experiencias inmersivas que dan vida a la historia y la cultura.',
      paragraph2:
        'Desde audioguías autoguiadas del casco antiguo hasta experiencias vinícolas exclusivas en la península de Pelješac, ofrecemos algo para cada tipo de viajero.',
      paragraph3:
        'Lo que comenzó como un proyecto familiar se ha convertido en la experiencia turística más confiable de Dubrovnik, ayudando a más de 100.000 visitantes a descubrir la Perla del Adriático.',
      stats: {
        experience: '10+',
        experienceLabel: 'Años de Experiencia',
        visitors: '100K+',
        visitorsLabel: 'Visitantes Felices',
        rating: '4.8',
        ratingLabel: 'Valoración Media',
      },
    },
    contact: {
      title: 'Ponte en',
      titleHighlight: 'Contacto',
      subtitle:
        '¿Tienes preguntas sobre nuestros tours? ¿Planeas una visita en grupo? ¡Nos encantaría saber de ti!',
      form: {
        fullName: 'Nombre Completo *',
        email: 'Correo Electrónico *',
        phone: 'Teléfono',
        subject: 'Asunto',
        message: 'Mensaje *',
        selectTopic: 'Selecciona un tema',
        tourBooking: 'Reserva de Tour',
        groupReservations: 'Reservas de Grupo',
        tourInformation: 'Información del Tour',
        feedback: 'Comentarios',
        other: 'Otro',
        newsletter:
          'Me gustaría recibir actualizaciones sobre nuevos tours y ofertas especiales',
        submit: 'Enviar Mensaje',
        responseTime:
          'Normalmente respondemos en 2 horas durante horario laboral',
      },
    },
    footer: {
      followUs: 'Síguenos',
      popularTours: 'Nuestros Tours',
      hopOnHopOffTour: 'Bus Hop-On Hop-Off',
      cityTour: 'City Tour',
      audioGuideTour: 'Tour con Audioguía',
      wineTour: 'Tour de Vinos Pelješac',
      customTour: 'Tour Personalizado',
      blog: 'Blog',
      copyright: '© 2024 Todos los derechos reservados.',
    },
    gallery: {
      title: 'Galería de Fotos',
      subtitle: 'Recuerdos de nuestros tours por Dubrovnik y más allá',
      shareOn: 'Compartir en WhatsApp',
      downloadImage: 'Descargar Imagen',
    },
    blog: {
      title: 'Blog de Viajes de Dubrovnik',
      subtitle:
        'Descubre consejos locales, lugares favoritos y guías de viaje para la Perla del Adriático',
      readMore: 'Leer Más',
      backToBlog: 'Volver al Blog',
      relatedPosts: 'Artículos Relacionados',
      categories: {
        food: 'Gastronomía',
        wine: 'Vino y Gastronomía',
        culture: 'Cultura e Historia',
        travel: 'Consejos de Viaje',
      },
      posts: {
        restaurants: {
          title: 'Los 10 Mejores Restaurantes del Casco Antiguo de Dubrovnik',
          excerpt:
            'Desde cocina dálmata tradicional hasta fusión mediterránea moderna, descubre dónde comen los locales.',
          content: [
            'El casco antiguo de Dubrovnik es un tesoro de experiencias culinarias. Detrás de sus antiguas murallas de piedra encontrarás desde konobas familiares hasta restaurantes innovadores.',
            'Proto Restaurant ha sido una institución en Dubrovnik desde 1886. Es famoso por su marisco fresco y platos tradicionales dálmatas.',
            'Nautika Restaurant ofrece vistas espectaculares del Adriático y la Fortaleza Lovrijenac. Perfecto para ocasiones especiales.',
            'Para una experiencia más casual, visita Konoba Ribar cerca del Puerto Viejo.',
            'Azur Restaurant trae la fusión asiático-mediterránea a Dubrovnik con combinaciones de sabores únicas.',
          ],
        },
        wineries: {
          title: 'Las Mejores Bodegas Cerca de Dubrovnik: Guía de Pelješac',
          excerpt:
            'Explora la famosa región vinícola de la Península de Pelješac, hogar de los vinos tintos más prestigiosos de Croacia.',
          content: [
            'La Península de Pelješac, a solo una hora de Dubrovnik, es la región vinícola más renombrada de Croacia.',
            'Bodega Matuško es una visita obligada para cualquier entusiasta del vino. Sus vinos Dingač premiados son excepcionales.',
            'Saints Hills Winery combina técnicas tradicionales con métodos modernos.',
            'Edivo Winery ofrece una experiencia única con su envejecimiento de vino bajo el agua.',
            'Visita Ćurlin, una pequeña bodega familiar donde puedes probar vinos directamente del barril.',
          ],
        },
        oldTown: {
          title: 'Joyas Ocultas del Casco Antiguo de Dubrovnik',
          excerpt:
            'Más allá de las atracciones principales: miradores secretos, plazas tranquilas y lugares locales.',
          content: [
            'Mientras Stradun y las murallas atraen a millones, el casco antiguo esconde innumerables secretos.',
            'Sube las escaleras estrechas detrás de la Iglesia de San Ignacio para encontrar las Escaleras Jesuitas.',
            'La pequeña Iglesia de San Sebastián, escondida cerca de la Puerta Ploče, data de 1466.',
            'Para las mejores vistas del atardecer sin multitudes, ve al Buža Bar.',
            'Pasea por las calles residenciales al norte de Stradun para experimentar la vida local auténtica.',
          ],
        },
        beaches: {
          title: 'Las Mejores Playas Cerca de Dubrovnik',
          excerpt:
            'Aguas cristalinas y costa impresionante: tu guía de los mejores lugares para nadar.',
          content: [
            'Aunque Dubrovnik es famoso por su historia, las aguas cristalinas del Adriático ofrecen algunas de las mejores playas del Mediterráneo.',
            'Playa Banje es la más famosa de Dubrovnik, con vistas impresionantes del casco antiguo.',
            'Para una experiencia más aislada, lleva un kayak a la Playa de la Cueva Betina.',
            'Playa Šunj en la Isla Lopud vale el viaje en ferry. Esta playa de arena es rara en la región.',
            'Playa Copacabana ofrece excelentes instalaciones, incluyendo deportes acuáticos y restaurantes.',
          ],
        },
      },
    },
    tourDetail: {
      aboutTour: 'Sobre Este Tour',
      highlights: 'Lo Que Hace Especial Este Tour',
      included: 'Qué Incluye',
      notIncluded: 'No Incluido',
      bestPrice: 'Mejor Precio Garantizado',
      freeCancellation: 'Cancelación Gratuita',
      meetingPoint: 'Punto de Encuentro',
      needHelp: '¿Necesitas ayuda con tu reserva?',
      secureBooking: 'Reserva Segura',
      instantConfirmation: 'Confirmación Instantánea',
      readyToExplore: '¿Listo para Explorar?',
      ctaDescription:
        'Reserva tu tour hoy y descubre lo mejor de Dubrovnik y la península de Pelješac.',
      bookNow: 'Reservar Ahora',
      callUs: 'Llámanos',
      reviews: 'reseñas',
      happyTravelers: 'Viajeros Felices',
      averageRating: 'Valoración Media',
      customerSupport: 'Atención al Cliente',
      tourNotFound: 'Tour No Encontrado',
      tourNotFoundDesc: 'Lo sentimos, el tour que buscas no existe.',
      backHome: 'Volver al Inicio',
      downloadInfo: 'Recibe el enlace de descarga por email tras la compra',
      howItWorks: 'Cómo Funciona',
      step1Title: 'Compra y Descarga',
      step1Desc:
        'Compra online y recibe tu enlace de descarga instantáneamente por email',
      step2Title: 'Transfiere al Dispositivo',
      step2Desc:
        'Descarga los archivos MP3 y el mapa PDF a tu smartphone o tablet',
      step3Title: 'Explora Libremente',
      step3Desc: 'Recorre Dubrovnik a tu ritmo, escuchando cuando quieras',
      itinerary: 'Itinerario del Tour',
      additionalOptions: 'Opciones Adicionales',
      pickupInfo: 'Recogida y regreso al hotel incluidos',
    },
    common: {
      flexible: 'Flexible',
      selfGuided: 'Autoguiada',
      languages: '13 Idiomas',
      hours: 'horas',
      from: 'desde',
      optional: 'Opcional',
    },
  },

  fr: {
    nav: {
      tours: 'Visites',
      about: 'À propos',
      contact: 'Contact',
      blog: 'Blog',
      gallery: 'Galerie',
      bookNow: 'Réserver',
    },
    hero: {
      title: 'Hop On Hop Off',
      titleHighlight: 'Dubrovnik Bus Tours',
      subtitle:
        "Explorez la Perle de l'Adriatique à votre rythme — visites audio, expériences vinicoles et aventures sur mesure.",
      exploreTours: 'Voir les Visites',
      watchVideo: 'Voir la Vidéo',
    },
    tours: {
      sectionTitle: 'Nos',
      sectionTitleHighlight: 'Visites',
      sectionSubtitle:
        'Choisissez votre aventure : explorez Dubrovnik à votre rythme avec notre audioguide, ou rejoignez-nous pour une excursion œnologique sur la péninsule de Pelješac.',
      perPerson: 'par personne',
      duration: 'durée',
      bookTour: 'Réserver',
      learnMore: 'En Savoir Plus',
    },
    audioGuideTour: {
      title:
        'Visite Audio Autoguidée de la Vieille Ville de Dubrovnik et des Remparts',
      badge: 'AUTOGUIDÉE',
      price: '15€',
      duration: 'Libre',
      shortDescription:
        'Explorez à votre rythme avec des fichiers audio téléchargeables et des cartes personnalisées. Deux circuits disponibles en 13 langues.',
      fullDescription:
        'Souhaitez-vous découvrir Dubrovnik à votre propre rythme ? Notre visite audio autoguidée est idéale pour ceux qui préfèrent une exploration flexible — que vous souhaitiez visiter des musées, entrer dans des églises ou faire une pause sur le Stradun. Vous pouvez écouter les informations quand vous le souhaitez et les réécouter.',
      oldTownTourTitle: 'Visite de la Vieille Ville',
      oldTownTourDescription:
        "La promenade dure environ 1 h 30. Certains points portent un symbole d'œil, indiquant que plusieurs lieux sont visibles depuis la même position.",
      cityWallsTourTitle: 'Remparts de Dubrovnik',
      cityWallsTourDescription:
        'Ne manquez pas la forteresse Saint-Laurent (Lovrijenac). Elle est séparée des remparts mais incluse dans le billet du même jour. Comptez 1 h 30 pour les remparts et 30 minutes pour la forteresse.',
      highlights: [
        "37 points d'intérêt dans la vieille ville",
        '16 points sur les remparts',
        'Contenu historique riche et anecdotes culturelles',
        'Écoutez à votre rythme, réécoutez à volonté',
        'Utilisez votre appareil avec vos écouteurs',
        'Disponible en 13 langues',
      ],
      included: [
        'Fichiers audio téléchargeables (MP3)',
        'Carte PDF (impression recommandée)',
        'Lien de téléchargement envoyé par email',
      ],
      notIncluded: [
        "Billets d'entrée pour les musées et les remparts",
        "Tout ce qui n'est pas mentionné",
      ],
      serviceType: 'Visite autoguidée avec audioguide',
      availableLanguages: '13 langues disponibles',
      pointsOfInterest: {
        oldTown: '37 points dans la vieille ville',
        cityWalls: '16 points sur les remparts',
      },
      totalDuration: '2,5–3 heures au total (écoute continue)',
    },
    wineTour: {
      title: 'Gastronomie & Vin – Excursion à Pelješac',
      badge: 'BEST-SELLER',
      price: '95€',
      duration: '6 heures',
      shortDescription:
        'Dégustation de vins, plage et déjeuner – une journée détente depuis Dubrovnik. La meilleure expérience vinicole près de Dubrovnik.',
      fullDescription:
        "Découvrez les célèbres vignobles de Pelješac et la ville historique de Ston lors de cette excursion œnologique. Réputée pour son cépage Plavac Mali — ancêtre du Zinfandel — la région offre un mariage parfait entre nature, tradition et vins d'exception.",
      highlights: [
        'Visite de 3 caves exceptionnelles',
        'Dégustation des vins premium Dingač et Postup',
        'Découverte de Ston historique et ses remparts',
        'Déjeuner fruits de mer optionnel avec huîtres fraîches',
        'Baignade optionnelle à la plage de Prapratno',
        'Découvrez le Plavac Mali, ancêtre du Zinfandel',
      ],
      included: [
        'Chauffeur/guide anglophone',
        'Véhicule climatisé',
        'Prise en charge et retour',
        'Visite de Ston',
        'Dégustation Matuško (3 verres)',
        'Arrêt plage optionnel',
      ],
      notIncluded: ["Tout ce qui n'est pas mentionné"],
      additionalOptions: {
        title: 'Options Supplémentaires',
        winery: '+60 min — visites des caves Ćurlin et Edivo',
        lunch: '+90 min — déjeuner fruits de mer (huîtres, moules, grillades)',
      },
      wineries: {
        matuskoTitle: 'Cave Matuško',
        matuskoDesc:
          'La visite du célèbre chai Matuško comprend la dégustation de Dingač et Postup ainsi que des explications sur la vinification locale.',
        curlinTitle: 'Cave Ćurlin (optionnel)',
        curlinDesc:
          'Une cave familiale spécialisée dans la production traditionnelle de Plavac Mali.',
        edivoTitle: 'Edivo Wines (optionnel)',
        edivoDesc:
          'Connue pour son étonnant vin Navis Mysterium vieilli dans des amphores sous la mer.',
      },
      stonDescription:
        'Le tour débute par une halte à Ston, célèbre pour ses remparts et sa saline millénaire.',
      beachStop: "Possibilité d'un arrêt baignade à Prapratno.",
      departure: 'Flexible (recommandé 09:00)',
      vehicles: [
        'Opel Vivaro 8+1',
        'Van décapotable 8+1 (sur demande)',
        "Minibus décapotable jusqu'à 28 pax",
      ],
    },
    customTour: {
      title: 'Visite Sur Mesure',
      badge: 'PERSONNALISÉE',
      shortDescription:
        'Créez votre expérience parfaite à Dubrovnik. Dites-nous vos intérêts et nous concevrons une visite unique pour vous.',
      createYourOwn: 'Créez Votre Visite',
      modalTitle: 'Concevez Votre Visite Parfaite',
      modalSubtitle:
        'Parlez-nous de votre expérience de rêve à Dubrovnik et nous créerons un itinéraire personnalisé rien que pour vous.',
      form: {
        name: 'Votre Nom *',
        email: 'Adresse Email *',
        phone: 'Téléphone',
        date: 'Date Souhaitée',
        groupSize: 'Taille du Groupe',
        interests: "Qu'est-ce qui vous intéresse ?",
        interestOptions: {
          wine: 'Vin et Gastronomie',
          history: 'Histoire et Culture',
          beach: 'Plages et Baignade',
          food: 'Cuisine Locale',
          photography: 'Spots Photo',
          adventure: 'Aventure et Nature',
        },
        duration: 'Durée Souhaitée',
        durationOptions: {
          halfDay: 'Demi-journée (4-5 heures)',
          fullDay: 'Journée complète (8-10 heures)',
          multiDay: 'Expérience Multi-jours',
        },
        additionalRequests: 'Demandes ou Idées Supplémentaires',
        submit: 'Envoyer la Demande',
        success: 'Demande Envoyée !',
        successMessage:
          'Merci ! Nous vous répondrons dans les 24 heures avec une proposition de visite personnalisée.',
      },
    },
    cityTour: {
      title: 'City Tour en Minibus Cabrio',
      badge: 'NOUVEAU',
      price: '40€',
      duration: '90-120 min',
      shortDescription:
        'Profitez d\'une visite panoramique de Dubrovnik et de ses meilleurs points photo lors d\'un circuit guidé en minibus cabrio.',
      fullDescription:
        'Pour admirer toute la beauté de Dubrovnik, il faut non seulement découvrir la vieille ville, mais aussi profiter des panoramas situés au-dessus d\'elle. Ce circuit vous permet de capturer des vues incroyables et d\'en apprendre davantage grâce à votre chauffeur-guide local. Certaines étapes comprennent même des lieux de tournage de Game of Thrones.',
      highlights: [
        'Vues panoramiques depuis les hauteurs de la ville',
        'Meilleurs spots photo de Dubrovnik',
        'Visite de la source de la rivière Ombla',
        'Point de vue du Mont Srđ avec temps libre',
        'Lieux de tournage de Game of Thrones',
        'Tour au coucher du soleil disponible',
      ],
      included: [
        'Circuit panoramique 90-120 minutes',
        'Chauffeur/guide anglophone',
        'Temps libre dans la vieille ville',
        'Transfert retour au bateau (si convenu)',
      ],
      notIncluded: [
        'Billets d\'entrée aux remparts et musées',
      ],
      serviceType: 'Tour régulier / en groupe',
      vehicle: 'Minibus cabrio touristique moderne avec WiFi gratuit, capacité jusqu\'à 8 passagers',
      departures: [
        '08:00-08:20',
        '09:00-09:20',
        '10:00-10:20',
        '11:00-11:20',
        '12:00-12:20',
        '13:00-13:20',
        '14:00-14:20',
        '15:00-15:20',
        'Tour au coucher du soleil',
      ],
    },
    hopOnHopOffTour: {
      title: 'Bus Hop-On Hop-Off',
      badge: 'FLEXIBLE',
      price: '20€',
      duration: '60-90 min',
      shortDescription:
        'Visite flexible de Dubrovnik en bus. Montez et descendez aux arrêts marqués toute la journée avec un seul billet.',
      fullDescription:
        'Le tour hop-on hop-off est conçu pour les visiteurs qui souhaitent liberté de mouvement et leur propre rythme pour explorer Dubrovnik. Avec un billet, vous pouvez monter et descendre du bus aux arrêts marqués toute la journée, combinant balades panoramiques, promenades en bord de mer, baignade et photographie.',
      highlights: [
        'Accès illimité hop-on hop-off toute la journée',
        'Vues panoramiques de Dubrovnik',
        'Visitez la plage et la promenade de Lapad',
        'Explorez la péninsule de Babin Kuk',
        'Arrêt photo au pont Franjo Tuđman',
        'Meilleur point de vue sur la vieille ville et les îles Élaphites',
      ],
      included: [
        'Billet hop-on hop-off (valable toute la journée)',
        'Tour panoramique en bus de Dubrovnik',
        'Bus touristique climatisé',
        'Arrêts marqués et départs réguliers',
      ],
      notIncluded: [
        'Billets d\'entrée musées et remparts',
        'Nourriture et boissons',
        'Autres services non listés',
      ],
      serviceType: 'Tour hop-on hop-off privé / régulier',
      howItWorks: 'L\'entrée et la sortie ne sont possibles qu\'aux arrêts marqués. À chaque arrêt vous pouvez : descendre et explorer la zone, continuer à marcher, nager ou photographier, monter dans le prochain bus avec un billet valide.',
      stops: {
        pile: 'PILE – Vieille ville de Dubrovnik (Point de départ)',
        postaLapad: 'Pošta Lapad – Promenade en bord de mer, cafés, promenade côtière',
        hotelPresident: 'Hotel President – Péninsule Babin Kuk, plage, baignade',
        hotelKompas: 'Hotel Kompas – Plage de Lapad, promenade, restaurants',
        gruz: 'Gruž – Gare routière principale, port de croisière, promenade du port',
        bridge: 'Pont Franjo Tuđman – Vue sur la rivière Ombla, photos panoramiques',
        viewpoint: 'Point de vue panoramique – Meilleure vue sur la vieille ville, la mer Adriatique et les îles Élaphites',
      },
      departures: [
        '08:00-08:20',
        '09:00-09:20',
        '10:00-10:20',
        '11:00-11:20',
        '12:00-12:20',
        '13:00-13:20',
        '14:00-14:20',
        '15:00-15:20',
        '16:00-16:20',
        '17:00-17:20',
        '18:00-18:20',
      ],
    },
    about: {
      title: 'Notre',
      titleHighlight: 'Histoire',
      subtitle:
        'Découvrez la passion et le dévouement derrière les meilleures expériences touristiques de Dubrovnik.',
      paragraph1:
        "Depuis plus d'une décennie, nous sommes passionnés par la mise en valeur de la beauté époustouflante de Dubrovnik et de sa région à travers des expériences immersives qui donnent vie à l'histoire et à la culture.",
      paragraph2:
        'Des visites audio autoguidées de la vieille ville aux expériences vinicoles exclusives sur la péninsule de Pelješac, nous offrons quelque chose pour chaque type de voyageur.',
      paragraph3:
        "Ce qui a commencé comme un projet familial est devenu l'expérience touristique la plus fiable de Dubrovnik, aidant plus de 100 000 visiteurs à découvrir la Perle de l'Adriatique.",
      stats: {
        experience: '10+',
        experienceLabel: "Ans d'Expérience",
        visitors: '100K+',
        visitorsLabel: 'Visiteurs Satisfaits',
        rating: '4.8',
        ratingLabel: 'Note Moyenne',
      },
    },
    contact: {
      title: 'Contactez',
      titleHighlight: '-nous',
      subtitle:
        'Des questions sur nos visites ? Vous planifiez une visite de groupe ? Nous serions ravis de vous entendre !',
      form: {
        fullName: 'Nom Complet *',
        email: 'Adresse Email *',
        phone: 'Téléphone',
        subject: 'Sujet',
        message: 'Message *',
        selectTopic: 'Sélectionnez un sujet',
        tourBooking: 'Réservation de Visite',
        groupReservations: 'Réservations de Groupe',
        tourInformation: 'Information sur la Visite',
        feedback: 'Commentaires',
        other: 'Autre',
        newsletter:
          'Je souhaite recevoir des mises à jour sur les nouvelles visites et offres spéciales',
        submit: 'Envoyer',
        responseTime:
          'Nous répondons généralement sous 2 heures pendant les heures ouvrables',
      },
    },
    footer: {
      followUs: 'Suivez-nous',
      popularTours: 'Nos Visites',
      hopOnHopOffTour: 'Bus Hop-On Hop-Off',
      cityTour: 'City Tour',
      audioGuideTour: 'Visite Audio',
      wineTour: 'Tour Vinicole Pelješac',
      customTour: 'Visite Sur Mesure',
      blog: 'Blog',
      copyright: '© 2024 Tous droits réservés.',
    },
    gallery: {
      title: 'Galerie Photos',
      subtitle: 'Souvenirs de nos visites à Dubrovnik et au-delà',
      shareOn: 'Partager sur WhatsApp',
      downloadImage: 'Télécharger',
    },
    blog: {
      title: 'Blog Voyage Dubrovnik',
      subtitle:
        "Découvrez les conseils locaux, les favoris et les guides de voyage pour la Perle de l'Adriatique",
      readMore: 'Lire la Suite',
      backToBlog: 'Retour au Blog',
      relatedPosts: 'Articles Similaires',
      categories: {
        food: 'Gastronomie',
        wine: 'Vin et Gastronomie',
        culture: 'Culture et Histoire',
        travel: 'Conseils Voyage',
      },
      posts: {
        restaurants: {
          title:
            'Les 10 Meilleurs Restaurants de la Vieille Ville de Dubrovnik',
          excerpt:
            'De la cuisine dalmate traditionnelle à la fusion méditerranéenne moderne, découvrez où mangent les locaux.',
          content: [
            "La vieille ville de Dubrovnik est un trésor d'expériences culinaires. Derrière ses anciens murs de pierre, vous trouverez tout, des konobas familiales aux restaurants innovants.",
            'Proto Restaurant est une institution de Dubrovnik depuis 1886. Il est célèbre pour ses fruits de mer frais et ses plats traditionnels dalmates.',
            "Nautika Restaurant offre des vues spectaculaires sur l'Adriatique et le Fort Lovrijenac.",
            'Pour une expérience plus décontractée, rendez-vous au Konoba Ribar près du Vieux Port.',
            'Azur Restaurant apporte la fusion asio-méditerranéenne à Dubrovnik.',
          ],
        },
        wineries: {
          title: 'Meilleures Caves à Vin Près de Dubrovnik: Guide de Pelješac',
          excerpt:
            'Explorez la célèbre région viticole de la Péninsule de Pelješac, patrie des vins rouges les plus prestigieux de Croatie.',
          content: [
            'La Péninsule de Pelješac, à seulement une heure de Dubrovnik, est la région viticole la plus renommée de Croatie.',
            'La Cave Matuško est incontournable pour tout amateur de vin. Leurs vins Dingač primés sont exceptionnels.',
            'Saints Hills Winery combine techniques traditionnelles et méthodes modernes.',
            'Edivo Winery offre une expérience unique avec son vieillissement de vin sous-marin.',
            'Visitez Ćurlin, une petite cave familiale où vous pouvez déguster les vins directement du tonneau.',
          ],
        },
        oldTown: {
          title: 'Trésors Cachés de la Vieille Ville de Dubrovnik',
          excerpt:
            'Au-delà des attractions principales: points de vue secrets, places tranquilles et spots locaux.',
          content: [
            "Alors que Stradun et les remparts attirent des millions de visiteurs, la vieille ville cache d'innombrables secrets.",
            "Montez les escaliers étroits derrière l'église Saint-Ignace pour trouver les Escaliers Jésuites.",
            'La petite église Saint-Sébastien, cachée près de la Porte Ploče, date de 1466.',
            'Pour les meilleures vues du coucher de soleil sans la foule, allez au Buža Bar.',
            'Promenez-vous dans les rues résidentielles au nord de Stradun pour vivre la vie locale authentique.',
          ],
        },
        beaches: {
          title: 'Les Meilleures Plages Près de Dubrovnik',
          excerpt:
            'Eaux cristallines et côte magnifique: votre guide des meilleurs spots de baignade.',
          content: [
            "Bien que Dubrovnik soit célèbre pour son histoire, les eaux cristallines de l'Adriatique offrent certaines des meilleures plages de la Méditerranée.",
            'La Plage Banje est la plus célèbre de Dubrovnik, avec des vues imprenables sur la vieille ville.',
            'Pour une expérience plus isolée, prenez un kayak vers la Plage de la Grotte Betina.',
            "La Plage Šunj sur l'île de Lopud vaut le trajet en ferry. Cette plage de sable est rare dans la région.",
            "La Plage Copacabana offre d'excellentes installations, y compris sports nautiques et restaurants.",
          ],
        },
      },
    },
    tourDetail: {
      aboutTour: 'À Propos de Cette Visite',
      highlights: 'Ce Qui Rend Cette Visite Spéciale',
      included: 'Ce Qui Est Inclus',
      notIncluded: 'Non Inclus',
      bestPrice: 'Meilleur Prix Garanti',
      freeCancellation: 'Annulation Gratuite',
      meetingPoint: 'Point de Rencontre',
      needHelp: "Besoin d'aide pour votre réservation ?",
      secureBooking: 'Réservation Sécurisée',
      instantConfirmation: 'Confirmation Instantanée',
      readyToExplore: 'Prêt à Explorer ?',
      ctaDescription:
        "Réservez votre visite aujourd'hui et découvrez le meilleur de Dubrovnik et de la péninsule de Pelješac.",
      bookNow: 'Réserver Maintenant',
      callUs: 'Appelez-nous',
      reviews: 'avis',
      happyTravelers: 'Voyageurs Satisfaits',
      averageRating: 'Note Moyenne',
      customerSupport: 'Service Client',
      tourNotFound: 'Visite Non Trouvée',
      tourNotFoundDesc: "Désolé, la visite que vous recherchez n'existe pas.",
      backHome: "Retour à l'Accueil",
      downloadInfo: "Recevez le lien de téléchargement par email après l'achat",
      howItWorks: 'Comment Ça Marche',
      step1Title: 'Achetez et Téléchargez',
      step1Desc:
        'Achetez en ligne et recevez votre lien de téléchargement instantanément par email',
      step2Title: 'Transférez sur Votre Appareil',
      step2Desc:
        'Téléchargez les fichiers MP3 et la carte PDF sur votre smartphone ou tablette',
      step3Title: 'Explorez Librement',
      step3Desc:
        'Parcourez Dubrovnik à votre rythme, en écoutant quand vous le souhaitez',
      itinerary: 'Itinéraire de la Visite',
      additionalOptions: 'Options Supplémentaires',
      pickupInfo: "Prise en charge et retour à l'hôtel inclus",
    },
    common: {
      flexible: 'Flexible',
      selfGuided: 'Autoguidée',
      languages: '13 Langues',
      hours: 'heures',
      from: 'à partir de',
      optional: 'Optionnel',
    },
  },

  de: {
    nav: {
      tours: 'Touren',
      about: 'Über uns',
      contact: 'Kontakt',
      blog: 'Blog',
      gallery: 'Galerie',
      bookNow: 'Buchen',
    },
    hero: {
      title: 'Hop On Hop Off',
      titleHighlight: 'Dubrovnik Bus Tours',
      subtitle:
        'Erkunden Sie die Perle der Adria auf Ihre Weise — Audiotouren, Weinerlebnisse und maßgeschneiderte Abenteuer.',
      exploreTours: 'Touren Entdecken',
      watchVideo: 'Video Ansehen',
    },
    tours: {
      sectionTitle: 'Unsere',
      sectionTitleHighlight: 'Touren',
      sectionSubtitle:
        'Wählen Sie Ihr Abenteuer: Erkunden Sie Dubrovnik in Ihrem eigenen Tempo mit unserem Audio-Guide oder begleiten Sie uns auf einer Gourmet-Weintour auf der Halbinsel Pelješac.',
      perPerson: 'pro Person',
      duration: 'Dauer',
      bookTour: 'Tour Buchen',
      learnMore: 'Mehr Erfahren',
    },
    audioGuideTour: {
      title:
        'Selbstgeführte Audiotour durch die Altstadt von Dubrovnik und die Stadtmauern',
      badge: 'SELBSTGEFÜHRT',
      price: '15€',
      duration: 'Flexibel',
      shortDescription:
        'Erkunden Sie in Ihrem eigenen Tempo mit herunterladbaren Audiodateien und individuellen Karten. Zwei Touren in 13 Sprachen verfügbar.',
      fullDescription:
        'Möchten Sie Dubrovniks Altstadt in Ihrem eigenen Tempo erkunden? Unsere selbstgeführte Audiotour ist perfekt für Besucher, die flexibel bleiben möchten — ob für Museumsbesuche, Kirchenbesichtigungen oder Pausen auf dem Stradun. Sie können alle Informationen jederzeit anhören und wiederholen.',
      oldTownTourTitle: 'Altstadt-Tour',
      oldTownTourDescription:
        'Der Rundgang dauert ungefähr 1,5 Stunden. Einige Punkte auf der Karte tragen ein Augensymbol — von dort werden mehrere Sehenswürdigkeiten erklärt.',
      cityWallsTourTitle: 'Stadtmauern',
      cityWallsTourDescription:
        'Besuchen Sie auch die Festung Lovrijenac, die eine zentrale Rolle in der Geschichte Dubrovniks spielte. Der Eintritt ist im Tagesticket für die Mauern enthalten. Rechnen Sie mit 1,5 Stunden plus 30 Minuten für die Festung.',
      highlights: [
        '37 Highlights in der Altstadt',
        '16 Punkte auf den Stadtmauern',
        'Umfangreiche historische Details und kulturelle Informationen',
        'Hören Sie in Ihrem Tempo, wiederholen Sie jederzeit',
        'Nutzen Sie Ihr eigenes Gerät mit Kopfhörern',
        'Verfügbar in 13 Sprachen',
      ],
      included: [
        'Herunterladbare Audiodateien (MP3)',
        'PDF-Karte (Druck empfohlen)',
        'Download-Link per E-Mail',
      ],
      notIncluded: [
        'Eintrittskarten für Museen und Mauern',
        'Alles, was nicht ausdrücklich erwähnt ist',
      ],
      serviceType: 'Selbstgeführte Audiotour',
      availableLanguages: '13 Sprachen verfügbar',
      pointsOfInterest: {
        oldTown: '37 Punkte in der Altstadt',
        cityWalls: '16 Punkte auf den Stadtmauern',
      },
      totalDuration: '2,5–3 Stunden gesamt (durchgehend gehört)',
    },
    wineTour: {
      title: 'Gastro & Wein – Pelješac Tour',
      badge: 'BESTSELLER',
      price: '95€',
      duration: '6 Stunden',
      shortDescription:
        'Weinverkostung, Strand & Mittagessen – entspannter Ausflug ab Dubrovnik. Das ultimative Weinerlebnis in der Nähe von Dubrovnik.',
      fullDescription:
        'Erleben Sie die Spitzenweingüter der Halbinsel Pelješac und entdecken Sie die historische Stadt Ston. Die Region ist bekannt für Plavac Mali — die Rebsorte, aus der der berühmte Zinfandel hervorging.',
      highlights: [
        'Besuch von 3 außergewöhnlichen Weingütern',
        'Verkostung der Premium-Weine Dingač und Postup',
        'Entdecken Sie das historische Ston mit seinen Stadtmauern',
        'Optionales Meeresfrüchte-Mittagessen mit frischen Austern',
        'Optionaler Badestopp am Strand von Prapratno',
        'Lernen Sie Plavac Mali kennen, den Vorfahren des Zinfandel',
      ],
      included: [
        'Englischsprachiger Fahrer/Guide',
        'Klimatisiertes Fahrzeug',
        'Abholung & Rückfahrt',
        'Ston Besichtigung',
        'Matuško Weinverkostung (3 Gläser)',
        'Optionaler Strandaufenthalt',
      ],
      notIncluded: ['Alles, was nicht erwähnt ist'],
      additionalOptions: {
        title: 'Zusätzliche Optionen',
        winery: '+60 min — Besuche bei Ćurlin & Edivo Weingütern',
        lunch:
          '+90 min — Meeresfrüchte-Mittagessen (Austern, Muscheln, Gegrilltes)',
      },
      wineries: {
        matuskoTitle: 'Weingut Matuško',
        matuskoDesc:
          'Im bekannten Weinkeller Matuško probieren Sie Dingač und Postup und erfahren mehr über die lokale Weinproduktion.',
        curlinTitle: 'Weingut Ćurlin (optional)',
        curlinDesc:
          'Ein Familienweingut, das sich auf die traditionelle Plavac Mali Produktion spezialisiert hat.',
        edivoTitle: 'Edivo Wines (optional)',
        edivoDesc:
          'Heimat des außergewöhnlichen Navis Mysterium — ein Wein, der in Amphoren unter dem Meer reift.',
      },
      stonDescription:
        'Nach einem kurzen Spaziergang durch Ston fahren wir weiter durch Weinberge und malerische Dörfer zur ersten Verkostung.',
      beachStop: 'Optionaler Zwischenstopp: Baden am Strand von Prapratno.',
      departure: 'Flexibel (empfohlen 09:00)',
      vehicles: [
        'Opel Vivaro 8+1',
        'Cabriolet-Van 8+1 (auf Anfrage)',
        'Cabriolet-Minibus bis 28 Personen',
      ],
    },
    customTour: {
      title: 'Maßgeschneiderte Tour',
      badge: 'PERSONALISIERT',
      shortDescription:
        'Gestalten Sie Ihr perfektes Dubrovnik-Erlebnis. Teilen Sie uns Ihre Interessen mit und wir entwerfen eine einzigartige Tour nur für Sie.',
      createYourOwn: 'Tour Erstellen',
      modalTitle: 'Gestalten Sie Ihre Perfekte Tour',
      modalSubtitle:
        'Erzählen Sie uns von Ihrem Traumerlebnis in Dubrovnik und wir erstellen einen personalisierten Reiseplan nur für Sie.',
      form: {
        name: 'Ihr Name *',
        email: 'E-Mail-Adresse *',
        phone: 'Telefonnummer',
        date: 'Gewünschtes Datum',
        groupSize: 'Gruppengröße',
        interests: 'Was interessiert Sie?',
        interestOptions: {
          wine: 'Wein & Gastronomie',
          history: 'Geschichte & Kultur',
          beach: 'Strände & Schwimmen',
          food: 'Lokale Küche',
          photography: 'Fotospots',
          adventure: 'Abenteuer & Natur',
        },
        duration: 'Gewünschte Dauer',
        durationOptions: {
          halfDay: 'Halbtags (4-5 Stunden)',
          fullDay: 'Ganztags (8-10 Stunden)',
          multiDay: 'Mehrtägiges Erlebnis',
        },
        additionalRequests: 'Zusätzliche Wünsche oder Ideen',
        submit: 'Anfrage Senden',
        success: 'Anfrage Gesendet!',
        successMessage:
          'Vielen Dank! Wir melden uns innerhalb von 24 Stunden mit einem personalisierten Tourangebot.',
      },
    },
    cityTour: {
      title: 'Stadtrundfahrt mit Cabrio-Minivan',
      badge: 'NEU',
      price: '40€',
      duration: '90-120 min',
      shortDescription:
        'Panoramafahrt durch Dubrovnik mit den schönsten Fotospots – geführt von einem lokalen Fahrer im Cabrio-Minivan.',
      fullDescription:
        'Neben dem Besuch der Altstadt sollten Besucher Dubrovnik unbedingt auch von oben erleben. Diese Tour führt Sie zu den beeindruckendsten Aussichtspunkten, ideal für unvergessliche Fotos. Ihr Fahrer-Guide erzählt Ihnen interessante Fakten über die Stadt, und Sie sehen einige Drehorte aus Game of Thrones.',
      highlights: [
        'Panoramablick von oberhalb der Stadt',
        'Beste Fotospots in Dubrovnik',
        'Besuch der Ombla-Flussquelle',
        'Aussichtspunkt Berg Srđ mit Freizeit',
        'Game of Thrones Drehorte',
        'Sonnenuntergangstour verfügbar',
      ],
      included: [
        'Panoramafahrt 90-120 Minuten',
        'Englischsprachiger Fahrer/Guide',
        'Freizeit in der Altstadt',
        'Rücktransfer zum Schiff (falls vereinbart)',
      ],
      notIncluded: [
        'Eintritt für Stadtmauern und Museen',
      ],
      serviceType: 'Reguläre / Gruppentour',
      vehicle: 'Moderner touristischer Cabrio-Van mit kostenlosem WLAN, Kapazität bis 8 Personen',
      departures: [
        '08:00-08:20',
        '09:00-09:20',
        '10:00-10:20',
        '11:00-11:20',
        '12:00-12:20',
        '13:00-13:20',
        '14:00-14:20',
        '15:00-15:20',
        'Sonnenuntergangstour',
      ],
    },
    hopOnHopOffTour: {
      title: 'Hop-On Hop-Off Stadtrundfahrt',
      badge: 'FLEXIBEL',
      price: '20€',
      duration: '60-90 min',
      shortDescription:
        'Flexible Besichtigung von Dubrovnik mit dem Bus. Steigen Sie den ganzen Tag mit einem Ticket an den markierten Haltestellen ein und aus.',
      fullDescription:
        'Die Hop-on Hop-off Bustour ist für Gäste konzipiert, die Bewegungsfreiheit und ihr eigenes Tempo beim Erkunden von Dubrovnik wünschen. Mit einem Ticket können Sie den ganzen Tag an den markierten Haltestellen ein- und aussteigen und Panoramafahrten, Spaziergänge am Meer, Schwimmen und Fotografieren kombinieren.',
      highlights: [
        'Unbegrenzter Hop-on Hop-off Zugang den ganzen Tag',
        'Panoramablicke auf Dubrovnik',
        'Besuchen Sie den Strand und die Promenade von Lapad',
        'Erkunden Sie die Halbinsel Babin Kuk',
        'Fotostopp an der Franjo-Tuđman-Brücke',
        'Bester Aussichtspunkt auf Altstadt und Elaphiten-Inseln',
      ],
      included: [
        'Hop-on Hop-off Ticket (ganztägig gültig)',
        'Panorama-Bustour durch Dubrovnik',
        'Klimatisierter Touristenbus',
        'Markierte Haltestellen und regelmäßige Abfahrten',
      ],
      notIncluded: [
        'Eintrittskarten für Museen und Stadtmauern',
        'Speisen und Getränke',
        'Andere nicht aufgeführte Dienstleistungen',
      ],
      serviceType: 'Private / Reguläre Hop-on Hop-off Bustour',
      howItWorks: 'Ein- und Ausstieg ist nur an den markierten Haltestellen möglich. An jeder Haltestelle können Sie: aussteigen und die Gegend erkunden, weitergehen, schwimmen oder fotografieren, mit gültigem Ticket in den nächsten Bus steigen.',
      stops: {
        pile: 'PILE – Altstadt Dubrovnik (Ausgangspunkt)',
        postaLapad: 'Pošta Lapad – Strandpromenade, Cafés, Küstenpromenade',
        hotelPresident: 'Hotel President – Halbinsel Babin Kuk, Strand, Schwimmen',
        hotelKompas: 'Hotel Kompas – Lapad Strand, Promenade, Restaurants',
        gruz: 'Gruž – Hauptbusbahnhof, Kreuzfahrthafen, Hafenspaziergang',
        bridge: 'Franjo-Tuđman-Brücke – Blick auf den Ombla-Fluss, Panoramafotos',
        viewpoint: 'Panorama-Aussichtspunkt – Beste Aussicht auf Altstadt, Adria und Elaphiten-Inseln',
      },
      departures: [
        '08:00-08:20',
        '09:00-09:20',
        '10:00-10:20',
        '11:00-11:20',
        '12:00-12:20',
        '13:00-13:20',
        '14:00-14:20',
        '15:00-15:20',
        '16:00-16:20',
        '17:00-17:20',
        '18:00-18:20',
      ],
    },
    about: {
      title: 'Über',
      titleHighlight: 'Unsere Geschichte',
      subtitle:
        'Entdecken Sie die Leidenschaft und Hingabe hinter Dubrovniks führenden Tourerlebnissen.',
      paragraph1:
        'Seit über einem Jahrzehnt sind wir leidenschaftlich dabei, die atemberaubende Schönheit Dubrovniks und der umliegenden Region durch immersive Erlebnisse zu präsentieren, die Geschichte und Kultur zum Leben erwecken.',
      paragraph2:
        'Von selbstgeführten Audiotouren durch die Altstadt bis zu exklusiven Weinerlebnissen auf der Halbinsel Pelješac bieten wir für jeden Reisetyp etwas.',
      paragraph3:
        'Was als Familienprojekt begann, hat sich zu Dubrovniks vertrauenswürdigstem Tourerlebnis entwickelt und über 100.000 Besuchern geholfen, die Perle der Adria zu entdecken.',
      stats: {
        experience: '10+',
        experienceLabel: 'Jahre Erfahrung',
        visitors: '100K+',
        visitorsLabel: 'Zufriedene Besucher',
        rating: '4.8',
        ratingLabel: 'Durchschnittsbewertung',
      },
    },
    contact: {
      title: 'Kontaktieren',
      titleHighlight: 'Sie uns',
      subtitle:
        'Haben Sie Fragen zu unseren Touren? Planen Sie einen Gruppenbesuch? Wir freuen uns, von Ihnen zu hören!',
      form: {
        fullName: 'Vollständiger Name *',
        email: 'E-Mail-Adresse *',
        phone: 'Telefonnummer',
        subject: 'Betreff',
        message: 'Nachricht *',
        selectTopic: 'Thema auswählen',
        tourBooking: 'Tour-Buchung',
        groupReservations: 'Gruppenreservierungen',
        tourInformation: 'Tour-Informationen',
        feedback: 'Feedback',
        other: 'Sonstiges',
        newsletter:
          'Ich möchte Updates über neue Touren und Sonderangebote erhalten',
        submit: 'Nachricht Senden',
        responseTime:
          'Wir antworten normalerweise innerhalb von 2 Stunden während der Geschäftszeiten',
      },
    },
    footer: {
      followUs: 'Folgen Sie uns',
      popularTours: 'Unsere Touren',
      hopOnHopOffTour: 'Hop-On Hop-Off Bus',
      cityTour: 'Stadtrundfahrt',
      audioGuideTour: 'Audio Guide Tour',
      wineTour: 'Pelješac Weintour',
      customTour: 'Maßgeschneiderte Tour',
      blog: 'Blog',
      copyright: '© 2024 Alle Rechte vorbehalten.',
    },
    gallery: {
      title: 'Fotogalerie',
      subtitle: 'Erinnerungen von unseren Touren rund um Dubrovnik',
      shareOn: 'Auf WhatsApp teilen',
      downloadImage: 'Bild herunterladen',
    },
    blog: {
      title: 'Dubrovnik Reiseblog',
      subtitle:
        'Entdecken Sie Insider-Tipps, lokale Favoriten und Reiseführer für die Perle der Adria',
      readMore: 'Weiterlesen',
      backToBlog: 'Zurück zum Blog',
      relatedPosts: 'Ähnliche Artikel',
      categories: {
        food: 'Essen & Trinken',
        wine: 'Wein & Gastronomie',
        culture: 'Kultur & Geschichte',
        travel: 'Reisetipps',
      },
      posts: {
        restaurants: {
          title: 'Die 10 Besten Restaurants in Dubrovniks Altstadt',
          excerpt:
            'Von traditioneller dalmatinischer Küche bis hin zur modernen mediterranen Fusion – entdecken Sie, wo die Einheimischen essen.',
          content: [
            'Die Altstadt von Dubrovnik ist eine Schatzkammer kulinarischer Erlebnisse. Hinter den alten Steinmauern finden Sie alles von familiengeführten Konobas bis zu innovativen Restaurants.',
            'Das Proto Restaurant ist seit 1886 eine Institution in Dubrovnik. Es ist berühmt für frische Meeresfrüchte und traditionelle dalmatinische Gerichte.',
            'Das Nautika Restaurant bietet spektakuläre Ausblicke auf die Adria und die Festung Lovrijenac.',
            'Für ein ungezwungeneres Erlebnis besuchen Sie die Konoba Ribar in der Nähe des Alten Hafens.',
            'Das Azur Restaurant bringt asiatisch-mediterrane Fusion nach Dubrovnik.',
          ],
        },
        wineries: {
          title: 'Beste Weingüter bei Dubrovnik: Ein Pelješac-Führer',
          excerpt:
            'Erkunden Sie die berühmte Weinregion der Halbinsel Pelješac, Heimat der prestigeträchtigsten Rotweine Kroatiens.',
          content: [
            'Die Halbinsel Pelješac, nur eine Stunde von Dubrovnik entfernt, ist Kroatiens renommierteste Weinregion.',
            'Das Weingut Matuško ist ein Muss für jeden Weinliebhaber. Ihre preisgekrönten Dingač-Weine sind außergewöhnlich.',
            'Saints Hills Winery verbindet traditionelle Techniken mit modernen Methoden.',
            'Edivo Winery bietet ein einzigartiges Erlebnis mit ihrer Unterwasser-Weinreifung.',
            'Besuchen Sie Ćurlin, ein kleines Familienweingut, wo Sie Weine direkt aus dem Fass probieren können.',
          ],
        },
        oldTown: {
          title: 'Versteckte Schätze der Altstadt von Dubrovnik',
          excerpt:
            'Jenseits der Hauptattraktionen: geheime Aussichtspunkte, ruhige Plätze und lokale Spots.',
          content: [
            'Während Stradun und die Stadtmauern Millionen anziehen, verbirgt die Altstadt unzählige Geheimnisse.',
            'Steigen Sie die schmalen Treppen hinter der St. Ignatius Kirche hinauf, um die Jesuitentreppe zu finden.',
            'Die kleine St. Sebastian Kirche, versteckt nahe dem Ploče-Tor, stammt aus dem Jahr 1466.',
            'Für die besten Sonnenuntergangsaussichten ohne Menschenmassen gehen Sie zur Buža Bar.',
            'Schlendern Sie durch die Wohnstraßen nördlich von Stradun, um das authentische lokale Leben zu erleben.',
          ],
        },
        beaches: {
          title: 'Die Besten Strände bei Dubrovnik',
          excerpt:
            'Kristallklares Wasser und atemberaubende Küste: Ihr Führer zu den besten Badestellen.',
          content: [
            'Obwohl Dubrovnik für seine Geschichte berühmt ist, bietet das kristallklare Adriawasser einige der besten Strände im Mittelmeer.',
            'Der Banje Strand ist der berühmteste Strand Dubrovniks mit atemberaubender Aussicht auf die Altstadt.',
            'Für ein abgeschiedeneres Erlebnis nehmen Sie ein Kajak zur Betina-Höhlenbucht.',
            'Der Šunj Strand auf der Insel Lopud ist die Fährfahrt wert. Dieser Sandstrand ist in der Region selten.',
            'Der Copacabana Strand bietet ausgezeichnete Einrichtungen, einschließlich Wassersport und Restaurants.',
          ],
        },
      },
    },
    tourDetail: {
      aboutTour: 'Über Diese Tour',
      highlights: 'Was Diese Tour Besonders Macht',
      included: 'Inklusive',
      notIncluded: 'Nicht Inklusive',
      bestPrice: 'Bestpreisgarantie',
      freeCancellation: 'Kostenlose Stornierung',
      meetingPoint: 'Treffpunkt',
      needHelp: 'Brauchen Sie Hilfe bei Ihrer Buchung?',
      secureBooking: 'Sichere Buchung',
      instantConfirmation: 'Sofortige Bestätigung',
      readyToExplore: 'Bereit zum Entdecken?',
      ctaDescription:
        'Buchen Sie Ihre Tour heute und entdecken Sie das Beste von Dubrovnik und der Halbinsel Pelješac.',
      bookNow: 'Jetzt Buchen',
      callUs: 'Rufen Sie uns an',
      reviews: 'Bewertungen',
      happyTravelers: 'Zufriedene Reisende',
      averageRating: 'Durchschnittsbewertung',
      customerSupport: 'Kundensupport',
      tourNotFound: 'Tour Nicht Gefunden',
      tourNotFoundDesc: 'Entschuldigung, die gesuchte Tour existiert nicht.',
      backHome: 'Zurück zur Startseite',
      downloadInfo: 'Download-Link per E-Mail nach dem Kauf erhalten',
      howItWorks: 'So Funktioniert Es',
      step1Title: 'Kaufen & Herunterladen',
      step1Desc:
        'Online kaufen und sofort Ihren Download-Link per E-Mail erhalten',
      step2Title: 'Auf Gerät Übertragen',
      step2Desc:
        'MP3-Dateien und PDF-Karte auf Ihr Smartphone oder Tablet herunterladen',
      step3Title: 'Frei Erkunden',
      step3Desc:
        'Erkunden Sie Dubrovnik in Ihrem eigenen Tempo und hören Sie, wann immer Sie möchten',
      itinerary: 'Tour-Programm',
      additionalOptions: 'Zusätzliche Optionen',
      pickupInfo: 'Hotelabholung & Rückfahrt inklusive',
    },
    common: {
      flexible: 'Flexibel',
      selfGuided: 'Selbstgeführt',
      languages: '13 Sprachen',
      hours: 'Stunden',
      from: 'ab',
      optional: 'Optional',
    },
  },

  it: {
    nav: {
      tours: 'Tour',
      about: 'Chi siamo',
      contact: 'Contatti',
      blog: 'Blog',
      gallery: 'Galleria',
      bookNow: 'Prenota',
    },
    hero: {
      title: 'Hop On Hop Off',
      titleHighlight: 'Dubrovnik Bus Tours',
      subtitle:
        "Esplora la Perla dell'Adriatico a modo tuo — tour audio, esperienze enologiche e avventure su misura.",
      exploreTours: 'Scopri i Tour',
      watchVideo: 'Guarda il Video',
    },
    tours: {
      sectionTitle: 'I Nostri',
      sectionTitleHighlight: 'Tour',
      sectionSubtitle:
        'Scegli la tua avventura: esplora Dubrovnik al tuo ritmo con la nostra audioguida, oppure unisciti a noi per un tour enogastronomico sulla penisola di Pelješac.',
      perPerson: 'a persona',
      duration: 'durata',
      bookTour: 'Prenota Tour',
      learnMore: 'Scopri di Più',
    },
    audioGuideTour: {
      title:
        'Tour Autoguidato con Audioguida della Città Vecchia di Dubrovnik e delle Mura',
      badge: 'AUTOGUIDATO',
      price: '15€',
      duration: 'Flessibile',
      shortDescription:
        'Esplora al tuo ritmo con file audio scaricabili e mappe personalizzate. Due tour disponibili in 13 lingue.',
      fullDescription:
        'Desideri esplorare Dubrovnik al tuo ritmo? La nostra audioguida autoguidata è perfetta per chi preferisce una visita flessibile — con soste in musei, chiese o per un drink sullo Stradun. Puoi ascoltare le informazioni quando vuoi e riascoltarle liberamente.',
      oldTownTourTitle: 'Tour della Città Vecchia',
      oldTownTourDescription:
        "La passeggiata dura circa 1 ora e mezza. Alcuni punti con simbolo dell'occhio spiegano più luoghi visibili dalla stessa posizione.",
      cityWallsTourTitle: 'Mura di Dubrovnik',
      cityWallsTourDescription:
        'Non perdere la fortezza di San Lorenzo (Lovrijenac), parte importante della difesa cittadina. È separata dalle mura ma inclusa nel biglietto giornaliero. Il percorso richiede circa 1,5 ore più 30 minuti per la fortezza.',
      highlights: [
        "37 luoghi d'interesse nella Città Vecchia",
        '16 punti sulle mura',
        'Ricche informazioni storiche e culturali',
        'Ascolta al tuo ritmo, riascolta quando vuoi',
        'Usa il tuo dispositivo con cuffie',
        'Disponibile in 13 lingue',
      ],
      included: [
        'File audio scaricabili (MP3)',
        'Mappa in PDF (consigliata la stampa)',
        'Link di download inviato via email',
      ],
      notIncluded: [
        'Biglietti per musei e mura',
        'Tutto ciò che non è elencato',
      ],
      serviceType: 'Tour autoguidato con audioguida',
      availableLanguages: '13 lingue disponibili',
      pointsOfInterest: {
        oldTown: '37 punti nella Città Vecchia',
        cityWalls: '16 punti sulle mura',
      },
      totalDuration: '2,5–3 ore in totale (ascolto continuo)',
    },
    wineTour: {
      title: 'Gastronomia & Vino – Tour a Pelješac',
      badge: 'PIÙ VENDUTO',
      price: '95€',
      duration: '6 ore',
      shortDescription:
        'Degustazione di vini, spiaggia e pranzo – una giornata rilassante da Dubrovnik. La migliore esperienza enologica vicino a Dubrovnik.',
      fullDescription:
        "Visitate le migliori cantine della penisola di Pelješac e scoprite la città storica di Ston. La zona è famosa per il Plavac Mali, considerato l'antenato del celebre Zinfandel.",
      highlights: [
        'Visita a 3 cantine eccezionali',
        'Degustazione dei vini premium Dingač e Postup',
        'Esplora la storica Ston e le sue mura medievali',
        'Pranzo di pesce opzionale con ostriche fresche',
        'Bagno opzionale alla spiaggia di Prapratno',
        'Scopri il Plavac Mali, antenato dello Zinfandel',
      ],
      included: [
        'Autista/guida anglofono',
        'Veicolo climatizzato',
        'Prelievo e rientro',
        'Visita di Ston',
        'Degustazione Matuško (3 bicchieri)',
        'Sosta in spiaggia opzionale',
      ],
      notIncluded: ['Tutto ciò che non è menzionato'],
      additionalOptions: {
        title: 'Opzioni Aggiuntive',
        winery: '+60 min — visite alle cantine Ćurlin ed Edivo',
        lunch: '+90 min — pranzo di pesce (ostriche, cozze, grigliate)',
      },
      wineries: {
        matuskoTitle: 'Cantina Matuško',
        matuskoDesc:
          'Nella cantina Matuško degusterete Dingač e Postup e scoprirete il processo di produzione.',
        curlinTitle: 'Cantina Ćurlin (opzionale)',
        curlinDesc:
          'Una cantina familiare specializzata nella produzione tradizionale di Plavac Mali.',
        edivoTitle: 'Edivo Wines (opzionale)',
        edivoDesc:
          'Celebre per il Navis Mysterium — vino affinato in anfore sotto il mare.',
      },
      stonDescription:
        'Dopo una breve sosta a Ston, proseguiremo tra vigneti e paesini verso la prima degustazione.',
      beachStop: 'Possibilità di una sosta balneare a Prapratno.',
      departure: 'Flessibile (consigliato 09:00)',
      vehicles: [
        'Opel Vivaro 8+1',
        'Van cabrio 8+1 (su richiesta)',
        'Minibus cabrio fino a 28 pax',
      ],
    },
    customTour: {
      title: 'Tour Su Misura',
      badge: 'PERSONALIZZATO',
      shortDescription:
        'Crea la tua esperienza perfetta a Dubrovnik. Raccontaci i tuoi interessi e progetteremo un tour unico solo per te.',
      createYourOwn: 'Crea Il Tuo Tour',
      modalTitle: 'Progetta Il Tuo Tour Perfetto',
      modalSubtitle:
        'Raccontaci della tua esperienza da sogno a Dubrovnik e creeremo un itinerario personalizzato solo per te.',
      form: {
        name: 'Il Tuo Nome *',
        email: 'Indirizzo Email *',
        phone: 'Numero di Telefono',
        date: 'Data Preferita',
        groupSize: 'Dimensione del Gruppo',
        interests: 'Cosa ti interessa?',
        interestOptions: {
          wine: 'Vino e Gastronomia',
          history: 'Storia e Cultura',
          beach: 'Spiagge e Nuoto',
          food: 'Cibo Locale',
          photography: 'Spot Fotografici',
          adventure: 'Avventura e Natura',
        },
        duration: 'Durata Preferita',
        durationOptions: {
          halfDay: 'Mezza Giornata (4-5 ore)',
          fullDay: 'Giornata Intera (8-10 ore)',
          multiDay: 'Esperienza Multi-giorno',
        },
        additionalRequests: 'Richieste o Idee Aggiuntive',
        submit: 'Invia Richiesta',
        success: 'Richiesta Inviata!',
        successMessage:
          'Grazie! Ti risponderemo entro 24 ore con una proposta di tour personalizzata.',
      },
    },
    cityTour: {
      title: 'City Tour in Minivan Cabrio',
      badge: 'NUOVO',
      price: '40€',
      duration: '90-120 min',
      shortDescription:
        'Un tour panoramico di Dubrovnik con i migliori punti fotografici, accompagnato da una guida locale a bordo di un moderno minivan cabrio.',
      fullDescription:
        'Per apprezzare davvero la bellezza di Dubrovnik, non basta visitare solo la città vecchia: i panorami più spettacolari si trovano sulle colline che la circondano. Durante questo tour scatterete foto indimenticabili e ascolterete curiosità raccontate dal vostro autista-guida. Vedrete anche alcune location delle riprese di Il Trono di Spade.',
      highlights: [
        'Viste panoramiche dall\'alto della città',
        'Migliori punti fotografici di Dubrovnik',
        'Visita alla sorgente del fiume Ombla',
        'Punto panoramico Monte Srđ con tempo libero',
        'Location de Il Trono di Spade',
        'Tour al tramonto disponibile',
      ],
      included: [
        'Percorso panoramico 90-120 minuti',
        'Autista/guida di lingua inglese',
        'Tempo libero nella città vecchia',
        'Transfer di ritorno alla nave (se concordato)',
      ],
      notIncluded: [
        'Biglietti d\'ingresso per mura e musei',
      ],
      serviceType: 'Tour regolare / di gruppo',
      vehicle: 'Moderno minivan cabrio turistico con WiFi gratuito, capacità fino a 8 passeggeri',
      departures: [
        '08:00-08:20',
        '09:00-09:20',
        '10:00-10:20',
        '11:00-11:20',
        '12:00-12:20',
        '13:00-13:20',
        '14:00-14:20',
        '15:00-15:20',
        'Tour al tramonto',
      ],
    },
    hopOnHopOffTour: {
      title: 'Tour in Bus Hop-On Hop-Off',
      badge: 'FLESSIBILE',
      price: '20€',
      duration: '60-90 min',
      shortDescription:
        'Visita flessibile di Dubrovnik in autobus. Sali e scendi alle fermate indicate per tutto il giorno con un unico biglietto.',
      fullDescription:
        'Il tour hop-on hop-off è pensato per gli ospiti che desiderano libertà di movimento e il proprio ritmo per esplorare Dubrovnik. Con un biglietto potete salire e scendere dall\'autobus alle fermate indicate per tutto il giorno, combinando gite panoramiche, passeggiate sul mare, nuoto e fotografia.',
      highlights: [
        'Accesso illimitato hop-on hop-off tutto il giorno',
        'Viste panoramiche di Dubrovnik',
        'Visita la spiaggia e la passeggiata di Lapad',
        'Esplora la penisola di Babin Kuk',
        'Sosta fotografica al ponte Franjo Tuđman',
        'Miglior punto panoramico sulla città vecchia e isole Elafiti',
      ],
      included: [
        'Biglietto hop-on hop-off (valido tutto il giorno)',
        'Tour panoramico in autobus di Dubrovnik',
        'Autobus turistico climatizzato',
        'Fermate indicate e partenze regolari',
      ],
      notIncluded: [
        'Biglietti d\'ingresso per musei e mura',
        'Cibo e bevande',
        'Altri servizi non elencati',
      ],
      serviceType: 'Tour hop-on hop-off privato / regolare',
      howItWorks: 'L\'ingresso e l\'uscita sono possibili solo alle fermate indicate. Ad ogni fermata potete: scendere ed esplorare la zona, continuare a camminare, nuotare o fotografare, salire sul prossimo autobus con biglietto valido.',
      stops: {
        pile: 'PILE – Città Vecchia di Dubrovnik (Punto di partenza)',
        postaLapad: 'Pošta Lapad – Passeggiata sul mare, caffè, lungomare',
        hotelPresident: 'Hotel President – Penisola Babin Kuk, spiaggia, nuoto',
        hotelKompas: 'Hotel Kompas – Spiaggia di Lapad, passeggiata, ristoranti',
        gruz: 'Gruž – Stazione autobus principale, porto crociere, passeggiata al porto',
        bridge: 'Ponte Franjo Tuđman – Vista sul fiume Ombla, foto panoramiche',
        viewpoint: 'Punto panoramico – Miglior vista sulla città vecchia, Mare Adriatico e Isole Elafiti',
      },
      departures: [
        '08:00-08:20',
        '09:00-09:20',
        '10:00-10:20',
        '11:00-11:20',
        '12:00-12:20',
        '13:00-13:20',
        '14:00-14:20',
        '15:00-15:20',
        '16:00-16:20',
        '17:00-17:20',
        '18:00-18:20',
      ],
    },
    about: {
      title: 'La Nostra',
      titleHighlight: 'Storia',
      subtitle:
        'Scopri la passione e la dedizione dietro le migliori esperienze turistiche di Dubrovnik.',
      paragraph1:
        'Da oltre un decennio, siamo appassionati nel mostrare la bellezza mozzafiato di Dubrovnik e della regione circostante attraverso esperienze immersive che danno vita alla storia e alla cultura.',
      paragraph2:
        'Dalle audioguide autoguidate della Città Vecchia alle esperienze enologiche esclusive sulla penisola di Pelješac, offriamo qualcosa per ogni tipo di viaggiatore.',
      paragraph3:
        "Quello che è iniziato come un progetto familiare è diventato l'esperienza turistica più affidabile di Dubrovnik, aiutando oltre 100.000 visitatori a scoprire la Perla dell'Adriatico.",
      stats: {
        experience: '10+',
        experienceLabel: 'Anni di Esperienza',
        visitors: '100K+',
        visitorsLabel: 'Visitatori Soddisfatti',
        rating: '4.8',
        ratingLabel: 'Valutazione Media',
      },
    },
    contact: {
      title: 'Mettiti in',
      titleHighlight: 'Contatto',
      subtitle:
        'Hai domande sui nostri tour? Stai pianificando una visita di gruppo? Ci piacerebbe sentirti!',
      form: {
        fullName: 'Nome Completo *',
        email: 'Indirizzo Email *',
        phone: 'Numero di Telefono',
        subject: 'Oggetto',
        message: 'Messaggio *',
        selectTopic: 'Seleziona un argomento',
        tourBooking: 'Prenotazione Tour',
        groupReservations: 'Prenotazioni di Gruppo',
        tourInformation: 'Informazioni sul Tour',
        feedback: 'Feedback',
        other: 'Altro',
        newsletter:
          'Vorrei ricevere aggiornamenti su nuovi tour e offerte speciali',
        submit: 'Invia Messaggio',
        responseTime:
          "Di solito rispondiamo entro 2 ore durante l'orario lavorativo",
      },
    },
    footer: {
      followUs: 'Seguici',
      popularTours: 'I Nostri Tour',
      hopOnHopOffTour: 'Bus Hop-On Hop-Off',
      cityTour: 'City Tour',
      audioGuideTour: 'Tour con Audioguida',
      wineTour: 'Tour del Vino Pelješac',
      customTour: 'Tour Su Misura',
      blog: 'Blog',
      copyright: '© 2024 Tutti i diritti riservati.',
    },
    gallery: {
      title: 'Galleria Fotografica',
      subtitle: 'Ricordi dei nostri tour a Dubrovnik e oltre',
      shareOn: 'Condividi su WhatsApp',
      downloadImage: 'Scarica Immagine',
    },
    blog: {
      title: 'Blog di Viaggio Dubrovnik',
      subtitle:
        "Scopri consigli locali, luoghi preferiti e guide di viaggio per la Perla dell'Adriatico",
      readMore: 'Leggi di Più',
      backToBlog: 'Torna al Blog',
      relatedPosts: 'Articoli Correlati',
      categories: {
        food: 'Cibo e Ristorazione',
        wine: 'Vino e Gastronomia',
        culture: 'Cultura e Storia',
        travel: 'Consigli di Viaggio',
      },
      posts: {
        restaurants: {
          title: 'I 10 Migliori Ristoranti della Città Vecchia di Dubrovnik',
          excerpt:
            'Dalla cucina dalmata tradizionale alla fusion mediterranea moderna, scopri dove mangiano i locali.',
          content: [
            'La Città Vecchia di Dubrovnik è un tesoro di esperienze culinarie. Dietro le sue antiche mura di pietra troverai tutto, dalle konoba familiari ai ristoranti innovativi.',
            "Il Ristorante Proto è un'istituzione di Dubrovnik dal 1886. È famoso per i suoi frutti di mare freschi e i piatti tradizionali dalmati.",
            "Il Ristorante Nautika offre viste spettacolari sull'Adriatico e sulla Fortezza Lovrijenac.",
            "Per un'esperienza più casual, visita Konoba Ribar vicino al Porto Vecchio.",
            'Il Ristorante Azur porta la fusion asiatico-mediterranea a Dubrovnik.',
          ],
        },
        wineries: {
          title: 'Le Migliori Cantine Vicino a Dubrovnik: Guida a Pelješac',
          excerpt:
            'Esplora la famosa regione vinicola della Penisola di Pelješac, patria dei vini rossi più prestigiosi della Croazia.',
          content: [
            "La Penisola di Pelješac, a solo un'ora da Dubrovnik, è la regione vinicola più rinomata della Croazia.",
            'La Cantina Matuško è una tappa obbligata per ogni appassionato di vino. I loro vini Dingač premiati sono eccezionali.',
            'Saints Hills Winery combina tecniche tradizionali con metodi moderni.',
            "Edivo Winery offre un'esperienza unica con il suo invecchiamento del vino sott'acqua.",
            'Visita Ćurlin, una piccola cantina familiare dove puoi assaggiare i vini direttamente dalla botte.',
          ],
        },
        oldTown: {
          title: 'Gemme Nascoste della Città Vecchia di Dubrovnik',
          excerpt:
            'Oltre le attrazioni principali: punti panoramici segreti, piazze tranquille e luoghi locali.',
          content: [
            'Mentre Stradun e le mura attirano milioni di visitatori, la Città Vecchia nasconde innumerevoli segreti.',
            "Sali le scale strette dietro la Chiesa di Sant'Ignazio per trovare la Scalinata dei Gesuiti.",
            'La piccola Chiesa di San Sebastiano, nascosta vicino a Porta Ploče, risale al 1466.',
            'Per le migliori viste del tramonto senza la folla, vai al Buža Bar.',
            'Passeggia per le strade residenziali a nord di Stradun per vivere la vita locale autentica.',
          ],
        },
        beaches: {
          title: 'Le Migliori Spiagge Vicino a Dubrovnik',
          excerpt:
            'Acque cristalline e costa mozzafiato: la tua guida ai migliori posti per nuotare.',
          content: [
            "Sebbene Dubrovnik sia famosa per la sua storia, le acque cristalline dell'Adriatico offrono alcune delle migliori spiagge del Mediterraneo.",
            'La Spiaggia Banje è la più famosa di Dubrovnik, con viste mozzafiato sulla Città Vecchia.',
            "Per un'esperienza più appartata, prendi un kayak verso la Spiaggia della Grotta Betina.",
            "La Spiaggia Šunj sull'Isola di Lopud vale il viaggio in traghetto. Questa spiaggia sabbiosa è rara nella regione.",
            'La Spiaggia Copacabana offre eccellenti strutture, inclusi sport acquatici e ristoranti.',
          ],
        },
      },
    },
    tourDetail: {
      aboutTour: 'Informazioni su Questo Tour',
      highlights: 'Cosa Rende Speciale Questo Tour',
      included: 'Cosa È Incluso',
      notIncluded: 'Non Incluso',
      bestPrice: 'Miglior Prezzo Garantito',
      freeCancellation: 'Cancellazione Gratuita',
      meetingPoint: 'Punto di Incontro',
      needHelp: 'Hai bisogno di aiuto con la prenotazione?',
      secureBooking: 'Prenotazione Sicura',
      instantConfirmation: 'Conferma Istantanea',
      readyToExplore: 'Pronto a Esplorare?',
      ctaDescription:
        'Prenota il tuo tour oggi e scopri il meglio di Dubrovnik e della penisola di Pelješac.',
      bookNow: 'Prenota Ora',
      callUs: 'Chiamaci',
      reviews: 'recensioni',
      happyTravelers: 'Viaggiatori Soddisfatti',
      averageRating: 'Valutazione Media',
      customerSupport: 'Assistenza Clienti',
      tourNotFound: 'Tour Non Trovato',
      tourNotFoundDesc: 'Spiacenti, il tour che stai cercando non esiste.',
      backHome: 'Torna alla Home',
      downloadInfo: "Ricevi il link di download via email dopo l'acquisto",
      howItWorks: 'Come Funziona',
      step1Title: 'Acquista e Scarica',
      step1Desc:
        'Acquista online e ricevi istantaneamente il link di download via email',
      step2Title: 'Trasferisci sul Dispositivo',
      step2Desc:
        'Scarica i file MP3 e la mappa PDF sul tuo smartphone o tablet',
      step3Title: 'Esplora Liberamente',
      step3Desc: 'Percorri Dubrovnik al tuo ritmo, ascoltando quando vuoi',
      itinerary: 'Itinerario del Tour',
      additionalOptions: 'Opzioni Aggiuntive',
      pickupInfo: 'Prelievo e rientro in hotel inclusi',
    },
    common: {
      flexible: 'Flessibile',
      selfGuided: 'Autoguidato',
      languages: '13 Lingue',
      hours: 'ore',
      from: 'da',
      optional: 'Opzionale',
    },
  },
};
