/* window.onload比 $(function(){}) 加载的更晚一些，这样那些宽度的计算在Chrome中就可以准确计算了*/ 
  window.onload = function(){ 
  
    /*计算一个segment的宽度*/
  
    var segmentWidth = 0; 
    $(".siteLink2 #site_link2 li").each(function(){ 
      segmentWidth+= $(this).outerWidth(true); 
    }); 
  
    $(".siteLink2 #site_link2 li").clone().appendTo($(".siteLink2 #site_link2")); 
  
    run(15000); 
  
    function run(interval){ 
      $(".siteLink2 #site_link2").animate({"left":-segmentWidth}, interval,"linear",function(){ 
        $(".siteLink2 #site_link2").css("left",0); 
        run(15000); 
      }); 
    } 
  
    $(".siteLink2").mouseenter(function(){ 
      $(".siteLink2 #site_link2").stop(); 
    }).mouseleave(function(){ 
      var passedCourse = -parseInt($(".siteLink2 #site_link2").css("left")); 
      var time = 15000 * (1 - passedCourse/segmentWidth); 
      run(time); 
    }); 
  }; 