"use strict";

alert("Hello there, my name is Shan, welcome to the haunted forest!");
const charName = prompt("What is your character's name?", "Wanderer");
const petName = prompt(`What kind of pet does ${charName} have?`);
const superPower = prompt(`What is ${charName}'s superpower?`);
const trainYearsText = prompt(`How many years has ${charName} been training?`);
const newTrainYears = Number(trainYearsText);
console.log(trainYearsText, typeof trainYearsText, newTrainYears, typeof newTrainYears);
const powerLevel = newTrainYears * 10;
const monster = window.confirm(`Does ${charName} like fighting monsters? Click OK for YES or Click cancel for NO.`);
console.log(monster, typeof monster);

alert(`Gathering magic for ${charName}... almost ready!`)

alert(`--------------------------
    Name: ${charName}
    Pet: ${petName}
    Superpower: ${superPower}
    Power Level: ${powerLevel}
    Monster Fighter?: ${monster ? "Yes" : "No"}
    ${charName} and their trusty ${petName} fight their way through a
    haunted forest filled with ghosts, goblins, and other spooky creatures.
    Using ${charName}'s ${superPower} ability they manage to find a way out.
     --------------------------`)