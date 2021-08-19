// split -- [exclude 'a', showing other things]
const anthem = 'Amar sonar bangla ami tomai valobashi';
const words = anthem.split(' ');
const withoutA = anthem.split('a');
console.log(withoutA);

// (5, 13) -- start from 5 and end before 13
const smallSlice = anthem.slice(5, 13);
console.log(smallSlice);

// substr -- (11, 6) -- start from 11 and end in next 6 strings
const anothePart = anthem.substr(11, 6)
console.log(anothePart);

// string -- start from 11 and end before 15
const anotherAnotherPart = anthem.substring(11, 15);
console.log(anotherAnotherPart);

// concat
const first = "Amader";
const second = "City";
const fullString = first.concat(second);
console.log(fullString);

// join
const word = ['a', 'b', 'c', 'd', 'e'];
const allJoind = word.join('');
console.log(allJoind);