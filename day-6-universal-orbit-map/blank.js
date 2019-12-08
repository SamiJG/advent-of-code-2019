const { inputArray } = require("./input");

const findOrbitedIndex = (inputArray, mass) => {
  const orbitedMasses = inputArray.filter(relationship => {
    const [orbitedMass] = relationship.split(")");
    return orbitedMass === mass;
  });
  return orbitedMasses.map(relationship => inputArray.indexOf(relationship));
};

const generateLineageObject = inputArray => {
  let orbits = {
    COM: []
  };
  let nextOrbitsIndex = findOrbitedIndex(inputArray, "COM");
  let orbitedMass;
  let orbitingMass;
  while (nextOrbitsIndex[0] !== undefined) {
    [orbitedMass, orbitingMass] = inputArray[nextOrbitsIndex[0]].split(")");

    orbits[orbitingMass] = [...orbits[orbitedMass], orbitedMass];
    nextOrbitsIndex.push(...findOrbitedIndex(inputArray, orbitingMass));
    nextOrbitsIndex.shift();
  }

  return orbits;
};

const numberOfOrbits = inputArray => {
  const orbitObj = generateLineageObject(inputArray);
  const orbitValuesArr = Object.values(orbitObj);
  return orbitValuesArr.reduce((sum, value) => (sum += value.length), 0);
};

const numberOfTransfers = inputArray => {
  const orbitObj = generateLineageObject(inputArray);
  const yourOrbits = orbitObj["YOU"];
  const santasOrbits = orbitObj["SAN"];

  let lastCommonOrbit = "";
  santasOrbits.forEach(ref => {
    if (yourOrbits.includes(ref)) lastCommonOrbit = ref;
    // console.log(lastCommonOrbit)
  });

  const yourOrbitDiff = yourOrbits.indexOf(lastCommonOrbit) + 1;
  const santasOrbitDiff = santasOrbits.indexOf(lastCommonOrbit) + 1;

  return (
    yourOrbits.slice(yourOrbitDiff).length +
    santasOrbits.slice(santasOrbitDiff).length
  );
};

module.exports = {
  findOrbitedIndex,
  generateLineageObject,
  numberOfOrbits,
  numberOfTransfers
};

// console.log(numberOfTransfers(inputArray));
