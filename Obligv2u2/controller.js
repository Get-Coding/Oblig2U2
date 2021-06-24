 
 function selectedBar(barNo) {
   
    chosenBar != barNo ?chosenBar = barNo : chosenBar = ""; 
        show();
   }
    function removeBar() {
       numbers.splice(chosenBar -1, 1); 
       chosenBar = ""; 
        show();}
    
    function addBar() {
   if (inputValue >= 1 && inputValue <= 10) {
       errormsg = "";
       numbers.push(inputValue);}

else if (inputValue > 10 || inputValue < 1)
       errormsg = 'Invalid Input (1 - 10)';
        show();}
     
    function changeBar() {
  if (inputValue >= 1 && inputValue <= 10) {
      numbers[chosenBar -1] = inputValue;
      inputValue = "";    errormsg = "";}
 else{errormsg = 'Invalid input (1 - 10)';}
       show(); }