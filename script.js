// Update current day of the week and UTC time
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = new Date().getDay();
const currentUTCTime = Date.now();

document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = daysOfWeek[currentDay];

document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime;
