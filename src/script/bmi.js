function calculateClick(){
   var y = document.getElementById("textYear").value;
   var h = document.getElementById("textHeight").value;
   var w = document.getElementById("textWeight").value;
   var BMI = w/(Math.pow(h,2))*10000;
   document.getElementById("bmiShow").innerHTML = "Your BMI is <span class='h4'>" +BMI.toFixed(2)+ "</span>";
}