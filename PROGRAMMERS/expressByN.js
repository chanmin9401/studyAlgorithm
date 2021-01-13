//N으로 표현

// N과 사칙연산을 이용하여 number를 만들때 사용된 N의 최소값을 구하라
// 최소값이 8보다 큰 경우 -1을 return

function solution(N, number) {
    var answer = 0;
    const expression = [new Set()];
    for(let i = 1; i<=8; i++){
        expression.push(new Set([new Array(i).fill(N).join('') * 1]));
        for(let j = 1; j<=i; j++){
            for(const express1 of [...expression[j]]){
                for(const express2 of [...expression[i-j]]){
                    expression[i].add(express1 + express2);
                    expression[i].add(express1 - express2);
                    expression[i].add(express1 * express2);
                    if(express2){
                        expression[i].add(express1 / express2);   
                    }
                }
            }
        }
        if(expression[i].has(number)){
            return i;
        }
    }
    return -1;
}