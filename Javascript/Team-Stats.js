const team = {
    _players: [
      {firstName: 'Pedro', lastName: 'Martinez', age: 23}, 
      {firstName: 'Juan', lastName: 'Lopez', age: 21}, 
      {firstName: 'Luis', lastName: 'Jimenez', age: 24}
    ],
    _games: [
      {opponent: 'Pablo', teamPoints: 12, opponentPoints: 9},
      {opponent: 'Carlos', teamPoints: 8, opponentPoints: 8}, 
      {opponent: 'Manuel', teamPoints: 10, opponentPoints: 11}
    ],
    
    // Getter method for accessing the players array
    get players() {
      return this._players;
    },
    // Getter method for accessing the games array
    get games() {
      return this._games;
    },
    
    // Method for adding a new player to the players array
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName, 
        lastName: newLastName, 
        age: newAge
      };
      // Adding the new player to the players array
      this.players.push(player);
    },
    
    // Method for adding a new game to the games array
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent, 
        teamPoints: newTeamPoints, 
        opponentPoints: newOpponentPoints
      };
      // Adding the new game to the games array
      this.games.push(game);
    }
  };
  
  // Adding a new player using the addPlayer method
  team.addPlayer('Bugs', 'Bunny', 76);
  // Uncomment the line below to see the updated players array
  //console.log(team.players)
  
  // Adding a new game using the addGame method
  team.addGame('Titans', 100, 98);
  // Printing the updated games array
  console.log(team.games);
  