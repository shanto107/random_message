const team = ['Lakers', 'Warriors', 'Nuggets', 'Celtics', 'Heats', 'Bucks'];
const opponet = ['Celtics', 'Heats', 'Bucks', 'Lakers', 'Warriors', 'Nuggets'];
const verdict = ['win', 'lose', 'win in overtime', 'lose in overtime'];

const resultIndex = length => {
  return Math.floor(Math.random() * length);
}

const generateMessage = () => {
  let teamIndex = resultIndex(team.length);
  let verdictIndex = resultIndex(verdict.length);
  let margin = resultIndex(30);

  console.log(`Today the ${team[teamIndex]} will ${verdict[verdictIndex]} by ${margin} points against the ${opponet[teamIndex]}!`);
  switch(verdictIndex) {
    case 0: 
      if(margin > 15) {
        console.log(`This will be a huge win for the ${team[teamIndex]}`);
      }
      else if(margin > 5) {
        console.log(`This will be a nice win for the ${team[teamIndex]}`);
      }
      else {
        console.log(`This will be a tough win for the ${team[teamIndex]}`);
      }
      break;
    case 1: 
      if(margin > 15) {
        console.log(`This will be a total annihilation of the ${team[teamIndex]}`);
      }
      else if(margin > 5) {
        console.log(`This will be a fighting loss for the ${team[teamIndex]}`);
      }
      else {
        console.log(`This will be a tough loss for the ${team[teamIndex]}`);
      }
      break;
    case 2: 
      console.log('That will be a Hard-fought Win.');
      break;
    case 3: 
      console.log('That will be a Tough Loss.');
      break;
  }
  
}

console.log('------Today\'s NBA Game Result Prediction--------');
generateMessage();