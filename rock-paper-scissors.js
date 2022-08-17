const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock'){
      return userInput;
    }else if (userInput === 'paper'){
      return userInput;
    }else if (userInput === 'scissors'){
      return userInput;
    }else if (userInput === 'bomb'){
      return userInput;
    }else{
      console.log('please enter valid Input');
    }
  }