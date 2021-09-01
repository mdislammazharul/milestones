const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const third = first;

// it is not possible to check rwo or more object's equality by === . becuase === is used only for primitive data types
if (first === third) {
    // console.log('objects are equal');
}
else {
    // console.log('Objects are different');
}


const first2 = { a: 1, b: 2, c: 2 };
const second2 = { b: 2, a: 1 };
// stringfy can check exactly same stream of objects. but if we change the location of keys, then it failed
console.log(JSON.stringify(first2));
console.log(JSON.stringify(second2));
if (JSON.stringify(first2) === JSON.stringify(second2)) {
    // console.log('objects are equal')
}

function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}

const isEqual = compareObjects(first2, second2);
console.log(isEqual);