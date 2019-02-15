//#1
function findTypes() {
    const arr = [];
    for(let i in arguments) {
        arr.push(typeof(arguments[i]));
    }
    return arr;
}
findTypes(null, 5, 'hello');
findTypes('number');
//#2
function executeforEach(array, fn) {
    for(let i = 0; i < array.length; i++) {
        fn(array[i]);
    }
}
//#3
function mapArray(array, fn) {
    const newArray = [];
    executeforEach(array, el => newArray.push(fn(el)));
    return newArray;
}
mapArray([2, 5, 8], function(el) { 
    return el + 3;
 });
//#4
function filterArray(array, fn) {
    const newArray = []; 
    executeforEach(array, function(el) {
        if(fn(el)) {
            newArray.push(el);
        }
    });
    return newArray;
 }
filterArray([2, 5, 8], function(el) { 
    return el > 3;
});
//#5
const data = [
    {
      "_id": "5b5e3168c6bf40f2c1235cd6",
      "index": 0,
      "age": 39,
      "eyeColor": "green",
      "name": "Stein",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e3168e328c0d72e4f27d8",
      "index": 1,
      "age": 38,
      "eyeColor": "blue",
      "name": "Cortez",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5b5e3168cc79132b631c666a",
      "index": 2,
      "age": 2,
      "eyeColor": "blue",
      "name": "Suzette",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e31682093adcc6cd0dde5",
      "index": 3,
      "age": 19,
      "eyeColor": "green",
      "name": "George",
      "favoriteFruit": "banana"
    }
];
function getAmountOfAdultPeople(data) {
    return filterArray(data, el => el.age > 18).length;
}
getAmountOfAdultPeople(data);
//#6
function getGreenAdultBananaLovers() {
    return mapArray(filterArray(data, el => el.age > 18 && el.favoriteFruit === 'banana' && el.eyeColor === 'green'), 
    el => el.name);
}
getGreenAdultBananaLovers(data);
//#7
function keys(object) {
    const array = [];
    for(let prop in object) {
        if(object.hasOwnProperty(prop)) {
            array.push(prop);
        }
    }
    return array;
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3});
//#8
function values(object) {
    const array = [];
    for(let value in object) {
        if(object.hasOwnProperty(value)) {
            array.push(object[value]);
        }
    }
    return array;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3});
//#9
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function showFormattedDate(date) {
    return `Date: ${date.getDate()} of ${months[date.getMonth()]}, ${date.getFullYear()}`;
}

showFormattedDate(new Date('2019-01-27T01:10:00'));
//#10
function isEvenYear(date) {
    return date.getFullYear()%2 === 0;
}

isEvenYear(new Date('2019-01-27T01:10:00'));
//#11
function isEvenMonth(date) {
    return (date.getMonth() + 1)%2 === 0;
}
isEvenMonth(new Date('2019-02-27T01:10:00'));