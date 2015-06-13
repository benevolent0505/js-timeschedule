document.addEventListener('DOMContentLoaded', function() {
  var timeSchedule = new TimeSchedule();

  var table = document.getElementById('time-table');
  var registButton = document.getElementById('register');
  var deleteButton = document.getElementById('delete');
  var saveButton = document.getElementById('save');
  var loadButton = document.getElementById('load');

  var renderTable = function() {
    for (var i = 1; i < table.rows.length; i++) {
      for (var j = 0; j < table.rows[i].cells.length; j++) {
        var lessonName = timeSchedule.getLesson(j,i);

        if (lessonName) {
          table.rows[i].cells[j].textContent = lessonName;
        } else {
          table.rows[i].cells[j].textContent = "空";
        }
      }
    }
  };

  timeSchedule.loadSchedule();
  renderTable();

  registButton.addEventListener('click', function() {
    var day = document.getElementById('day').value;
    var period = document.getElementById('period').value;
    var lesson = document.getElementById('lesson').value;

    timeSchedule.setLesson(day, period, lesson);

    renderTable();
  }, false);

  deleteButton.addEventListener('click', function() {
    var day = document.getElementById('delete-day').value;
    var period = document.getElementById('delete-period').value;

    timeSchedule.deleteLesson(day, period);

    renderTable();
  }, false);

  saveButton.addEventListener('click', function() {
    timeSchedule.saveSchedule();
  }, false);

  loadButton.addEventListener('click', function() {
    timeSchedule.loadSchedule();

    renderTable();
  }, false);
}, false);
