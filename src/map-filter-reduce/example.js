var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Christian", "Ib", "Thomas"];



//Filter creates a new array by removing elements that don't belong. 
let Filter = names.filter(name => name.length <= 3); //returns [Jan, Bo, Ib]



//Map creates a new array by transforming every element in an array, individually.  
var upperNames = names.map(name => name.toUpperCase()) 
  //Returns [ 'LARS','JAN','PETER','BO','FREDERIK','CHRISTIAN','IB','THOMAS' ]


//Reduces
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15