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

  const getComputerChoice = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0){
      return 'rock';
    }else if (random === 1){
      return 'paper';
    }else if (random === 2){
      return 'scissors';
    }else {
      console.log('invalid');
    }
  }