// 덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가
//  매개변수로 주어집니다. 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은
//   배열을 return하도록 solution 함수를 완성해주세요.

function solution(q) {
  var answer = [];
  for(let i=0; i<q.length; i++){
      let spl = q[i].split(' ');
      if( spl[1] === '+'){
          Number(spl[0]) + Number(spl[2]) === Number(spl[4]) ? answer.push("O") : answer.push("X") 
      }else if( spl[1] === '-'){
          Number(spl[0]) - Number(spl[2]) === Number(spl[4]) ? answer.push("O") : answer.push("X") 
      }
  }
  return answer;
}