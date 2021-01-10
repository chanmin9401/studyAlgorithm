// 다리를 지나는 트럭

// 다리 길이 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭별 무게 truck_weights가 주어질 때 
// 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return

function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    var index = 1;
    
    const bridge_queue = [];
    var weight_on_bridge = truck_weights[0];
    
    for(var i = 0; i < bridge_length; i++){
        bridge_queue.push(0);
    }
    
    bridge_queue.shift();
    bridge_queue.push(truck_weights[0]);
    answer++;
    
    while(weight_on_bridge > 0){
        if(bridge_queue[0] > 0){
            weight_on_bridge = weight_on_bridge - bridge_queue[0] ;
        }
        bridge_queue.shift();
        if(weight_on_bridge + truck_weights[index] <= weight){
            bridge_queue.push(truck_weights[index]);
            weight_on_bridge = weight_on_bridge + truck_weights[index];
            index++;
        }else{
            bridge_queue.push(0);
        }
        answer++;
    }
    
    return answer;
}