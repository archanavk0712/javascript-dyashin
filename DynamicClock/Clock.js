function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  // Pad with leading zeros
  document.getElementById('hour').textContent = String(hours).padStart(2, '0');
  document.getElementById('minute').textContent = String(minutes).padStart(2, '0');
  document.getElementById('second').textContent = String(seconds).padStart(2, '0');
  document.getElementById('ampm').textContent = ampm;
}

// Start the clock
setInterval(updateClock, 1000);
updateClock();
