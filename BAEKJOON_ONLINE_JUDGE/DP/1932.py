# 정수 삼각형
# 삼각형의 끝부터 왼쪽 혹은 오른쪽 대각선 아래의 숫자로 이동하며 더한 숫자의 합중 가장 큰 값을 구한다.

n = int(input())
triangle = []
for i in range(n):
    triangle.append(list(map(int,input().split())))
    
for i in range(n-1):
    for j in range(len(triangle[i+1])) :
        if j == 0 :
            triangle[i+1][j] += triangle[i][j]
        elif j == len(triangle[i+1])-1 :
            triangle[i+1][j] += triangle[i][j-1]
        else :
            triangle[i+1][j] += max(triangle[i][j],triangle[i][j-1])

print(max(triangle[n-1]))
