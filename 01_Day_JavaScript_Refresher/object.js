// Create an empty object called dog
const dog = {};
console.log(dog)
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "bingo"
dog.legs = 2;
dog.age =3;
dog.bark = function dogBark() {
    console.log("woof woof")
}
console.log(dog)
// Set new properties the dog object: breed, getDogInfo
dog.breed = "dalmatian"
dog.getDogInfo = ["Age", "name", "breed"]
console.log(dog)
// Find the person who has many skills in the users object.
for(let user in users){
    //  console.log(users[user].skills)
    if(users[user].skills.length===8){
      console.log(user)
    }
    }
// Count logged in users,count users having greater than equal to 50 points from the following object.
for(let user in users){
    if(users[user].isLoggedIn=== true){
      console.log(user)
    }
    }
for(let user in users){
        //  console.log(users[user].skills)
        if(users[user].points>= 50){
          console.log(user)
        }
        }
// Find people who are MERN stack developer from the users object
for(let user in users){
    //  console.log(users[user].skills)
    if(users[user].skills.includes("MongoDB", "Express", "React", "Node.js")){
      console.log(user)
    }
    }
// Set your name in the users object without modifying the original users object
const newObj = Object.assign({}, users);
newObj.Neta = {
    email:'neta@neta.com',
    skills: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT', 'UI/UX'],
    age: 29,
    isLoggedIn: true,
    points: 60
}
// Get all keys or properties of users object
const keys = Object.keys(users)
console.log(keys)
// Get all the values of users object
const values = Object.values(users)
console.log(values)

function signUp(username, password) {
    users.forEach(user => {
        if(user.username === username){
            console.log("user already exists")
        } else {
            users.push(username)
        }
    });
}