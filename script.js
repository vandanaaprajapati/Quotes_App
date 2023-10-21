
  // Get the current hour
  var now = new Date().getHours();
  var greeting = document.getElementById('greeting');

  // Change greeting based on the time of day
  if (now >= 5 && now < 12) {
    greeting.textContent = 'Good Morning!';
  } else if (now >= 12 && now < 18) {
    greeting.textContent = 'Good Afternoon!';
  } else {
    greeting.textContent = 'Good Night!';
  }

