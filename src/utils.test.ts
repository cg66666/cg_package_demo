/*
 * @Description: file content
 * @Author: cg
 * @Date: 2024-10-22 17:55:26
 * @LastEditors: cg
 * @LastEditTime: 2024-10-23 15:07:11
 */
import { add } from './utils.js';
import { test, expect } from 'vitest';

test('add', () => {
  expect(add(1, 2)).toBe(6);
});
