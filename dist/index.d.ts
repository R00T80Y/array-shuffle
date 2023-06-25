/**
 * Претасовывает элементы в массиве по алгоритму "Fisher–Yates Shuffle" https://bost.ocks.org/mike/shuffle/
 *
 * @category Array Functions
 * @example shuffle([1, undefined, NaN, 2, null, 3, 0])
 * @version 0.0.1
 * @see https://bost.ocks.org/mike/shuffle/
 */
declare function shuffle<T>(array: T[]): T[];

export { shuffle };
