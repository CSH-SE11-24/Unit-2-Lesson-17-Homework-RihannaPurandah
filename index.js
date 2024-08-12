const prompt = require('prompt-sync')()
// Create an object that represents your favorite restaurant with the keys name (string), cuisine (string), and rating (number)
let favrestaurant = {
  name: "Pf Changs", cuisine: "Chinese",  rating: 3,
}; 

// Console log the restaurant's name using the object
console.log(favrestaurant.name);


// Add a new key called location and add the restaurant's location
favrestaurant.location = "10 Port Imperial Blvd West New York, NJ"


// Change the rating of the restaurant to increase it by one
favrestaurant.rating++


// Add a new key called test and set the value to null
favrestaurant.test = null
//test
console.log(favrestaurant)

// Delete the test key
delete favrestaurant.test;


// Console log the object to see if the test key is gone
console.log(favrestaurant)



// Loop through the object and print every key and element.
// It should look like: 
// name is Ugly Baby
// cuisine is thai
// rating is 10
// location is 407 Smith St, Brooklyn

for(let key in favrestaurant){
  console.log(favrestaurant)
}




