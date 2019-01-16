const ansi = require("ansi");
const cursor = ansi(process.stdout);

cursor.write("Hello!");