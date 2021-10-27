//1
// add parameter
// add an if statement 
// if condition is true, return true
// else return false 
const betweenFiveAndTen = (int) => {
  if (int >= 5 && int <= 12){
      return true;
  } else {
      return false;
  }
}

//console.log(betweenFiveAndTen(5))

//2
// add parameter
// add an if statement 
// if condition is true, return true
// else return false 
const betweenTenAndThirty = (int) => {
  if (int >= 10 && int <= 30){
      return true;
  } else {
      return false;
  }
}

//console.log(betweenTenAndThirty(15))

//3
// add parameter
// add an if statement 
// if condition is true, return true
// else return false 
const betweenThirtyAndFifty = (int) => {
  if (int >= 30 && int <= 50){
      return true;
  } else {
      return false;
  }
}  

//console.log(betweenThirtyAndFifty(30))

// add parameter
// add an if statement
// check if number less than or equal to 30 and if it is greater than or equal to 0
// use OR operator
// check if 
//4
function betweenThirtyFiftySeventy(int){
    if ((int >= 0 && int <= 30) || (int >= 50 && int <=70)) {
        return true;
    } else {
        return false;
    }
}

//console.log(betweenThirtyFiftySeventy(61))

//5
function betweenTwentyFiftySixty(int){
    if ((int >= 0 && int <= 20) || (int >= 50 && int <=60)) {
        return true;
    } else {
        return false;
    }
}

//console.log(betweenTwentyFiftySixty(55))
//6
function betweenTenTwentyThirty(int){
    if ((int >= 0 && int <= 10) || (int >= 20 && int <=30)) {
        return true;
    } else {
        return false;
    }
}
//console.log(betweenTenTwentyThirty(9))
