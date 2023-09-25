function countDown(startingNumber) {
    if (startingNumber < 0) {
      console.log("Please provide a positive integer.");
      return;
    }
  
    while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber--;
    }
  }
  
  countDown(10);
