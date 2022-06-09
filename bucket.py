array = [20, 2, 1, 0, 5]
n = len(array)
max = max(array) + 1
b = []

print(array)
print(n)
print(max)

for i in array:
    val = (i * n) // max
    b.append(val)

print(b)