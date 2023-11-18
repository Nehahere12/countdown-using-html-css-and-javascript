const endDate = "19 November 2023 10:00 PM";
document.getElementById("end-date").innerText = endDate;
// creat inputs

const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();

  const diff = (end - now) / 1000;
  //   milliseconds to seconds

  //   so that values are never in negative
  if (diff < 0) return;

  console.log(diff);
  inputs[0].value = Math.floor(diff / 3600 / 24);
  //   into days and then put it in input[0]
  inputs[1].value = Math.floor(diff / 3600) % 24;
  inputs[2].value = Math.floor(diff / 60) % 60;
  inputs[3].value = Math.floor(diff) % 60;
}

clock();

// 1 day=24hrs
// 1 hrs=60min
// 1 min=60sec
setInterval(() => {
  clock();
}, 1000);
