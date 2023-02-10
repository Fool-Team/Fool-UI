/**
 * 限制数字范围在 -(range-1) ~ range-1 之间
 * @param {number} number 需要限制范围的数字
 * @param {number} range 范围的大小，以 0 为中点 正负 range
 * @returns -range < 返回的数字 < range 
 */
export function limitScope(number, range) {
  if (range < 0) range = -range;

  if (number >= range) {
    number -= range + 1;
    return limitScope(number, range);
  }
  else if (number <= (-range)) {
    number += range + 1;
    return limitScope(number, range);
  } else {
    return number
  }
}