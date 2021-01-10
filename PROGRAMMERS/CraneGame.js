// 크레인 인형뽑기 게임

// 같은 모양의 인형이 바구니에 연속으로 담긴 경우 인형이 터짐
// 게임 화면의 격자의 상태가 담긴 2차원 배열 board와 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로 주어질 때, 
// 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return

function solution(board, moves) {
    var answer = 0;
    var level = board.length;
    var basket = new Array();
    
    moves.forEach((move)=>{
      for(var i = 0; i<level; i++){
        if(board[i][move-1] != 0){
            if(basket[basket.length-1] == board[i][move-1]){
                basket.pop();
                answer+=2;
            }else{
                basket.push(board[i][move-1]);
            }
            board[i][move-1] = 0;
            break;
        }
      }
    });
    return answer;
}