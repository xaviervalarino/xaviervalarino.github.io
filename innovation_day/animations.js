function checkJquery() { //Since jQuery is loaded asynchronously
    if (window.jQuery && jQuery) {
        jqueryLoaded();
    } else {
        window.setTimeout(checkJquery, 100);
    }
}
checkJquery();

function jqueryLoaded() {

var $serverSection = $(".server");
var $serverTop = $(".server-top");
var $serverFront = $(".server-front");
var $multiscanSection = $(".multiscan");
var $file = $(".file");
var $dataFlow = $(".data-flow");
var $multiscan = $("#multiscan");
var $metascanButton = $(".bottom");

	function conveyerBelt() {
	var node = document.getElementsByClassName("file");

	requestAnimationFrame(conveyerBelt);

	for ( var i = 0 ; i < node.length ; i++ ){
			$(node[i]).css( "-webkit-animation-delay",  3 * i +"s" );
			$(node[i]).css( "animation-delay", 3 * i +"s" );
			$(node[i]).addClass('slide');
		}
	}
	requestAnimationFrame(conveyerBelt);

 	function animateMetaServer() {
 		$serverTop.addClass('perspective').delay( 300 );
 		$serverFront.addClass('unhide').delay( 300 );
 		
 		setTimeout(function(){
 			$metascanButton.addClass('unhide');
 		}, 900 );
 		
 	}

    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var serverOffset = $serverTop.offset().top - window.innerHeight;
        if (scrollOffset > serverOffset) {
        	console.log('in view');
            setTimeout(animateMetaServer, 600);
            // unbind event not to load again
            $(document).unbind('scroll');
        }
    });
}

