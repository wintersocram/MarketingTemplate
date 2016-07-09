    ///////////////
   ///////////////
  // STEP 1 JS //
 ///////////////
///////////////
showDialogBox = function(item, title){
	$('.msgHide').addClass('hide');
	$('#' + item).toggleClass("hide");
	$('#dialog').dialog('option', 'title', title);
	$('#dialog').dialog('open');
};


    ///////////////
   ///////////////
  // STEP 2 JS //
 ///////////////
///////////////
var toJson = function(){
	//alert(1);
	//Update Config Object with TextBox properties and texts
	setupObjConfig_step2();

	//alert(2);
	//alert('objConfig: ' + objConfig);
	//Create Config (objConfig) from obj to Json
	jsonConfig = objToJson(objConfig);

	//alert(3);
	//alert('jsonConfig: ' + jsonConfig);
	//update the Config input field
	$('#json').prop('value', jsonConfig);

	//alert(4);
	//update the Config test field
	$('#jsonText').prop("value", jsonConfig);
	//alert(5);
};


    ////////////
   ////////////
  // ALL JS //
 ////////////
////////////
//setup view
	//Set view to development mode
	var developmentMode = function(){
		$('#formSagicor').attr('action','http://localhost:8080/printPortrait');
		$('.test').css('display','inline-block');
		alert('Development version started');
		checkApi();
	};

	//Set view to production mode
	var productionMode = function(){
		$('#formSagicor').attr('action','@action@');
	//	$('#formSagicor').attr('action','http://localhost:8080/printPortrait');
		$('.test').css('display','none');
		//Hide referential fields
	//	$('#toHide').css("display", "none");
	};
/*
	$('#aaaaa').
*/
//Setup current Step
var setupStep = function() {
	if(currentStep == 1) {
		$('h3').text('step 1 of 2: set model and image');
		
		$('#step1').removeClass('hideDiv');
		$('#step2').addClass('hideDiv');
		
		$('#btnPrevious').prop('disabled', true);
		$('#btnPrevious').css('display', 'none');
		$('#btnPrevious').prop('value', 'previous step');
		
		//$('#btnNext').prop('type', 'button');
		$('#btnNext').prop('value', 'next step (set text)');
	} else if(currentStep == 2) {
		$('h3').text('step 2 of 2: set text');
		
		$('#step1').addClass('hideDiv');
		$('#step2').removeClass('hideDiv');
		
		$('#btnPrevious').prop('disabled', false);
		$('#btnPrevious').css('display', 'block');
		$('#btnPrevious').prop('value', 'previous step (set image)');
		
		//$('#btnNext').prop('type', 'submit');
		$('#btnNext').prop('value', 'print model');	
	}
};
//Set images to step 2
var setImageStep2 = function() {
	//Set SRC 
	imageSrc = 'file://' + imgPath + $('#selectPhoto')[0].files[0].name;
	frameSrc = 'file://' + imgPath + $('#frameSelection input[name=frame]:checked').val() + '.png';
	logotypeSrc = 'file://' + imgPath + $('#logotypeName').val() + '.png';

	$('#photoStep2').attr( 'src', imageSrc );
	$('#frameStep2').attr( 'src', frameSrc );
	$('#logotype').attr( 'src', logotypeSrc );

	
	//Create Config Object
	setupObjConfig_step1();

	//Set CSS
	if( objConfig.element.length>0 ){
		for( indexElement in objConfig.element ){
			var tempElement = objConfig.element[indexElement];
			//CSS to Image
			if( (tempElement.id=="imageId") && (tempElement.config.length>0) ){
				for( indexConfig in tempElement.config ){
					var tempConfig = tempElement.config[indexConfig];
					$('#photoStep2').css( tempConfig.property , tempConfig.value );
				}
			}
			//CSS to frame
			else if( (tempElement.id=="frameId") && (tempElement.config.length>0) ){
				for( indexConfig in tempElement.config ){
					var tempConfig = tempElement.config[indexConfig];
					$('#frameStep2').css( tempConfig.property , tempConfig.value );
				}
			}
		}
	}else{
		alert("Error when try to setup the Model and the Image. Please call support");
	}
};
//Return a JSON format from the object sended
function objToJson(obj){
	return JSON.stringify(obj);
}
//Return a Object format from the JSON format sended
function jsonToObj(json){
	return JSON.parse(json);
}
//Check API
var checkApi = function(){
	// Check for the various File API support.
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		// Great success! All the File APIs are supported.
	} else {
		alert('The File APIs are not fully supported in this browser.');
	}
};
  ///////////////////////////
 // ** SUBMIT FUNCTION ** //
///////////////////////////
var submitForm = function(){
	toJson();
	$('#formSagicor').submit();
};

    ////////////////////////////////
   ////////////////////////////////
  // READY FUNCTION (ALL STEPS) //
 ////////////////////////////////
////////////////////////////////
$(document).ready(function() {

	  //////////////////////////
	 // ** START FUNCTION ** //
	//////////////////////////
	$(window).load(function(){
		//VAR
			$('#preTextId').css('display','none');
			$('#originText').css('display','none');
			$('#posText').css('display','none');
			$('#textToSet').css('display','block');

		//DEFINE INITIAL STEP
			currentStep = 1;
			setupStep();
		//step1 old start
			imgPath = $('#imagePath').val();
		//Set view mode
			//developmentMode();
			productionMode();
		//CALL START FUNCTION TO DRAG ITEM CODE
			loadDrag();
			
		var widthHeaderRelative = Number($('#headerRelative').width());
		var widthHeader2 = Number($('#header2').width());
		//alert($('#header2').width());
		//alert(1);
		$('#header2').css('left', ( widthHeaderRelative - widthHeader2 )/2 + 'px');
		
		//alert(2);
		//alert($('#imagePath').val());
		$('#path').text($('#imagePath').val());
		//alert(3);
		
		$('#imagePath').css('display','none');
		
	});

	  /////////////////////////
	 // ** TEST FUNCTION ** //
	/////////////////////////
	$('#checkValue').click(function(){
		toJson();
	});


	  ///////////////////////////////////////
	 // ** CONTROLL BUTTON INTERACTION ** //
	///////////////////////////////////////
	$('#btnPrevious').click(function() {
		if( currentStep==2 ){
			//set previous step
				currentStep = 1;
				setupStep();
		}
	});
	$('#btnNext').click(function() {
		//alert('currentStep: ' + currentStep);
		if( currentStep == 1 ){
			if( $('#selectPhoto').val() == "" ) {
				showDialogBox("msgImgNotFound", "Image not selected");
			} else {
				//set image to step 2
					setImageStep2();
				//set next step
					currentStep = 2;
					setupStep();
			}
		} else if( currentStep == 2 ) {
			submitForm();
		}
	});
	$('#dialog').dialog({
		autoOpen: false,
		show: {
			effect: "blind",
			duration: 1000
		},
		hide: {
			effect: "explode",
			duration: 1000
		}
	});
});
