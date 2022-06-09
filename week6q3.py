array = [5, 1, 9, 3, 7]
n = len(array) - 1
b = []
indx = 0

while indx < len(array):
    print("idx: ", indx)
    val = min(array)
    idx = array.index(val)
    print(val, idx)
    b.append(val)
    array.remove(val)
    print(array)

print(b)