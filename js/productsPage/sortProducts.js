function sortProducts(products, sortType) {

  let sortedProducts = [...products];

  switch (sortType) {

    case "lowToHigh":

      sortedProducts.sort(
        (a, b) => a[1].price - b[1].price
      );

      break;


    case "highToLow":

      sortedProducts.sort(
        (a, b) => b[1].price - a[1].price
      );

      break;


    case "aToz":

      sortedProducts.sort(
        (a, b) =>
          a[1].name.localeCompare(b[1].name)
      );

      break;


    case "zToa":

      sortedProducts.sort(
        (a, b) =>
          b[1].name.localeCompare(a[1].name)
      );

      break;


    default:

      return products;

  }

  return sortedProducts;

}


export { sortProducts };