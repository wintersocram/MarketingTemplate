//NEW JS TEXT SETUP
var tryTarget = function(){
	if(typeof(currentTarget)== "undefined"){
		alert('click on box to interact');
		return false;
	}
	return true;
};

$(document).ready(function(){

	$(window).load(function(){
		vSteps = 10;
	});

	  /////////////////////////////////////////////////////////////
	 // ** TOOLS: CONFIGURE TEXTS ** //
	/////////////////////////////////////////////////////////////
	//SET VALUE
	$('#setValue').click(function(){
		if( tryTarget() ){
			if( (currentTarget.attr('id')!="logotype") &&
				(currentTarget.attr('id')!="nameClient")){
				currentTarget.text($('#textToSet').val());
				currentTarget.css('color' , $('#fontColor').val());
				currentTarget.css('font-size' , $('#fontSize').val() + "px");
			}
			else if( currentTarget.attr('id')=="nameClient" ){
				currentTarget.text(
					$('#preTextId').val() +
					$('#originText').val() +
					$('#posText').val()
				);
				currentTarget.css( 'color' , $('#fontColor').val() );
				currentTarget.css( 'font-size' , $('#fontSize').val() + "px");
			}
		}
	});

	//SET FONT COLOR
	$('#fontColor').change(function(){
		if( tryTarget() ){
			if(currentTarget.attr('id')!="logotype")
				currentTarget.css( 'color' , $(this).val() );
		}
	});
	//SET FONT SIZE
	$('#fontSize').change(function(){
		$('#showSize').text( Number($(this).val()) );
		if( tryTarget() ){
			if(currentTarget.attr('id')!="logotype")
				currentTarget.css( 'font-size' , $(this).val() + "px");
		}
	});
	//SET FIELD SIZE
	$('#lessHeight').click(function(){
		if( tryTarget() ){
			if(currentTarget.attr('id')=="logotype")
				currentTarget.width( currentTarget.width() - vSteps );
			currentTarget.height( currentTarget.height() - vSteps );
		}
	});
	//
	$('#moreHeight').click(function(){
		if( tryTarget() ){
			if(currentTarget.attr('id')=="logotype")
				currentTarget.width( currentTarget.width() + vSteps );
			currentTarget.height( currentTarget.height() + vSteps );
		}
	});
	//
	$('#lessWidth').click(function(){
		if( tryTarget() ){
			if(currentTarget.attr('id')=="logotype")
				currentTarget.height( currentTarget.height() - vSteps );
			currentTarget.width( currentTarget.width() - vSteps );
		}
	});
	//
	$('#moreWidth').click(function(){
		if( tryTarget() ){
			if(currentTarget.attr('id')=="logotype")
				currentTarget.height( currentTarget.height() + vSteps );
			currentTarget.width( currentTarget.width() + vSteps );
		}
	});
	//
	$('#goUp').click(function(){
		if( tryTarget() )
			currentTarget.css('top', currentTarget.position().top - vSteps);
			//alert("vSteps: " + vSteps + "\ntop: " + currentTarget.position().top + "\nnextTop: " + (currentTarget.position().top - vSteps ));
	});
	//
	$('#goDown').click(function(){
		if( tryTarget() )
			currentTarget.css('top', currentTarget.position().top + vSteps);
	});
	//
	$('#goLeft').click(function(){
		if( tryTarget() )
			currentTarget.css('left', currentTarget.position().left - vSteps);
	});
	//
	$('#goRight').click(function(){
		if( tryTarget() )
			currentTarget.css('left', currentTarget.position().left + vSteps);
	});

	  ///////////////////////////////////////////
	 // ** BOX SELECTION ** //
	//////////////////////////////////////////
	$( '.textEdit' ).on( 'click', function( event ) {
		currentTarget = $( event.target );
		$('#itemSelected').text(currentTarget.attr("id"));
		if( currentTarget.attr('id')=="nameClient" ){
			$('#preTextId').css('display','block');
			$('#originText').css('display','block');
			$('#posText').css('display','block');
			$('#textToSet').css('display','none');
		}else{
			$('#preTextId').css('display','none');
			$('#originText').css('display','none');
			$('#posText').css('display','none');
			$('#textToSet').css('display','block');
			$('#textToSet').val(currentTarget.text());
		}
	});
	
	  ///////////////////////////////////////////////////
	 // ** POSITION/SIZE STEP  ** //
	//////////////////////////////////////////////////
	$('#steps').change(function(){
		if( $(this).val() == 0 )
			vSteps = 1;
		else
			vSteps = Number($(this).val());
		$('#showSteps').text(Number(vSteps));
	});
    
    
    /*
	$('#checkValue').click(function(){
    	tg1 = $( '#title1' );
    	tg2 = $( '#title2' );
    	tg3 = $( '#title3' );
    	lg = $( '#logotype' );

    	toJson();
    });
	*/
});