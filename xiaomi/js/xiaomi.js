window.onload=function(){
	var acts=document.getElementsByClassName('active');
	var wraps=document.getElementsByClassName("wrapper");
	acts[0].onmouseover=function(){
		wraps[0].style.opacity=1;
	}
	acts[0].onmouseout=function(){
		wraps[0].style.opacity=0;
	}
	acts[1].onmouseover=function(){
		wraps[1].style.opacity=1;
	}
	acts[1].onmouseout=function(){
		wraps[1].style.opacity=0;
	}
	acts[2].onmouseover=function(){
		wraps[2].style.opacity=1;
	}
	acts[2].onmouseout=function(){
		wraps[2].style.opacity=0;
	}
	acts[3].onmouseover=function(){
		wraps[3].style.opacity=1;
	}
	acts[3].onmouseout=function(){
		wraps[3].style.opacity=0;
	}
	acts[4].onmouseover=function(){
		wraps[4].style.opacity=1;
	}
	acts[4].onmouseout=function(){
		wraps[4].style.opacity=0;
	}
	acts[5].onmouseover=function(){
		wraps[5].style.opacity=1;
	}
	acts[5].onmouseout=function(){
		wraps[5].style.opacity=0;
	}
}