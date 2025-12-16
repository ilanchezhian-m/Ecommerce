// KLR Product Images from Products/klr folder

// Hydro Protein Whey - 2kgs - 3 images

import KLR_HYDRO_1 from '../../assets/Products/klr/klr-fit-hydro-tein-whey-2kgs/27.jpg'
import KLR_HYDRO_2 from '../../assets/Products/klr/klr-fit-hydro-tein-whey-2kgs/36.jpg'
import KLR_HYDRO_3 from '../../assets/Products/klr/klr-fit-hydro-tein-whey-2kgs/44.jpg'

export const klrHydroProtein = [
  KLR_HYDRO_1,
  KLR_HYDRO_2,
  KLR_HYDRO_3,
]

// Karma Pre-Workout 2.0 - 2 images
import KLR_KARMA_1 from '../../assets/Products/klr/klr-fit-karma-preworkout-2-0-500gm-60servings/17.jpg'
import KLR_KARMA_2 from '../../assets/Products/klr/klr-fit-karma-preworkout-2-0-500gm-60servings/37.jpg'

export const klrKarmaPreWorkout = [
  KLR_KARMA_1,
  KLR_KARMA_2,
]

// Nitro Fit All-in-One Whey - 2kg - 3 images
import KLR_NITRO_1 from '../../assets/Products/klr/klr-fit-nitro-fit-all-in-one-whey-2kg/18.jpg'
import KLR_NITRO_2 from '../../assets/Products/klr/klr-fit-nitro-fit-all-in-one-whey-2kg/38.jpg'
import KLR_NITRO_3 from '../../assets/Products/klr/klr-fit-nitro-fit-all-in-one-whey-2kg/45.jpg'

export const klrNitroFit = [
  KLR_NITRO_1,
  KLR_NITRO_2,
  KLR_NITRO_3,
]

// Thyrotherm Fat Burner - 4 images
import KLR_THYROTHERM_1 from '../../assets/Products/klr/klr-fit-thyrotherm-fatburner/19.jpg'
import KLR_THYROTHERM_2 from '../../assets/Products/klr/klr-fit-thyrotherm-fatburner/210.jpg'
import KLR_THYROTHERM_3 from '../../assets/Products/klr/klr-fit-thyrotherm-fatburner/39.jpg'
import KLR_THYROTHERM_4 from '../../assets/Products/klr/klr-fit-thyrotherm-fatburner/46.jpg'

export const klrThyrotherm = [
  KLR_THYROTHERM_1,
  KLR_THYROTHERM_2,
  KLR_THYROTHERM_3,
  KLR_THYROTHERM_4,
]

// KLR Products
export const klrProducts = [
  {
     id: "klr-fit-hydro-tein-whey-2kgs",
     name: "KLR Fit Hydro Protein Whey – 2kgs",
     brand: "KLR",
     size: "2kg",
     price: 1999,
     categories: ["Whey Protein", "KLR"],
     images: klrHydroProtein,
     flavour: ["Chocolate", "Vanilla"],
     uses: [
       "Premium hydrolyzed whey protein",
       "Fast absorbing protein formula",
       "Support muscle growth and recovery",
       "Enhanced amino acid profile",
       "Low lactose formula",
       "Great tasting quality protein"
     ],
     description: [
       "KLR Hydro Protein is a premium hydrolyzed whey protein formula designed for optimal absorption and muscle development. Hydrolyzed whey breaks down protein into smaller amino acid chains for faster absorption.",
       "Supports muscle growth, strength development, and faster recovery after training. Enhanced amino acid profile with reduced lactose for better digestibility.",
       "Perfect post-workout protein to support your fitness and bodybuilding goals with a reliable, high-quality formula."
     ]
  },
  {
     id: "klr-fit-karma-preworkout-2-0-500gm-60servings",
     name: "KLR Fit Karma Pre-Workout 2.0 – 500gm 60 Servings",
     brand: "KLR",
     size: "500gm (60 Servings)",
     price: 1299,
     categories: ["Preworkout", "KLR"],
     images: klrKarmaPreWorkout,
     flavour: ["Green Apple", "Fruit Punch"],
     uses: [
       "Advanced pre-workout formula",
       "Energy and focus enhancement",
       "Improved workout performance",
       "Pump and vascularity support",
       "Strength and endurance boost",
       "Next-generation preworkout"
     ],
     description: [
       "KLR Karma Pre-Workout 2.0 is an advanced formula designed to deliver extreme energy, focus, and performance enhancement. Version 2.0 includes improved ingredients and better taste profile.",
       "Supports sustained energy throughout intense training sessions with enhanced mental focus. Features ingredients that support muscle pump and blood flow for improved workout performance.",
       "Perfect for those seeking a powerful pre-workout to maximize training intensity and results."
     ]
  },
  {
     id: "klr-fit-nitro-fit-all-in-one-whey-2kg",
     name: "KLR Fit Nitro Fit All-in-One Whey – 2kg",
     brand: "KLR",
     size: "2kg",
     price: 2299,
     categories: ["Whey Protein", "KLR"],
     images: klrNitroFit,
     flavour: ["Chocolate", "Vanilla"],
     uses: [
       "All-in-one complete protein formula",
       "Whey protein with added supplements",
       "Support muscle building and recovery",
       "Enhanced nutrient profile",
       "Convenient all-in-one solution",
       "Comprehensive fitness support"
     ],
     description: [
       "KLR Nitro Fit All-in-One Whey combines premium whey protein with additional performance-enhancing ingredients in a convenient all-in-one formula. No need to mix multiple supplements.",
       "Provides comprehensive support for muscle growth, recovery, strength development, and overall fitness goals. Enhanced formula includes vitamins, minerals, and amino acid complexes.",
       "Perfect for those seeking a complete protein solution that covers multiple nutritional needs."
     ]
  },
  {
     id: "klr-fit-thyrotherm-fatburner",
     name: "KLR Fit Thyrotherm Fat Burner",
     brand: "KLR",
     size: "Standard",
     price: 1199,
     categories: ["Fat Loss / Thermogenics", "KLR"],
     images: klrThyrotherm,
     flavour: [],
     uses: [
       "Thermogenic fat burning formula",
       "Metabolism boost support",
       "Energy enhancement",
       "Appetite support",
       "Fat loss promotion",
       "Thyroid support ingredients"
     ],
     description: [
       "KLR Thyrotherm is a thermogenic fat burner designed to support weight loss through increased metabolism and energy. Features ingredients that support healthy thyroid function for metabolic optimization.",
       "Combines thermogenic and energy-boosting compounds to enhance fat burning during workouts and daily activities. Supports appetite management for better dietary control.",
       "Ideal for cutting phases and those seeking additional support for fat loss goals alongside diet and exercise."
     ]
  },
]
