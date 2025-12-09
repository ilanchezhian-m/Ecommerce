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
  },
  {
    id: "genetic-shilajit",
    name: "Genetic Nutrition Pure Himalayan Shilajit",
    brand: "Genetic Nutrition",
    size: "Standard",
    price: 1299,
    categories: ["supplements", "ayurveda"],
    images: geneticShilajit,
  },
  {
    id: "genetic-biowhey-2kg",
    name: "Genetic Nutrition BioWhey",
    brand: "Genetic Nutrition",
    size: "2kg",
    price: 2399,
    categories: ["whey-protein", "protein"],
    images: geneticBioWhey,
  },
]
