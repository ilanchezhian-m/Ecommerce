// Combo Products Images from assets/combo folder

import COMBO01 from '../../assets/combo/combo-01/2-6.jpg'
import COMBO02 from '../../assets/combo/combo-02/3-6.jpg'
import COMBO03 from '../../assets/combo/combo-03/4-5.jpg'
import COMBO04 from '../../assets/combo/combo-04/5-5.jpg'
import COMBO05 from '../../assets/combo/combo-05/6-5.jpg'
import COMBO06 from '../../assets/combo/combo-06/7-4.jpg'
import COMBO07 from '../../assets/combo/combo-07/8-3.jpg'
import COMBO08 from '../../assets/combo/combo-08/9-2.jpg'
import COMBO09 from '../../assets/combo/combo-09/10-2.jpg'
import COMBO10 from '../../assets/combo/combo-10/11-2.jpg'
import COMBO11 from '../../assets/combo/combo-11/12-2.jpg'
import COMBO12 from '../../assets/combo/combo-12/13-2.jpg'
import COMBO13 from '../../assets/combo/combo-13/15-4.jpg'
import COMBO14 from '../../assets/combo/combo-14/16-4.jpg'

import COMBO16 from '../../assets/combo/combo-16/18-4.jpg'
import COMBO17 from '../../assets/combo/combo-17/20.jpg'
import COMBO18 from '../../assets/combo/combo-18/21.jpg'
import COMBO19 from '../../assets/combo/combo-19/22-1.jpg'
import COMBO20 from '../../assets/combo/combo-20/23-1.jpg'
import COMBO21 from '../../assets/combo/combo-21/24.jpg'
import COMBO22 from '../../assets/combo/combo-22/combo-25-1.jpg'
import COMBO23 from '../../assets/combo/combo-23/Combo-23.jpg'

// Combo Products Array - Each image is a separate product
export const comboProducts = [
  {
    id: "COMBO_001",
    type: "combo",
    name: "Combo Pack 1",
    brand: "Combo",
    size: "Bundle",
    price: 3499,
    categories: ["combo"],
    images: [COMBO01],

    comboItems: [
      {
        name: "Avvatar 100% Performance Whey",
        qty: 1,
        weight: "2 Kg",
        flavours: ["Belgium Chocolate", "Cold Coffee", "Malai Kulfi"]
      },
      {
        name: "Americanz Muscles Creatine Monohydrate",
        qty: 1,
        weight: "100 gm",
        flavours: ["Mango Madness","cola" ,"unflavoured "]
      },
      {
        name: "Wavs Shaker",
        qty: 1,
        flavours: []
      }
    ]
  },

{
  id: "COMBO_002",
  type: "combo",
  name: "Combo Pack 2",
  brand: "Combo",
  size: "Bundle",
  price: 3400,
  categories: ["combo"],
  images: [COMBO02],
  comboItems: [
    { name: "MAXN Whey Protein", qty: 1, flavours: ["Unflavoured"] },
    {
      name: "Americanz Muscles Creatine Monohydrate",
      qty: 1,
      weight: "100 gm",
      flavours: ["Mango Madness", "Cola", "Fruit Punch", "Unflavored"]
    },
    { name: "Wavs Shaker", qty: 1, flavours: [] }
  ]
},

/* ================= COMBO 03 ================= */
{
  id: "COMBO_003",
  type: "combo",
  name: "Combo Pack 3",
  brand: "Combo",
  size: "Bundle",
  price: 4700,
  categories: ["combo"],
  images: [COMBO03],
  comboItems: [
    {
      name: "Labrada Turbo Pre-Workout",
      qty: 1,
      flavours: ["Mango", "Orange", "Pink Guava", "Green Apple", "Green Mango"]
    },
    { name: "Labrada Whey Protein", qty: 1, flavours: ["Vanilla", "Chocolate Hazelnut", "Chocolate"] },
    { name: "Wavs Shaker", qty: 1, flavours: [] }
  ]
},

/* ================= COMBO 04 ================= */
{
  id: "COMBO_004",
  type: "combo",
  name: "Combo Pack 4",
  brand: "Combo",
  size: "Bundle",
  price: 6999,
  categories: ["combo"],
  images: [COMBO04],
  comboItems: [
    {
      name: "MAXN Pre-Workout / Electrolyte",
      qty: 1,
      flavours: [
        "Apple","Blackcurrant","Blueberry","Cola","Cranberry",
        "Grape","Lemon","Mango","Mojito","Orange",
        "Peach","Pineapple","Watermelon"
      ]
    },
    { name: "Wavs Shaker", qty: 1, flavours: [] }
  ]
},

/* ================= COMBO 05 ================= */
{
  id: "COMBO_005",
  type: "combo",
  name: "Combo Pack 5",
  brand: "Combo",
  size: "Bundle",
  price: 4499,
  categories: ["combo"],
  images: [COMBO05],
  comboItems: [
    { name: "GNC Pro Performance Whey Protein", qty: 1, flavours: ["Chocolate Fudge", "Vanilla Cream", "Creamy Strawberry", "Mango Smoothie", "Cookies"] },
    {
      name: "GNC Creatine / Electrolyte",
      qty: 1,
      flavours: ["Cola", "Lemon", "Orange", "Unflavored"]
    },
    { name: "Wavs Shaker", qty: 1, flavours: [] }
  ]
},

/* ================= COMBO 06 ================= */
{
  id: "COMBO_006",
  type: "combo",
  name: "Combo Pack 6",
  brand: "Combo",
  size: "Bundle",
  price: 4300,
  categories: ["combo"],
  images: [COMBO06],
  comboItems: [
    { name: "Apex Vitals Whey Protein", qty: 1, flavours: ["Blueberry Yogurt", "Dark Chocolate Orange", "Iced Espresso", "Mango Cheesecake", "Swiss Triple Chocolate", "White Chocolate Raspberry", "French Vanilla"] },
    {
      name: "Americanz Muscles Creatine Monohydrate",
      qty: 1,
      weight: "100 gm",
      flavours: ["Mango Madness", "Cola", "Fruit Punch", "Unflavored"]
    },
    { name: "Wavs Shaker", qty: 1, flavours: [] }
  ]
},

/* ================= COMBO 07 ================= */
{
  id: "COMBO_007",
  type: "combo",
  name: "Combo Pack 7",
  brand: "Combo",
  size: "Bundle",
  price: 3199,
  categories: ["combo"],
  images: [COMBO07],
  comboItems: [
    {
      name: "MAXN Pre-Workout / Electrolyte",
      qty: 1,
      flavours: [
        "Apple","Blackcurrant","Blueberry","Cola","Cranberry",
        "Grape","Lemon","Mango","Mojito","Orange",
        "Peach","Pineapple","Watermelon"
      ]
    },
    { name: "Wavs Shaker", qty: 1, flavours: [] }
  ]
},

/* ================= COMBO 08 ================= */
{
  id: "COMBO_008",
  type: "combo",
  name: "Combo Pack 8",
  brand: "Combo",
  size: "Bundle",
  price: 4299,
  categories: ["combo"],
  images: [COMBO08],
  comboItems: [
    {
      name: "MAXN Pre-Workout / Electrolyte",
      qty: 1,
      flavours: [
        "Apple","Blackcurrant","Blueberry","Cola","Cranberry",
        "Grape","Lemon","Mango","Mojito","Orange",
        "Peach","Pineapple","Watermelon"
      ]
    },
    { name: "Wavs Shaker", qty: 1, flavours: [] }
  ]
},

/* ================= COMBO 09 ================= */
{
  id: "COMBO_009",
  type: "combo",
  name: "Combo Pack 9",
  brand: "Combo",
  size: "Bundle",
  price: 1899,
  categories: ["combo"],
  images: [COMBO09],
  comboItems: [
    { name: "MAXN Whey Protein", qty: 1, flavours: [] },
    {
      name: "Americanz Muscles Creatine Monohydrate",
      qty: 1,
      weight: "100 gm",
      flavours: ["Mango Madness", "Cola", "Fruit Punch", "Unflavored"]
    },
    { name: "Wavs Shaker", qty: 1, flavours: [] }
  ]
},

/* ================= COMBO 10 ================= */
{
  id: "COMBO_010",
  type: "combo",
  name: "Combo Pack 10",
  brand: "Combo",
  size: "Bundle",
  price: 4799,
  categories: ["combo"],
  images: [COMBO10],
  comboItems: [
    {
      name: "Labrada Whey Protein",
      qty: 1,
      flavours: ["Vanilla", "Chocolate", "Café Mocha"]
    },
    { name: "Labrada CreaLean Creatine", qty: 1, flavours: ["Unflavoured"] },
    { name: "Wavs Shaker", qty: 1, flavours: [] }
  ]
},

/* ================= COMBO 11 ================= */
{
  id: "COMBO_011",
  type: "combo",
  name: "Combo Pack 11",
  brand: "Combo",
  size: "Bundle",
  price: 4599,
  categories: ["combo"],
  images: [COMBO11],
  comboItems: [
    {
      name: "MuscleTech MassTech Extreme",
      qty: 1,
      flavours: ["Triple Chocolate Brownie", "Vanilla Milkshake"]
    },
    { name: "MuscleTech Platinum Whey", qty: 1, flavours: [] },
    { name: "Wavs Shaker", qty: 1, flavours: [] }
  ]
},

/* ================= COMBO 12 ================= */
{
  id: "COMBO_012",
  type: "combo",
  name: "Combo Pack 12",
  brand: "Combo",
  size: "Bundle",
  price: 4599,
  categories: ["combo"],
  images: [COMBO12],
  comboItems: [
    { name: "Labrada 100% Whey Protein", qty: 1, flavours: [] },
    {
      name: "HealthFarm ThPreX Pre-Workout",
      qty: 1,
      flavours: ["Rocket Candy", "Blackberry Lemonade"]
    },
    { name: "Wavs Shaker", qty: 1, flavours: [] }
  ]
},

/* ================= COMBO 13 ================= */
{
  id: "COMBO_013",
  type: "combo",
  name: "Combo Pack 13",
  brand: "Combo",
  size: "Bundle",
  price: 4299,
  categories: ["combo"],
  images: [COMBO13],
  comboItems: [
    {
      name: "MuscleTech MassTech Extreme",
      qty: 1,
      flavours: ["Triple Chocolate Brownie", "Vanilla Milkshake"]
    },
    {
      name: "Americanz Muscles Creatine Monohydrate",
      qty: 1,
      weight: "100 gm",
      flavours: []
    },
    { name: "Wavs Shaker", qty: 1, flavours: [] }
  ]
},

/* ================= COMBO 14 ================= */
{
  id: "COMBO_014",
  type: "combo",
  name: "Combo Pack 14",
  brand: "Combo",
  size: "Bundle",
  price: 3700,
  categories: ["combo"],
  images: [COMBO14],
  comboItems: [
    { name: "Labrada Super Whey Protein", qty: 1, flavours: ["Vanilla", "Chocolate Hazelnut", "Chocolate"] },
    {
      name: "Americanz Muscles Creatine Monohydrate",
      qty: 1,
      weight: "100 gm",
      flavours: []
    },
    { name: "Wavs Shaker", qty: 1, flavours: [] }
  ]
},

/* ================= COMBO 16 ================= */
{
  id: "COMBO_016",
  type: "combo",
  name: "Combo Pack 16",
  brand: "Combo",
  size: "Bundle",
  price: 3199,
  categories: ["combo"],
  images: [COMBO16],
  comboItems: [
    { name: "GNC Pro Performance Whey Protein", qty: 1, flavours: [] },
    {
      name: "Americanz Muscles Creatine Monohydrate",
      qty: 1,
      weight: "100 gm",
      flavours: []
    },
    { name: "Wavs Shaker", qty: 1, flavours: [] }
  ]
},

/* ================= COMBO 17 ================= */
{
  id: "COMBO_017",
  type: "combo",
  name: "Combo Pack 17",
  brand: "Combo",
  size: "Bundle",
  price: 4999,
  categories: ["combo"],
  images: [COMBO17],
  comboItems: [
    {
      name: "Avvatar 100% Performance Whey",
      qty: 1,
      flavours: ["Belgium Chocolate", "Cold Coffee", "Malai Kulfi"]
    },
    {
      name: "Avvatar Creatine Monohydrate",
      qty: 1,
      weight: "100 gm",
      flavours: ["Unflavoured"]
    },
    { name: "Wavs Shaker", qty: 1, flavours: [] }
  ]
},

/* ================= COMBO 18 ================= */
{
  id: "COMBO_018",
  type: "combo",
  name: "Combo Pack 18",
  brand: "Combo",
  size: "Bundle",
  price: 5499,
  categories: ["combo"],
  images: [COMBO18],
  comboItems: [
    {
      name: "MuscleTech Nitro-Tech Whey",
      qty: 1,
      flavours: ["Cappuccino", "Chocolate", "Cookies"]
    },
    { name: "MuscleTech Platinum Whey", qty: 1, flavours: [] },
    { name: "Wavs Shaker", qty: 1, flavours: [] }
  ]
},

/* ================= COMBO 19 ================= */
{
  id: "COMBO_019",
  type: "combo",
  name: "Combo Pack 19",
  brand: "Combo",
  size: "Bundle",
  price: 5999,
  categories: ["combo"],
  images: [COMBO19],
  comboItems: [
    {
      name: "MuscleTech Nitro-Tech Whey",
      qty: 1,
      flavours: ["Cappuccino", "Chocolate", "Cookies"]
    },
    { name: "MuscleTech Platinum Whey", qty: 1, flavours: [] }
  ]
},

/* ================= COMBO 20 ================= */
{
  id: "COMBO_020",
  type: "combo",
  name: "Combo Pack 20",
  brand: "Combo",
  size: "Bundle",
  price: 6999,
  categories: ["combo"],
  images: [COMBO20],
  comboItems: [
    {
      name: "Optimum Nutrition Gold Standard Whey",
      qty: 1,
      flavours: ["Double Rich Chocolate", "Vanilla Ice Cream"]
    },
    { name: "ON Micronized Creatine", qty: 1, flavours: ["Unflavoured"] }
  ]
},

/* ================= COMBO 21 ================= */
{
  id: "COMBO_021",
  type: "combo",
  name: "Combo Pack 21",
  brand: "Combo",
  size: "Bundle",
  price: 4600,
  categories: ["combo"],
  images: [COMBO21],
  comboItems: [
    {
      name: "Apex Vitals Whey Protein",
      qty: 1,
      flavours: [
        "Blueberry Yogurt","Dark Chocolate Orange","Iced Espresso",
        "Mango Cheesecake","Swiss Triple Chocolate",
        "White Chocolate Raspberry","French Vanilla"
      ]
    }
  ]
},

/* ================= COMBO 22 ================= */
{
  id: "COMBO_022",
  type: "combo",
  name: "Combo Pack 22",
  brand: "Combo",
  size: "Bundle",
  price: 7999,
  categories: ["combo"],
  images: [COMBO22],
  comboItems: []
},

/* ================= COMBO 23 ================= */
{
  id: "COMBO_023",
  type: "combo",
  name: "Combo Pack 23",
  brand: "Combo",
  size: "Bundle",
  price: 5499,
  categories: ["combo"],
  images: [COMBO23],
  comboItems: [
    {
      name: "MuscleTech Nitro-Tech Whey",
      qty: 1,
      flavours: ["Blue Razz", "Fruit Punch"]
    }
  ]
}

];
