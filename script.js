const MAX_TIME = parseInt(prompt('Сколько времени считаем?', 60))

let time = MAX_TIME
let timer = setInterval(() => {
	time -= 1
	updateRing()
	updateLabel()
	if (time <= 0) clearInterval(timer)
	console.log(time)
}, 1000)

function updateRing() {
	let progr = time / MAX_TIME
	document.querySelector('.ring').style.setProperty('--progress', progr + 'turn')
}
function updateLabel() {
	let mins = Math.floor(time / 60).toString()
	let secs = Math.round(time % 60).toString()
	document.querySelector('.count').innerText = `${'00'.substr(mins.length) + mins}:${'00'.substr(secs.length) + secs}`
}