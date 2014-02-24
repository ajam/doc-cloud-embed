(function(){

	var responsive_code;
	function createEmbedCode(dc_embed){
		return dc_embed.replace('container: "', 'width: docCloudWidth,\nheight: docCloudHeight,\ncontainer: "').replace('DV.load', responsive_code + 'DV.load')
	}

	function replaceEmbedCode(dc_embed){
		var r_embed  = createEmbedCode(dc_embed)
		$("#ajmint-embed-code").val(r_embed)
	}

	$('#ajmint-doc-url').keyup(function(){
	responsive_code = $('#ajmint-responsive-code').html();
		var dc_embed = $(this).val();
		replaceEmbedCode(dc_embed)
	})



}).call(this)