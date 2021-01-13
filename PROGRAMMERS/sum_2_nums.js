// 두개 뽑아서 더하기

// 정수 배열에서 두 개의 숫자를 꺼내 더한 후 새로운 배열에 넣어 오름차순으로 정렬한다.
// 중복된 결과값은 배제한다.
// Set을 활용하면 코드가 깔끔 -> 아니어도 많이 지저분한 정도는 아님

function solution(numbers) {
    var answer = [];
    var sums = [];
    for(var i = 0; i<numbers.length-1; i++){
        for(var j = i+1; j<numbers.length; j++){
            sums.push(numbers[i] + numbers[j]);
        }
    }
    answer = Array.from(new Set(sums.sort((a,b) => a-b)));
    
    return answer;
}