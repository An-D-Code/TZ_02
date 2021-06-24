const rows = document.querySelectorAll('.value'),
      btnClose = document.querySelector('.table__close'),
      table = document.querySelector('.table')

const closeTable = () => {
    table.classList.add('hide')
    console.log('d')
}      

btnClose.addEventListener('click', closeTable)

// Данные таблицы, т.к. нет БД, создам их тут
const data = [
[500521, 480521],
[300000, 300000],
[100000, 100000],
[100521, 100521],
[1300, 900],
[1200, 800],
[1000, 1100],
[1300, 1300],
[34, 36],
[34, 36],
]

// Функция загрузки данных в таблицу
const loadDataInTable = () => {
data.forEach((arr, i) => {
    arr.forEach(value => {
        let td = document.createElement('td')
        td.innerHTML = value
        rows[i].append(td)
    })
})
}

// Функция рассчета разницы в % и присвоение соответствующих классов
const setPercent = () => {
data.forEach((values, i) => {
    const difference = values[0] - values[1]
    const percent = Math.floor(difference / values[1] * 100)
    const span = document.createElement('span')

    span.innerHTML = `${percent > 0 ? `+${percent}` : percent}%`
    rows[i].childNodes[4].append(span)
    
    if (percent > 0) {
        span.parentNode.classList.add('plus');
    } else if (percent < 0) {
        span.parentNode.classList.add('minus');
    }
})
}

// При загрузке страницы данные буду подгружаться в таблицу
loadDataInTable()

// Вызов функции рассчета процентов после подгрузки данных в таблицу
setPercent()

export default data