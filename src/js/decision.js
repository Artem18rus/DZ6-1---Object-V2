/* eslint-disable no-restricted-globals */
/* eslint-disable import/prefer-default-export */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-continue */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable guard-for-in */
export const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

const list = Object.keys(obj);
const arr = ['name', 'level'];

const filterList = list.filter((item) => item !== arr[0] && item !== arr[1]);
const sortList = filterList.sort();
arr.push(...sortList);

export function func() {
  const result = [];
  const arrTotal = arr.map((item) => {
    for (const key in obj) {
      const obj2 = {};
      if (item === key) {
        obj2.key = `${key}`,
        obj2.value = `${obj[key]}`;
      }
      if (!obj2.key) continue;
      if (isNaN(obj2.value) === false) {
        obj2.value = +obj2.value;
      }
      result.push(obj2);
    }
  });
  return result;
}
