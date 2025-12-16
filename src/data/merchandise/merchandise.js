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
    uses: [
      "Multi-level organization for all your essentials",
      "Single large compartment with multiple pockets",
      "Lightweight and durable construction",
      "Easy-to-carry loop handle"
    ],
    description: [
      "The WAVS Gym Bag features multi-level organization to keep all your workout essentials neatly compartmentalized.",
      "With its single spacious compartment and multiple organizational pockets, you can easily store clothes, shoes, supplements, and more.",
      "Designed to be lightweight yet durable, and equipped with a convenient loop for easy carrying, making it the perfect companion for your gym sessions and on-the-go fitness lifestyle."
    ]
  },
  {
    id: 'MERCH_002',
    name: 'WAVS Hoodie for Men',
    brand: 'Merchandise',
    size: 'L',
    price: 1999,
    categories: ['merchandise'],
    images: [MERCH_HOODIE],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    uses: [
      "Crew neck with attached hood",
      "Adjustable hood with drawcord",
      "Oversized fit with long sleeves",
      "Spacious kangaroo pocket on front"
    ],
    description: [
      "Premium Material: The Hoodies are available in 100% Premium Cotton material.",
      "HD Printing: The printing on Logo Name Customized Unisex Printed Hoodie with Pockets is sharp and detailed. The full color print colors are vivid and durable for everyday usage.",
      "Comfortable Fit: The regular fit of Logo Name Customized Unisex Printed Hoodie with Pockets ensures comfortable movement and a laid back style suitable for all occasions.",
      "Ultra Durable: Designed to withstand regular wear and washing, Logo Name Customized Unisex Printed Hoodie with Pockets is your perfect everyday style companion."
    ]
  },
  {
    id: 'MERCH_003',
    name: 'WAVS Shaker',
    brand: 'Merchandise',
    size: '700ml',
    price: 499,
    categories: ['merchandise'],
    images: [MERCH_SHAKER],
    uses: [
      "Made of durable plastic",
      "700ml capacity for convenient mixing",
      "Perfect for protein powder supplements",
      "Ergonomic design for comfortable grip",
      "Essential accessory for gym goers & athletes"
    ],
    description: [
      "Courtesy of its stylish appearance and ergonomic features that enhance user comfort, this shaker bottle makes every sip enjoyable and hassle-free.",
      "The sleek design is visually appealing and easy to hold, ensuring a comfortable grip during use.",
      "Protein shakers are a popular accessory among gym goers, athletes, & fitness enthusiasts as they are a convenient way to mix & consume protein powder supplements."
    ]
  },
  {
    id: 'MERCH_004',
    name: 'WAVS T-Shirt',
    brand: 'Merchandise',
    size: 'L',
    price: 999,
    categories: ['merchandise'],
    images: [MERCH_TSHIRT],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    uses: [
      "Multi-level organization design",
      "Single main compartment",
      "Lightweight and comfortable",
      "Easy carrying capability"
    ],
    description: [
      "Tough, PU-coated & foam-lined bottom & side panels for added durability & structure.",
      "Large vented pocket for laundry or shoes & internal slip pockets for organization.",
      "Large front zippered organization pocket & molle webbing attachment points.",
      "Dual water bottle slip pocket with adjustable shoulder strap for ultimate convenience."
    ]
  },
]
