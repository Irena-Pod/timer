const args = process.argv.slice(2);

args.forEach((char, i) => {
  if (args[i] > 0 || typeof(args[i]) === "number") {
    setTimeout(() => {
      process.stdout.write(`BEEP at ${char} seconds \n`);
    }, args[i] * 1000);
  }
});



