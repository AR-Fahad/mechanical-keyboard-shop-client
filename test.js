const arr = [{ id: 22 }, { id: 23 }];

const isExist = arr.find((arr) => arr.id === 23);

console.log(isExist);

isExist.name = "fahad";
isExist.id++;

console.log(arr);
