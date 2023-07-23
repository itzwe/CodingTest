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