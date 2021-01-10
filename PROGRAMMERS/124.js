// 124 나라

// 124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용
// 자연수 n이 매개변수로 주어질때 n을 124나라에서 사용하는 숫자로 바꾼 값을 return
function solution(n) {
    var answer = '';
    
    while(n>0){
        if(n%3 === 0){
            answer = '4' + answer;
            n = Math.floor(n/3) - 1;
        }else if(n%3 === 1){
            answer = '1' + answer;
            n = Math.floor(n/3);
        }else if(n%3 === 2){
            answer = '2' + answer;
            n = Math.floor(n/3);
        }
    }
       
    return answer;
}