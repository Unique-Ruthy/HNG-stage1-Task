document.addEventListener("DOMContentLoaded", () => {
  // Function to update time and day
  function updateTimeAndDay() {
    const currentTimeUTC = document.getElementById("currentTimeUTC");
    const currentDay = document.getElementById("currentDay");

    const now = new Date();
    currentTimeUTC.textContent = now.toUTCString().split(" ")[4];
    currentDay.textContent = now.toLocaleDateString("en-US", {
      weekday: "long",
    });
  }

  // Initial call to update time and day
  updateTimeAndDay();

  // Update every second
  setInterval(updateTimeAndDay, 1000);
});
