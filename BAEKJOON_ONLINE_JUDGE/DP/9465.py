# 스티커
# 2xn 형태의 스티커가 있다.
# 하나의 스티커를 떼면 인접한 스티커는 찢어져서 뗄 수 없다.
# 각각의 스티커에 점수가 부여될 때 가장 높은 점수를 얻을 수 있게 떼어보자

n = int(input())

len = []
ans = []
anslist = []

for i in range(n) :
    len.append(int(input()))
    ans.append(list(map(int, input().split())))        
    ans.append(list(map(int, input().split())))
    anslist.append(ans)
    ans = []

for i in range(n) :
    anslist[i][0][1] += max(anslist[i][1][0],0)
    anslist[i][1][1] += max(anslist[i][0][0],0)
    for j in range(2,len[i]) :
        anslist[i][0][j] += max(anslist[i][1][j-1],anslist[i][1][j-2])
        anslist[i][1][j] += max(anslist[i][0][j-1],anslist[i][0][j-2])
    print(max(anslist[i][0][len[i]-1],anslist[i][1][len[i]-1]))