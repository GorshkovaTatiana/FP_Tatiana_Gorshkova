getHistory = () => document.getElementById("history-value").innerText;

function printHistory(num){
  document.getElementById("history-value").innerText=num;
}
getOutput = () => document.getElementById("output-value").innerText;

function printOutput(num){
  if(num==""){
      document.getElementById("output-value").innerText=num;
  }
  else{
      document.getElementById("output-value").innerText=getFormattedNumber(num);
  }    
}
function getFormattedNumber(num){
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}

function reverseNumberFormat(num){
  return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
  operator[i].addEventListener('click',function(){
      if(this.id=="clear"){
          printHistory("");
          printOutput("");
      }
      else if(this.id=="backspace"){
          var output=reverseNumberFormat(getOutput()).toString();
          if(output){
              output= output.substr(0,output.length-1);
              printOutput(output);
          }
      }
      else{
          var output=getOutput();
          var history=getHistory();
          if(output!="" || history!=""){
              output= output==""?output:reverseNumberFormat(output);
              if(this.id=="="){
                if(history.substr(history.length-1,history.length)=="^"){
                  var pow = getPow(history.substr(0,history.length-1));
                  var result = pow(output);
                  printOutput(result);
                  printHistory("");
                }
                else if(history.substr(history.length-1,history.length)=="√"){
                  var result=Math.sqrt(history.substr(0,history.length-1));
                  printOutput(result);
                  printHistory("");
                }
                else {
                  history=history+output;
                  var result=eval(history);
                  printOutput(result);
                  printHistory("");
                }
              }
              else{
                  history=history+output;
                  history=history+this.id;
                  printHistory(history);
                  printOutput("");
              }
          }
      }
      
  });
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
  number[i].addEventListener('click',function(){
      var output=reverseNumberFormat(getOutput());
      if(output!=NaN){ 
          output=output+this.id;
          printOutput(output);
      }
  });
}

function getPow(x) {
  return function (y) {
    return Math.pow(x, y);
  };
}
