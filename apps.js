$(document).ready(function(){
	$('#profile_ripple').ripples({
		resolution:512,
		dropRadius:10
});
	const bars= document.querySelectorAll('.Progress_bar');
	console.log(bars);

	bars.forEach(function(bar)
	{
		let percentage= bar.dataset.percent;
		let tooltip= bar.children[0];
		bar.style.width=percentage + '%';
	});

});
