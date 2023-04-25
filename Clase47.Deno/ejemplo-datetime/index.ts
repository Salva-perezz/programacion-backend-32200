import { parse } from "https://deno.land/std@0.184.0/datetime/mod.ts";

const myDate: Date = parse("13-05-2001", "dd-mm-yyyy");

console.log(myDate);
