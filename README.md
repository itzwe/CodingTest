# CodingTest
## 큰 수 작은수 초기화
min=Number.MAX_SAFE_INTEGER; => 큰 수를 min에 초기화함. 

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