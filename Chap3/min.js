// Минимум
// В предыдущей главе была представлена стандартная функция Math. min,
// которая возвращает наименьший из ее аргументов. Теперь мы можем сами
// создать нечто подобное. Напишите функцию min, которая принимает два
// аргумента и возвращает их минимум.

function min(a, b) { // Создаем функцию с двумя аргументами которые будем сравнивать
    if (a < b) { //если а меньше б то возвращаем а
        return a
        }else { //иначе возваращаем б
        return b
        }
    }

console.log(min(4, 2))