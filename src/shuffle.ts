/**
 * Перетасовывает элементы в массиве по алгоритму "Fisher–Yates Shuffle"
 *
 * @category Array Functions
 * @example shuffle([1, undefined, NaN, 2, null, 3, 0])
 * @version 0.0.1
 * @see https://bost.ocks.org/mike/shuffle/
 */
function shuffle<T>(array: T[]): T[] {
  if (!Array.isArray(array)) {
    return array;
  }

  // В массиве один элемент просто вернем его
  if (array.length === 1) {
    return array;
  }

  let counter = array.length;

  // Пока в массиве имеются элементы,
  // перебераем элементы в массиву с конца к началу
  while (counter > 0) {
    // Выбираем случайный индекс от 0 до counter(не включая counter)
    // counter с каждым проходом цикла будет на один меньше
    const index = Math.floor(Math.random() * counter);

    // Уменьшить счетчик на 1
    counter--;

    // Меняем местами текущий элемент со случайным
    const temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

export { shuffle };
