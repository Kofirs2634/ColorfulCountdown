;(function() {
    const MAX_TIME = setTime()

    let time = MAX_TIME
    let ringProgr = MAX_TIME * 100

    updateLabel()

    let timer = setInterval(() => {
        time -= 1
        updateLabel()
        if (time == 0) {
            alert('Отсчет закончился!')
            clearInterval(timer)
        }
    }, 1000)

    let ringTimer = setInterval(() => {
        ringProgr -= 1
        updateRing()
        if (ringProgr == 0) clearInterval(ringTimer)
    }, 10)

    function setTime() {
        let time = parseInt(prompt('Сколько времени считаем (в секундах)?', 60))
        while (time <= 0 || time > 360000) {
            time = parseInt(prompt('Нет, минимум можно поставить 1 секунду, а максимум - 100 часов. Так сколько считаем?', 60))
        }
        return time
    }

    function updateRing() {
        let progr = ringProgr / (MAX_TIME * 100)
        document.querySelector('.ring').style.setProperty('--progress', progr + 'turn')
    }

    function updateLabel() {
        let hrs = Math.floor(time / 3600).toString()
        let mins = Math.floor(time % 3600 / 60).toString()
        let secs = Math.ceil(time % 60).toString()
        document.querySelector('.count').innerText = `${hrs.padStart(2, '0')}:${mins.padStart(2, '0')}:${secs.padStart(2, '0')}`
    }
})();