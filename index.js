// Get the canvas element
var ctx = document.getElementById("myBarChart").getContext("2d");

var xValues = [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80];
var yValues = [0, 100, 200, 300];
// Create a bar chart
var myBarChart = new Chart(ctx, {
  type: "bar", // Specify the type of chart (bar, line, pie, etc.)
  data: {
    labels: xValues.map(String),
    datasets: [
      {
        label: "Employer: K 73,500",
        data: [7, 13, 18, 26, 33, 40, 46, 53, 60, 66, 73, 87, 100],
        backgroundColor: ["rgb(25, 4, 130)"],
      },
      {
        label: "Employee: K 52,500",
        data: [6, 13, 19, 26, 33, 40, 46, 53, 60, 66, 73, 83, 99],
        backgroundColor: ["rgb(119, 82, 254)"],
      },
      {
        label: "Total Interest: K 244,313",
        data: [6, 13, 23, 26, 33, 40, 46, 53, 60, 66, 73, 85, 100],
        backgroundColor: ["rgb(194, 217, 255)"],
      },
    ],
  },
  options: {
    scales: {
      x: {
        stacked: true,
        barThickness: 2,
      },
      y: {
        beginAtZero: true,
        stacked: true,
        ticks: {
          // Set the specific values you want on the y-axis
          callback: function (value, index, values) {
            if (yValues.includes(value)) {
              return "$" + value;
            } else {
              return ""; // Hide other values
            }
          },
        },
      },
    },
  },
});

let circularProgress = document.querySelector(".circular-progress"),
  progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,
  progressEndValue = 90,
  speed = 100;

let progress = setInterval(() => {
  progressStartValue++;

  progressValue.textContent = `${progressStartValue}%`;
  circularProgress.style.background = `conic-gradient(#7d2ae8 ${
    progressStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (progressStartValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);


window.onload = function() {
  const slider = document.querySelector(".slider input");
  const value = document.querySelector(".value");
  value.textContent = slider.value;
  slider.oninput = function(){
    value.textContent = this.value;
  }
};
