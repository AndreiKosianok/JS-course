function timeCompare() {
	// получаем дату из форм
let getStartDay = document.getElementById('dateStart').value.split('/'),
	getEnd = document.getElementById('dateEnd').value.split('/'),
	dateStartCombined = new Date(getStartDay[2], getStartDay[0], getStartDay[1]),
	dateEndCombined = new Date(getEnd[2], getEnd[0], getEnd[1]);

	if (dateStartCombined.getTime() > dateEndCombined.getTime()) {
		
		let timeDifference = Math.abs(dateStartCombined.getTime() - dateEndCombined.getTime()),
			DaysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

		document.getElementById('dayCount').value = DaysDifference;

	} else {

		let timeDifference = Math.abs(dateEndCombined.getTime() - dateStartCombined.getTime()),
			DaysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

		document.getElementById('dayCount').value = DaysDifference; 
		}
}