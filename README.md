# CodingTest
## 큰 수 작은수 초기화
max=Number.MAX_SAFE_INTEGER; => 큰 수를 max에 초기화함. 
min=Number.MIN_SAFE_INTEGER; => 작은 수를 min에 초기화함. 

## 약수 갯수 홀, 짝 구분
 홀수인 약수 => 제곱근이 정수 
 짝수인 약수 => 제곱근이 정수 x
 ```
return Math.sqrt(num) %1 ===0 ? -1 : 1 ; // 첫 번째 방법  
 ```
 ```
Number.isInteger(Math.sqrt(num))  // 두 번째 방법 
=> true 시 홀수 , false 짝수 개 
 ```

 ## 진수 변환하기
 ### 10진수에서 n진수
 ```
let decimal = 1024; 

let binary = decimal.toString(2); //2진수로 변환
let Ternary = decimal.toString(3); //3진수 변환
let octal = decimal.toString(8);	// 8진수로
let hex = decimal.toString(16);		// 16진수로
 ```

 ### n진수에서 10진수 변환
 ```
let binary = "1111111111";
let decimal = parseInt(binary, 2);	// 2진수에서 10진수로

let octal = "1777";
let decimal = parseInt(octal, 8);	// 8진수에서 10진수로

let hex = "3ff";
let decimal = parseInt(hex, 16);	// 16진수에서 10진수로
 ```


 ## 2차원 배열 정렬
 ```
 let arr = [[1,10],[2,30],[3,20],[4,15],[5,15]];
 
 let notIf = arr.sort((a,b)=>{
    return a[1] - b[1] // 2차원 배열 첫 번째 인덱스를 기준으로 오름차순 정렬 
 })  // => 출력 : [[1,10], [4,15], [5,15], [3,20], [2,30]];

 let useIf = arr.sort((a,b)=>{

  if(a[1] === b[1]){  // 2차원 첫 번째 인덱스가 같을 경우에는 0 번째 인덱스를 기준으로 내림차순으로 정렬
    return b[0]-a[0]  ;
  }
  return a[1] - b[1] ;
 })  // => 출력 : [[1,10], [5,15], [4,15], [3,20], [2,30]];
 ```

 ## 배열 동등 비교
 ```
const a = [1, 2, 3];
const b = [1, 2, 3];

a == b; // false
a === b; // false

// 첫 번째 방법
const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
 equals(a, b); // true

 //두 번째 방법
 const equals = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]); 
equals(a, b); // true
// 두 번째 방법에서 순서 상관없이 동일한지 비교 하는 방법
a.sort();
b.sort();
equals(a, b); // true
 ```

 ## 배열의 중복값 제거
 ```
 let arr = [1,1,3,3,5,5] 
 let newArr = [...new Set(arr)]; // [1,3,5];
 ```
