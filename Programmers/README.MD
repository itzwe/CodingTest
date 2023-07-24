## 배열 안 빈 문자열('') 제거하기
```
let str = ['','','abc','de'];
let result =str.filter(el=>el);
console.log(result); => ['abc', 'de']
``````
## 하나의 특정 index만 제거하기
arr.splice(원하는인덱스,i);
```
let arr = ['0','1','2'];
let remove = arr.splice[1,1]  => ['1']; 
console.log(arr) => ['0','2']
```