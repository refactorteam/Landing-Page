$(document).ready(function(){var e;e=[$("#pulsatingButton"),$("#pulseBottomButton")],$.each(e,function(e,t){var a,n;a=t,n=5,(a=$(a)).addClass("animated pulse"),setTimeout(function(){a.removeClass("animated pulse")},1e3),setTimeout(function e(){a.addClass("animated pulse"),setTimeout(function(){a.removeClass("animated pulse")},1e3),setTimeout(e,1e3*n)},1e3*n)})});