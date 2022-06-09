A = [13, 18, 4, 21];
N = 4;
d = 2;

function s1(A, d)
{
    for (i = 0; i <= 0; i++)
    {
        console.log("i: " + i);
        A2 = s2(A, N, i)
        console.log("A2: " + A2);
    };
    return A2;
}

function s2(A, N, d)
{
    aR = [0, 0, 0, 0];
    r = 0;
    for (i = 0; i < 10; i++)
    {
        for (j = 0; j < N; j++)
        {
            dig = Math.floor(A[j] / (10^d)) % 10;
            console.log("aR: " + aR);
            if (dig == i)
            {
                aR[r] = A[j];
                r = r + 1;
            }
        }
    }
    return aR;
};

result = s1(A, d);
console.log(result);