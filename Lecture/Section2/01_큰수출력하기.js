// N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작
// 성하세요.(첫 번째 수는 무조건 출력한다)

function solution(a) {
  let result = [];
  result.push(a[0]);
  for(i=0; i<a.length-1;i++){
    if(a[i+1]>a[i]) result.push(a[i+1]);
  }
  return result;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
