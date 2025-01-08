/**
 * Q23. 프로퍼티 별로 그룹화하기
 *
 * - groupBy 함수를 작성하세요.
 * - 객체 배열과 key를 인자로 받아, 해당 key의 값에 따라 객체들을 묶어서 반환합니다.
 * - 반환 형태는 { [keyValue]: Object[] } 형태입니다.
 *
 * 예:
 * const data = [
 *   { name: 'Alice', group: 'A' },
 *   { name: 'Bob', group: 'B' },
 *   { name: 'Charlie', group: 'A' }
 * ];
 * groupBy(data, 'group') =>
 * {
 *   A: [
 *     { name: 'Alice', group: 'A' },
 *     { name: 'Charlie', group: 'A' }
 *   ],
 *   B: [
 *     { name: 'Bob', group: 'B' }
 *   ]
 * }
 *
 * @param {Object[]} arr
 * @param {string} key
 * @returns {Object}
 */

// TODO: groupBy 함수를 작성하세요.

function groupBy(arr, key) {
  let result = {A:[], B:[]};

  for (let i=0; i<arr.length; i++) {
    if (arr[i].group === 'A') {
      result.A.push(arr[i])
    } else {
      result.B.push(arr[i]);
    }
  }
  return result;
}

// export를 수정하지 마세요.
export { groupBy };
