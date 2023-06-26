# Array Shuffle

Implementation of the "Fisher-Yates Shuffle" algorithm

## Install

```bash
pnpm i @r00t80y/array-shuffle
```

## How to use it

```ts
import { shuffle } from '@r00t80y/array-shuffle';

console.log(shuffle([1, 2, 3, 4, 5])); // [3, 2, 5, 4, 1]
```

```ts
const arr1 = [1, 2, 3, 4];
const arr2 = shuffle(arr1.slice());

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [3, 2, 4, 1]
```
