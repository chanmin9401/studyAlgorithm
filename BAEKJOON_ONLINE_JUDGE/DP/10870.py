# 피보나치 수 5
# 입력이 0인 경우도 고려

n = int(input())

# index = 0,1,2
fib = [0,0,1]

for i in range(3,n+2) :
    fib.append(fib[i-1]+fib[i-2])

print(fib[n+1])