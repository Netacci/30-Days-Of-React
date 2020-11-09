const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: '' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: 5 },
  ]
//   destructuring
  const {product, price} = products

//   Print the price of each product using forEach

 products.forEach(({product, price}) => {
     console.log(price)
 });
//  Print the product items as follows using forEach

products.forEach(({product, price}) => {
    if (price === '' || ''){
        price = "unknown"
    }
    console.log(`The price of ${product} is ${price} euros`)
});
// Calculate the sum of all the prices using forEach
let sum = 0;
products.forEach(({price})=>{
    sum+=price;
    
})
console.log(sum);

// Calculate the sum of all the prices using reduce only
// including initial value returned the sum
let summ = products.reduce((acc, {price})=>acc + price, 0)
console.log(summ)
// Create an array of prices using map and store it in a variable prices
let prices = products.map(({price})=> price)
console.log(prices)
// Filter products with prices
let filteredPrices = products.filter(({price})=> price)
console.log(filteredPrices)
// Find the first product which doesn't have a price value
let productWithoutValue = products.find(({price})=>price === '')
console.log(productWithoutValue)
// Find the index of the first product which does not have price value
let productWithoutValueIndex = products.findIndex(({price})=>price === '')
console.log(productWithoutValueIndex)