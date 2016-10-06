var scenes = ["intro","cena1", "cena2","cena3","cena4","cena5","cena6","cena7","cena8","cena8b","cena9",];
var current_scene = 0;

function changeScene(value){

	// Hide current scene
	document.querySelector('.' + scenes[current_scene]).classList.add('is-hidden');
	document.querySelector('.' + scenes[current_scene]).classList.remove('is-visible');

	if (current_scene == 0 && value == -1) {
		current_scene = scenes.length - 1;
	}
	else if (current_scene == scenes.length - 1 && value == 1) {
		current_scene = 0;
	}
	else {
		current_scene += value;
	}

	// Show next (or previous) scene
	document.querySelector('.' + scenes[current_scene]).classList.remove('is-hidden');
	document.querySelector('.' + scenes[current_scene]).classList.add('is-visible');
}

document.addEventListener("keydown", function(event) {

  	// 37 == left arrow
	if (event.which == 37) {
		changeScene(-1)
  	}

	// 39 == right arrow
    if( event.which == 39) {
		changeScene(+1)
  	}
})
window.addEventListener('click', function(){
	changeScene(1)
});
