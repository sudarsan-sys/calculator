
document.addEventListener("DOMContentLoaded", function(){
    const display=document.getElementById('calc-display');
    let buttons=document.getElementsByClassName("btn");
    let currentValue = "";
    function evaluateResult(){
        console.log(currentValue);
        const convertedValue=currentValue
        .replace("X","*")
        .replace("%","*0.01");
        currentValue = convertedValue;
        console.log(currentValue);  
        const result=eval(currentValue);
        currentValue =result.toString();
        display.value=currentValue;
    }
    for(i=0;i<buttons.length;i++){
        const button=buttons[i];
        button.addEventListener("click",function(){
            const value=button.innerText;
            if (value=="AC"){
                currentValue="";
                display.value=currentValue;
            }else if (value=="="){
                evaluateResult();
            }
            else{
                currentValue+=value;
                display.value=currentValue;
            }

        })
    }
});
