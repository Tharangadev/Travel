jQuery(document).ready(function($) {
	var click_menu=$('.hamberg');
	var real_menu=$('.ul');
	var menu_open=false;

	click_menu.click(function(event) {
		if(menu_open==false)
		{
			real_menu.slideDown('slow', function() {
				menu_open=true;
			});
		}
		else if(menu_open==true)
		{
			real_menu.slideUp('slow', function() {
				menu_open=false;
			});
		}
	});
});