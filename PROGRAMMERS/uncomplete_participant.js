// 완주하지 못한 선수

// 마라톤 참가 명단과 완주자 명단이 있다.
// 완주를 못한 선수는 단 한명일때, 완주하지 못한 선수의 이름을 return

function solution(participant, completion) {
    var answer = '';
    
    var p = participant.sort();
    var c = completion.sort();
    
    for(var i = 0 ; i< c.length; i++){
        if(c[i] != p[i]){
            answer = p[i];
            break;
        }
    }
    if(answer == ''){
        answer = p[p.length-1];
    }
    
    return answer;
}