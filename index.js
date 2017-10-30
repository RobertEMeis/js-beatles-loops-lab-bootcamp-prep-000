

function theBeatlesPlay(musicians, instruments) {

var newArray = [];

for (var i = 0; i <musicians.length; i++) {
 var music = musicians[i];
 var inst = instruments[i];
  newArray.push(music + " plays " + inst)
}

return newArray;
}
