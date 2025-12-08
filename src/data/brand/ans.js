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
  },
  {
    id: "ans-perf-isopro-2kg",
    name: "ANS Performance IsoPro",
    brand: "ANS",
    size: "2kg",
    price: 2899,
    categories: ["whey-protein-isolate", "protein"],
    images: ansPerformanceIsoPro,
  },
  {
    id: "ans-perf-mass-2.5kg",
    name: "ANS Performance Mass",
    brand: "ANS",
    size: "2.5kg",
    price: 2199,
    categories: ["mass-gainer"],
    images: ansPerformanceMass,
  },
]
