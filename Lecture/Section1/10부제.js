// 날짜의 일의 자리 수와 자동차의 일의 자리 수가 같으면 운행을 중지하는데 이때 이를 위한하는 차량의 수를 계산하기.

function solution(day, arr){
  let answer = 0;
  for(x of arr){
    if(x%10 == day)
      answer ++;
  }
    
  
  
  console.log(answer);
}

arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));