# 1로 만들기
# 주어진 수를 3으로 나누거나 2로 나누거나 1을 빼는 과정을 통해 1을 만들 수 있는 연산의 최소값을 구한다.

x = int(input())
count = 0
after_cal = [x]

def get_cal(list) : 
    rtn_list = []
    for a in list :
        if a%3 == 0 :
            rtn_list.append(a/3)
        if a%2 == 0 :
            rtn_list.append(a/2)
        rtn_list.append(a-1)
     
    return rtn_list   

while True :
    if x==1 :
        break
    temp = after_cal[:]
    after_cal = []
    after_cal = get_cal(temp)
    count += 1
    if min(after_cal) == 1 :
        break

print(count)