# 파도반 수열
# 삼각형을 이용하여 나선을 만들때 P(N)은 나선에 존재하는 가장 긴 변의 길이

T = int(input())
N = [int(input()) for i in range(T)]

spiral = [1,1,1,2,2,3,4,5,7,9]

for i in range(10,100) :
    spiral.append(spiral[i-1]+spiral[i-5])

for i in range(T) :
    print(spiral[N[i]-1])        
