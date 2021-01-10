// 프린터

// 현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities와 
// 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location이 매개변수로 주어질 때, 
// 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return

function solution(priorities, location) {
    var answer = 1;
    var temp = 0;
    while(priorities.length){
        temp = priorities.shift();
        
        if(priorities.some(value => value > temp)){
            priorities.push(temp);
        }else{
            if(location === 0){
                break;
            }else{
                answer++;
            }
        }
        
        if(location === 0){
            location = priorities.length - 1;
        }else{
            location--;
        }
    }
    
    return answer;
}