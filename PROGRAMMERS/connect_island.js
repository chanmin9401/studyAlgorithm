// 섬 연결하기

// 섬이 n개 있고 연결정보와 cost가 명시된 array가 있을때 모든 섬이 연결되는 최소 연결 비용을 구하라
// a,b가 연결되어 있고 b,c가 연결되어 있는 경우 a,c는 연결되어 있는 것으로 판단

function solution(n, costs) {
    var answer = 0;
    
    costs.sort((cost1, cost2)=>(cost1[2] - cost2[2]));
    let connection = [costs[0][0]];
    
    while(connection.length != n){
        for(var i = 0; i<costs.length; i++){
            if(connection.includes(costs[i][0]) && connection.includes(costs[i][1])){
                continue;
            }else if(connection.includes(costs[i][0]) || connection.includes(costs[i][1])){
                connection.push(costs[i][0]);
                connection.push(costs[i][1]);
                connection = Array.from(new Set(connection));
                answer += costs[i][2];
                costs.splice(i,1);
                break;
            }
        }   
    }
    
    return answer;
}