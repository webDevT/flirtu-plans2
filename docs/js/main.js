$(function(){
	$(".rate .item").click(function() {
	$('#plan-select-form [name="plan"]').val(3 - $(this).index());
	$(".rate .item").removeClass("item--green").eq($(this).index()).addClass("item--green");
}).eq(0).addClass("active");
});

$('.item--trial1, .item--trial2').click(function(){
	$('.footer-text').hide();
	$('.footer-trial').show();

})

$('.item-6-months').click(function(){
	$('.footer-text').hide();
	$('.footer-6-months').show();

})

$('.item-12-months').click(function(){
	$('.footer-text').hide();
	$('.footer-12-months').show();

})

$('.item-1-month').click(function(){
	$('.footer-text').hide();
	$('.footer-1-month').show();

})
$(function(){
 $('.item').on('click', function () {
	var dataTotalValue = $(this).attr('data-total');
	$('.total-price').text('Total Price: ' + dataTotalValue + '€');
});
});