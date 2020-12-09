# 다리 놓기
# N,M개의 사이트가 놓일때 N개의 다리를 놓을 수 있는 방법의 수(다리는 겹치게 놓을 수 없다.)

n= int(input())
bridge = []
for i in range(n) :
    num_array = list(map(int,input().split()))
    bridge.append(num_array)
# DP라기 보다는 순열 조합 경우의 수 공식으로 해결
for i in range(n) :
    method = 1
    for j in range(bridge[i][0]) :
        method *= (bridge[i][1]-j)
        method //= (j+1)
    
    print(method)