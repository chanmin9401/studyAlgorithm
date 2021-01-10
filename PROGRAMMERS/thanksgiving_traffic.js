// 추석 트래픽

// 이번 추석에도 시스템 장애가 없는 명절을 보내고 싶은 어피치는 서버를 증설해야 할지 고민이다. 장애 대비용 서버 증설 여부를 결정하기 위해 
// 작년 추석 기간인 9월 15일 로그 데이터를 분석한 후 초당 최대 처리량을 계산해보기로 했다.
// 초당 최대 처리량은 요청의 응답 완료 여부에 관계없이 임의 시간부터 1초(=1,000밀리초)간 처리하는 요청의 최대 개수를 의미

function solution(lines) {
    var answer = 0;
    var lines_array = [];
    var line_temp = null;
    var line_obj = [];
    var time = null;
    var time_array = null;
    var dur = null;
    
    lines.forEach((line) => {
        
        line_temp = line.split(' ');
        time_array = line_temp[1].split(':');
        time = time_array[0]*3600 + time_array[1]*60 + time_array[2]*1;
        dur = line_temp[2].substring(0,line_temp[2].length - 1) - 0.001;
        
        line_obj = [];
        line_obj.push(time-dur < 0 ? 0 : time-dur);
        line_obj.push(time);
        
        lines_array.push(line_obj);
        
    });   
    lines_array.sort((line_array1, line_array2) => { return line_array1[0] - line_array2[0];});
    
    var start_time = 0;
    var on_process = 0;
    for(let j = 0; j<lines_array.length; j++){
        
        start_time = lines_array[j][0];
        
        for(let i = 0; i<lines_array.length; i++){
            if((lines_array[i][0] >= start_time && lines_array[i][0] < start_time + 1)
                ||(lines_array[i][1] >= start_time && lines_array[i][1] < start_time + 1)
                ||(lines_array[i][0] < start_time && lines_array[i][1] >= start_time + 1)
              ) {
                on_process++;
            }
        }
        answer = answer < on_process ? on_process : answer;
        on_process = 0;
        start_time = lines_array[j][1];
        
        for(let i = 0; i<lines_array.length; i++){
            if((lines_array[i][0] >= start_time && lines_array[i][0] < start_time + 1)
                ||(lines_array[i][1] >= start_time && lines_array[i][1] < start_time + 1)
                ||(lines_array[i][0] < start_time && lines_array[i][1] >= start_time + 1)
              ) {
                on_process++;
            }
        }
        answer = answer < on_process ? on_process : answer;
        on_process = 0;
    }
    
    return answer;
}