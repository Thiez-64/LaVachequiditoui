const myObject = {myName: "Matthieu", myCampus: "Biarritz"};



const myInfo =() => {
    var cowsay = require("cowsay");
    console.log(cowsay.say({
	text : `Hi my name is ${myObject.myName}, and I am from ${myObject.myCampus} !`,
	e : "oO",
	T : "U "
}));

};

module.exports = myInfo;