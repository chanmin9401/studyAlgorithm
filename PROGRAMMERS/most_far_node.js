//가장 먼 노드

//bfs를 이용하여 노드 1로부터 가장 멀리 떨어진 노드가 몇개인지 return

function solution(n, edge) {
    var answer = 0;
    // bfs는 queue를 활용하자
    var queue = new Array();
    var visited = new Array(n+1);
    var distance = new Array(n+1);
    
    queue.push(1);
    visited[1] = true;
    distance[1] = 0;
    distance[0] = 0;
    
    while(queue.length){
        let now = queue.shift();
        let level = distance[now] + 1;
        
        edge.forEach((edge_now) => {
            if(edge_now[0] == now && !visited[edge_now[1]]){
                queue.push(edge_now[1]);
                distance[edge_now[1]] = level;
                visited[edge_now[1]] = true;
            }else if(edge_now[1] == now && !visited[edge_now[0]]){
                queue.push(edge_now[0]);
                distance[edge_now[0]] = level;
                visited[edge_now[0]] = true;
            }
        });
    }
    var max_dist = Math.max.apply(null,distance);
    
    distance.forEach((dist) => {
        if(dist == max_dist){
            answer++;
        }
    });
    
    return answer;
}