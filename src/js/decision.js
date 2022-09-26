/* eslint-disable no-restricted-globals */
/* eslint-disable no-continue */
/* eslint-disable guard-for-in */
export const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

export function orderByProps(objNew, array) {
  const listObj = Object.keys(objNew);
  const arr = [...array];
  const filterList = listObj.filter((item) => array.indexOf(item) === -1);
  const sortList = filterList.sort();
  arr.push(...sortList);
  const result = [];
  arr.forEach((item) => {
    for (const key in objNew) {
      const obj2 = {};
      if (item === key) {
        obj2.key = `${key}`;
        obj2.value = `${objNew[key]}`;
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
