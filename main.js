function changeBackgroundColor(color) 
{
  document.body.style.backgroundColor =color;
}

function changeBackgroundColor2(color1, color2) 
{
	var currentColor = document.body.style.backgroundColor;
	
	if (currentColor == color1){
		changeBackgroundColor(color2);
	}
	else {
		changeBackgroundColor(color1);
	}
}


