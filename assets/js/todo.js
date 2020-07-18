$('ul').on('click','li',function(){
	$(this).toggleClass('completed');
});
$('ul').on('click','span',function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
});
$('input').keypress(function(event){
	if(event.which===13){
		var text=$(this).val();
		$(this).val("");
		$('ul').append('<li><span><i class="fas fa-trash"></i> </span>'+text+'</li>');

	}
})
$('.fa-plus').click(function(){
	$('input').fadeToggle();
})