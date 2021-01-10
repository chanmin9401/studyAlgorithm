# 퇴사
# 남은 N일동안 일을 하고 가장 높은 수당을 받고 싶을 때 받을 수 있는 최대 수익
n = int(input())
t = []
p = []
ans = [0]
for i in range(n) :
    a, b = map(int, input().split())
    t.append(a)
    p.append(b)
    ans.append(0)

for i in range(n-1, -1, -1) :
    if i+t[i] > n :
        ans[i] = ans[i+1]
    else :
        ans[i] = max(ans[i+1], p[i] + ans[i+t[i]])

print(ans[0])
