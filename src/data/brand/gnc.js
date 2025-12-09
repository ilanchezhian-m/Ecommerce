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
    name: "GNC Creatine Monohydrate Unflavoured",
    brand: "GNC",
    size: "100g",
    price: 699,
    categories: ["creatine"],
    images: gncCreatine100g,
  },
  {
    id: "gnc-creatine-250g",
    name: "GNC Creatine Monohydrate Flavoured",
    brand: "GNC",
    size: "250g",
    price: 1299,
    categories: ["creatine"],
    images: gncCreatine250g,
  },
  {
    id: "gnc-fishoil-omega3",
    name: "GNC Fish Oil Omega 3",
    brand: "GNC",
    size: "60 Capsules",
    price: 1099,
    categories: ["omega3", "supplements"],
    images: gncFishOilOmega,
  },
  {
    id: "gnc-megamen-60",
    name: "GNC Mega Men Multivitamins Sports",
    brand: "GNC",
    size: "60 Tablets",
    price: 1499,
    categories: ["multivitamins", "vitamins"],
    images: gncMegaMenMultivitamins,
  },
  {
    id: "gnc-prperf-creatine-100g",
    name: "GNC Pro Performance Creatine + Electrolytes",
    brand: "GNC",
    size: "100g",
    price: 799,
    categories: ["creatine", "electrolytes"],
    images: gncProPerformanceCreatine,
  },
  {
    id: "gnc-prperf-gainer-3kg",
    name: "GNC Pro Performance Weight Gainer",
    brand: "GNC",
    size: "3kg",
    price: 1899,
    categories: ["mass-gainer"],
    images: gncProPerformanceGainer3kg,
  },
  {
    id: "gnc-prperf-gainer-5kg",
    name: "GNC Pro Performance Weight Gainer",
    brand: "GNC",
    size: "5kg",
    price: 2799,
    categories: ["mass-gainer"],
    images: gncProPerformanceGainer5kg,
  },
  {
    id: "gnc-prowhey-1.82kg",
    name: "GNC Pro Whey Protein",
    brand: "GNC",
    size: "1.82kg",
    price: 2399,
    categories: ["whey-protein", "protein"],
    images: gncProWheyProtein,
  },
]
