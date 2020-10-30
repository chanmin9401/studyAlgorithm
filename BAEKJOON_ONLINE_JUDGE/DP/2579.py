# 계단오르기
# 계단은 1칸 혹은 2칸 오를 수 있다. 연속해서 3칸의 계단을 오를 수 없다. 마지막 계단은 반드시 밟아야한다.
# 각 계단에 점수가 부여되어 있을 때, 계단을 올라서 얻을 수 있는 가장 높은 점수를 구한다.

n = int(input())
stair = [0 for i in range(301)]
answer = [0 for i in range(301)]

for i in range(n) : 
    stair[i] = int(input())

answer[0] = stair[0]
answer[1] = stair[0]+stair[1]
answer[2] = max(stair[0] + stair[2], stair[1] + stair[2])

for j in range(3,n) : 
    answer[j] = max(answer[j-3] + stair[j-1] + stair[j], answer[j-2] + stair[j])

print(answer[n-1])