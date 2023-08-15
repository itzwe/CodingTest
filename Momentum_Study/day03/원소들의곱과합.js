// 정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.


function solution(n) {
  let mul = 1;
  n.map(i=>mul*=i);
  let sq = 0;
  n.map(i=> sq+=i)
  if(mul<sq**2){
      return 1;
  }else{
      return 0;
  }
}