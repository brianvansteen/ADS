array = [4, 21, 35, 1, 9, 94];
low = 0;
mid = 2;
high = 5;
a = [];
b = [];
c = [];

function f(array, low, mid, high)
{
    for (i = 0; i <= mid; i++)
    {
        b[i] = array[i];
        console.log("b: " + b);
    };
    for (i = 0; i < high - mid; i++)
    {
        c[i] = array[i + mid + 1];
        console.log("c: " + c);
    };
    i = 0;
    j = 0;
    k = 0;
    while (i <= mid && j < high - mid)
    {
        if (b[i] < c[i])
        {
            a[k] = b[i];
            console.log("a[k]: " + a[k]);
            i = i + 1;
        }
        else
        {
            a[k] = c[j];
            console.log("a[k][c]: " + a[k]);
            j = j + 1;
        };
        if (i > mid)
        {
            for (m = j; m < high - mid; m++)
            {
                a[k] = c[m];
                console.log("a[k][c[m]]: " + a[k]);
                k = k + 1;
            };
        };
        if (j >= high - mid)
        {
            for (m = i; m < mid + 1; m++)
            {
                a[k] = b[m];
                console.log("a[k][b[m]]: " + a[k]);
                k = k +1;
            };
        };
    };
    return a;
};

result = f(array, low, mid, high);
console.log(result);