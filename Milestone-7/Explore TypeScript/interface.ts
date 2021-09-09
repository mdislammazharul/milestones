interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: boolean, // using ? means --> wife is optional. i.e, ronaldo has no wife!!
    previousClub?: string[]
}

const messy: Player = {
    name: 'L Messy',
    club: 'Abahoni',
    salary: 12000,
    wife: false,
}

const ronaldo: Player = {
    name: 'Ronaldo',
    club: 'Kolabagan',
    salary: 20000,
}
// -------------------

interface Employee {
    name: string,
    designation: string,
    salary: number,
    age: number
}

interface Developer extends Employee {
    language: string,
    codeEditor: string,
    typeSpeed: number
}

const zukerberg: Developer = {
    language: 'Js',
    codeEditor: 'Vs Code',
    typeSpeed: 65,
    // have to add Employee property here, because we add --> extends Employee
    name: 'Mark Zukerberg',
    designation: 'Facebooker',
    salary: 10000,
    age: 32
}