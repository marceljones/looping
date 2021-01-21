console.log("This is where the magic happens!")

//----------ARRAY PRACTICE WITH .length and index-------------

// .length - counts the # of items in the array starting at 1
// However positioning or index starts at 0
// .push() - adds to the end of an array
// .pop() - removes last value from array

const myArray = ['books', 'shoes', 'wigs', 'boots', 'hats'];
console.log(myArray)
console.log(myArray.length)//returns 5
console.log(myArray[2])//returns wig


const favMovies = ['50 First Dates', 'Precious', 'Wolf', 'Batman'];
console.log(favMovies)
console.log(favMovies.length)//returns 4
console.log(favMovies[3])//returns Batman

const favTVShows = ['Scandal', 'Dead Silent', 'HTGAWM', 'Martin', 'The Parkers', 'Golden Girls', 'Maude', 'For Life', 'Chicago PD', 'Law&Order SVU'];
console.log(favTVShows.length)
console.log(favTVShows)//returns 10
console.log(favTVShows[7])//For Life


const myStocks = ['IBM', 'AT&T', 'CAT', 'Logans'];
myStocks.push('Coke', 'Pepsi')//adds coke and pepsi to end of array
console.log(myStocks)//returns ["IBM", "AT&T", "CAT", "Logans", "Coke", "Pepsi"]

const myFriends = ['Yvette', 'Carla', 'Jack', 'Courtney', 'Bernard'];
console.log(myFriends);//returns ["Yvette", "Carla", "Jack", "Courtney", "Bernard"]
myFriends.pop()//removes last value in array
console.log(myFriends);//returns ["Yvette", "Carla", "Jack", "Courtney"]

//-----REPLACE OR OVERWRITE A VALUE IN AN ARRAY-----

const allFriends = ['Yvette', 'Carla', 'Jack', 'Courtney'];
allFriends[2] = 'Corinthia';//Tell javascript which index you want to target and the value to overwrite.
console.log(allFriends);//Returns ['Yvette', 'Carla', 'Corinthia', 'Courtney'];
