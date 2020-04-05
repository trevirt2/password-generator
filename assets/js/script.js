
//Generates random whole number between 0 and the max parameter
function randomG (max){
   var rNumber = Math.floor(Math.random() * max);
   return(rNumber);
 }
 
 //prompts the user for password length
 function getLength(){
   length =window.prompt('Enter the length of the desired password.  Must be between 8 - 128');
   while(length <8 || length > 128){
     length = window.prompt('Passwords MUST be between 8 AND 128 characters!');
   }
   return(length);
 };
 
 //Randomly selects an uppercase character and returns it.
 function addUp(){
   var upperChars="ABCDEFGHAJKLMNOPQRSTUVWXYZ";
   paramMax = upperChars.length;
   newChar = upperChars.charAt(randomG(paramMax));
   return(newChar);
 }
 
 //Randomly selects a lowercase character and returns it.
 function addLow(){
   var lowerChars="abcdefghijklmnopqrstuvwxyz";
   paramMax = lowerChars.length;
   newChar = lowerChars.charAt(randomG(paramMax));
   return(newChar);
 }
 
 //Randomly selects a special character and returns it.
 function addSpec(){
   var specChars= " !#$%&()*+,-./:;<=>?@[\]^_`{|}~";  //append " to this string"
   paramMax = specChars.length;
   newChar = specChars.charAt(randomG(paramMax));
   return(newChar);
 }
 
 //Randomly generates a number between 0 and 9
 function addNum(){
   newNum = randomG(10);
   newChar = newNum.toString();
   return(newChar);
 }
 
 //Prompts the user for the parameters of the password and generates it.
 function generatePassword(){
   var pwordLength = getLength();
   do {
     var pwordUpper = window.confirm('Include upper case characters?');
     var pwordLower = window.confirm('Include lower case characters?');
     var pwordNum = window.confirm('Include numbers?');
     var pwordSpecial = window.confirm('Include special characters?');
     if (!pwordUpper && !pwordLower && !pwordNum && !pwordSpecial){
       window.alert('At least one character type MUST be selected.');
     }
   }
   while (!pwordUpper && !pwordLower && !pwordNum && !pwordSpecial);
   
   var pwd = '';
     
   for (i=0;i<pwordLength;i++){
     // all 4 params
     if (pwordUpper && pwordLower && pwordNum && pwordSpecial){
       var rule=randomG(4); //Select a random rule.
       switch (rule){
         case 0:
           //upper
           pwd = pwd.concat(addUp());
           break;
         case 1:
           //lower
           pwd = pwd.concat(addLow());
           break;
         case 2:
           //number
           pwd = pwd.concat(addNum());
           break;
         case 3:
           //special chars
           pwd = pwd.concat(addSpec());
           break;
       }
     }
 
     if (pwordUpper && pwordLower && pwordNum && !pwordSpecial){
       var rule=randomG(3); //Select a random rule.
       switch (rule){
         case 0:
           //upper
           pwd = pwd.concat(addUp());
           break;
         case 1:
           //lower
           pwd = pwd.concat(addLow());
           break;
         case 2:
           //number
           pwd = pwd.concat(addNum());
           break;
       }
     }
 
     if (pwordUpper && pwordLower && !pwordNum && pwordSpecial){
       var rule=randomG(3); //Select a random rule.
       switch (rule){
         case 0:
           //upper
           pwd = pwd.concat(addUp());
           break;
         case 1:
           //lower
           pwd = pwd.concat(addLow());
           break;
         case 2:
           //special chars
           pwd = pwd.concat(addSpec());
           break;
       }
     }
 
     if (pwordUpper && !pwordLower && pwordNum && pwordSpecial){
       var rule=randomG(3); //Select a random rule.
       switch (rule){
         case 0:
           //upper
           pwd = pwd.concat(addUp());
           break;
         case 1:
           //number
           pwd = pwd.concat(addNum());
           break;
         case 2:
           //special chars
           pwd = pwd.concat(addSpec());
           break;
       }
     }
    
     if (!pwordUpper && pwordLower && pwordNum && pwordSpecial){
       var rule=randomG(3); //Select a random rule.
       switch (rule){
         case 0:
           //lower
           pwd = pwd.concat(addLow());
           break;
         case 1:
           //number
           pwd = pwd.concat(addNum());
           break;
         case 2:
           //special chars
           pwd = pwd.concat(addSpec());
           break;
       }
     }
 
     if (pwordUpper && pwordLower && !pwordNum && !pwordSpecial){
       var rule=randomG(2); //Select a random rule.
       switch (rule){
         case 0:
           //upper
           pwd = pwd.concat(addUp());
           break;
         case 1:
           //lower
           pwd = pwd.concat(addLow());
           break;
       }
     }
 
     if (pwordUpper && !pwordLower && pwordNum && !pwordSpecial){
       var rule=randomG(2); //Select a random rule.
       switch (rule){
         case 0:
           //upper
           pwd = pwd.concat(addUp());
           break;
          case 1:
           //number
           pwd = pwd.concat(addNum());
           break;
         
       }
     }
 
     if (!pwordUpper && pwordLower && pwordNum && !pwordSpecial){
       var rule=randomG(2); //Select a random rule.
       switch (rule){
           case 0:
           //lower
           pwd = pwd.concat(addLow());
           break;
         case 1:
           //number
           pwd = pwd.concat(addNum());
           break;
       }
     }
 
     if (!pwordUpper && !pwordLower && pwordNum && pwordSpecial){
       var rule=randomG(2); //Select a random rule.
       switch (rule){
           case 0:
           //number
           pwd = pwd.concat(addNum());
           break;
         case 1:
           //special chars
           pwd = pwd.concat(addSpec());
           break;
       }
     }
     if (pwordUpper && !pwordLower && !pwordNum && pwordSpecial){
       var rule=randomG(2); //Select a random rule.
       switch (rule){
         case 0:
           //upper
           pwd = pwd.concat(addUp());
           break;
         case 1:
           //special chars
           pwd = pwd.concat(addSpec());
           break;
       }
     }
    if (pwordUpper && !pwordLower && !pwordNum && !pwordSpecial){
      
       pwd = pwd.concat(addUp());
     }
     if (!pwordUpper && pwordLower && !pwordNum && !pwordSpecial){
      
       pwd = pwd.concat(addLow());
     }
     if (!pwordUpper && !pwordLower && pwordNum && !pwordSpecial){
       pwd = pwd.concat(addNum());
     }
     if (!pwordUpper && !pwordLower && !pwordNum && pwordSpecial){
       pwd = pwd.concat(addSpec());
     }
 
   }
 
   return(pwd);
 
 };
 
 // Get references to the #generate element
 var generateBtn = document.querySelector("#generate");
 
 // Write password to the #password input
 function writePassword() {
   var password = generatePassword() ;
   var passwordText = document.querySelector("#password");
 
   passwordText.value = password;
 
 }
 
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);