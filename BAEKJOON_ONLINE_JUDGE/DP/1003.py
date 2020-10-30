# 피보나치
# 피보나치 함수를 호출하면 0과1이 몇번 호출되는지 구한다.

n = int(input())
zero_cnt = [1,0,1]
one_cnt = [0,1,1]

def cal_fib(num) :
    if len(zero_cnt) <= num :
        for j in range(len(zero_cnt),num+1) :
            zero_cnt.append(zero_cnt[j-1] + zero_cnt[j-2])
            one_cnt.append(one_cnt[j-1] + one_cnt[j-2])
    print(zero_cnt[num], one_cnt[num])

for i in range(n) :
    num = int(input())
    cal_fib(num)
    