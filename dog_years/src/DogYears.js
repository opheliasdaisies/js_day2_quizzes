//create an object called dog
//it should have 3 functions, ageInYears, ageInDays, ageInDogYears

function Dog(){
  this.age = Math.floor(Math.random()*20 + 1);
}

Dog.prototype.ageInYears = function(){
  return this.age;
};

Dog.prototype.ageInDays = function(){
  return this.age * 365;
};

Dog.prototype.ageInDogYears = function(){
  return this.age * 7;
};