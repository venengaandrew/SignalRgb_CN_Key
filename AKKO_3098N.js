export function Name() { return "AKKO 3098N"; } //名称
export function VendorId() { return 0x320F; }
export function ProductId() { return 0x506A; }
export function Publisher() { return "随机复读的复读姬"; } //发布者
export function Documentation() { return "gettingstarted/srgbmods-net-info"; }
export function Size() { return [21, 6]; }
export function DefaultPosition(){return [10, 100]; }
export function DefaultScale(){return 8.0}
export function ControllableParameters() {
	return [
		{"property":"shutdownColor", "group":"lighting", "label":"Shutdown Color", "min":"0", "max":"360", "type":"color", "default":"009bde"},
		{"property":"LightingMode", "group":"lighting", "label":"Lighting Mode", "type":"combobox", "values":["Canvas", "Forced"], "default":"Canvas"},
		{"property":"forcedColor", "group":"lighting", "label":"Forced Color", "min":"0", "max":"360", "type":"color", "default":"009bde"},
	];
}
/* 
Time:2023/3/19
Author: 随机复读的复读姬(Skikdd)
Version:V0.1
*/
const vKeys = 
[
    0,   12,18,24,30,36,42,48,54,60,66,72,78, 86,85,97,98,
	1, 7,13,19,25,31,37,43,49,55,61,67,73,79, 103,109,115,121,
	2, 8,14,20,26,32,38,44,50,56,62,68,74,80, 104,110,116,
	3, 9,15,21,27,33,39,45,51,57,63,69,   81, 105,111,117,122,
	4,   16,22,28,34,40,46,52,58,64,70, 82,94,106,112,118,
	5,11,17,         41,      65,71, 83,89,95,101,113,119,124,
];
const vKeyPositions = 
[
	[0, 0],      [2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0],[13,0],[14,0],[15,0],[16,0],[17,0],
	[0, 1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],[12,1],[13,1],[14,1],[15,1],[16,1],[17,1],
	[0, 2],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],[10,2],[11,2],[12,2],[13,2],[14,2],[15,2],[16,2],
	[0, 3],[1,3],[2,3],[3,3],[4,3],[5,3],[6,3],[7,3],[8,3],[9,3],[10,3],[11,3],       [13,3],[14,3],[15,3],[16,3],[17,3],
	[0, 4],      [2,4],[3,4],[4,4],[5,4],[6,4],[7,4],[8,4],[9,4],[10,4],[11,4],[12,4],[13,4],[14,4],[15,4],[16,4],
	[0, 5],[1,5],[2,5],            [5,5],                  [9,5],[10,5],[11,5],[12,5],[13,5],[14,5],[15,5],[16,5],[17,5]
 ];
const vKeyNames = 
[
	"Esc",  "F1","F2","F3","F4",   "F5","F6","F7","F8",  "F9","F10", "F11","F12","DEL", "INS","PGUP","PGDN",
	"`", "1","2","3","4", "5", "6",  "7", "8", "9","0","-","+",      "BACKSPACE","NUM","KEY/", "KEY*", "KEY-",
	"TAB",  "Q","W", "E",  "R", "T", "Y", "U", "I","O","P","[","]",  "\\",       "KEY7","KEY8","KEY9",
	"CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L",";","'",  "Enter",            "KEY4","KEY5","KEY6","KEY+",
	"Left_Shift","Z", "X", "C", "V", "B", "N", "M", ",",".","/", "Right_Shift","Up Arrow","KEY1","KEY2","KEY3",
	"Left_CTRL","Left Win","Left Alt","Space","Right Alt","Fn","Right Ctrl","Left Arrow","Down Arrow","Right Arrow","KEY0","KEY.", "KEY_Enter",
];
function refresh()
{
  let ref = new Array(64).fill(0);
  ref[0] = 0x04;
  ref[1] = 0x8c;
  ref[2] = 0x00;
  ref[3] = 0x0b;
  ref[4] = 0x30;  
  ref[5] = 0x50;
  ref[6] = 0x01;
  //device.log(ref, {toFile: true});
  device.write(ref,64)
  
}
function refresh1()
{
  let ref = new Array(64).fill(0);
  ref[0] = 0x04;
  ref[1] = 0x93;
  ref[2] = 0x00;
  ref[3] = 0x12;
  ref[4] = 0x30;  
  ref[5] = 0x50;
  ref[6] = 0x01;
  //device.log(ref, {toFile: true});
  device.write(ref,64)
  
}
function refColor()
{
  let co1 = new Array(64).fill(0x32);
  co1[0] = 0x04;
  co1[1] = 0xd3;
  co1[2] = 0x37;
  co1[3] = 0x0b;
  co1[4] = 0x38;  
  co1[5] = 0x00;
  co1[6] = 0x00;
  co1[7] = 0x00;
  device.log(co1, {toFile: true});
  device.write(co1,64);
  
  let co2 = new Array(64).fill(0xff);
  co2[0] = 0x04;
  co2[1] = 0x0b;
  co2[2] = 0x38;
  co2[3] = 0x0b;
  co2[4] = 0x38;  
  co2[5] = 0x38;
  co2[6] = 0x00;
  co2[7] = 0x00;
  device.log(co2, {toFile: true});
  device.write(co2,64);
}
function initpacket1()
{

	device.log(vKeys.length, {toFile: true});
	//refColor();
	refresh()
  //let packet = [];// new Array(65).fill(0x00);
  //packet[0] = 0x04;
  //packet[1] = 0x01;
  //packet[2] = 0x00;
  //packet[3] = 0x01;
  //packet[4] = 0x00;
  //device.log(packet, {toFile: true})
  //device.write(packet,64)

}



export function Initialize() {
	initpacket1();

}



export function LedNames() {
	return vKeyNames;

}

export function LedPositions() {
	return vKeyPositions;
}

export function Render() {
	sendColors();
}

export function Shutdown() {

}

function sendColors(shutdown = false)
{
	let rgbdata = grabColors();
	//device.log(rgbdata, {toFile: true});
	for(var index = 0; index < 7; index++) //This will need rounded up to closest value for your board.
    {
	let packet = [];
	packet[0] = 0x04;

	packet[1] = 0x00;
	packet[2] = 0x00;

	//packet[3] = 0x0b;
	packet[3] = 0x12;
	packet[4] = 0x38;
	const bit5 = [0x00,0x38,0x70,0xa8,0xe0,0x18,0x50]
    const bit6 = [0x00,0x00,0x00,0x00,0x00,0x01,0x01]
	packet[5] = bit5[index];
	packet[6] = bit6[index];
	packet[7] = 0x00;
	//device.log(packet, {toFile: true});
	//packet = packet.concat(rgbdata.splice(0, 27));
	//device.write(packet, 33);
	let rgbPeriod = [];
	rgbPeriod = rgbdata.slice(index * 56,(1+index) * 56);
	//device.log(rgbPeriod, {toFile: true});
	if(index == 3)
		{
			rgbPeriod[9] = 0x00;
			rgbPeriod[10] = 0x00;
			rgbPeriod[11] = 0x00;
		}
		let RGB_Total = 0;
		for (let i = 0; i<56;i++)
			{
				RGB_Total+=rgbPeriod[i];
				
			}		
		//device.log(RGB_Total, {toFile: true});
		//let init_cou = 67 + index * 56 + RGB_Total;
		let init_cou = 74 + index * 56 + RGB_Total;
		if (init_cou <256 )
			{
				packet[1] = init_cou;
			}
		else
			{
				packet[1] = init_cou%256;
				packet[2] = (init_cou - init_cou%256)/256;		
		}
	packet = packet.concat(rgbPeriod);	
	device.write(packet, 64)
    }

}
function grabColors(shutdown = false) 
{
	let rgbdata = [];

	for(let iIdx = 0; iIdx < vKeys.length; iIdx++)
	{
		let iPxX = vKeyPositions[iIdx][0];
		let iPxY = vKeyPositions[iIdx][1];
		let color;
		
		if(shutdown)
		{
			color = hexToRgb(shutdownColor);
		}
		else if (LightingMode === "Forced")
		{
			color = hexToRgb(forcedColor);
		}
		else
		{
			color = device.color(iPxX, iPxY);
		}

		let iLedIdx = vKeys[iIdx] * 3;
		rgbdata[iLedIdx] = color[0];
		rgbdata[iLedIdx+1] = color[1];
		rgbdata[iLedIdx+2] = color[2];
	}

	let Fill = new Array(24).fill(0);
	rgbdata = rgbdata.concat(Fill);
	return rgbdata;
}
function hexToRgb(hex) 
{
	let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	let colors = [];
	colors[0] = parseInt(result[1], 16);
	colors[1] = parseInt(result[2], 16);
	colors[2] = parseInt(result[3], 16);

	return colors;
}

export function Validate(endpoint) {
	return endpoint.interface === 1 && endpoint.usage === 0x0092 && endpoint.usage_page === 0xff1c;
}

export function Image() {
}