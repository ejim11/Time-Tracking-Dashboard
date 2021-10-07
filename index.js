"use strict";
// storing the daily, weekly and monthly variables

let daily, weekly, monthly;
daily = document.querySelector(".daily");
weekly = document.querySelector(".weekly");
monthly = document.querySelector(".monthly");

// storing the current and previous time frames for all activities

let workCurrent,
  workPrevious,
  playCurrent,
  playPrevious,
  studyCurrent,
  studyPrevious,
  exerciseCurrent,
  exercisePrevious,
  socialCurrent,
  socialPrevious,
  selfCareCurrent,
  selfCarePrevious;

workCurrent = document.querySelector(".work-current");
workPrevious = document.querySelector(".work-previous");
playCurrent = document.querySelector(".play-current");
playPrevious = document.querySelector(".play-previous");
studyCurrent = document.querySelector(".study-current");
studyPrevious = document.querySelector(".study-previous");
exerciseCurrent = document.querySelector(".exercise-current");
exercisePrevious = document.querySelector(".exercise-previous");
socialCurrent = document.querySelector(".social-current");
socialPrevious = document.querySelector(".social-previous");
selfCareCurrent = document.querySelector(".selfcare-current");
selfCarePrevious = document.querySelector(".selfcare-previous");

//  adding an event listerner to the daily tab
daily.addEventListener("click", function () {
  monthly.querySelector("a").style.color = "rgba(204, 204, 209, 0.719)";
  weekly.querySelector("a").style.color = "rgb(204, 204, 209, 0.719)";
  daily.querySelector("a").style.color = "#fff";
  workCurrent.textContent = "5hrs";
  workPrevious.textContent = "Yesterday - 7hrs";
  playCurrent.textContent = "1hr";
  playPrevious.textContent = "Yesterday - 2hrs";
  studyCurrent.textContent = "0hr";
  studyPrevious.textContent = "Yesterday - 1hr";
  exerciseCurrent.textContent = "1hr";
  exercisePrevious.textContent = "Yesterday - 1hr";
  socialCurrent.textContent = "1hrs";
  socialPrevious.textContent = "Yesterday - 3hrs";
  selfCareCurrent.textContent = "0hr";
  selfCarePrevious.textContent = "Yesterday - 1hr";
});

// adding an event listerner to the weekly tab
weekly.addEventListener("click", function () {
  monthly.querySelector("a").style.color = "rgb(204, 204, 209, 0.719)";
  weekly.querySelector("a").style.color = "#fff";
  daily.querySelector("a").style.color = "rgb(204, 204, 209, 0.719)";
  workCurrent.textContent = "32hrs";
  workPrevious.textContent = "Last Week - 36hrs";
  playCurrent.textContent = "10hrs";
  playPrevious.textContent = "Last Week - 8hrs";
  studyCurrent.textContent = "4hrs";
  studyPrevious.textContent = "Last Week - 7hrs";
  exerciseCurrent.textContent = "4hrs";
  exercisePrevious.textContent = "Last Week - 5hrs";
  socialCurrent.textContent = "5hrs";
  socialPrevious.textContent = "Last Week - 10hrs";
  selfCareCurrent.textContent = "2hrs";
  selfCarePrevious.textContent = "Last Week - 2hrs";
});

// adding an event listerner to the monthly tab
monthly.addEventListener("click", function () {
  monthly.querySelector("a").style.color = "#fff";
  weekly.querySelector("a").style.color = "rgb(204, 204, 209, 0.719)";
  daily.querySelector("a").style.color = "rgb(204, 204, 209, 0.719)";
  workCurrent.textContent = "103hrs";
  workPrevious.textContent = "Last Month - 128hrs";
  playCurrent.textContent = "23hrs";
  playPrevious.textContent = "Last Month - 29hrs";
  studyCurrent.textContent = "13hrs";
  studyPrevious.textContent = "Last Month - 19hrs";
  exerciseCurrent.textContent = "11hrs";
  exercisePrevious.textContent = "Last Month - 18hrs";
  socialCurrent.textContent = "21hrs";
  socialPrevious.textContent = "Last Month - 23hrs";
  selfCareCurrent.textContent = "7hrs";
  selfCarePrevious.textContent = "Last Month - 11hrs";
});
