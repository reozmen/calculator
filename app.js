const numbers =document.getElementsByClassName("calculator")[0];
const input =document.getElementsByClassName("seconddashboard")[0];
const result =document.getElementsByClassName("firstdashboard")[0];

numbers.addEventListener("click",(e)=>{
    if(e.target.className==="number"){
      result.innerText += e.target.innerText;
    }
    if(e.target.className==="zero"){
        if(result.innerText==="0"){}
         else{
             result.innerText +="0"
         }}
    if(e.target.className ==="point"){
        if(result.innerText===""){}
        else if(result.innerText.includes(".")){}
        else {
            result.innerText +=".";
        }}
    if(e.target.className==="AC"){
        result.innerText=""
        input.innerText=""
    }    
    if(e.target.className === "fas fa-arrow-left"||e.target.className==="back"){
        if(result.innerText ===""){}
        else{
        const array = result.innerText.split("");
        console.log(array);
        array.splice((array.length-1),1);
        result.innerText=array.join("");
    }}
    if(e.target.className==="pn"){
        if(result.innerText===""){
            result.innerText="-";
        }
        else if(result.innerText==="-"){
            result.innerText="";
        }
        else{
        result.innerText=parseFloat(result.innerText)*-1;
    }}
    if(e.target.className==="fas fa-plus"|| e.target.className==="plus"){
        if(result.innerText ===""&&input.innerText===""){}
        else if(input.innerText.includes("-")){
            input.innerText=Number(input.innerText.split(" ")[0])-Number(result.innerText)+" +";
            result.innerText="";
        }
        else if(input.innerText.includes("x")){
            input.innerText=Number(input.innerText.split(" ")[0])*Number(result.innerText)+" +";
            result.innerText="";
        }
        else if(input.innerText.includes("/")){
            input.innerText=Number(input.innerText.split(" ")[0])/Number(result.innerText)+" +";
            result.innerText="";
        }
        
        else if(!result.innerText==""&&input.innerText===""){
            input.innerText=result.innerText+" +";
            result.innerText=""
        }
        else if(input.innerText.includes("+")&&!result.innerText==""){
            
            input.innerText=Number(input.innerText.split(" ")[0])+Number(result.innerText)+" +";
            result.innerText="";
        }}
        if(e.target.className==="fas fa-minus"|| e.target.className==="minus"){
            if(result.innerText ===""&&input.innerText===""){}
            else if(input.innerText.includes("+")){
                input.innerText=Number(input.innerText.split(" ")[0])+Number(result.innerText)+" -";
                result.innerText="";
            }
            else if(input.innerText.includes("x")){
                input.innerText=Number(input.innerText.split(" ")[0])*Number(result.innerText)+" -";
                result.innerText="";
            }
            else if(input.innerText.includes("/")){
                input.innerText=Number(input.innerText.split(" ")[0])/Number(result.innerText)+" -";
                result.innerText="";
            }
            else if(!result.innerText==""&&input.innerText===""){
                input.innerText=result.innerText+" -";
                result.innerText=""
            }
            else if(input.innerText.split(" ")[1]==="-"&&!result.innerText==""){
                
                input.innerText=Number(input.innerText.split(" ")[0])-Number(result.innerText)+" -";
                result.innerText="";
            }}
        if(e.target.className==="fas fa-times"|| e.target.className==="times"){
            if(result.innerText ===""&&input.innerText===""){}
            else if(input.innerText.includes("-")){
                input.innerText=Number(input.innerText.split(" ")[0])-Number(result.innerText)+" x";
                result.innerText="";
            }
            else if(input.innerText.includes("+")){
                input.innerText=Number(input.innerText.split(" ")[0])+Number(result.innerText)+" x";
                result.innerText="";
            }
            else if(input.innerText.includes("/")){
                input.innerText=Number(input.innerText.split(" ")[0])/Number(result.innerText)+" x";
                result.innerText="";
            }
            else if(!result.innerText==""&&input.innerText===""){
                input.innerText=result.innerText+" x";
                result.innerText=""
            }
            else if(input.innerText.includes("x")&&!result.innerText==""){
                
                input.innerText=Number(input.innerText.split(" ")[0])*Number(result.innerText)+" x";
                result.innerText="";
            }}  
        if(e.target.className==="fas fa-divide"|| e.target.className==="divide"){
            if(result.innerText ===""&&input.innerText===""){}
            else if(input.innerText.includes("-")){
                input.innerText=Number(input.innerText.split(" ")[0])-Number(result.innerText)+" /";
                result.innerText="";
            }
            else if(input.innerText.includes("x")){
                input.innerText=Number(input.innerText.split(" ")[0])*Number(result.innerText)+" /";
                result.innerText="";
            }
            else if(input.innerText.includes("+")){
                input.innerText=Number(input.innerText.split(" ")[0])+Number(result.innerText)+" /";
                result.innerText="";
            }
            else if(!result.innerText==""&&input.innerText===""){
                input.innerText=result.innerText+" /";
                result.innerText=""
            }
            else if(input.innerText.includes("/")&&!result.innerText==""){
                
                input.innerText=Number(input.innerText.split(" ")[0])/Number(result.innerText)+" /";
                result.innerText="";
            }}
            
        if(e.target.className==="fas fa-equals"|| e.target.className==="equal"){
            if(input.innerText.includes("+")&&!result.innerText==""){
                result.innerText=Number(input.innerText.split(" ")[0])+Number(result.innerText);
                input.innerText="";
            }
            if(input.innerText.includes("-")&&!result.innerText==""){
                result.innerText=Number(input.innerText.split(" ")[0])-Number(result.innerText);
                input.innerText="";
            }
            if(input.innerText.includes("x")&&!result.innerText==""){
                result.innerText=Number(input.innerText.split(" ")[0])*Number(result.innerText);
                input.innerText="";
            }
            if(input.innerText.includes("/")&&!result.innerText==""){
                result.innerText=Number(input.innerText.split(" ")[0])/Number(result.innerText);
                input.innerText="";
            }
        }           
            
        
    




});
