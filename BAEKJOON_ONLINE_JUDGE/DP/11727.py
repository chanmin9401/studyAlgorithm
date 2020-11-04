# 2xn 타일링 2
# 1x2, 2x1, 2x2 타일을 이용하여 2xn 사각형을 채우는 방법의 수를 구한다.

n = int(input())

tile = [1,3]

for i in range(2,n) :
    tile.append(tile[i-2]*2 + tile[i-1])
    
print(tile[n-1])