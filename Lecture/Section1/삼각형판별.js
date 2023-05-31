  // 짧은 2 막대의 길이 합이 긴 막대의 길이보다 커야함
  //  두 조건의 길이 합이 같으면 삼각형이 안됨.
function solution(a, b, c){
  let answer, max;
  let sum = a+b+c; 
  if(a>b) max =a;
  else max = b;
  if(c>max) max = c;
  if((sum-max)>max) answer ="YES"
  else answer = "No"

  return answer;
}

console.log(solution(13, 33, 17));