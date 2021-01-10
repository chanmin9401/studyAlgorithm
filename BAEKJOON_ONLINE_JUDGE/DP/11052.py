# 카드 구매하기
# N장의 카드를 구매하기 위해 지불할 수 있는 최대 금액
# 정확히 N장을 구매해야하므로 버림을 통해 N장을 맞출 수는 없다.

n = int(input())
ans = [0] * (n+1)
prc = [0] + list(map(int, input().split()))

ans[1] = prc[1]

for i in range(2,n+1) :
    for j in range(0, i+1) :
        if ans[i] < ans[i-j] + prc[j] :
            ans[i] = ans[i-j] + prc[j]

print(ans[n])