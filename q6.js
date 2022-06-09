array = [5, 2, 7, 3, 8];
low = 0;
high = 4;

function sort(array, low, high)
{
    ele = array[high];
    console.log(ele);
    i = low;
    console.log("i: " + i);
    for (j = i; j < high; j++)
    {
        console.log("j: " + j);
        if (array[j] <= ele)
        {
            array[i] = array[j];
            i = i + 1;
        }
    }
    array[high] = array[i];
    return i;
};

result = sort(array, low, high);
console.log(result);