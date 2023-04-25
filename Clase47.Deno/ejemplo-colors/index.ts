import {
  bgBrightMagenta,
  bgGreen,
  bgRed,
  bgYellow,
  blue,
  bold,
  gray,
  italic,
  red,
  white,
} from "https://deno.land/std/fmt/colors.ts";

console.log(bgRed(blue(italic("Hello World!"))));
console.log(bgYellow(red(bold("Hello World!"))));
console.log(bgGreen(white(italic("Hello World!"))));
console.log(bgBrightMagenta(gray(bold("Hello World!"))));
