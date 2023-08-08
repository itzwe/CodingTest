// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.

// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 k보다 크면서 가장 작은 arr[i]를 찾습니다.

// 각 쿼리의 순서에 맞게 답을 저장한 배열을 반환하는 solution 함수를 완성해 주세요.
// 단, 특정 쿼리의 답이 존재하지 않으면 -1을 저장합니다.

function solution(arr, q) {
  let result = [];
  let t = [];

  for(let i=0; i<q.length; i++){
      const f = [];
      for(let j=q[i][0], c=q[i][1]; j<=c; j++ ){
         if(arr[j] > q[i][2])
             f.push(arr[j])
      }
      if(f.length === 0){
                  f.push(-1)
              }
      result.push(Math.min(...f));
  }
  return result;
}