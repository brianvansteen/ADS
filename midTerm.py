loop = [0, 1, 2, 3]
A = [7, 5, 6, 4]
n = len(A)
B = [5, 4, 7, 6]
# B = [0, 0, 0, 0]
a = 3
b = 1

def R1 (key, a, b, A, B, n):
    for i in loop:
        result = ((a * A[i] + b) % n)
        if B[result] != A[i]:
            return -2
    for j in loop:
        if A[j] == key:
            print(A[j])
            return j
    return -1


print(R1(51, a, b, A, B, n))