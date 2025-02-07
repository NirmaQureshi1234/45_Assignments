// 35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

// Define a list of animals
const animals: string[] = ["Dog", "Cat", "Rabbit"];

// Loop through each animal and print its name
for (let animal of animals) {
    console.log(animal);
}
// Print a statement about each animal
for (let animal of animals) {
    switch (animal) {
        case "Dog":
            console.log("A dog would make a great pet.");
            break;
        case "Cat":
            console.log("A cat can be a wonderful companion.");
            break;
        case "Rabbit":
            console.log("Rabbits are cute and cuddly pets.");
            break;
        default:
            console.log("This animal is not recognized.");
            break;
    }
}

// Print a statement about what these animals have in common
console.log("Any of these animals would make a great pet!");
