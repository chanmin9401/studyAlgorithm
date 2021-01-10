// 스킬트리

// 선행 스킬 순서 skill과 유저들이 만든 스킬트리1를 담은 배열 skill_trees가 매개변수로 주어질 때, 가능한 스킬트리 개수를 return

function solution(skill, skill_trees) {
    var answer = 0;
    var skillArray = skill.split('');
    var skillTree = '';
    var skillString = new Array();
    var flag = true;
    
    for(var i = 0; i<skill_trees.length; i++){
        skillString = [];
        skillTree = skill_trees[i].split('');
        
        while(skillTree.length){
            if(skillArray.indexOf(skillTree[0]) > -1){
                skillString.push(skillTree[0]);            
            }
            skillTree.shift();
        }
        for(var j = 0; j<skillString.length; j++){
            if(skillString[j] != skill[j]){
                flag = false;
            }    
        }
        if(flag){
            answer++;
        }
        flag = true;
    }
        
    return answer;
}