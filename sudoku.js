const { EOL } = require("os");

function read(nameFile) {
	const text = fs.readFileSync(`${__dirname}/${nameFile}`, "utf-8");
	const string = text.trim().split(EOL);
	const mainarr = [];
	for (elem of string) {
		for (let i = 0; i < elem.length; i += 9) {
			mainarr.push(elem.slice(i, i + 9));
		}
	}

	const arrstr = [];
	for (let i = 0; i < mainarr; i += 9) {
		string.push(mainarr.slice(i, (i += 9)));
	}


	for (let i = 0; i < arrstr.length; i++) {
		for (let j = 0; j < arrstr[i].length; j++) {
			arrstr[i][j] = arrstr[i][j].split("");
		}
	}
	return arrstr;
}

/**
 * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
 */

function solve() {
	/**
	 * Принимает игровое поле в том формате, в котором его вернули из функции read.
	 * Возвращает игровое поле после попытки его решить.
	 */
}

function isSolved() {
	/**
	 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
	 * Возвращает булевое значение — решено это игровое поле или нет.
	 */
}

function prettyBoard() {
	/**
	 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
	 * Выводит в консоль/терминал судоку.
	 * Подумай, как симпатичнее его вывести.
	 */
}

