// GNC Product Images from Products/gnc folder

// Creatine Monohydrate 100g Unflavoured - 2 images
import GNC_CREAT100_1 from '../../assets/Products/gnc/GNC-Creatine-Monohydrate-100gms-Unflavoured-image1.webp'
import GNC_CREAT100_2 from '../../assets/Products/gnc/GNC-Creatine-Monohydrate-100gms-Unflavoured-image2.webp'

export const gncCreatine100g = [
  GNC_CREAT100_1,
  GNC_CREAT100_2,
]

// Creatine Monohydrate 250g Flavoured - 2 images
import GNC_CREAT250_1 from '../../assets/Products/gnc/GNC-Creatine-Monohydrate-250gms-flavoured-image1.webp'
import GNC_CREAT250_2 from '../../assets/Products/gnc/GNC-Creatine-Monohydrate-250gms-flavoured-image2.webp'

export const gncCreatine250g = [
  GNC_CREAT250_1,
  GNC_CREAT250_2,
]

// Fish Oil Omega 3 60 Capsules - 2 images
import GNC_OMEGA_1 from '../../assets/Products/gnc/gnc-fishoilomega3-60capsules-image1.webp'
import GNC_OMEGA_2 from '../../assets/Products/gnc/gnc-fishoilomega3-60capsules-image2.webp'

export const gncFishOilOmega = [
  GNC_OMEGA_1,
  GNC_OMEGA_2,
]

// Mega Men Multivitamins Sports 60T - 3 images
import GNC_MM_1 from '../../assets/Products/gnc/gnc-megamenmultivitaminsports-60Timage1.webp'
import GNC_MM_2 from '../../assets/Products/gnc/gnc-megamenmultivitaminsports-60Timage2.webp'
import GNC_MM_3 from '../../assets/Products/gnc/gnc-megamenmultivitaminsports-60Timage3.webp'

export const gncMegaMenMultivitamins = [
  GNC_MM_1,
  GNC_MM_2,
  GNC_MM_3,
]

// Pro Performance Creatine + Electrolytes 100g - 1 image
import GNC_PPCE from '../../assets/Products/gnc/gnc-properformancecreatine+electrolytes-100gms.webp'

export const gncProPerformanceCreatine = [
  GNC_PPCE,
]

// Pro Performance Weight Gainer 3kg - 2 images
import GNC_WG3_1 from '../../assets/Products/gnc/gnc-properformanceweightgainer-3kgimage1.webp'
import GNC_WG3_2 from '../../assets/Products/gnc/gnc-properformanceweightgainer-3kgimage2.webp'

export const gncProPerformanceGainer3kg = [
  GNC_WG3_1,
  GNC_WG3_2,
]

// Pro Performance Weight Gainer 5kg - 3 images
import GNC_WG5_1 from '../../assets/Products/gnc/gnc-properformanceweightgainer-5kgimage1.webp'
import GNC_WG5_2 from '../../assets/Products/gnc/gnc-properformanceweightgainer-5kgimage2.webp'
import GNC_WG5_3 from '../../assets/Products/gnc/gnc-properformanceweightgainer-5kgimage3.webp'

export const gncProPerformanceGainer5kg = [
  GNC_WG5_1,
  GNC_WG5_2,
  GNC_WG5_3,
]

// Pro Whey Protein 1.82kg - 3 images
import GNC_PWHEY_1 from '../../assets/Products/gnc/gnc-prowheyprotein-1.82kgimage1.webp'
import GNC_PWHEY_2 from '../../assets/Products/gnc/gnc-prowheyprotein-1.82kgimage2.webp'
import GNC_PWHEY_3 from '../../assets/Products/gnc/gnc-prowheyprotein-1.82kgimage3.webp'

export const gncProWheyProtein = [
  GNC_PWHEY_1,
  GNC_PWHEY_2,
  GNC_PWHEY_3,
]

// All GNC Images Combined
export const allGncImages = [
  GNC_CREAT100_1, GNC_CREAT100_2,
  GNC_CREAT250_1, GNC_CREAT250_2,
  GNC_OMEGA_1, GNC_OMEGA_2,
  GNC_MM_1, GNC_MM_2, GNC_MM_3,
  GNC_PPCE,
  GNC_WG3_1, GNC_WG3_2,
  GNC_WG5_1, GNC_WG5_2, GNC_WG5_3,
  GNC_PWHEY_1, GNC_PWHEY_2, GNC_PWHEY_3,
]

// GNC Products
export const gncProducts = [
  {
    id: "gnc-creatine-100g",
    name: "GNC Creatine Monohydrate",
    brand: "GNC",
    size: "100g",
    price: 699,
    categories: ["creatine"],
    images: gncCreatine100g,
    flavour: ["Unflavoured", "Orange", "Blueberry", "Craneberry"],
    uses: [
      "Pure, fast-absorbing creatine monohydrate",
      "Boosts strength & muscle volume",
      "Enhances athletic performance & endurance",
      "Micronized & instantized for rapid absorption",
      "Free from gluten, sugar, dairy, soy & artificial additives"
    ],
    description: [
      "Unleash your potential and see real results with GNC Creatine Monohydrate, designed to fuel your workouts and support peak athletic performance.",
      "Once ingested, creatine is converted into creatine phosphate, supplying energy to skeletal muscles during intense training. This fast-acting formula helps you push harder by promoting instant energy release, improving endurance, and enhancing muscle strength.",
      "Micronized and instantized for rapid absorption, it increases muscle volume by hydrating cells, giving your body a fuller, more powerful look. Beyond performance, it offers additional support for your nervous system and blood sugar regulation.",
      "Crafted for clean nutrition, it's free from gluten, sugar, artificial additives, dairy, soy, and more, making it ideal for those with dietary sensitivities or clean lifestyle preferences."
    ]
  },
  {
    id: "gnc-creatine-250g",
    name: "GNC Creatine Monohydrate",
    brand: "GNC",
    size: "250g",
    price: 1299,
    categories: ["creatine"],
    images: gncCreatine250g,
    flavour: ["Unflavoured", "Orange", "Blueberry", "Craneberry"],
    uses: [
      "Pure, fast-absorbing creatine monohydrate",
      "Boosts strength & muscle volume",
      "Enhances athletic performance & endurance",
      "Micronized & instantized for rapid absorption",
      "Free from gluten, sugar, dairy, soy & artificial additives"
    ],
    description: [
      "Unleash your potential and see real results with GNC Creatine Monohydrate, designed to fuel your workouts and support peak athletic performance.",
      "Once ingested, creatine is converted into creatine phosphate, supplying energy to skeletal muscles during intense training. This fast-acting formula helps you push harder by promoting instant energy release, improving endurance, and enhancing muscle strength.",
      "Micronized and instantized for rapid absorption, it increases muscle volume by hydrating cells, giving your body a fuller, more powerful look. Beyond performance, it offers additional support for your nervous system and blood sugar regulation.",
      "Crafted for clean nutrition, it's free from gluten, sugar, artificial additives, dairy, soy, and more, making it ideal for those with dietary sensitivities or clean lifestyle preferences."
    ]
  },
  {
    id: "gnc-fishoil-omega3",
    name: "GNC Fish Oil Omega 3",
    brand: "GNC",
    size: "60 Capsules",
    price: 1099,
    categories: ["omega3", "supplements"],
    images: gncFishOilOmega,
    uses: [
      "1000mg of Omega-3 Fatty acids per serving",
      "300mg EPA and DHA for heart & brain health",
      "Supports joint health & mobility",
      "Enhances memory, focus & cognitive function",
      "Protects vision & eye health"
    ],
    description: [
      "GNC Fish Oil Omega 3 is a premium supplement formulated to support your overall wellness and vitality.",
      "Each serving of GNC fish body oil provides 1000mg of Omega-3 Fatty acids, with 300mg coming from EPA and DHA.",
      "It supports joint health, memory and focus and protects vision, making it an essential addition to your daily health regimen."
    ]
  },
  {
    id: "gnc-megamen-60",
    name: "GNC Mega Men Multivitamins Sports",
    brand: "GNC",
    size: "60 Tablets",
    price: 1499,
    categories: ["multivitamins", "vitamins"],
    images: gncMegaMenMultivitamins,
    uses: [
      "High-potency multivitamin for active men",
      "Supports muscle performance & recovery",
      "Enhances exercise performance",
      "Boosts antioxidant support",
      "Aids post-workout recovery",
      "Supports energy production"
    ],
    description: [
      "GNC Mega Men Sport Multivitamin is formulated for men who live an active, fitness-focused lifestyle.",
      "Packed with essential vitamins, minerals, and performance nutrients, it supports muscle function, recovery, and energy production.",
      "With targeted ingredients to enhance exercise performance, boost antioxidant support, and aid post-workout recovery, it's your daily foundation for achieving peak physical performance."
    ]
  },
  {
    id: "gnc-prperf-creatine-100g",
    name: "GNC Pro Performance Creatine + Electrolytes",
    brand: "GNC",
    size: "100g",
    price: 799,
    categories: ["creatine", "electrolytes"],
    images: gncProPerformanceCreatine,
    flavour: ["Cola", "Lemon", "Orange", "Unflavoured"],
    uses: [
      "Zero calorie energy booster",
      "3g creatine monohydrate per serving",
      "Boosts strength & improves hydration",
      "Reduces muscle cramps & fatigue",
      "Speeds up recovery & sustained energy",
      "Contains potassium, magnesium & calcium"
    ],
    description: [
      "A high-performance creatine blend designed to boost strength, improve hydration, reduce fatigue, and speed up recovery — so you can train harder and recover faster.",
      "Fuel your workouts with a powerful blend of 3g creatine monohydrate and essential electrolytes.",
      "This advanced formula enhances strength and muscle growth, supports hydration with sodium and pink salt, and reduces muscle cramps and fatigue thanks to its potassium and magnesium content.",
      "With added calcium for bone and muscle support, it also promotes faster post-workout recovery and sustained energy and performance. Perfect for athletes and fitness enthusiasts pushing their limits."
    ]
  },
  {
    id: "gnc-prperf-gainer-3kg",
    name: "GNC Pro Performance Weight Gainer",
    brand: "GNC",
    size: "3kg",
    price: 1899,
    categories: ["mass-gainer"],
    images: gncProPerformanceGainer3kg,
    flavour: ["Double Chocolate", "Vanilla Cream"],
    uses: [
      "High-calorie, low-fat formula for healthy weight gain",
      "Supports lean muscle development & faster recovery",
      "Rich balance of protein & carbohydrates",
      "Enriched with BCAAs for performance support",
      "Contains MCTs for quick, clean energy",
      "Includes digestive enzymes for better absorption"
    ],
    description: [
      "GNC Pro Performance Weight Gainer is a powerful formula crafted to help you achieve a stronger, more muscular physique — without piling on unwanted fat.",
      "Designed for those looking to gain healthy weight, it delivers a rich balance of protein and carbohydrates to support lean muscle growth, sustained energy release, and muscle recovery after intense workouts.",
      "Enriched with BCAAs for performance support and a blend of digestive enzymes for better absorption and gut comfort, this supplement also features essential vitamins and minerals to fuel your overall fitness journey. Medium Chain Triglycerides (MCTs) provide quick, clean energy, helping you stay ready for high-impact training sessions.",
      "Clean and safe, this formula contains no added sugar, artificial colors, or preservatives, and is tested for banned substances — making it a trusted choice for athletes and fitness enthusiasts focused on safe, effective body transformation."
    ]
  },
  {
    id: "gnc-prperf-gainer-5kg",
    name: "GNC Pro Performance Weight Gainer",
    brand: "GNC",
    size: "5kg",
    price: 2799,
    categories: ["mass-gainer"],
    images: gncProPerformanceGainer5kg,
    flavour: ["Chocolate Fudge", "Vanilla Cream", "Creamy Strawberry", "Mango Smoothie"],
    uses: [
      "Well-balanced blend for healthy physique building",
      "2200 calories per serving in 3 heaped scoops",
      "73g protein for muscle development",
      "440g carbs for sustained energy",
      "Supports muscular profile development"
    ],
    description: [
      "GNC Pro Performance Weight Gainer features a well-balanced blend to help build a healthy physique and a good muscular profile.",
      "Each serving of 3 heaped scoops in double-toned milk provides 2200 calories, 73gms protein, and 440gms carbs.",
      "Perfect for those looking to gain quality muscle mass and strength with scientifically formulated nutrition."
    ]
  },
  {
    id: "gnc-prowhey-1.82kg",
    name: "GNC Pro Whey Protein",
    brand: "GNC",
    size: "1.82kg",
    price: 2399,
    categories: ["whey-protein", "protein"],
    images: gncProWheyProtein,
    flavour: ["Chocolate Fudge", "Vanilla Cream", "Creamy Strawberry", "Mango Smoothie", "Cookies"],
    uses: [
      "5.5gms BCAAs per serving for lean muscle gains",
      "Increases lean muscles & exercise performance",
      "Reduces muscle cramps & fatigue",
      "Contains 9 essential amino acids",
      "Enriched with DigeZyme® for easy digestion"
    ],
    description: [
      "INCREASED LEAN MUSCLES & PERFORMANCE: The formula contains 5.5gms BCAAs that help gain lean muscles to build a great-looking, athletic frame. Also, they reduce muscle cramps and fatigue to boost your exercise performance.",
      "ACCELERATED MUSCLE RECOVERY: Enriched with 9 essential amino acids, GNC's pure whey speeds up muscle recovery for a powered-up workout experience.",
      "EASY ON STOMACH: The formula contains DigeZyme®, a special blend of digestive enzymes, which ensures easy digestion.",
      "YUMMY FLAVOR & ZERO ADDED SUGAR: GNC's Pro Performance Whey comes in an amazing flavor that makes each scoop super enjoyable. Also, it has no added sugar to perfectly align with your health goals."
    ]
  },
]
