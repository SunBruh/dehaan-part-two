let name = prompt("Welcome to Mini Golf! What is your name?");
let holes = prompt(
  `Hello ${name}! Would you like to play 3 or 6 holes today?`
);
let score = 0;

if (holes === "3") {
  for (let i = 1; i <= 3; i++)
    score += parseInt(prompt(`How many putts for hole ${i} (par is 3)`));
  let par = 9;
  let final_score = Math.abs(score - par);
    if (score > par) {
    console.log(`Nice try, ${name}... Your total par was: +${final_score}`);
    } else if (score < par) {
    console.log(`Great job, ${name}! Your total par was: -${final_score}`);
    } else console.log(`Good game, ${name}. Your total par was: ${final_score}`);

} else if (holes === "6") {
  for (let i = 1; i <= 6; i++)
    score += parseInt(prompt(`How many putts for hole ${i} (par is 3)`));
let par = 18;
let final_score = Math.abs(score - par);
    if (score > par) {
  console.log(`Nice try, ${name}... Your total par was: +${final_score}`);
    } else if (score < par) {
  console.log(`Great job, ${name}! Your total par was: -${final_score}`);
    } else console.log(`Good game, ${name}. Your total par was: ${final_score}`);
} else {
    alert(`You totally can't do any other number than 3 or 6 holes my dude`)
}