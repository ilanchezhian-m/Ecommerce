// ANS Product Images from Products/ans folder

// Iso Hydro Whey Isolate 2.27kg - 3 images
import ANS_IHWI_1 from '../../assets/Products/ans/ansn-isohydrowheyisolate-2.27kgimage1.webp'
import ANS_IHWI_2 from '../../assets/Products/ans/ansn-isohydrowheyisolate-2.27kgimage2.webp'
import ANS_IHWI_3 from '../../assets/Products/ans/ansn-isohydrowheyisolate-2.27kgimage3.webp'

export const ansIsoHydroWheyIsolate227kg = [
  ANS_IHWI_1,
  ANS_IHWI_2,
  ANS_IHWI_3,
]

// Performance IsoPro 2kg - 4 images
import ANS_PERF_1 from '../../assets/Products/ans/ansperformanceisopro2kgimage1.webp'
import ANS_PERF_2 from '../../assets/Products/ans/ansperformanceisopro2kgimage2.webp'
import ANS_PERF_3 from '../../assets/Products/ans/ansperformanceisopro2kgimage3.webp'
import ANS_PERF_4 from '../../assets/Products/ans/ansperformanceisopro2kgimage4.webp'

export const ansPerformanceIsoPro = [
  ANS_PERF_1,
  ANS_PERF_2,
  ANS_PERF_3,
  ANS_PERF_4,
]

// Performance Mass 2.5kg - 2 images
import ANS_MASS_1 from '../../assets/Products/ans/ansperformancenmass-2.5kgimage1.webp'
import ANS_MASS_2 from '../../assets/Products/ans/ansperformancenmass-2.5kgimage2.webp'

export const ansPerformanceMass = [
  ANS_MASS_1,
  ANS_MASS_2,
]

// All ANS Images Combined
export const allAnsImages = [
  ANS_IHWI_1, ANS_IHWI_2, ANS_IHWI_3,
  ANS_PERF_1, ANS_PERF_2, ANS_PERF_3, ANS_PERF_4,
  ANS_MASS_1, ANS_MASS_2,
]

// ANS Products
export const ansProducts = [
  {
    id: "ans-isohydro-227kg",
    name: "ANS Iso Hydro Whey Isolate",
    brand: "ANS",
    size: "2.27kg",
    price: 4299,
    categories: ["whey-protein-isolate", "protein"],
    images: ansIsoHydroWheyIsolate227kg,
    flavour: ["Peanut Butter Chocolate", "Cafe Mocha", "Cookies & Cream", "Creamy Vanilla", "Milk Chocolate", "Strawberry"],
    uses: [
      "100% pure hydrolyzed whey protein isolate for fastest absorption",
      "Rich naturally occurring BCAA & EAA content for muscle growth and recovery",
      "Zero lactose, pre-digested with enzymes for easy digestion",
      "Supports rapid muscle recovery and lean muscle development",
      "Award-winning flavors for a great taste experience"
    ],
    description: [
      "The ultimate whey isolate protein designed to optimize total muscle recovery and growth.",
      "Provides the purest and fastest-absorbing source of protein available.",
      "Features award-winning flavors that keep you coming back for more.",
      "Made using only the highest quality ingredients and is gluten-free, lactose-free, and banned substance free.",
      "100% hydrolyzed whey protein isolate ensures rapid absorption and superior digestion.",
      "Naturally occurring rich BCAA content helps trigger maximum muscle growth and faster recovery.",
      "Zero lactose and pre-digested formula makes it easy on the stomach."
    ]
  },
  {
    id: "ans-perf-isopro-2kg",
    name: "ANS Performance IsoPro",
    brand: "ANS",
    size: "2kg",
    price: 2899,
    categories: ["whey-protein-isolate", "protein"],
    images: ansPerformanceIsoPro,
    flavour: ["Milk Chocolate", "Creamy Vanilla"],
    uses: [
      "25g protein",
      "Cold Processed Membrane Filtered Whey",
      "No Added Aminos, Creatine, or Creamers",
      "100% Isolate Protein Source",
      "Incredible Taste & Mixability",
      "No Artificial Colors & Gluten Free"
    ],
    description: [
      "ANS Performance ISO-PRO, is a premium protein powder that boasts exceptional quality and efficacy.",
      "Each serving of this product contains a generous 25g of protein, derived from a blend of 100% whey protein isolate and hydrolyzed whey protein.",
      "The protein powder is meticulously crafted using a cold-processed membrane filtration technique, ensuring that it is free from added aminos, creatine, or creamers."
    ]
  },
  {
    id: "ans-perf-mass-2.5kg",
    name: "ANS Performance Mass",
    brand: "ANS",
    size: "2.5kg",
    price: 2199,
    categories: ["mass-gainer"],
    images: ansPerformanceMass,
    uses: [
      "N-MASS is an advanced mass gainer formula for hard gainers",
      "Each serving contains 1300 calories, 55g of protein, 250g of carbohydrates and 9g of healthy fat sources",
      "Features Appelin™, a natural digestive support complex to help absorption and support appetite"
    ],
    description: [
      "N-MASS™ provides a convenient way to consume 1,300 high quality calories derived from 55g protein, 250g of carbohydrates and 9g fat; with added creatine monohydrate and Appelin™ in every serving.",
      "Nothing will fuel your workout recovery and trigger muscle growth faster."
    ]
  },
]
