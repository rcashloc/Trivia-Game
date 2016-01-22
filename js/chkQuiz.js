/**
	Author: Ryker Ashlock
	Created: 21/1/16
	Updated: 21/1/16
**/
function chkQuiz(){
	window.alert("asdf");
	for(i=1;i <= ;i++){
		var choices = document.getElementsByName("q"+i);
		
		for(j=0; j < choices.length; j++){
			var selection = choices[j];
			
			if(selection.value == "correct" && selection.checked){
					window.alert("good job!");
			}else if(selection.value == "wrong" && selection.checked){
				window.alert("ASDFASDFAFSD	");
			}
		}//end for j
	}//end for i
}//end chkQuiz
