function sortingHat(str) {
  var len = str.length;
  var mod = len % 4;
  if (mod === 0) {
    return {
      house: "Gryffindor",
      description: "Courage and chivalry are two of the most recognisable qualities when it comes to this house but that doesn't mean that every Gryffindor is always supremely confident and self-assured. Some can be nervous or unsure of themselves and still belong there."
    };

  } else if (mod === 1) {
    return {
      house: "Ravenclaw",
      description: "Ravenclaw is one of the four Houses of Hogwarts School of Witchcraft and Wizardry, founded by Rowena Ravenclaw. Members of this house are characterised by their wit, learning, and wisdom."
    };
  } else if (mod === 2) {
    return {
      house: "Slytherin",
      description: "Those in Slytherin are known for being ambitious, cunning, and resourceful. Slytherins are also sometimes regarded as being evil thanks to the fact that many of the most sinister witches and wizards have been associated with this house."
    };
  } else if (mod === 3) {
    return {
      house: "Hufflepuff",
      description: "Hufflepuff is where you will find the most trustworthy and hardworking students. In fact, out of all the houses Hufflepuff has produced the least number of dark witches and wizards."
    };
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  var houseNameElement = document.getElementById("houseName");
  var descriptionElement = document.getElementById("description");
  houseNameElement.textContent = house.house;
  descriptionElement.textContent = house.description;
  houseNameElement.style.color = "blue";
  houseNameElement.style.fontSize = "40px";
});
