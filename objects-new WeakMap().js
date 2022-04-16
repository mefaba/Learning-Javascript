var cardObject = {
  name: "Mehmet",
  "card number": "4444 2222"
}
var secret = 12321321;

const secret_key = new WeakMap();
secret_key.set(cardObject, secret);

secret = secret_key.get(cardObject);//

console.log(secret_key);


const secret_key2 = new Map();
secret_key2.set(cardObject, secret);

secret = secret_key2.get(cardObject);

console.log(secret_key2);