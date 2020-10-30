# RGB거리
# 각각의 집을 빨강, 초록, 파랑으로 칠하는 비용이 주어졌을 때, 모든 집을 칠하는 비용의 최솟값을 구한다.

n = int(input())

least_fee = []
for i in range(n):
    least_fee.append(list(map(int, input().split())))

for j in range(1,n):
    least_fee[j][0] = least_fee[j][0] + min(least_fee[j-1][1], least_fee[j-1][2])
    least_fee[j][1] = least_fee[j][1] + min(least_fee[j-1][0], least_fee[j-1][2])
    least_fee[j][2] = least_fee[j][2] + min(least_fee[j-1][0], least_fee[j-1][1])
    
print(min(least_fee[n-1][0], least_fee[n-1][1], least_fee[n-1][2]))
    