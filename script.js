
function enterDisplay(value)
{
    document.getElementById("display").value +=value;
}
function clearDisplay()
{
    document.getElementById("display").value = "";
}
function deleteELement()
{
    let display=document.getElementById("display").value;
    document.getElementById('display').value=display.substring(0,display.length-1);
}
function calculate() 
{
    let result= document.getElementById("display").value;
    document.getElementById("display").value = eval(result);
}
function percent() {
    let p = document.getElementById("display").value;

    if (p.includes('%')) {
        p = p.replace('%', ''); // Remove the % before doing the operation
    }
    document.getElementById("display").value = p / 100;
}
function number(){
    let num=document.getElementById("display").value;
    document.getElementById("display").value=num*(-1);
}
function power(index)
{
    let p=document.getElementById("display").value;
    document.getElementById("display").value=Math.pow(p,index);
}
function type(value)
{
    //console.log(value);
    if(value>=0 && value<=9)
    {
        //enterDisplay(value);
    }
    else if(value=='.'|| value=='+'|| value=='-'|| value=='*'|| value=='/')
    {
        //null~~~
    }
    else{
        switch(value)
        {
            case '%':  percent(); break;
            case 'num': number(); break;
            case 'Enter': calculate(); break;
            case 'C': clearDisplay(); break;
            case 'Backspace':  break;
            case '^': alert("For exponents please choose from here."); break;
            default: console.log("Wrong input!");
        }
    }
}
// function get(){
//     baseValue = document.getElementById("display").value;
//     mode=true;
//     document.getElementById("display").value += "^"; // Show ^ in the display

// }
// let display=document.getElementById("display").value;

// function myFunction(event) {
//     let key = event.key;
//     console.log(key);
//     type(key);
//     // if (key == "a" || key == "A") { 
//     //   let text = "You pressed the 'A' key!";
//     //   document.getElementById("demo").innerHTML = text;
//     // }
// }

document.addEventListener("keydown", function (event) {
    console.log(event.key);
    if (event.key === "%" || event.key==='^') {
        event.preventDefault(); 
    }
    type(event.key);
});
