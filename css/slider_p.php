@charset 'utf-8';

/****************************************************************
 *  All Settings
 ****************************************************************/
input[type="range"] {
	-webkit-appearance:none;
	-moz-appearance: none;
	
	cursor:pointer;
	width:100%;
	background: none;
	
		height: 4px;
		
		border: 1px solid rgba(255,255,255,1.0);
	}


/****************************************************************
 *  Chrome / Safari
 ****************************************************************/
input[type="range"]::-webkit-slider-runnable-track {
}
input[type="range"]::-webkit-slider-thumb {
	-webkit-appearance:none;
	
	width :5px;
	height:12px;
	
	cursor:pointer;
	
	z-index:5;
	
	border:1px solid rgba(255,255,255,1.0);
	background-color: rgba(255,255,255,1.0);
	
}



/****************************************************************
 *  Firefox
 ****************************************************************/
input[type=range]::-moz-range-track {
	background: none;
}

input[type="range"]::-moz-range-thumb {   /* つまみ部分 */
	-webkit-appearance:none;
	
	width :3px;
	height:10px;
	
	cursor:pointer;
	
	z-index:5;
	
	border:1px solid rgba(255,255,255,1.0);
	background-color: rgba(255,255,255,1.0);
	
	border-radius: 0;
}



/****************************************************************
 *  IE
 ****************************************************************/
input[type="range"]::-ms-track {
	height: 4px;
	background: transparent;
	color: transparent;
	border: 1px solid #FFF;
}

input[type="range"]::-ms-thumb {     /* つまみ部分 */
	-webkit-appearance:none;
	
	width :3px;
	height:10px;
	
	cursor: pointer;
	
	z-index:5;
	
	border:1px solid rgba(255,255,255,1.0);
	background-color: rgba(255,255,255,1.0);
	
	border-radius: 0;
}


input[type="range"]:focus,
input[type="range"]:focus::-webkit-slider-thumb,
input[type="range"]:active,
input[type="range"]:active::-webkit-slider-thumb {
    cursor:ew-resize;
    outline:none;
}