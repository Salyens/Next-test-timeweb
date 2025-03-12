const priceFormatter = (price: number) => {
  return new Intl.NumberFormat("ru-RU", {
    style: "decimal",
    minimumFractionDigits: 0,
  }).format(price);
};

export default priceFormatter;
