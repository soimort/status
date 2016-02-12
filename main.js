function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

function startTimer(display) {
  var timer = 0, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    display.textContent = seconds + " seconds";
    if (minutes)
      display.textContent = minutes + " minutes " + display.textContent;

    ++timer;
  }, 1000);
}

window.onload = function() {

  var spLife = document.getElementById('life');
  var spLifeImg = document.getElementById('life-img');
  spLife.innerHTML = currentStatus.life;
  spLifeImg.innerHTML = currentStatus.lifeImg;

  var spHealth = document.getElementById('health');
  var spHealthVal = document.getElementById('health-val');
  var spHealthImg = document.getElementById('health-img');
  spHealth.innerHTML = currentStatus.health;
  spHealthVal.innerHTML = currentStatus.healthVal;
  spHealthImg.innerHTML = currentStatus.healthImg;

  var spEmotion = document.getElementById('emotion');
  var spEmotionImg = document.getElementById('emotion-img');
  spEmotion.innerHTML = currentStatus.emotion;
  spEmotionImg.innerHTML = currentStatus.emotionImg;

  var spLifeGoals = document.getElementById('life-goals');
  spLifeGoals.innerHTML = currentStatus.lifeGoals;

  var spShortTermGoals = document.getElementById('short-term-goals');
  spShortTermGoals.innerHTML = currentStatus.shortTermGoals;

  var spJob = document.getElementById('job');
  var spJobImg = document.getElementById('job-img');
  spJob.innerHTML = currentStatus.job;
  spJobImg.innerHTML = currentStatus.jobImg;

  var spDegree = document.getElementById('degree');
  var spDegreeImg = document.getElementById('degree-img');
  spDegree.innerHTML = currentStatus.degree;
  spDegreeImg.innerHTML = currentStatus.degreeImg;

  var spProcrastination = document.getElementById('procrastination');
  spProcrastination.innerHTML = currentStatus.procrastination;

  var spUpdateDate = document.getElementById('update-date');
  spUpdateDate.innerHTML = updateDate;

  initializeClock('clockdiv', deadline);

  var display = document.querySelector('#time');
  startTimer(display);
}
