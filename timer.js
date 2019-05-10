let input = process.argv[2];

let unit = input[input.length - 1];
let time = parseInt(input);

let int = setInterval(() => {
    time -= 1;
    console.log(`Left: ${time}s`);
  }, 1000);
}
global.clearInterval();
process.exit();
