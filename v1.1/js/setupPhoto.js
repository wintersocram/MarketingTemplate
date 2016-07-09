//NEW JS FRAME SETUP


$(document).ready(function(){
	$('#selectPhoto').click(function(){
		showDialogBox("msgImgWarning", "Image not selected");
	});

/*
	$('#sendTest').click(function(){
		if( $('#selectPhoto').val() == "" )
			showDialogBox("msgImgNotFound", "Image not selected");
		else{
			createJson();
			alert("finished!");
		}
	});
*/
	
});