

function theBeatlesPlay(musicians, instruments) {

var newArray = [];

for (var i = 0; i <musicians.length; i++) {
 var music = musicians[i];
 var inst = instruments[i];
  newArray.push(music + " plays " + inst)
}

return newArray;
}


function johnLennonFacts(array) {

  var newArray = [];
  var i = 0;

  while (i < array.length) {
    var facts = array[i];

    newArray.push(facts + "!!!");
    i++;
  }
  return newArray;
}


function iLoveTheBeatles(n) {

  var newArray = [];

  for (var i = 0; i <= n; i++) {

    newArray.push("I love the Beatles!")
  }
  return newArray;
}