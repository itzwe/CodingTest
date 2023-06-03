
// 주어진 수에서 가장 최소 값 구하기
function solution(arr){         
  let answer = arr[0] ;
  for(let i=1; i<arr.length; i++){
    if(answer> arr[i]) answer = arr[i]
  }
  return answer;

}

let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));


// let answer = Math.min(...arr); 방법도 있음.


// function solution(arr){         
//   let answer, min=Number.MAX_SAFE_INTEGER; => 큰 수를 min에 초기화함. 
//   for(let i=0; i<arr.length; i++){
//       if(arr[i]<min) min=arr[i];
//   }
//   answer=min;
//   return answer;

// }

// let arr=[5, 7, 1, 3, 2, 9, 11];
// console.log(solution(arr));