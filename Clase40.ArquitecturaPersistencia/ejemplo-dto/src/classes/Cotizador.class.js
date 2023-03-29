export default class Cotizador {
  static tasas = {
    USD: 1,
    ARS: 208,
    UYU: 150,
  };

  getCurrencyPrice(price, currency) {
    switch (currency) {
      case "USD":
        return price * Cotizador.tasas.USD;
      case "ARS":
        return price * Cotizador.tasas.ARS;
      case "UYU":
        return price * Cotizador.tasas.UYU;
    }
  }
}
