// 삼각 달팽이

// 반시계방향으로 삼각형을 숫자로 채운 후 각 행을 합쳐서 반환

function solution(n) {
    var answer = [];
    var triangle = [];
    var count = 0;
    
    for(var i = 0; i<n; i++){
        
        var temp = [];
        
        for(var j = 0; j<i+1; j++){
            temp.push(0);    
        }
        
        triangle.push(temp);
        count += i+1;
    }
    
    var num = 1;
    var x = 0, y = 0;
    
    triangle[x][y] = num;
    
    while(num < count){
        
        while(x + 1 < n && triangle[x+1][y] == 0){
            triangle[++x][y] = ++num;
        }
        
        while(y + 1 < n && triangle[x][y+1] == 0){
            triangle[x][++y] = ++num;
        }
         
        while(triangle[x-1][y-1] == 0){
            triangle[--x][--y] = ++num;
        }       
    }
    
    for(var i = 0; i<triangle.length; i++){
        answer = answer.concat(triangle[i]);
    }
    
    return answer;
}