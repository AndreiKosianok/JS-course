let age = document.getElementById('age'),
	surname = 'Васисуалий',
	name = 'Чуковский';

showUser.call(age, surname, name);

function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
};

