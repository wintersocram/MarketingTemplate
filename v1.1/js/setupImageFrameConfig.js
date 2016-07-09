//IMAGE AND FRAME PROPERTIES
function setImageFrameConfig(frameSelected){
	if( frameSelected == "BrandA1" ){
		objConfig.element.push(
			{"type":"img", "id":"imageId", "config":[
		    	{"property" : "src", "value" : imageSrc},
		    	{"property" : "alt", "value" : "image/photo selected to marketing"},
				{"property" : "position", "value" : "absolute"},
				{"property" : "width", "value" : "728px"},
				{"property" : "height", "value" : "930px"},
				{"property" : "top", "value" : "0px"},
				{"property" : "left", "value" : "47.2px"}
			]},
			{"type":"img", "id":"frameId", "config":[
		    	{"property" : "src", "value" : frameSrc},
		    	{"property" : "alt", "value" : "frame to image/photo selected"},
				{"property" : "position", "value" : "absolute"},
				{"property" : "width", "value" : "816px"},
				{"property" : "height", "value" : "1056px"},
				{"property" : "top", "value" : "0px"},
				{"property" : "left", "value" : "0px"}
			]}
		);
	}else if( frameSelected == "BrandA2" ){
		objConfig.element.push(
			{"type":"img", "id":"imageId", "config":[
		    	{"property" : "src", "value" : imageSrc},
		    	{"property" : "alt", "value" : "image/photo selected to marketing"},
				{"property" : "position", "value" : "absolute"},
				{"property" : "width", "value" : "728px"},
				{"property" : "height", "value" : "930px"},
				{"property" : "top", "value" : "0px"},
				{"property" : "left", "value" : "47.2px"}
			]},
			{"type":"img", "id":"frameId", "config":[
		    	{"property" : "src", "value" : frameSrc},
		    	{"property" : "alt", "value" : "frame to image/photo selected"},
				{"property" : "position", "value" : "absolute"},
				{"property" : "width", "value" : "816px"},
				{"property" : "height", "value" : "1056px"},
				{"property" : "top", "value" : "0px"},
				{"property" : "left", "value" : "0px"}
			]}
		);
	}else if( frameSelected == "BrandB1" ){
		objConfig.element.push(
			{"type":"img", "id":"imageId", "config":[
		    	{"property" : "src", "value" : imageSrc},
		    	{"property" : "alt", "value" : "image/photo selected to marketing"},
				{"property" : "position", "value" : "absolute"},
				{"property" : "width", "value" : "816px"},
				{"property" : "height", "value" : "1056px"},
				{"property" : "top", "value" : "0px"},
				{"property" : "left", "value" : "0px"}
			]},
			{"type":"img", "id":"frameId", "config":[
		    	{"property" : "src", "value" : frameSrc},
		    	{"property" : "alt", "value" : "frame to image/photo selected"},
				{"property" : "position", "value" : "absolute"},
				{"property" : "width", "value" : "816px"},
				{"property" : "height", "value" : "1056px"},
				{"property" : "top", "value" : "0px"},
				{"property" : "left", "value" : "0px"}
			]}
		);
	}else if( frameSelected == "BrandB2" ){
		objConfig.element.push(
			{"type":"img", "id":"imageId", "config":[
		    	{"property" : "src", "value" : imageSrc},
		    	{"property" : "alt", "value" : "image/photo selected to marketing"},
				{"property" : "position", "value" : "absolute"},
				{"property" : "width", "value" : "816px"},
				{"property" : "height", "value" : "1056px"},
				{"property" : "top", "value" : "0px"},
				{"property" : "left", "value" : "0px"}
			]},
			{"type":"img", "id":"frameId", "config":[
		    	{"property" : "src", "value" : frameSrc},
		    	{"property" : "alt", "value" : "frame to image/photo selected"},
				{"property" : "position", "value" : "absolute"},
				{"property" : "width", "value" : "816px"},
				{"property" : "height", "value" : "1056px"},
				{"property" : "top", "value" : "0px"},
				{"property" : "left", "value" : "0px"}
			]}
		);
	}
}