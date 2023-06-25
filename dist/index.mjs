// src/shuffle.ts
function shuffle(array) {
  if (!Array.isArray(array)) {
    return array;
  }
  if (array.length === 1) {
    return array;
  }
  let counter = array.length;
  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);
    counter--;
    const temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}
export {
  shuffle
};
