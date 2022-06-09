array = [5, 2, 7, 3, 4];
n = 5

function hsort(array, n)
{
    swapped = 1;
    pos_min = 0;
    while (swapped == 1)
    {
        swapped = 0;
        min = pos_min;
        for (i = pos_min; i < n - 1; i++)
        {
            if (array[i + 1] < array[min])
            {
                min = i;
            };
            if (array[i] > array[i + 1])
            {
                aux = array[i];
                array[i] = array[i + 1];
                array[i + 1] = aux;
                swapped = 1;
            };
        };
        n = n - 1;
        aux = array[min];
        array[min] = array[pos_min];
        array[pos_min] = aux;
        pos_min = pos_min + 1;
    };
    return array;
};

result = hsort(array, n);
console.log(result);