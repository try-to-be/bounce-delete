var positionx = 1;
var positiony = 1;
var counter = 0;
var div = new Array();
var positionX = new Array();
var positionY = new Array();
var paragraph= document.getElementById("inner-text");
var cnt=document.createElement('p');
cnt.innerHTML="insect killed:0"
paragraph.appendChild(cnt)


window.onload = createDiv();

function createDiv() {
  for (i = 0; i < 6; i++) {
    var block = document.createElement("div");
    block.setAttribute("id", "div_id" + i);
    block.style = "position:absolute;text-align:center;padding-top: 15px; height: 40px;width: 60px; top:" + X + "px; left:" + Y + "px";
      

    

    // const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // divs.style.background = "#" + randomColor;
    var X = Math.floor(Math.random() * 420 + 1);
    var Y = Math.floor(Math.random() * 420 + 1);
    var insect = document.createElement("img");
      insect.src = "insect.svg";
      insect.setAttribute("style", "width:30px; height:30px;");
      block.appendChild(insect);
      
    const maindiv = document.getElementById("moving-div");
    maindiv.append(block);
     block.addEventListener('click',function(){
     deleteBoxes(this)
     cnt.innerHTML="ants killed:"+counter
    
   });
      

    Movement(0.2, 0.2, X, Y, block,i);
  
  }
  function deleteBoxes(el){
    counter++;
    var element = el;
    element.remove();
    
   
  }
 
  

  function Movement(positionx, positiony, X, Y, block,index) {
    setInterval(() => {
      X += positionx;
      block.style.left = X + "px";

      Y += positiony;
      block.style.top = Y + "px";

      if(X > 450 || X < 0){
        positionx = positionx * -1;
    }
    if (Y > 440 || Y < 0) {
        positiony = positiony * -1;
    }
   
    positionX[index] = X;
    positionY[index] = Y;
    for (var i = 0; i < 5; i++) {

      if (!(i === index)) {
          if ((positionX[i] < X + 30) && (positionX[i] + 30 > X) && (positionY[i] < Y + 30) && (positionY[i] + 30 > Y)) {
              positionx = positionx * -1;
              positiony = positiony * -1;
          }
      }
  }
    }, 2);
  }
}