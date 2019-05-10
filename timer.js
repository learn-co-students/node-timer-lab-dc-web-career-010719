let input = process.argv[2];

let unit = input[input.length - 1];
let time = parseInt(input);

if (unit === "n") {
  time *= 60;
}
let int = setInterval(() => {
  time -= 1;
  console.log(`Left: ${time}s`);
  if (time === 0) {
    clearInterval(int);
    process.exit();
  }
}, 1000);
