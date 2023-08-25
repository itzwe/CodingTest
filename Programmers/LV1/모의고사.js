// 수포자는 수학을 포기한 사람의 준말입니다. 
// 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 
// 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 
// 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

function solution(a) {
    
  let first =  [1,2,3,4,5];
  let second = [2,1,2,3,2,4,2,5];
  let third = [3,3,1,1,2,2,4,4,5,5];
  let ab = [first, second, third];
  let ab1 = [];
  for(let i=0; i<3; i++){
      if(ab[i].length<a.length) ab1.push(ab[i].join('').repeat(a.length-ab[i].length).split(''))
      else ab1.push(ab[i])
  }
  //console.log(ab1)
  let ab2 = ab1.map(subArr => subArr.map(Number));;
  // console.log(ab2)
  let arr = [];
  for(let i=0; i<ab2.length; i++){
      if(ab2[i].length >a.length) arr.push(ab2[i].slice(0,a.length))
      else arr.push(ab2[i])
  }
  
  let result = [];
  for(let i=0; i<arr.length; i++){
      let count = 0;
      for(let j=0; j<a.length; j++){
          if(arr[i][j] === a[j]) count ++
      }
      result.push(count);
  }
  //console.log(result)
  if(result[0] > result[1] && result[0] > result[2]) return [1];
  else if(result[1] > result[0] && result[1] > result[2]) return [2];
  else if(result[2] > result[1] && result[2] > result[0]) return [3];
  else if(result[0] == result[1] && result[0]>result[2]) return [1,2];
  else if(result[0] == result[2] && result[0]>result[1]) return [1,3];
  else if(result[1] == result[2] && result[1]>result[0]) return [2,3];
  else return [1,2,3];
      
}