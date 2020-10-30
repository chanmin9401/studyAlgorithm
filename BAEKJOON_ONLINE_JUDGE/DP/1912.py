# 연속합
# n개의 숫자 목록 중 연속된 몇개의 숫자를 더해서 얻을 수 있는 가장 큰 수를 구한다.

n= int(input())
num_array = list(map(int,input().split()))
sum_array = []

sum_array.append(num_array[0])

for i in range(1,len(num_array)) :
    sum_array.append(max(sum_array[i-1] + num_array[i], num_array[i]))
    
print(max(sum_array))