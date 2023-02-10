export function arrayInclude(pseudoArray, searchElement, fromIndex = 0) {
  for (let i = fromIndex; i < pseudoArray.length; i++) {
    if (pseudoArray[i] === searchElement) return true;
  }
  return false;
}