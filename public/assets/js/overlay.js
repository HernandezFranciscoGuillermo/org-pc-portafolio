	function showOverlay(url){
		createDemo(url);
		//showDemo();
	}

	function showDemo(){
		demo.fadeIn('fast');
	}

	function hideDemo(){
		if(demo) demo.fadeOut('fast');
		$( ".demo-overlay" ).remove();
	}

	$('body').on('wheel', '.demo-overlay', false);
	$('body').on('click', '.demo-demo, .demo-overlay', hideDemo);
	$('body').on('keydown', function(e){
		if(e.which == 27) hideDemo();
	});
	
	var demo = null;

	function createDemo(path){
		demo = $('<div style="background-color: rgba(0,0,0,0.6);z-index: 100;position: fixed;top: 0;left: 0;width: 100%;height: 100%;" class="demo-overlay">\
			<div style="width:96%;height:96%; position:absolute;top:2%;left:2%; box-shadow: 0 4px 12px rgba(0,0,0,.5);">\
				<div class="bar" style="height:36px; position:relative;background:#F6F5F6;padding: 5px 10px; border-radius: 10px 10px 0 0;" id="boxframe">\
					<span style="margin-right: 2px;width:14px;height:14px;background-color:#F86365;display:inline-block;vertical-align:middle;border-radius: 50%;"></span>\
					<span style="margin-right: 2px;width:14px;height:14px;background-color:#EBCC1C;display:inline-block;vertical-align:middle;border-radius: 50%;"></span>\
					<span style="margin-right: 2px;width:14px;height:14px;background-color:#81D46C;display:inline-block;vertical-align:middle;border-radius: 50%;"></span>\
				</div>\
				<iframe frameborder="0" tabindex="-1"  src="' + path + '" style=" position: absolute;top: 36px;bottom: 0;width: calc(100% + 1px); height: calc( 100% - 36px);"></iframe>\
			</div>\
		</div>');	
		demo.appendTo('body');
	}