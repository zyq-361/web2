window.onload=function(){
	var div1=document.getElementById("picScroll");
    var sp1=document.getElementById("picScroll1");
    var sp2=document.getElementById("picScroll2");
    var imgs=div1.getElementsByTagName("img");
        
       
    function changeToLeft(){
    	if(div1.scrollLeft >= sp1.offsetWidth){
      		div1.scrollLeft=0;
    	}else{
      		div1.scrollLeft+=1;
   		}
    }
    timer1 = setInterval(changeToLeft,10);
     
    sp2.innerHTML = sp1.innerHTML;
    
  	div1.onmouseover=function(){
  		clearInterval(timer1);
  	}
  	div1.onmouseout=function(){
    	timer1 = setInterval(changeToLeft,10);
    }

}