var myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};
console.log(myCar.make);
function showProps(obj, objName) {
    var result = ``;
    for (var i in obj) {
        // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
        if (obj.hasOwnProperty(i)) {
            result += `${objName}.${i} = ${obj[i]}\n`; // very important --> obj[i]... obj.i will be wrong. because if we access data from an object by 'Variable' , then we have to use [i]. 
        }
    }
    return result;
}

const car = showProps(myCar, "myCar");
console.log(car);
