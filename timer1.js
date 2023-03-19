// accepts unlimited arguments as numbers and starts timers in seconds
const args = process.argv.slice(2);
const alarms = args.map((i) => Number(i));

for (let i = 0; i < alarms.length; i++) {
  if (typeof alarms[i] === "number" && alarms[i] >= 0 && !isNaN(alarms[i])) {
    setTimeout(() => {
      process.stdout.write("\x07");
      process.stdout.write(`${alarms[i]} seconds\n`);
    }, alarms[i] * 1000);
  }
}
