# 1,2,3 더하기
# 입력된 정수를 1,2,3의 합으로 표현할 수 있는 방법의 가짓수를 구한다.

n = int(input())
cnt_array = [1,2,4]
for i in range(3,11) :
    cnt_array.append(cnt_array[i-1] + cnt_array[i-2] + cnt_array[i-3])
    
for a in range(n) :
    inp_num = int(input())
    print(cnt_array[inp_num-1])