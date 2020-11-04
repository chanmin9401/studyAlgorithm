# 쉬운 계단 수
# 인접한 수와 1차이 나는 수로 이루어진 수열 -> 계단수
# N자리 계단 수의 갯수를 구한다.

n = int(input())
answer = [[0,1,1,1,1,1,1,1,1,1]]

for i in range(1,n) :
    answer.append([0,0,0,0,0,0,0,0,0,0])
    for j in range(0,10) :
        if j == 0 :
            answer[i][j] = answer[i-1][1]
        elif j == 9 :
            answer[i][j] = answer[i-1][8]
        else :
            answer[i][j] = answer[i-1][j-1] + answer[i-1][j+1]
        
print(sum(answer[n-1])%1000000000)