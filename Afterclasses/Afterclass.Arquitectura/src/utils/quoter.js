const getCurrencyPrice = (price, currency) => {
  const tasas = {
    USD: 1,
    ARS: 208,
    UYU: 150,
  };

  switch (currency) {
    case "USD":
      return price * tasas.USD;
    case "ARS":
      return price * tasas.ARS;
    case "UYU":
      return price * tasas.UYU;
  }
};

export default getCurrencyPrice;
