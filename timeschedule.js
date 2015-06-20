var TimeSchedule = function() {
  this.timeSchedule = [
    [], [], [], [], [], [], []
  ];
};

var STORAGE_NAME = 'time_schedule';

var storage = {
  fetch: function () {
    return JSON.parse(localStorage.getItem(STORAGE_NAME));
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_NAME, JSON.stringify(todos));
  }
};

TimeSchedule.prototype = {
  setLesson: function(day, period, lesson) {
      if (!this.timeSchedule[day][period-1]) {
      this.timeSchedule[day][period-1] = lesson;
    }
  },
  getLesson: function(day, period) {
    return this.timeSchedule[day][period-1];
  },
  deleteLesson: function(day, period) {
    if (this.timeSchedule[day][period-1]) {
      this.timeSchedule[day][period-1] = null;
    }
  },
  saveSchedule: function () {
    storage.save(this.timeSchedule);
  },
  loadSchedule: function () {
    this.timeSchedule =  storage.fetch() ? storage.fetch() : this.timeSchedule;
  }
};
