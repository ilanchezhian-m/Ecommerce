// Dragon Pharma Product Images from Products/Dragon folder

// Whey Phorm Classic 2kg - 4 images
import DRAGON_WPC_1 from '../../assets/Products/Dragon/ddragonpharma-wheyphormclassic-2kgimage1.webp'
import DRAGON_WPC_2 from '../../assets/Products/Dragon/ddragonpharma-wheyphormclassic-2kgimage2.webp'
import DRAGON_WPC_3 from '../../assets/Products/Dragon/ddragonpharma-wheyphormclassic-2kgimage3.webp'
import DRAGON_WPC_4 from '../../assets/Products/Dragon/ddragonpharma-wheyphormclassic-2kgimage4.webp'

export const dragonWheyPhormClassic = [
  DRAGON_WPC_1,
  DRAGON_WPC_2,
  DRAGON_WPC_3,
  DRAGON_WPC_4,
]

// Ultimate Mass Gainer 5kg - 2 images
import DRAGON_UMG_1 from '../../assets/Products/Dragon/dragonpharma-ultimatemassgainer-5kgimage1.webp'
import DRAGON_UMG_2 from '../../assets/Products/Dragon/dragonpharma-ultimatemassgainer-5kgimage2.webp'

export const dragonUltimateMassGainer = [
  DRAGON_UMG_1,
  DRAGON_UMG_2,
]

// All Dragon Images Combined
export const allDragonImages = [
  DRAGON_WPC_1, DRAGON_WPC_2, DRAGON_WPC_3, DRAGON_WPC_4,
  DRAGON_UMG_1, DRAGON_UMG_2,
]

// Dragon Pharma Products
export const dragonProducts = [
  {
    id: "dragon-whey-phorm-2kg",
    name: "Dragon Pharma Whey Phorm Classic",
    brand: "Dragon Pharma",
    size: "2kg",
    price: 2299,
    categories: ["whey-protein", "protein"],
    images: dragonWheyPhormClassic,
  },
  {
    id: "dragon-ultimate-gainer-5kg",
    name: "Dragon Pharma Ultimate Mass Gainer",
    brand: "Dragon Pharma",
    size: "5kg",
    price: 2899,
    categories: ["mass-gainer"],
    images: dragonUltimateMassGainer,
  },
]
