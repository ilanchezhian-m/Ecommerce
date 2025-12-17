// src/data/brand/product.js
// main file to main all the products from js database to jsx
import { americanzProducts } from "./americanz";
import { ansProducts } from "./ans";
import { apexProducts } from "./apex";
import { avvatarProducts } from "./avvatar";
import { dragonProducts } from "./dragon";
import { foodProducts } from "./food";
import { geneticProducts } from "./genetic";
import { gncProducts } from "./gnc";
import { hydeProducts } from "./hyde";
import { labradaProducts } from "./labrada";
import { maxnProducts } from "./maxn";
import { comboProducts } from "../combo/combo";
import { merchandiseProducts } from "../merchandise/merchandise";
import { muscletechProducts } from "./muscletech";
import { prosuppsProducts } from "./prosupps";
import { onProducts } from "./on";
import { wellcoreProducts } from "./wellcore";
import { klrProducts } from "./klr";


export const products = [
  ...americanzProducts.map(p => ({ ...p, type: "product" })),
  ...ansProducts.map(p => ({ ...p, type: "product" })),
  ...apexProducts.map(p => ({ ...p, type: "product" })),
  ...avvatarProducts.map(p => ({ ...p, type: "product" })),
  ...dragonProducts.map(p => ({ ...p, type: "product" })),
  ...foodProducts.map(p => ({ ...p, type: "product" })),
  ...geneticProducts.map(p => ({ ...p, type: "product" })),
  ...gncProducts.map(p => ({ ...p, type: "product" })),
  ...hydeProducts.map(p => ({ ...p, type: "product" })),
  ...labradaProducts.map(p => ({ ...p, type: "product" })),
  ...maxnProducts.map(p => ({ ...p, type: "product" })),
  ...muscletechProducts.map(p => ({ ...p, type: "product" })),
  ...prosuppsProducts.map(p => ({ ...p, type: "product" })),
  ...onProducts.map(p => ({ ...p, type: "product" })),
  ...wellcoreProducts.map(p => ({ ...p, type: "product" })),
  ...klrProducts.map(p => ({ ...p, type: "product" })),

  // combos already have type: "combo"
  ...comboProducts,

  // merchandise (if they are normal products)
  ...merchandiseProducts.map(p => ({ ...p, type: "product" })),
];


export const brandCounts = products.reduce((acc,product )=>{
  acc[product.brand]= (acc[product.brand]||0)+1;
  return acc;
},{});

export const brands = Object.keys(brandCounts);