// 14 .Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner. 
import chalk from "chalk";
let guestList = ["nirma", "sonia", "hina"];
for (let i = 0; i < guestList.length; i++) {
    console.log(chalk.cyan("Dear Miss\n", guestList[i], "\n It is our pleasure to invited you to dinner,\n Thank You"));
}