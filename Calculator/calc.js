
window.onload=function(){
	document.getElementById("result").focus();
	var str='';
	function showData(op){
		str+=op;
		document.getElementById("result").value=str;	
	}
	function clearData(){
		str='';
		document.getElementById("result").value=0;
	}
	function calculate(){
		document.getElementById("result").value="";
		var result=eval(str);
		document.getElementById("result").value=result;
		str=String(result);
	}
	var arr = document.getElementsByClassName("op");

	for(var i=0;i<arr.length;i++){
		arr[i].onclick=function(){
			switch(this.value){
				case "c":
					clearData();
					break;
				case "=":
					calculate();
					break;
				default:
					showData(this.value);	
			}
		}
	}
}
	