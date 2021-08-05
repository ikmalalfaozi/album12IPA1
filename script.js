const container = document.querySelector('.container');
const layer = document.querySelector('.layer');
const close = document.querySelector('.close');
const image = document.querySelector('.image');

container.addEventListener('click', function(e) {
	
	// cek apakah yang diklik adalah thumb
	if (e.target.className == "thumb") {
		layer.classList.add('overlay');
		close.src = "close.png";
		image.classList.add('besar');
		image.src = e.target.src;
	}
	
	if (e.target.className == "close") {
		layer.classList.remove('overlay');
		close.src = "";
		image.classList.remove('besar');
		image.src = "";
	}
	//jumbo.src = e.target.src;
	//jumbo.classList.add('fade');
	//setTimeout(function() {
	//	jumbo.classList.remove('fade');
	//}, 500);
});