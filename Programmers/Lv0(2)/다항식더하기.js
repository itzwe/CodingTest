// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 
// 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 
// 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 
// 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 
// 같은 식이라면 가장 짧은 수식을 return 합니다.

function solution(p) {
  p = p.split(' ');
  let x =0;
  let num = 0;
  for(let i=0; i<p.length; i++){
      if(p[i].indexOf('x') >-1){
          if(+p[i].replace('x','') == 0){
              x +=1;
          }else{
              x += +p[i].replace('x','');
          }
      }else if(!isNaN(p[i])){
          num += +p[i]
      }
  }
  if( x != 0 && num != 0) return `${x === 1 ? '' : x}x + ${num}`
  else if ( x != 0 && num == 0) return `${x === 1 ? '' : x}x`
  else return `${num}`

}