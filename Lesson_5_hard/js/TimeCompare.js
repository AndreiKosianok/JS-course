function timeCompare() {
	// получаем дату из форм
let getStartDay = document.getElementById('dateStart').value.split('/'),
	getEnd = document.getElementById('dateEnd').value.split('/'),
	// переводим в нужный формат
	dateStartCombined = new Date(getStartDay[2], getStartDay[0], getStartDay[1]),
	dateEndCombined = new Date(getEnd[2], getEnd[0], getEnd[1]);
	// условия расчёта
	if (dateStartCombined.getTime() > dateEndCombined.getTime()) { // расчёты когда начальное число больше конечного

		let timeDifference = Math.abs(dateStartCombined.getTime() - dateEndCombined.getTime()),
			DaysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

		document.getElementById('dayCount').value = DaysDifference;

	} else { //когда конечное больше начального

		let timeDifference = Math.abs(dateEndCombined.getTime() - dateStartCombined.getTime()),
			DaysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

		document.getElementById('dayCount').value = DaysDifference; 
		}
}