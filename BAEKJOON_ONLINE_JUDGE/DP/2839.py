# 설탕배달
# 3,5키로 봉지를 이용하여 설탕을 배달할 때 필요한 최소한의 봉지 수를 구한다.

n = int(input())
count = 0

while True :
    if (n%5) == 0 :
        count += (int(n/5))
        break
    else :
        if n > 3 :
            n -= 3
            count += 1
        elif n == 3 :
            count += 1
            break
        elif n < 3 :
            count = -1
            break
        
print(count)