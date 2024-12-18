import React from 'react';

let a: number = 10;

let b: boolean = a === 10;

let o: { n: string, a: number, m: boolean } = {
    n: 'Mario',
    a: 23,
    m: false
};

type HumanType = {
    name: string;
    age: number;
    married: boolean;
};

let max: HumanType = {
    name: "max",
    age: 23,
    married: true,
};

let peoples: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4
];

let tuptup: [string, number, string] = [
    "tupleString", 1234, "ciao"
]

function sumNumbers(a: number, b: number): number {
    return a + b;
}

function sayHello(n: string): string {
    return "hello" + n;
}

function showArray(arr: number[], i: number): number {
        return arr[i] ;
}

interface InformationPerson {
    name?: string,
    age?: number,
    isMarried?: boolean,
}

let julianInterface: InformationPerson = {
    name: "julian",
}

interface Vehicles {
    brand: string,
    canRun(): void,
}

interface Truck extends Vehicles {
    gomme: number,
    motore: string,
    poom(): void;
}

class TruckClass implements Truck {
    gomme = 4;
    motore= "diesel";
    brand = "iveco"
    canRun() {
        return "truck can run."
    };
    poom() {
        return "pooooooooom poooooooooom."
    }
}

const First: React.FC = () => {

    return (
        <div className='bg-red-50'>
            My Component.

            <br />
            {a}: this is a variable stored.
            <br />
            {o.n}: Is a name of a guy find in the <em>object</em>.
            <br />
            {max.name}: this is name is inside an onject-TYPE. This person age is: {max.age}
            <br />
            {peoples[0]}: this is a number inside an array.
            <br />
            Now I use a function to make arithmetics: {
                peoples[3] + " plus" + peoples[3] + " equals " +
                sumNumbers(peoples[3], peoples[3]) + "."
            }
            <br />
            {a = 34}: I'm redeclaring the first variable. it was 10 now is {a}.
            <br />
            {
                peoples.map((n,i)=> (
                    showArray(peoples, i) + " "
                ))
            }: i map an array, on each value I show the value stored at that partition.
            <br />
            {tuptup[0]}: typescript has tuples. this value is stored in one of these.
            <br />
            {julianInterface.name}: this name of a person is stored in an interface. an interface use a blueprint object adopting keys dynamically.
            <br />

            <br />
        </div>
    )
}

export default First;