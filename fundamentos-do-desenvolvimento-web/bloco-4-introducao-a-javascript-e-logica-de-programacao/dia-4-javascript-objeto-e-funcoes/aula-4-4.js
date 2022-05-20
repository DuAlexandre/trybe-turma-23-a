let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
};

let message = "A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade."
//console.log(message);

player['bestInTheWorld'] = [2006, 2007,2008, 2009, 2010, 2018];

//console.table(player);
let best = player.bestInTheWorld;
console.log(best);
//console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + best.length + " vezes.");
console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata.")

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }

  let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let index in names){
      console.log('Olá ' + names[index]);
  }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let key in car){
      console.log(key, car[key]);
  }
  


  function majorAmongThree (a, b, c) {
      if(a > b && a > c){
          return a;
      }else if (b > a && b > c){
          return b;
      }else {
          return c;
      }
  }
console.log(majorAmongThree(75,52,20));
