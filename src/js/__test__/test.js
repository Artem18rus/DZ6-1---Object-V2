/* eslint-disable no-unused-vars */
import { obj, func } from '../decision';

test('Function-OK', () => {
  const funcTotal = func();
  expect(funcTotal).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});
