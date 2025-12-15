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
import { maxnProducts } from "../maxn";
import { comboProducts } from "../combo/combo";
import { merchandiseProducts } from "../merchandise/merchandise";

export const products = [
  ...americanzProducts,
  ...ansProducts,
  ...apexProducts,
  ...avvatarProducts,
  ...dragonProducts,
  ...foodProducts,
  ...geneticProducts,
  ...gncProducts,
  ...hydeProducts,
  ...labradaProducts,
  ...maxnProducts,
  ...comboProducts,
  ...merchandiseProducts,
];



export const brandCounts = products.reduce((acc,product )=>{
  acc[product.brand]= (acc[product.brand]||0)+1;
  return acc;
},{});

export const brands = Object.keys(brandCounts);