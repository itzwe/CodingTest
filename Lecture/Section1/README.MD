# forEach, map, filter, reduce


고차함수란? => 매개변수로 함수를 전달받음 

## forEach
```
function forEach(predicate, thisArg){
    for(let i =0; i<a.length; i++){
        predicate(a[i], i);
    }
} 와 같은 형태
```



## ex
```
 a = [10, 11, 12, 13 ,14 ,15];
 a.forEach(function(v,i){
    console.log(v,i);
 }) => v는 배열의 요소 값 i는 인덱스 값이 출력 됨.

 a.forEach(function(v,i){
    console.log(v,i, this);
 }, [1, 2]) =>  [1, 2] 는 this 값
```

## map
```
map은 

function map(predicate, thisArg){
    let list=[];
    for(let=0; i<a.length;i++){
      list.push(predicate(a[i],i));
    }
    return list;
} 와 같은 형태
```

## ex
``` 
 a = [10, 11, 12, 13 ,14 ,15]; 
  let answer = a.map(function(v, i){
    return v%2==0;
 })  => answer 에는 [10, undefined, 12, undefined, 14, undefined] 가 담김

```

즉 
map은 원본 배열의 길이가 같기에, 원하는 원소만 return이 되지 않음.


## filter

map 과 마찬가지로 새로운 배열을 생성하여 리턴받음. 그렇지만 map과 다르게 원하는 원소만 리턴하여 배열을 만들 수 있어 원본 배열과 길이가 다를 수 있음. 이때 filter는 원본에 있는 배열의 요소값 중에 원하는 값만 return할 수 있음. map 처럼 새로운 값을 만들어 내지는 못함.

```
function filter(predicate, thisArg){
    let list=[];
    for(let=0; i<a.length;i++){
      if(predicate(a[i], i)) list.push(a[i]);
    }
    return list;
} 와 같은 형태
```
## ex
```
 a = [10, 11, 12, 13 ,14 ,15]; 
 let answer = a.filter(function(v, i){
    return v%2==0;
 }) => answer 안에는 [10,12,14] 가 담겨있음.
 
```



## reduce

reduce 는 map, filter 와 다르게 어떤 배열을 생성하는 것이 아니라 어떠한 값을 생성해서 return함.

```
function reduce(predicate, val){
    let result = val;
    for(let=0; i<a.length;i++){
        result = predicate(result, a[i])
    }
    return result;
} 와 같은 형태
```

## ex
```
 a = [10, 11, 12, 13 ,14 ,15]; 
 let answer = a.reduce(function(acc, v){
    return acc+v;  
 }, 0) => acc 는 누적값 , 0은 초기값, v는 원본 배열의 요소 값 
 return 값은 초기값 0에서 시작해 , 이후 첫 배열의 요소값인 10에서 마지막 요소값인 15 까지 순차적으로 누적 시킨 결과 값이 담김
```