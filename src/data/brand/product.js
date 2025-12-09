// src/data/brand/product.js
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
];



export const brandCounts = products.reduce((acc,product )=>{
  acc[product.brand]= (acc[product.brand]||0)+1;
  return acc;
},{});

export const brands = Object.keys(brandCounts);