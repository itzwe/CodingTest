function solution(str) {
  let answer = str.split(/a|b|c/).filter(el=>el);
  // for(let i=0; i< answer.length;i++){
  //     if(answer[i] === ''){
  //         answer.splice(i,1);
  //         i--;
  //     } 
  // }
  if(answer.length === [].length) return ["EMPTY"];
   return answer;
}