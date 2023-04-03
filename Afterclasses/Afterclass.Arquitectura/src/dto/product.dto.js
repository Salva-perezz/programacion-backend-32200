export default class ProductDTO {
  constructor(data, currencies) {
    this.name = data.name;
    this.description = data.description;
    this.price = data.price;

    for (const [currency, value] of Object.entries(currencies)) {
      this[currency] = value;
    }
  }
}
