
// 🔥 Utilizando métodos de array e iterando sobre el array de pizzas, realizar las siguientes actividades, imprimiendo en consola:


// TODAS  las respuestas deben ser USER-FRIENDLY. 
// Si (como en el punto B), la respuesta es un booleano (true o false, hay o no hay), no imprimir el booleano , imprimir en consola una respuesta que toda persona pueda entender, sepa o no de programación (Es decir, no podemos imprimir un array o un objeto en consola, por ejemplo).

// Manejemos cada respuesta, pensando en que un usuario promedio va a leer eso. 
 
// Un ejemplo de lo que sería una repuesta "user-friendly": "La pizza X, tiene un valor de $XXXX”. 💸



const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// a)  Las pizzas que tengan un id impar.
// b) Responder: ¿Hay alguna pizza que valga menos de $600?
// c) El nombre de cada pizza con su respectivo precio.
// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

//A
const idimpares = pizzas.filter((producto)=> {
  return producto.id % 2 != 0;
});

console.log(idimpares);

idimpares.forEach((producto) => {
  console.log(`La ${producto.nombre} tiene id impar`)
});

//B

const Pizzamenora600 = (precio) => {
  return pizzas.some( (producto) => {
    return producto.precio < precio;
  }) ? console.log(`Hay una pizza que vale menos de ${precio}`) : console.log(`No hay pizzas menores a ${precio}`);
}

console.log(Pizzamenora600(600));

//C

const PizzasNombreyPrecio = pizzas.filter ((pizza)=> {
  return pizza.nombre && pizza.precio
}
);

PizzasNombreyPrecio.forEach((pizza) => {
  console.log(
    `La ${pizza.nombre} tiene un precio de ${pizza.precio}`
  );
});


//D