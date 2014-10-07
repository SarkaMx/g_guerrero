var actual="";
var ante=".home";
var side="";
var sideante=".h";
var pe=".p1f";
var ps=".p2f";
var y=0;

$(document).ready(function(){
	
    $(".gg").fadeIn(1000,function(){
		$(".gg").rotateAnimation(360);
		$(".spacebar").fadeIn(5000,function(){
			
			$(".gg").animate({width:"69px"});
			$(".spacebar").animate({width:"17px"});
			$(".uerrero").animate({width:"96px"});
			$(".logo").animate({left:"40px",top:"31px"},function(){
				$(".gg, .spacebar, .uerrero").css({"display":"none"});
				$(".ilogo").css({"display":"inline"});
				$(".nav").delay(800).animate({width:"714px"},function(){
					$(".home").animate({height:"355px"});
					$(".home").animate({width:"711px"});	
					actual=".home"
				});
		    });
			$(".atras").fadeIn("slow");
			$(".foot").fadeIn("slow");
			$(".side").fadeIn(5000);
			
		});
		$(".uerrero").fadeIn(2500,function(){
			
		    $(".uerrero").animate({left:"0px"});
			$(".logo").animate({left:"305px"});
			
		});
	});
	
	//secciones
	
	function secciones(){
		if(sideante==side&&ante==actual){}
		else{
		$(sideante).fadeOut(function(){
			$(side).fadeIn("normal");
			sideante=side;
		});
		$(ante).fadeOut(function(){
			$(actual).css({"display":"inline"});
			$(actual).animate({height:"380px"});
			$(actual).animate({width:"714px"});
			$(ante).css({"width":"10px","height":"10px"});
		});
		ante=actual;
		$(pe).fadeOut("normal");
		$(".atras img").fadeOut("normal");
		}
	}
	
	$("#home").click(function(){
		actual= ".home";
		side=".h";
		secciones();
		$(".atras img").fadeIn("normal");
	});
	$("#quienessomos").click(function(){
		actual= ".quienessomos";
		side=".q";
		secciones();
	});
	$("#productos").click(function(){
		side=".p";
	  
		actual= ".productos";
	    secciones();
		pe=".p1f";
		entrasale();
	});
	$("#contacto").click(function(){
		side=".c";
		actual= ".contacto";
		secciones();
	});
	$("#ubicacion").click(function(){
		side=".u";
		actual= ".ubicacion";
		secciones();
	});
	
	//end of secciones
	
	//menu productos
	function entrasale(){
		if(ps==pe){}
		else{
		$(ps).fadeOut(function(){
			$(pe).fadeIn("normal");
		});
		ps=pe;
		}
	}
	$(".p1").click(function(){
		pe=".p1f";
		entrasale();
	});
	$(".p2").click(function(){
		pe=".p2f";
		entrasale();
	});
	$(".p3").click(function(){
		pe=".p3f";
		entrasale();
	});
	$(".p4").click(function(){
		pe=".p4f";
		entrasale();
	});
	$(".p5").click(function(){
		pe=".p5f";
		entrasale();
	});
	$(".p6").click(function(){
		pe=".p6f";
		entrasale();
	});
	$(".p7").click(function(){
		pe=".p7f";
		entrasale();
	});
	$(".p8").click(function(){
		pe=".p8f";
		entrasale();
	});
	$(".p9").click(function(){
		pe=".p9f";
		entrasale();
	});
	$(".p10").click(function(){
		pe=".p10f";
		entrasale();
	});
	$(".p11").click(function(){
		pe=".p11f";
		entrasale();
	});
	$(".p12").click(function(){
		pe=".p12f";
		entrasale();
	});
	$(".p13").click(function(){
		pe=".p13f";
		entrasale();
	});
	$(".p14").click(function(){
		pe=".p14f";
		entrasale();
	});
	$(".p15").click(function(){
		pe=".p15f";
		entrasale();
	});
	$(".p16").click(function(){
		pe=".p16f";
		entrasale();
	});
	$(".p17").click(function(){
		pe=".p17f";
		entrasale();
	});
	$(".p18").click(function(){
		pe=".p18f";
		entrasale();
	});
	$(".p19").click(function(){
		pe=".p19f";
		entrasale();
	});
	$(".p20").click(function(){
		pe=".p20f";
		entrasale();
	});
	$(".p21").click(function(){
		pe=".p21f";
		entrasale();
	});
	$(".p22").click(function(){
		pe=".p22f";
		entrasale();
	});
	$(".p23").click(function(){
		pe=".p23f";
		entrasale();
	});
	$(".p24").click(function(){
		pe=".p24f";
		entrasale();
	});
	$(".p25").click(function(){
		pe=".p25f";
		entrasale();
	});
	$(".p26").click(function(){
		pe=".p26f";
		entrasale();
	});
	$(".p27").click(function(){
		pe=".p27f";
		entrasale();
	});
	$(".p28").click(function(){
		pe=".p28f";
		entrasale();
	});
	$(".p29").click(function(){
		pe=".p29f";
		entrasale();
	});
	$(".p30").click(function(){
		pe=".p30f";
		entrasale();
	});
	$(".p31").click(function(){
		pe=".p31f";
		entrasale();
	});
	$(".p32").click(function(){
		pe=".p32f";
		entrasale();
	});
	$(".p33").click(function(){
		pe=".p33f";
		entrasale();
	});
	$(".p34").click(function(){
		pe=".p34f";
		entrasale();
	});
	$(".p35").click(function(){
		pe=".p35f";
		entrasale();
	});
	$(".p36").click(function(){
		pe=".p36f";
		entrasale();
	});
	$(".p37").click(function(){
		pe=".p37f";
		entrasale();
	});
	$(".p38").click(function(){
		pe=".p38f";
		entrasale();
	});
	$(".p39").click(function(){
		pe=".p39f";
		entrasale();
	});
	
	
	//fin menu productos
	
	//interacciones con el mouse
	
	$("#quienessomos").mouseover(function(){
	    $("#quienessomos").animate({top:"-29px"},100);
	});
	$("#quienessomos").mouseout(function(){
	    $("#quienessomos").animate({top:"0px"},100);
	});
	$("#productos").mouseover(function(){
	    $("#productos").animate({top:"-29px"},100);
	});
	$("#productos").mouseout(function(){
	    $("#productos").animate({top:"0px"},100);
	});
	$("#contacto").mouseover(function(){
	    $("#contacto").animate({top:"-29px"},100);
	});
	$("#contacto").mouseout(function(){
	    $("#contacto").animate({top:"0px"},100);
	});
	$("#ubicacion").mouseover(function(){
	    $("#ubicacion").animate({top:"-29px"},100);
	});
	$("#ubicacion").mouseout(function(){
	    $("#ubicacion").animate({top:"0px"},100);
	});
	$("#home").mouseover(function(){
	    $("#home").animate({top:"-29px"},100);
	});
	$("#home").mouseout(function(){
	    $("#home").animate({top:"0px"},100);
	});
	$("#face").mouseover(function(){
	    $("#face").animate({top:"-39px"},100);
	});
	$("#face").mouseout(function(){
	    $("#face").animate({top:"0px"},100);
	});
	$("#twit").mouseover(function(){
	    $("#twit").animate({top:"-39px"},100);
	});
	$("#twit").mouseout(function(){
	    $("#twit").animate({top:"0px"},100);
	});
	$("#sarka").mouseover(function(){
	    $("#sarka").animate({top:"-39px"},100);
	});
	$("#sarka").mouseout(function(){
	    $("#sarka").animate({top:"0px"},100);
	});
	
	//Animacion botones productos
		
	/*$(".p1").mouseover(function(){
	    $(".p1").animate({left:"-154px"},100);
	});
	$(".p1").mouseout(function(){
	    $(".p1").animate({left:"0px"},100);
	});
	
	$(".p2").mouseover(function(){
	    $(".p2").animate({left:"-154px"},100);
	});
	$(".p2").mouseout(function(){
	    $(".p2").animate({left:"0px"},100);
	});
	
	$(".p3").mouseover(function(){
	    $(".p3").animate({left:"-154px"},100);
	});
	$(".p3").mouseout(function(){
	    $(".p3").animate({left:"0px"},100);
	});

	$(".p4").mouseover(function(){
	    $(".p4").animate({left:"-154px"},100);
	});
	$(".p4").mouseout(function(){
	    $(".p4").animate({left:"0px"},100);
	});
	
	$(".p5").mouseover(function(){
	    $(".p5").animate({left:"-154px"},100);
	});
	$(".p5").mouseout(function(){
	    $(".p5").animate({left:"0px"},100);
	});
	
	$(".p6").mouseover(function(){
	    $(".p6").animate({left:"-154px"},100);
	});
	$(".p6").mouseout(function(){
	    $(".p6").animate({left:"0px"},100);
	});
	
	$(".p7").mouseover(function(){
	    $(".p7").animate({left:"-154px"},100);
	});
	$(".p7").mouseout(function(){
	    $(".p7").animate({left:"0px"},100);
	});
	
	$(".p8").mouseover(function(){
	    $(".p8").animate({left:"-154px"},100);
	});
	$(".p8").mouseout(function(){
	    $(".p8").animate({left:"0px"},100);
	});
	
	$(".p9").mouseover(function(){
	    $(".p9").animate({left:"-154px"},100);
	});
	$(".p9").mouseout(function(){
	    $(".p9").animate({left:"0px"},100);
	});
	
	$(".p10").mouseover(function(){
	    $(".p10").animate({left:"-154px"},100);
	});
	$(".p10").mouseout(function(){
	    $(".p10").animate({left:"0px"},100);
	});
	
	$(".p11").mouseover(function(){
	    $(".p11").animate({left:"-154px"},100);
	});
	$(".p11").mouseout(function(){
	    $(".p11").animate({left:"0px"},100);
	});
	
	$(".p12").mouseover(function(){
	    $(".p12").animate({left:"-154px"},100);
	});
	$(".p12").mouseout(function(){
	    $(".p12").animate({left:"0px"},100);
	});
	
	$(".p13").mouseover(function(){
	    $(".p13").animate({left:"-154px"},100);
	});
	$(".p13").mouseout(function(){
	    $(".p13").animate({left:"0px"},100);
	});
	
	$(".p14").mouseover(function(){
	    $(".p14").animate({left:"-154px"},100);
	});
	$(".p14").mouseout(function(){
	    $(".p14").animate({left:"0px"},100);
	});
	
	$(".p15").mouseover(function(){
	    $(".p15").animate({left:"-154px"},100);
	});
	$(".p15").mouseout(function(){
	    $(".p15").animate({left:"0px"},100);
	});
	
	$(".p16").mouseover(function(){
	    $(".p16").animate({left:"-154px"},100);
	});
	$(".p16").mouseout(function(){
	    $(".p16").animate({left:"0px"},100);
	});
	
	$(".p17").mouseover(function(){
	    $(".p17").animate({left:"-154px"},100);
	});
	$(".p17").mouseout(function(){
	    $(".p17").animate({left:"0px"},100);
	});
	
	$(".p18").mouseover(function(){
	    $(".p18").animate({left:"-154px"},100);
	});
	$(".p18").mouseout(function(){
	    $(".p18").animate({left:"0px"},100);
	});
	
	$(".p19").mouseover(function(){
	    $(".p19").animate({left:"-154px"},100);
	});
	$(".p19").mouseout(function(){
	    $(".p19").animate({left:"0px"},100);
	});
	
	$(".p20").mouseover(function(){
	    $(".p20").animate({left:"-154px"},100);
	});
	$(".p20").mouseout(function(){
	    $(".p20").animate({left:"0px"},100);
	});
	
	$(".p21").mouseover(function(){
	    $(".p21").animate({left:"-154px"},100);
	});
	$(".p21").mouseout(function(){
	    $(".p21").animate({left:"0px"},100);
	});
	
	$(".p22").mouseover(function(){
	    $(".p22").animate({left:"-154px"},100);
	});
	$(".p22").mouseout(function(){
	    $(".p22").animate({left:"0px"},100);
	});
	
	$(".p23").mouseover(function(){
	    $(".p23").animate({left:"-154px"},100);
	});
	$(".p23").mouseout(function(){
	    $(".p23").animate({left:"0px"},100);
	});
	
	$(".p24").mouseover(function(){
	    $(".p24").animate({left:"-154px"},100);
	});
	$(".p24").mouseout(function(){
	    $(".p24").animate({left:"0px"},100);
	});
	
	$(".p25").mouseover(function(){
	    $(".p25").animate({left:"-154px"},100);
	});
	$(".p25").mouseout(function(){
	    $(".p25").animate({left:"0px"},100);
	});
	
	$(".p26").mouseover(function(){
	    $(".p26").animate({left:"-154px"},100);
	});
	$(".p26").mouseout(function(){
	    $(".p26").animate({left:"0px"},100);
	});
	
	$(".p27").mouseover(function(){
	    $(".p27").animate({left:"-154px"},100);
	});
	$(".p27").mouseout(function(){
	    $(".p27").animate({left:"0px"},100);
	});
	
	$(".p28").mouseover(function(){
	    $(".p28").animate({left:"-154px"},100);
	});
	$(".p28").mouseout(function(){
	    $(".p28").animate({left:"0px"},100);
	});
	
	$(".p29").mouseover(function(){
	    $(".p29").animate({left:"-154px"},100);
	});
	$(".p29").mouseout(function(){
	    $(".p29").animate({left:"0px"},100);
	});
	
	$(".p30").mouseover(function(){
	    $(".p30").animate({left:"-154px"},100);
	});
	$(".p30").mouseout(function(){
	    $(".p30").animate({left:"0px"},100);
	});
	
	$(".p31").mouseover(function(){
	    $(".p31").animate({left:"-154px"},100);
	});
	$(".p31").mouseout(function(){
	    $(".p31").animate({left:"0px"},100);
	});
	
	$(".p32").mouseover(function(){
	    $(".p32").animate({left:"-154px"},100);
	});
	$(".p32").mouseout(function(){
	    $(".p32").animate({left:"0px"},100);
	});
	
	$(".p33").mouseover(function(){
	    $(".p33").animate({left:"-154px"},100);
	});
	$(".p33").mouseout(function(){
	    $(".p33").animate({left:"0px"},100);
	});

	$(".p34").mouseover(function(){
	    $(".p34").animate({left:"-154px"},100);
	});
	$(".p34").mouseout(function(){
	    $(".p34").animate({left:"0px"},100);
	});
	
	$(".p35").mouseover(function(){
	    $(".p35").animate({left:"-154px"},100);
	});
	$(".p35").mouseout(function(){
	    $(".p35").animate({left:"0px"},100);
	});
	
	$(".p36").mouseover(function(){
	    $(".p36").animate({left:"-154px"},100);
	});
	$(".p36").mouseout(function(){
	    $(".p36").animate({left:"0px"},100);
	});
	
	$(".p37").mouseover(function(){
	    $(".p37").animate({left:"-154px"},100);
	});
	$(".p37").mouseout(function(){
	    $(".p37").animate({left:"0px"},100);
	});
	
	$(".p38").mouseover(function(){
	    $(".p38").animate({left:"-154px"},100);
	});
	$(".p38").mouseout(function(){
	    $(".p38").animate({left:"0px"},100);
	});
	
	$(".p39").mouseover(function(){
	    $(".p39").animate({left:"-154px"},100);
	});
	$(".p39").mouseout(function(){
	    $(".p39").animate({left:"0px"},100);
	});*/
	
	//end of interacciones con el mouse
	
	$(".su").click(function(){
		if(y==0){
		}
		else{
		    y=y-40;
            $(".pmenu").scrollTop(y);
	        if(y==0){
	    		$(".su").fadeOut("slow");
		    }
			if(y<=280){
				$(".sd").fadeIn("slow");
			}
		}
    });

    $(".sd").click(function(){
		if(y>=280){
		}
		else{
	    	y=y+40;
            $(".pmenu").scrollTop(y);
			if(y!=0){
				$(".su").fadeIn("slow");
			}
			if(y>=280){
				$(".sd").fadeOut("slow");
			}
		}
    });
	
	
});


