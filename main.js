function addTask(event) {
    event.preventDefault();
    var timeInput = document.getElementById("taskTime");
    var taskInput = document.getElementById("taskName");
    var tableBody = document.querySelector("#routineTable tbody");

    var time = timeInput.value.trim();
    var task = taskInput.value.trim();
    if (/^\d+$/.test(time) && Number(time) >= 0) {
    if (time && task) {
      var newRow = "<tr><td>" + time + "</td><td>" + task + "</td></tr>";
      tableBody.innerHTML += newRow;
    console.log(newRow)
      // Clear input fields after adding a task
      timeInput.value = "";
      taskInput.value = "";
    } else {
      alert("Please enter both time and task.");
    }
}else{
    alert("Please enter a valid time.");
}
  }