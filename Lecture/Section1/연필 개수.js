  // 연필 1다스는 12자루 입니다. 학생 1인당 연필을 1자루씩 나눠 준다 할 때 N명이 학생수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성
function solution(n){
    let answer;
    answer = Math.ceil(n/12);
    return answer;
}

console.log(solution(178));