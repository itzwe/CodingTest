// 첫째 줄에 홀수들의 합을 출력하고, 둘쨰 줄에 홀수들 중 최소값을 출력하기.
function solution(arr){
                let answer=[...arr];
                let sum = 0 , min=Number.MAX_SAFE_INTEGER; 
                for(let i=0; i<answer.length; i++){
                  if(answer[i]%2 == 1){
                    sum += answer[i];
                    if(min>answer[i])
                      min = answer[i];
                  }
                }
                console.log(sum);
                console.log(min);
            }
            
            arr=[11, 79, 38, 42, 54, 92, 85];
            console.log(solution(arr));