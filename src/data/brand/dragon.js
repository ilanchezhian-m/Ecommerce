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
    flavour: ["Birthday Cake", "Cashew Saffron", "Strawberry White Chocolate"],
    uses: [
      "23gm premium whey protein concentrate per serving",
      "Enhances muscle repair and recovery",
      "Exotic premium flavor system",
      "Supports increases in lean muscle mass"
    ],
    description: [
      "Dragon Pharma WheyPhorm Classic is the premium choice for meeting your daily protein needs.",
      "Containing 23gm of 100% pure premium whey protein concentrate per serving, you can focus more on your next workout or next task and not on the quality of your protein.",
      "We worked tirelessly to bring you exotic flavors to satisfy even the most discerning of taste buds."
    ]
  },
  {
    id: "dragon-ultimate-gainer-5kg",
    name: "Dragon Pharma Ultimate Mass Gainer",
    brand: "Dragon Pharma",
    size: "5kg",
    price: 2899,
    categories: ["mass-gainer"],
    images: dragonUltimateMassGainer,
    uses: [
      "Enhances muscle repair and recovery",
      "Exotic premium flavor system",
      "Supports increases in muscle mass",
      "MassPhorm addresses the needs of the ectomorph hard-gainer with a well-rounded profile",
      "MCTs for lean muscle and metabolism support and enzymes for optimal digestion"
    ],
    description: [
      "Dragon Pharma Massphorm was created to be the most effective, highest quality lean muscle gaining formulation on the market.",
      "Some have faster metabolisms and struggle to put on quality muscle mass—Massphorm targets this ectomorph challenge head on.",
      "Delivers a balanced matrix to support muscle size, weight gain, and recovery for hard gainers."
    ]
  },
]
