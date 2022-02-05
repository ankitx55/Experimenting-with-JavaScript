let arguments = process.argv;

for (let arg of arguments) {
    console.log(`Hey there Mr ${arg}`);
}
// this executes below output
// $ node arg.js ankit harish raj
// Hey there Mr C:\Program Files\nodejs\node.exe
// Hey there Mr D:\NewProject\arg.js
// Hey there Mr ankit
// Hey there Mr harish
// Hey there Mr raj

// since the proces.arg[0] and process.arg[1] are by default the
// execPath and fileExecuting path, we can slice the first two
// index by using slice() method
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@");
console.log("After slicing things up")
console.log()


arguments = process.argv.slice(2);
// slice(2) will chopp off the first two indices
for (let arg of arguments) {
    console.log(`Hey there Mr ${arg}`);
}