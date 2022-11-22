/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let ans = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 == 0) ans += i;
    }
    return ans;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let ans = 0;
    while (a > 0.1) {
        a /= 2;
        ans++;
    }
    return ans;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let buf = '_';
    let i = 1;
    do {
        if (i % 3 === 0)
            message =
                message.substring(0, i - 1) +
                buf +
                message.substring(i, message.length + 1);
        i++;
    } while (i <= message.length);
    return message;
}
