// Track streak info
let currentStreak = 0;
let longestStreak = 0;

// DOM elements
const streakBtn = document.getElementById('streak-btn');
const resetBtn = document.getElementById('reset-btn');
const calendarEl = document.querySelector('.calendar');
const currentText = document.getElementById('current-streak'); 
const longestText = document.getElementById('longest-streak');

// Event listeners
streakBtn.addEventListener('click', updateStreak);
resetBtn.addEventListener('click', reset);

// Load data from localStorage
function loadData() {
  const data = JSON.parse(localStorage.getItem('streaks'));
  if (data) {
    currentStreak = data.current;
    longestStreak = data.longest;
  }
}

// Save to localStorage
function saveData() {
  localStorage.setItem('streaks', JSON.stringify({
    current: currentStreak,
    longest: longestStreak
  }));
}

// Increment streak
function updateStreak() {

  currentStreak++;

  if (currentStreak > longestStreak) {
    longestStreak = currentStreak;
  }

  updateCalendar();
  updateText();
  saveData();

}

// Reset streaks
function reset() {
  currentStreak = 0;
  longestStreak = 0;
  
  updateCalendar();
  updateText();
  saveData();
}

// Update calendar view  
function updateCalendar() {

  calendarEl.innerHTML = '';

  for(let i = 0; i < currentStreak; i++) {
    let div = document.createElement('div');
    calendarEl.appendChild(div);
  }

}

// Update text
function updateText() {
  currentText.textContent = currentStreak;
  longestText.textContent = longestStreak; 
}

// Initialize
loadData();