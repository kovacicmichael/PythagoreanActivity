
//array of coorodinate objects
const coordArray = [
	{
		name: 'coord1',
		x: 10,
		y: 5,
		id: 1
	},
	{
		name: 'coord2',
		x: 15,
		y: 20,
		id: 2
	},
	{
		name: 'coord3',
		x: -15,
		y: -10,
		id: 3
	},
	{
		name: 'coord4',
		x: -5,
		y: 5,
		id: 4
	},
	{
		name: 'coord5',
		x: 8,
		y: -7,
		id: 5
	}
];
//set the variables for the shortest and second shortest coordinate objects and their cooresponding distance values
let shortestDistCoord = [];
let secondShortDistCoord = [];
let shortestC = 10000;
let secondShortC = 10000;

function measureDist (){

	for(var i = 0; i < coordArray.length; i++){
		let x1 = coordArray[i].x;
		let y1 = coordArray[i].y;
		for(var j = i + 1; j < coordArray.length; j++){
			let x2 = coordArray[j].x;
			let y2 = coordArray[j].y;

			let a = (x1-x2);
			let b = (y1-y2);
			let c = Math.sqrt( a*a + b*b );

			console.log("Distance between " + coordArray[i].name + " and " + coordArray[j].name + " is " + c);
			//saves the shortest distances and their objects in variables
			if(c < shortestC){
				shortestDistCoord = [];
				shortestC = c;
				shortestDistCoord.push(coordArray[i]);
				shortestDistCoord.push(coordArray[j]);
			}else if(c < secondShortC && c != shortestC){
				secondShortDistCoord = [];
				secondShortC = c;
				secondShortDistCoord.push(coordArray[i]);
				secondShortDistCoord.push(coordArray[j]);
			}
		}

	}
}

measureDist();

console.log("The shortest distance is between " + shortestDistCoord[0].name + " and " + shortestDistCoord[1].name + ": with a value of " + shortestC);
console.log("The SECOND shortest distance is between " + secondShortDistCoord[0].name + " and " + secondShortDistCoord[1].name + ": with a value of " + secondShortC);






