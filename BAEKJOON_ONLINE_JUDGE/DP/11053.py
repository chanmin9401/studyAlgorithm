# 가장 긴 증가하는 부분 수열
# 수열이 주어졌을 때, 증가하는 부분 수열 중 가장 긴 부분 수열의 길이를 구한다.

n= int(input())
num_array = list(map(int,input().split()))
dp = [1]*n

for i in range(1,n) :
    for j in range(i) :
        if num_array[i] > num_array[j] :
            dp[i] = max(dp[i], dp[j]+1)

print(max(dp))