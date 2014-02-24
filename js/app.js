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
	responsive_code =  'var docCloudWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width; \
													var docCloudHeight; \
													if (docCloudWidth < 500){ \
													   docCloudWidth = docCloudWidth - 40; \
													   docCloudHeight = 400; \
													}else{ \
													 docCloudWidth = 590; \
													 docCloudHeight = 725; \
													}; \
													' 
		var dc_embed = $(this).val();
		replaceEmbedCode(dc_embed)
	})



}).call(this)