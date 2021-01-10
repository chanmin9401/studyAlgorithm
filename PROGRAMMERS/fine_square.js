// 멀쩡한 사각형

// WxH 직사각형의 종이가 있고 1cm x 1cm의 정사각형들로 격자표시가 되어있다.
// 누군가 양꼭지점을 기준으로 종이를 잘라놓았을 때, 사용할 수 있는 멀쩡한 1cm x 1cm 정사각형의 갯수를 구하시오.

function solution(w,h){
	var answer = 1;
    var gcd = 1;         
  
  var min = Math.min(w,h);
  for(var i=min; i>0; i--){
    if((w%i===0) && (h%i===0)){
      gcd = i;
      break;
    }
  }
    answer = w*h - (w+h-gcd);
	return answer;
}