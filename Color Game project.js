var n=6;
var squares=document.querySelectorAll(".square");
var ques=document.getElementById("question");
var messageDisplay=document.querySelector("#message");
var retry=document.querySelector("#new");
var mode=document.querySelectorAll(".mode");

newGame();
//check if the selected color is the right one
for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click",function(){
		if(this.style.background == q){
			for (var j = 0; j < n; j++){
				squares[j].style.background=q;
			}
			messageDisplay.textContent="Correct!";
			document.querySelector("#top-bar").style.background=q;
			retry.textContent="Play Again?"
		}
		else{
			messageDisplay.textContent="Try Again";
			this.style.background = "#232323";
		}
	});
}

//chooses a question
function chooseQ(){
	return colors[Math.floor(Math.random() * colors.length)];
}

//creates an array of size n with random colors
function randArray(num){
	var arr=[];
	for (var i = 0; i < num; i++) {
		arr.push(randColor());
	}
	return arr;
}

//creates random color
function randColor(){
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")";
}

//resetting the colors and question whenever the new game is clicked or page is refreshed
function newGame(){
	colors=randArray(n);
	for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
	q=chooseQ();
	ques.textContent= q;
	document.querySelector("#top-bar").style.background= "#00BFFF";
	retry.textContent="New Colors";
	messageDisplay.textContent="";
	}
}

//the board is reset whenever new game is clicked
retry.addEventListener("click",newGame);

// This whole thing can be reduced by using mode class
// //the number of boxes is set to 3 when easy is clicked and the background of easy become blue
// easy.addEventListener("click",function(){
// 	easy.classList.add("selected");
// 	hard.classList.remove("selected");
// 	n=3;
// 	for(var i=3;i<squares.length;i++){
// 		squares[i].style.visibility="hidden";
// 	}
// 	newGame();
// })

// //the number of boxes is set to 6 when hard is clicked and the background of hard become blue
// hard.addEventListener("click",function(){
// 	hard.classList.add("selected");
// 	easy.classList.remove("selected");
// 	n=6;
// 	for(var i=3;i<squares.length;i++){
// 		squares[i].style.visibility="visible";
// 	}
// 	newGame();
// })

for(i=0;i<mode.length;i++){
	mode[i].addEventListener("click",function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent==="Easy"){
			n=3;
			for(var i=3;i<squares.length;i++){
				squares[i].style.visibility="hidden";
			}
		}
		else{
			n=6;
			for(var i=3;i<squares.length;i++){
				squares[i].style.visibility="visible";
			}
		}
		newGame();
	})
}

