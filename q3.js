array1 = [6, 3, 9, 2];
array2 = [6, 3, 9, 2];
n = array1.length;
console.log("n: " + n);
newA = [];
newB = [];

function sort(array, n)
{
    for (i = 0; i < n; i++)
    {
        min = array.indexOf(Math.min(...array));
        console.log(array[min]);
        newA.push(array[min]);
        array.splice(min, 1);
        console.log(newA[i]);
    };
    return newA;
};

result = sort(array1, n);
console.log(result);

function sortOther(array, n)
{
    for (i = n; i > 0; i--)
    {
        min = array.indexOf(Math.min(...array));
        console.log(array[min]);
        newB.push(array[min]);
        array.splice(min, 1);
        console.log(newB[i]);
    };
    return newB;
};

result = sortOther(array2, n);
console.log(result);