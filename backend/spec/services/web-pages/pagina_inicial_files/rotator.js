var J = jQuery.noConflict();J(document).ready(function(){var items=J(".rotator table");var currIdx=0;var pause=false;J(".rotator-continue").hide();items.css({position:"absolute",top:0,left:0}).hide();items.first().show();setTimeout(doAuto,3E3);function next(){var nextIdx=currIdx+1;if(nextIdx>=items.length)nextIdx=0;items.eq(currIdx).fadeOut();items.eq(nextIdx).fadeIn();currIdx=nextIdx}function prev(){var prevIdx=currIdx-1;if(prevIdx<0)prevIdx=items.length-1;items.eq(currIdx).fadeOut();items.eq(prevIdx).fadeIn();currIdx=prevIdx}
function pauseRotator(){pause=true;J(".rotator-pause").hide();J(".rotator-continue").show()}function continueRotator(){pause=false;J(".rotator-continue").hide();J(".rotator-pause").show();doAuto()}function doAuto(){if(!pause){next();setTimeout(doAuto,5E3)}}J(".rotator-prev").click(function(evt){evt.preventDefault();prev()});J(".rotator-next").click(function(evt){evt.preventDefault();next()});J(".rotator-pause").click(function(evt){evt.preventDefault();pauseRotator()});J(".rotator-continue").click(function(evt){evt.preventDefault();
continueRotator()})});
