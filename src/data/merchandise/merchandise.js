// Merchandise Products Images from assets/Merchandise folder

import MERCH_BAG from '../../assets/Merchandise/Wavs-gym-bag.webp'
import MERCH_HOODIE from '../../assets/Merchandise/Wavs-hoodie.webp'
import MERCH_SHAKER from '../../assets/Merchandise/wavs-Shaker.webp'
import MERCH_TSHIRT from '../../assets/Merchandise/Wavs-T-shitt.webp'

// Each image is a separate merchandise product
export const merchandiseProducts = [
  {
    id: 'MERCH_001',
    name: 'WAVS Gym Bag',
    brand: 'Merchandise',
    size: 'One Size',
    price: 1499,
    categories: ['merchandise'],
    images: [MERCH_BAG],
  },
  {
    id: 'MERCH_002',
    name: 'WAVS Hoodie',
    brand: 'Merchandise',
    size: 'L',
    price: 1999,
    categories: ['merchandise'],
    images: [MERCH_HOODIE],
  },
  {
    id: 'MERCH_003',
    name: 'WAVS Shaker',
    brand: 'Merchandise',
    size: '700ml',
    price: 499,
    categories: ['merchandise'],
    images: [MERCH_SHAKER],
  },
  {
    id: 'MERCH_004',
    name: 'WAVS T-Shirt',
    brand: 'Merchandise',
    size: 'L',
    price: 999,
    categories: ['merchandise'],
    images: [MERCH_TSHIRT],
  },
]
