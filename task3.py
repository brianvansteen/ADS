A = [7, 5, 6, 3, 2, 1, 4, 8, 9]
B = [12, 9, 3, 12, 9]
n = len(A)

def R1 (key, A, B, n):
    loopA = range(n)
    arrayB = n // 2 + 1
    loopB = range(arrayB)
    for i in loopB:
        a = i * 2
        try:
            sum = A[a] + A[a+1]
        except:
            sum = A[a]
        print("Sum: ", sum)
        if sum != B[i]:
            return -2
    for j in loopA:
        if A[j] == key:
            print(A[j])
            return j
    return -1


print(R1(11, A, B, n))