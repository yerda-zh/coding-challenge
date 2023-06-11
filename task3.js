// 3 TASK
// function that converts HEX to RGB.
// The user has to enter either in '' for HEX or using brackets ([]) for RGB values.

// Firstly we check the length of the entered values, if it is 6, we convert it to RGB 
// There is a loop that takes values of hex as pairs and performs operations, converting into RGB
// But before that, if there are letters in the input, in converts them into their respective integer values
// using swhitch case

// if it is 3, we convert it to HEX values. each item of the RGB array is divided into 2 parts which is
// then put together to form one pair of HEX values. If there are some numbers that exceed 9,
// it converts them into their respective letters using swhitch case.
// then, each pair is pushed into a HEX array with is after the loop finishes desplayed together without commas.

const colorConverter = (color) => {
	let rgbColor;
	let rgbFinal = [];
	let hexFinal = [];
	if (color.length === 6)
	{
		for(let i=0; i<5; i += 2)
		{

			let num1 = color.at(i);
			let num2 = color.at(i+1);

			switch(num1) {
			case 'A':
				num1 = 10;
				break;
			case 'B':
				num1 = 11;
				break;
			case 'C':
				num1 = 12;
				break;
			case 'D':
				num1 = 13;
				break;
			case 'E':
				num1 = 14;
				break;
			case 'F':
				num1 = 15;
				break;
			}
			switch(num2) {
			case 'A':
				num2 = 10;
				break;
			case 'B':
				num2 = 11;
				break;
			case 'C':
				num2 = 12;
				break;
			case 'D':
				num2 = 13;
				break;
			case 'E':
				num2 = 14;
				break;
			case 'F':
				num2 = 15;
				break;
			}

			rgbColor = Number(num1)*16 + Number(num2);
			rgbFinal.push(rgbColor);
		}
		return `The RGB values: ${rgbFinal}`;
	} else if (color.length === 3)
	{	
		for(let i=0; i<color.length; i++)
		{

			let hex1 = Math.floor(color.at(i)/16);
			let hex2 = color.at(i) % 16;

			switch(hex1) {
			case 10:
				hex1 = 'A';
				break;
			case 11:
				hex1 = 'B';
				break;
			case 12:
				hex1 = 'C';
				break;
			case 13:
				hex1 = 'D';
				break;
			case 14:
				hex1 = 'E';
				break;
			case 15:
				hex1 = 'F';
				break;
			}
			switch(hex2) {
			case 10:
				hex2 = 'A';
				break;
			case 11:
				hex2 = 'B';
				break;
			case 12:
				hex2 = 'C';
				break;
			case 13:
				hex2 = 'D';
				break;
			case 14:
				hex2 = 'E';
				break;
			case 15:
				hex2 = 'F';
				break;
			}

			hexFinal.push(String(hex1) + String(hex2));
		}
		return `The HEX values: ${hexFinal.join('')}`;
	} else 
	{
		return `Wrong formate, please enter HEX values in as 6 digits or RBG values as 3 integers`;
	}
}
colorConverter([66, 135, 245]);
colorConverter('4287F5');