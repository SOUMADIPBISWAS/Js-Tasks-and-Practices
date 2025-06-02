// const user = {
//   name: 'Alice',
//   age: 25,
//   email: 'alice@example.com'
// };

// const {name , age} = user;

// console.log(`hello my name is ${name} and my age is ${age}`)

// const scores = [95, 82, 71, 65, 88];

// const [first, , third, ,fifth]=scores;

// console.log(`${first} ${third} ${fifth}`);

// // const [first, , third, , fifth] = scores;
// // console.log(first, third, fifth); // Output: 95 71 88

// const book = {
//   title: 'JavaScript Basics',
//   details: {
//     author: 'John Doe',
//     year: 2023,
//     publisher: 'Tech Books'
//   }
// };

// const {title,details}=book;

// console.log(`hello guys my name is ${details.author} and I am author of ${title} 🥰`)

const config = {
  host: 'localhost',
  port: 3000,
  protocol: 'http'
};

const{host,port,protocol}=config;

console.log(`${protocol}://${host}:${port}`)

// function connect({ host, port, protocol = 'http' }) {
//   return `Connecting to ${protocol}://${host}:${port}`;
// }
// console.log(connect(config)); // Output: Connecting to http://localhost:3000

// function connect({port,protocol,host = 'http'}){
//     return `${protocol}://${host}:${port}`
// }
// console.log(connect(config))

const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 499 }
];

function displayProduct({ name, price }) {
  return `${name} costs $${price}`;
}
products.forEach(product => console.log(displayProduct(product)));
