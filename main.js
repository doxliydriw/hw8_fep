// Вивести числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5….)
i = 20
res = 0
while (i <= 30) {
    res = res + i + ' '
    i +=0.5
}
console.log(res)
// Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
res = 0
usd = 10
while (usd <= 100) {
    console.log(usd+' долларів коштує ' + (usd * 40) + ' гривень')
    usd += 10
}
// Дано ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N
let numb = Number(prompt ('Введіть ціле число'))
res = []
for (let i = 1; i <= 100; i++) {
    if (i ** 2 < numb) {
        res.push(i)
    }
}
console.log(res)
// Дано ціле число. З'ясувати, чи воно простим (простим називається число, більше ніж 1, які мають інших дільників крім 1 і себе).
for (let i = 2; i <= ((numb ** 0.5)-((numb**0.5)%1) + 1); i++) {
    // console.log(((numb ** 0.5)-((numb**0.5)%1) + 1))
    // console.log(i)  
    if (numb % i == 0) {
        console.log(numb + ' не просте число')
        break
    } else if (i == ((numb ** 0.5)-((numb**0.5)%1) + 1)) {
        console.log(numb + ' просте число')
        break
    }
}
// Дано кілька. Визначити, чи можна одержати це число шляхом зведення числа 3 деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна)
res = 0
i = 1
while (res <= numb) {
    res = 3 ** i
        if (res == numb) {
        console.log(numb + ' можна одержати шляхом зведення числа 3 y ступінь ' + i)
        break
    } else if (res > numb) {
        console.log('Не можна одержати це число шляхом зведення числа 3 деякий ступінь')
    }
    i += 1
}
