// 정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다. 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 
// 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 가까운 순서대로 정렬한
//  배열을 return하도록 solution 함수를 완성해주세요.

function solution(num, n) {
  var answer = [];
  let len = num.sort((a,b)=> a-b).map(i=> Math.abs(n-i)).map((i,id)=>[i,id]).sort((a,b)=>{
       if (a[0] === b[0]) {
          return b[1] - a[1]; 
        } else {
          return a[0] - b[0]; 
        }
  }).map(i=> i[1]);
  for(let i=0; i<len.length; i++){
      answer.push(num[len[i]])
  }
  return answer;
}