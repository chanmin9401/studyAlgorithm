# 이친수
# 0과 1로 이루어지며 1이 연속으로 등장하지 않는 수를 이친수라고 한다.
# N자리 수 중 이친수의 갯수를 구한다.

n = int(input())

zero_cnt = one_cnt = 0
if n == 1:
    one_cnt = 1
if n >= 2:
    zero_cnt = 1
if n >=3:
    for i in range(3,n+1):
        temp_zero = zero_cnt + one_cnt
        temp_one = zero_cnt
        zero_cnt = temp_zero
        one_cnt = temp_one

print(zero_cnt+one_cnt)