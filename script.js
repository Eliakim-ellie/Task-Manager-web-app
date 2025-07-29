document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-bar span");
  const taskList = document.querySelector(".tasks");
  const addButton = document.querySelector(".add-btn");

  // 1. Tab switching
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // Just for demo purpose
      if (tab.textContent.includes("Reminders")) {
        taskList.innerHTML = `<div class="task-card yellow">
          <div class="task-info">
            <h3>Reminder</h3>
            <p>Meeting with team at 4:00 PM.</p>
            <div class="labels">
              <span class="tag">#meeting</span>
              <span class="due">Due : 4:00 PM</span>
            </div>
          </div>
        </div>`;
      } else {
        location.reload(); // Reload to reset tasks
      }
    });
  });

  // 2. Add task dynamically
  addButton.addEventListener("click", () => {
    const newCard = document.createElement("div");
    newCard.className = "task-card blue";
    newCard.innerHTML = `
      <div class="task-info">
        <h3>New Task</h3>
        <p>This task was added just now ✨</p>
        <div class="labels">
          <span class="tag">dynamic</span>
          <span class="due">Due : ${new Date().getHours()}:${new Date().getMinutes()} PM</span>
        </div>
      </div>
    `;
    taskList.prepend(newCard);
  });
});
