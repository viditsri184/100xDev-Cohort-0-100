import { add } from "./export_and_import"

add(1, 2);


import Calculator from './export_and_import';

const calc = new Calculator();
console.log(calc.add(10, 5));