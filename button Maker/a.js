let outputMsg = [];

let elementId = 0;

class Element {
	
 constructor(designElement) {
	this.id = elementId++;
    this.designElement = designElement;
  }
	
};


let element = new Element(
	document.getElementById("button")
)


function inputName(){
	var text = document.getElementById("text").value;
	element.designElement.innerHTML = text;
}



var shadowHor = 10;
var shadowVer = 10;

function setButtonCSS(buttonCssNum){
	switch (buttonCssNum) {
		case 1:
			var width = document.getElementById("width").value;
			element.designElement.style.width = width + "px";
			outputMsg[0] = "width: " + width + "px; ";
			resultText();
			break;
		case 2:
			var height = document.getElementById("height").value;
			element.designElement.style.height = height + "px";
			outputMsg[1] = "height: " + height + "px; ";
			resultText();
			break;
		case 3:
			var border_slider = document.getElementById("border-slider");
			var border_text = document.getElementById("border-text");
			
			border_slider.value = border_text.value;
			
			element.designElement.style.borderRadius = border_slider.value + "%";
			outputMsg[2] = "border-radius: " + border_slider.value + "%; "
			resultText();
			break;
		case 4:
			var border_slider = document.getElementById("border-slider");
			var border_text = document.getElementById("border-text");
			
			border_text.value = border_slider.value;
			
			element.designElement.style.borderRadius = border_slider.value + "%";
			outputMsg[2] = "border-radius: " + border_slider.value + "%; "
			resultText();
			break;
		case 5:
			var horizontal_Shadow_Slider = document.getElementById("horizontal_Shadow_Slider");
			var horizontal_Shadow = document.getElementById("horizontal_Shadow");
			
			horizontal_Shadow_Slider.value = horizontal_Shadow.value;
			
			
			//element.designElement.style.boxShadow = " " + horizontal_Shadow.value + "px 10px 5px 0px";
			shadowHor = horizontal_Shadow.value;
			setButtonShadow(shadowHor, shadowVer);
			
			outputMsg[3] = "box-shadow: " + shadowHor + "px " + shadowVer + "px 5px 0px; ";
			resultText();
			break;
		case 6:
			var horizontal_Shadow_Slider = document.getElementById("horizontal_Shadow_Slider");
			var horizontal_Shadow = document.getElementById("horizontal_Shadow");
			
			horizontal_Shadow.value = horizontal_Shadow_Slider.value;

			
			//element.designElement.style.boxShadow = " " + horizontal_Shadow.value + "px 10px 5px 0px";
			shadowHor = horizontal_Shadow_Slider.value;
			setButtonShadow(shadowHor, shadowVer);
			
			outputMsg[3] = "box-shadow: " + shadowHor + "px " + shadowVer + "px 5px 0px; ";
			resultText();
			break;
		case 7:
			var vertical_Shadow_Slider = document.getElementById("vertical_Shadow_Slider");
			var vertical_Shadow = document.getElementById("vertical_Shadow");
			
			vertical_Shadow_Slider.value = vertical_Shadow.value;
			
			//element.designElement.style.boxShadow = "10px " + vertical_Shadow.value + "px 5px 0px";
			shadowVer = vertical_Shadow.value;
			setButtonShadow(shadowHor, shadowVer);
			
			outputMsg[3] = "box-shadow: " + shadowHor + "px " + shadowVer + "px 5px 0px; ";
			resultText();
			break;
		case 8:
			var vertical_Shadow_Slider = document.getElementById("vertical_Shadow_Slider");
			var vertical_Shadow = document.getElementById("vertical_Shadow");
			
			vertical_Shadow.value = vertical_Shadow_Slider.value;

			
			//element.designElement.style.boxShadow = "10px " + vertical_Shadow.value + "px 5px 0px";
			shadowVer = vertical_Shadow_Slider.value;
			setButtonShadow(shadowHor, shadowVer);
			
			outputMsg[3] = "box-shadow: " + shadowHor + "px " + shadowVer + "px 5px 0px; ";
			resultText();
			break;
		case 9:
			var font_Size = document.getElementById("font_Size").value;
			
			element.designElement.style.fontSize = font_Size + "px";
			
			outputMsg[4] = "font-size: " + font_Size + "px; "
			resultText();
			break;
		default:
			console.log('Sorry');
	}
}

function setButtonShadow(hor, ver){
	element.designElement.style.boxShadow = hor + "px " + ver + "px 5px 0px";
}




async function changeSwatch(swatch, colorCssNum) {
		
	const picker = new ColorPicker.Picker(swatch);
		
	const c = getComputedStyle(swatch).getPropertyValue('background-color');
	
	const color = await picker.pick(ColorPicker.toNumber(c));
	
	if (color != null) {
		swatch.style.backgroundColor = ColorPicker.toString(color);
		//element.designElement.style.background = ColorPicker.toString(color);
		colorDesignEvent(colorCssNum, ColorPicker.toString(color));
	}
}


		
function colorDesignEvent(colorCssNum, color){
	
	switch (colorCssNum) {
		case 1:
			element.designElement.style.background = color;
			outputMsg[5] = "background-color: " + color + "; ";
			resultText();
			break;
		case 2:
			element.designElement.style.border = color;
			outputMsg[6] = "border-color: " + color + "; ";
			resultText();
			break;
		case 3:
			element.designElement.style.color = color;
			outputMsg[7] = "color: " + color + "; ";
			resultText();
		
			break;
		case 4:
			element.designElement.style.boxShadow = shadowHor + "px " + shadowVer + "px 5px 0px " + color;
			outputMsg[3] = "box-shadow: " + shadowHor + "px " + shadowVer + "px 5px 0px " + color + "; ";
			resultText();
		default:
			console.log('no Event');
	}
	
}

function give_Shadow(){
	var chk = document.getElementById("give_Shadow").checked;
	
	
	if(chk)
		element.designElement.style.boxShadow = "10px 10px 5px 0px";
	else
		element.designElement.style.boxShadow = "none";
		
}

function give_Pointer(){
	var chk = document.getElementById("give_Pointer").checked;
	
	if(chk)
	{
		element.designElement.style.cursor = "pointer";
		
		outputMsg[4] = "cursor: pointer; "
		resultText();
		
	}
	else
	{
		element.designElement.style.cursor = "auto";
		
		outputMsg[4] = "cursor: auto; "
		resultText();
	}
	
		
		
}


function resultText(){
	var text = "";
	
	for(var i = 0; i < outputMsg.length; i++)
	{
		if(outputMsg[i] == undefined)
			text += " ";
		else
			text += outputMsg[i];
	}
		
	document.getElementById("outputCss").innerHTML = text;
}

