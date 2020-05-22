var numberOfDrumsButtons=document.querySelectorAll(".drum").length;

for(var i=0 ; i < numberOfDrumsButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    }
    );


document.addEventListener("keypress",function(event)
{
  makeSound(event.key);
  buttonAnimation(event.key);
}
);

function makeSound(key)
{
    switch(key)
    {
        case "a":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "s":
            var tom1= new Audio("sounds/tom-2.mp3");
            tom1.play();
            break;
        case "d":
            var tom1= new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;            
        case "f":
            var tom1= new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;
        case "g":
            var tom1= new Audio("sounds/crash.mp3");
            tom1.play();
            break;
        case "h":
            var tom1= new Audio("sounds/kick-bass.mp3");
            tom1.play();
            break;
        case "j":
            var tom1= new Audio("sounds/snare.mp3");
            tom1.play();
            break;
        default:
            break;    
    }
}

function buttonAnimation(presentKey)
{
    var actButton = document.querySelector("." + presentKey);
    actButton.classList.add("pressed");
    setTimeout(function(){
        actButton.classList.remove("pressed");
        } ,100);
}

}