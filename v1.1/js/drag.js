var loadDrag = function(){
	vPressStatus = false;
	vElement = null;
	vInternalX = null;
	vInternalY = null;
	vNewPosX = null;
	vNewPosY = null;
	currentDiv = 3;

		vContainerWidth = Number(getValue($('#imageContainer'), 'width'));
		vContainerHeight = Number(getValue($('#imageContainer'), 'height'));
		vMaxElementX = 0; // Must be vContainerWidth - Element.width
		vMaxElementY = 0; // Must be vContainerHeight - Element.height

		vMinMouseX = Number(getValue($('#imageContainer'), 'left'));
		vMinMouseY = Number(getValue($('#imageContainer'), 'top')) + Number($('Header').height());
		vMaxMouseX = vContainerWidth + vMinMouseX;
		vMaxMouseY = vContainerHeight + vMinMouseY;
};


$(document).ready(function() {
	$('html').mousedown(function(e) {
		if( !vElement ) setPosition(true, e, undefined);
    });
	$('.divs').mousedown(function(e) {
		setPosition(true, e, $(this));
    });

	$('html').mouseup(function(e) {
		//alert('mouseup html: ');
		if( !vElement ) setPosition(false, undefined, undefined);
    });
	$('.divs').mouseup(function(e) {
		if( vElement ) setPosition(false, undefined, undefined);
	});

	$('html').mousemove(function(e) {
		if(vPressStatus)
			if( vElement )
				if( setupNewPosition(e, vElement) ) setNewPosition();
	});
	
	$('#addDiv').click(function(){
		currentDiv++;
		newBox();
		/*
		
		alert('title' + currentDiv);
		//$('#imageContainer').appendTo('<div id="title'+currentDiv+'" class="textEdit divs"></div><br>');
		jQuery('<div/>', {
			id: 'title' + currentDiv
		}).appendTo('#imageContainer');
		
		
		$('#title'+currentDiv).addClass('textEdit');
		$('#title'+currentDiv).addClass('divs');
		$('#title'+currentDiv).css('width', '100px');
		$('#title'+currentDiv).css('height', '100px');
		$('#title'+currentDiv).css('top', (30*Number(currentDiv))+'px');
		$('#title'+currentDiv).css('left', (30*Number(currentDiv))+'px');
		alert('ok');
		alert('left ' + $('#title'+currentDiv).css('left'));
		*/
	});
	$('#title4').click(function() {
		alert(11);
	});
	
	
	
	
});


var newBox = function(){
	d = document.createElement('div');
	$(d).addClass('divs')
		.addClass('textEdit')
		.css('width', '100px')
		.css('height', '100px')
		.attr('id', 'title' + currentDiv)
	    //.html('text')
	    .appendTo($("#imageContainer"))
	};

var newDiv = '<div class="divs" id="div1"></div>';
var stopByMouseLimit = function() {
	//Stop movement
		setPosition(false, undefined, undefined);
	//Set last position
		setNewPosition();
	//Stop new position
		return false;
}

var setNewPosition = function() {
	
	if( vElement ) {
		//$('#vNewPosX').text('vNewPosX: '+vNewPosX);
		//$('#vNewPosY').text('vNewPosY: '+vNewPosY);
		vElement.css('left', vNewPosX);
		vElement.css('top', vNewPosY);
	}
}

var setupNewPosition = function(eEvent, selectedElement){
	if(eEvent) {
		vEvent = eEvent;
		
		//Read current mouse position
			//Get Value
				vMouseX = vEvent.pageX;
				vMouseY = vEvent.pageY;
//			//Show value
		
		//Check mouse position limits
			//check min
				if( vMouseX <= vMinMouseX ) {
					//Set last position
						vNewPosX = 0;
					//Stop movement
						return stopByMouseLimit();
				}
				if( vMouseY <= vMinMouseY ) {
					//Set last position
						vNewPosY = 0;
					//Stop movement
						return stopByMouseLimit();
				}
			//check max
				if( vMouseX >= vMaxMouseX ) {
					//Set last position
						vNewPosX = vMaxElementX;
					//Stop movement
						return stopByMouseLimit();
				}
				if( vMouseY >= vMaxMouseY ) {
					//Set last position
						vNewPosY = vMaxElementY;
					//Stop movement
						return stopByMouseLimit();
				}

			//Get element limits
				if( selectedElement) {
					//Get element position
					var elementLeft = getValue(selectedElement, 'left');
					var elementTop = getValue(selectedElement, 'top');
				}

		//Set new position
			vNewPosX = vMouseX - vInternalX;
			vNewPosY = vMouseY - vInternalY;
			
			
		//Element limit min
			if(vNewPosX < 0) vNewPosX = 0;
			if(vNewPosY < 0) vNewPosY = 0;
		
		//Element limit max
			if( vNewPosX > vMaxElementX ) vNewPosX = vMaxElementX;
			if( vNewPosY > vMaxElementY ) vNewPosY = vMaxElementY;
			
	}
	return true;
};

var getValue = function(element, property) {
	//alert(1.+" element: "+element.prop('id'));
	var vValue = element.css(property);
	//alert(2);
	if(isNaN(vValue))
		for(var i=0;i<vValue.length;i++)
			if(isNaN(vValue[i]))
				vValue = vValue.substring(0, i);
	//alert("3: "+vValue);
	return vValue;
}

var setPosition = function(pressStatus, eEvent, thisElement){
	vPressStatus = pressStatus;
	if( (pressStatus) && (pressStatus == true) ) {
		if(eEvent) {
			//alert('has event');
			vEvent = eEvent;
			vMouseX = vEvent.pageX;
			vMouseY = vEvent.pageY;
//				$('#mouseX').text(vMouseX);
//				$('#mouseY').text(vMouseY);
		} else 
			clearEvent();
		//alert(1+"."+thisElement);
		if(thisElement) {
		//alert(2);
			vElement = thisElement;

			var vTop = getValue(vElement, 'top');
			vInternalY = vMouseY - Number(vTop);
//			$('#posY').text('internal Y: ' + vInternalY);

			var vLeft = getValue(vElement, 'left');
			vInternalX = vMouseX - Number(vLeft);
			//alert('vInternalY: '+vInternalY+'\n vInternalX: '+vInternalX);
//			$('#posX').text('internal X: ' + vInternalX);

			//Set new limits max
				//Get element size
			//alert('getValue(vElement, 'width'): '+getValue(vElement, 'width')+'\n vInternalX: '+vInternalX);
					var elementWidth = getValue(vElement, 'width');
					var elementHeight = getValue(vElement, 'height');
		//alert(4);
		//alert(5+'. elementWidth: '+elementWidth+'\n elementHeight: '+elementHeight);
		//alert(5+'. vContainerWidth: '+vContainerWidth+'\n vContainerHeight: '+vContainerHeight);
				//Set new limits
					vMaxElementX = vContainerWidth - elementWidth;
					vMaxElementY = vContainerHeight - elementHeight;
					
			//$('#vMaxElementX').text('vMaxElementX: '+vMaxElementX);
			//$('#vMaxElementY').text('vMaxElementY: '+vMaxElementY);
					
		//alert(7);
//				//Show new limits
//					$('#newLimMaxX').text('newLimMaxX: ' + vMaxElementX);
//					$('#newLimMaxY').text('newLimMaxY: ' + vMaxElementY);
		//		alert('vMaxElementX: ' + vMaxElementX + '\nvMaxElementY: ' + vMaxElementY);
		//alert(8);

		} else
			clearElement();
	} else {
		clearEvent();
		clearElement();
	}
};

var clearEvent = function(){
	vEvent = undefined;
	vMouseX = 0;
	vMouseY = 0;
//	$('#mouseX').text('');
//	$('#mouseY').text('');
};

var clearElement = function(){
	vElement = undefined;
	vInternalX = 0;
	vInternalY = 0;
	vMaxElementX = 0;
	vMaxElementY = 0;
//	$('#posX').text('');
//	$('#posY').text('');
//	$('#newLimMaxX').text('');
//	$('#newLimMaxY').text('');
};