// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
import chalk from "chalk";
const magicians = ["Merlin", "Houdini", "David Copperfield", "Penn & Teller"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(chalk.bgGray(magician));
    });
}
show_magicians(magicians);
