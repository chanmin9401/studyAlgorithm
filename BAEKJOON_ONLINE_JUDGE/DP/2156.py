# 포도주 시식
# n잔의 포도주, 2잔까지는 연속으로 시식가능, 3잔연속 시식 불가능일 때 최대로 마실 수 있는 포도주의 양을 구한다.

n = int(input())

wine_array = [int(input()) for i in range(n)]
drink_cnt = []
drink_cnt.append(wine_array[0])

if n > 1:
    drink_cnt.append(wine_array[0]+wine_array[1])
if n > 2:
    drink_cnt.append(max(wine_array[0]+wine_array[1], wine_array[1]+wine_array[2], wine_array[0]+wine_array[2]))
    for i in range(3,n):
        drink_cnt.append(max(drink_cnt[i-2]+wine_array[i],drink_cnt[i-3]+wine_array[i-1]+wine_array[i], drink_cnt[i-1]))
        
print(drink_cnt[n-1])
