/* Controls the actions of clicking on the What We Do icons on the index page */
function changeSelected(num){
	$(".whatwedo-icon").removeClass("selected-option");
	$(".wwd"+num).addClass("selected-option");
	$(".previews-content").addClass("hidden");
	$(".pc"+num).removeClass("hidden");
	$(".whatwedo-previews").removeClass("wwd-preview1 wwd-preview2 wwd-preview3 wwd-preview4");
	$(".whatwedo-previews").addClass("wwd-preview"+num);
}