/**
 * Q: 배열 reduce - 객체 목록 통계
 *
 * - `calculateStatistics` 함수를 작성하세요.
 *   1. users 배열이 [{ age: 10 }, { age: 30 }, ...] 형태라고 가정
 *   2. 평균 나이와 최대 나이를 계산 후 { averageAge, maxAge } 반환
 *   3. reduce를 사용
 *
 * @param {{age:number}[]} users
 * @returns {{ averageAge: number, maxAge: number }}
 */

// TODO: calculateStatistics 함수를 작성하세요.

function calculateStatistics(users) {
  let result = {};
  let age = [];

  if (!users[0]) {
    return {averageAge: 0, maxAge: 0}
  }

  for (let i=0; i<users.length; i++) {
    age.push(users[i].age);
  }

  let sum = age.reduce((cur,sum) => {
    return cur + sum;
  })

  let average = sum / users.length;

  let max = age.reduce((cur,max) => {
    return cur > max ? cur : max;
  })

  result.averageAge = average;
  result.maxAge = max;

  return result;
}

// function calculateStatistics(users) {
//   let result = {};
//   let age = [];

//   //나이 배열
//   for (let i=0; i<users.length; i++) {
//     age.push(users[i].age);
//   }



//   let sum = age.reduce((cur,sum) => 
//      cur + sum
//   )





// }
calculateStatistics([])
// export를 수정하지 마세요.
export { calculateStatistics };
