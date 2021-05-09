const initGameState = {
    playerId : null ,
    commentary: [
        { 
            id: 0, 
            type: 'attack', 
            by: 'player',
            points  : 5 
        },
    ],
    health : {
      player: 100,
      covidMonster: 100
    }
}


export default (state = initGameState, action) => {
    switch (action.type) {
      case 'game/updateHealth':
        let { playerHealth , covidMonsterHealth  } = action.payload ;
        return {
            ...state,
            health : {
                player : playerHealth,
                covidMonster : covidMonsterHealth
            }
        }
      default:
        return state
    }
}





