// Genetic Nutrition Product Images from Products/Genetic folder

// Creatine Mono 200g - 2 images
import GENETIC_CREAT_1 from '../../assets/Products/Genetic/Geneticnutrition-creatinemono-200gimage1.webp'
import GENETIC_CREAT_2 from '../../assets/Products/Genetic/Geneticnutrition-creatinemono-200gimage2.webp'

export const geneticCreatineMono = [
  GENETIC_CREAT_1,
  GENETIC_CREAT_2,
]

// Pure Himalayan Shilajit - 2 images
import GENETIC_SHIL_1 from '../../assets/Products/Genetic/Geneticnutrition-purehimalayanshilajit-image1.webp'
import GENETIC_SHIL_2 from '../../assets/Products/Genetic/Geneticnutrition-purehimalayanshilajit-image2.webp'

export const geneticShilajit = [
  GENETIC_SHIL_1,
  GENETIC_SHIL_2,
]

// BioWhey 2kg Cappuccino - 3 images
import GENETIC_BW_1 from '../../assets/Products/Genetic/Geneticnutritionbiowhey-2kgcappuccinoimage1.webp'
import GENETIC_BW_2 from '../../assets/Products/Genetic/Geneticnutritionbiowhey-2kgcappuccinoimage2.webp'
import GENETIC_BW_3 from '../../assets/Products/Genetic/Geneticnutritionbiowhey-2kgcappuccinoimage3.webp'

export const geneticBioWhey = [
  GENETIC_BW_1,
  GENETIC_BW_2,
  GENETIC_BW_3,
]

// All Genetic Images Combined
export const allGeneticImages = [
  GENETIC_CREAT_1, GENETIC_CREAT_2,
  GENETIC_SHIL_1, GENETIC_SHIL_2,
  GENETIC_BW_1, GENETIC_BW_2, GENETIC_BW_3,
]

// Genetic Nutrition Products
export const geneticProducts = [
  {
    id: "genetic-creatine-200g",
    name: "Genetic Nutrition Creatine Monohydrate",
    brand: "Genetic Nutrition",
    size: "200g",
    price: 799,
    categories: ["creatine"],
    images: geneticCreatineMono,
    flavour: ["Milk Chocolate", "Creamy Vanilla"],
    uses: [
      "Helps support athletic performance & power",
      "Helps support muscle recovery",
      "100% pure Creatine Monohydrate",
      "Improves ATP regeneration"
    ],
    description: [
      "Genetic Nutrition Creatine Monohydrate is possibly the best natural performance-enhancing supplement you could use!",
      "By improving ATP regeneration during your workout, you're able to achieve more reps and lift more weight, leading to faster results!",
      "Enjoy the power in the gym, tracks, or field."
    ]
  },
  {
    id: "genetic-shilajit",
    name: "Genetic Nutrition Pure Himalayan Shilajit",
    brand: "Genetic Nutrition",
    size: "Standard",
    price: 1299,
    categories: ["supplements", "ayurveda"],
    images: geneticShilajit,
    flavour: ["Milk Chocolate", "Creamy Vanilla"],
    uses: [
      "Sourced from 18,000 feet above sea level",
      "70% fulvic acid content for maximum potency",
      "Enhances vitality and wellness",
      "Ancient Himalayan heritage mineral supplement"
    ],
    description: [
      "Step into the ancient purity of the Himalayas with Genetic Nutrition's Pure Himalayan Shilajit, a sacred treasure sourced from the majestic heights of 18,000 feet above sea level.",
      "From the heart of this legendary mountain range comes a potent elixir, enriched with 70% fulvic acid content, unlocking nature's secrets for vitality and wellness.",
      "Each drop of this rare essence carries the wisdom of centuries, encapsulating the raw power of the Himalayan peaks."
    ]
  },
  {
    id: "genetic-biowhey-2kg",
    name: "Genetic Nutrition BioWhey",
    brand: "Genetic Nutrition",
    size: "2kg",
    price: 2399,
    categories: ["whey-protein", "protein"],
    images: geneticBioWhey,
    flavour: ["Cappuccino"],
    uses: [
      "Exclusive premium free range protein for guaranteed quality",
      "Incredible filtration technology for faster digesting protein and no bloating",
      "Added premium digestive enzymes for enhanced protein absorption"
    ],
    description: [
      "Bio-Whey is a premium protein supplement designed to support muscle growth and recovery.",
      "It is made using high-quality whey protein concentrate and isolate, rich in essential amino acids for building and repairing muscle tissue.",
      "Free from artificial flavors, sweeteners, and colors, making it a clean and healthy option to optimize nutrition."
    ]
  },
]
