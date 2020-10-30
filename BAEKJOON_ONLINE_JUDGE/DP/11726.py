# 2Xn 타일링
# 2Xn 타일을 1X2, 2X1 타일로 채우는 방법을 구한다.

n = int(input())
cnt = [0,1,2]

for i in range(3,n+1) :
    cnt.append(cnt[i-1] + cnt[i-2])

print(int(cnt[n]%10007))