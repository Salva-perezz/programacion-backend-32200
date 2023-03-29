export class ProductDTO {
  constructor(data, currencies) {
    this.name = data.name;
    this.description = data.description;
    this.price = data.price;

    for (const [currency, value] of Object.entries(currencies)) {
      this[currency] = value;
    }
  }
}

/* 
{
      usdPrice: 10,
      arsPrice: 100,
      uyuPrice: 50,
};

[["usdPrice", 10], ["arsPrice", 100], ["uyuPrice", 50]]


Que hace Object.entries() ?

Le damos este objeto:
    {
        USD: 1,
        ARS: 208,
        UYU: 150,
    }

Nos devuelve este arreglo:
    [["USD", 1], ["ARS", 208], ["UYU", 150]]
*/
