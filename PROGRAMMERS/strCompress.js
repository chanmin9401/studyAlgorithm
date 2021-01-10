// 문자열 압축

// 문자열이 주어질때, n자리 수 단위로 압축을 할 경우 가장 짧아지는 압축된 문자열의 길이를 return

function strCompress(index, str){
    
    var length = 0;
    var coefficient = 1;
    var strArray = [];
    
    for(var i = 0; i<str.length; i = i+index){
        strArray.push(str.substring(i,i+index));
    }
    for(var j = 0; j<strArray.length-1; j++){
        if(strArray[j] == strArray[j+1]){
            coefficient++;
        }else{
            if(coefficient > 1){
                length = length + coefficient.toString().length + index;
            }else{
                length += index;
            }   
            coefficient = 1;
        }
    }
    if(coefficient > 1){
        length = length + coefficient.toString().length + index;
    }
    if(strArray[strArray.length-2] != strArray[strArray.length-1]){
        length += strArray[strArray.length-1].length;
    }
    return length;
}

function solution(s) {
    var length = s.length;
    var subStrIndex = 0;
    var chkLength = 0;
    var answer = length;
    
    for(subStrIndex = 1; subStrIndex <= length/2; subStrIndex++){
        chkLength = strCompress(subStrIndex, s);
        answer = answer > chkLength ? chkLength : answer;
    }
    return answer;
}