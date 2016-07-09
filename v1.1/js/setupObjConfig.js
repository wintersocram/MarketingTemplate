function setupObjConfig_step1(){
	//alert(1.1);
	//Create JSON
	objConfig = {"element":[]};

	//alert(2.2);
	//Put Image and Frame on JSON
	setImageFrameConfig( $('#frameSelection input[name=frame]:checked').val() );
}

function setupObjConfig_step2(){
	//Put Texts on JSON
	var textItem = [$('#title1'), $('#title2'), $('#title3')];
	for( j in textItem ){
		objConfig.element.push({
			"type":"text",
		    "id":textItem[j].attr('id'),
			"config":[
		    	{"property" : "text", "value" : textItem[j].text()},
		    	{"property" : "position", "value" : "absolute"},
		    	{"property" : "font-size", "value" : textItem[j].css('font-size')},
		    	{"property" : "width", "value" : textItem[j].width()+"px"},
		    	{"property" : "height", "value" : textItem[j].height()+"px"},
				{"property" : "top", "value" : textItem[j].position().top+"px"},
				{"property" : "left", "value" : textItem[j].position().left+"px"},
				{"property" : "color", "value" : textItem[j].css('color')}
			]
		});
	}
	
	//Put databaseItems on JSON
	var databaseItem = [{"pre":$('#preTextId').val(), "text":$('#originText').val(), "pos":$('#posText').val(), "item":$('#nameClient')}];
	for( i in databaseItem ){
		objConfig.element.push({
			"type":"databaseItems",
		    "id":databaseItem[i].text + "Id",
			"config":[
		    	{"property" : "preValue", "value" : databaseItem[i].pre},
		    	{"property" : "text", "value" : databaseItem[i].text},
		    	{"property" : "posValue", "value" : databaseItem[i].pos},
		    	{"property" : "position", "value" : "absolute"},
		    	{"property" : "width", "value" : databaseItem[i].item.width()+"px"},
		    	{"property" : "height", "value" : databaseItem[i].item.height()+"px"},
				{"property" : "top", "value" : databaseItem[i].item.position().top+"px"},
				{"property" : "left", "value" : databaseItem[i].item.position().left+"px"},
				{"property" : "color", "value" : databaseItem[i].item.css('color')},
				{"property" : "font-size", "value" : databaseItem[i].item.css('font-size')}
			]
		});
	}
	
	//Put logotype on JSON
	var logo = $('#logotype');
	objConfig.element.push({
		"type":"img",
	    "id":logo.attr('id'),
		"config":[
	    	{"property" : "src", "value" : logo.attr('src')},
	    	{"property" : "alt", "value" : logo.attr('alt')},
	    	{"property" : "position", "value" : "absolute"},
	    	{"property" : "width", "value" : logo.width()+"px"},
	    	{"property" : "height", "value" : logo.height()+"px"},
			{"property" : "top", "value" : logo.position().top+"px"},
			{"property" : "left", "value" : logo.position().left+"px"}
		]
	});
}