// 3. Задатак

// Написати програм који рачуна просечну вредност бројева између N и M (укључујући оба):

// Просечна вредност свих бројева
// Просечна вредност бројева који садрже цифру 2

N = 10
M = 15

let count = 0
let zbir = 0
prosek = (M + N) / 2

console.log(prosek)

{
    for (N; N <= M; N++)

        count++
        zbir += N

    console.log('Prosek je:', zbir / count)
}

{
    for (N; N <= M; N++) {
        if ((zbir = M + N) || (N % 3 == 0))
            zbir +=
            count++
    }

    console.log('Prosecna vrednost je:', zbir / count)
}