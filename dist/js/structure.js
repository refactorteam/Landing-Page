$(document).ready(function(){$(".structure .keeper").hover(function(){if($(window).width()>991){var t=this.getAttribute("data-desc");$("#"+t).addClass("bolder"),$("#"+t+" .structure-list_item__pointer").addClass("pointing")}},function(){if($(window).width()>991){var t=this.getAttribute("data-desc");$("#"+t).removeClass("bolder"),$("#"+t+" .structure-list_item__pointer").removeClass("pointing")}}),$(window).resize(function(){$(window).width()<991?$(".structure-list_item__pointer").addClass("pointing"):$(".structure-list_item__pointer").removeClass("pointing")})});