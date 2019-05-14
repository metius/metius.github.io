// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

var user = {
	username: "metvet",
	password: "123456"

};


// 2. Create an array which contains the object you have made above and name the array "database".

var database = [user];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var newsFeed = [
	{
		username: "user1",
		timeline: "So tired from all that learning!"
	},
	{
		username: "user2",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "user3",
		timeline: "Javascript is preeetyy cool!"
	}
];

var userPrompt = prompt("What's your username?");
var passPrompt = prompt("What's your password?");

function signIn(user, pass) {
	if( user === database[0].username && pass === database[0].password )
	{
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password");
	}
}

signIn(userPrompt,passPrompt);