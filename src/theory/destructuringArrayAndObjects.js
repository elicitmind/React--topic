const animals = [{
        name: "cat",
        sound: "meow"
    },
    {
        //name undefined
        sound: "woof",
        //nested object
        favouriteActivity: {
            happy: "Cheer",
            angry: "Bark"
        }
    }
];

//destructuring array
const [cat, dog] = animals;

//destructuring object syntax:
// const { "property name": "declare unique name" = "declare default if undefined" } = object
const { name: catName = "Felix", sound: catSound = "Hrrrr" } = cat;
const {
    name: dogName = "Alpha",
    sound: dogSound = "Wrrr",
    //destructuring nested object, giving the unique names for its property values
    favouriteActivity: { happy: happyDog, angry: angryDog }
} = dog;

console.log(happyDog);
console.log(angryDog);
console.log(catName);
console.log(dogSound);
console.log(dogName);
console.log(catSound);