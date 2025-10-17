const morningTimes = [
  "9:00 AM",
  "9:10 AM",
  "9:20 AM",
  "9:30 AM",
  "9:40 AM",
  "9:50 AM",
  "10:00 AM",
  "10:10 AM",
  "10:20 AM",
  "10:30 AM",
];
const eveningTimes = [
  "5:00 PM",
  "5:10 PM",
  "5:20 PM",
  "5:30 PM",
  "5:40 PM",
  "5:50 PM",
  "6:00 PM",
  "6:10 PM",
  "6:20 PM",
];

let selectedSlot = "10:10 AM";

function renderTimeSlots(times, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = times
    .map(
      (time) =>
        `<div class="time-slot ${
          time === selectedSlot ? "selected" : ""
        }" onclick="selectSlot('${time}')">${time}</div>`
    )
    .join("");
}

function selectSlot(time) {
  selectedSlot = time;
  renderTimeSlots(morningTimes, "morningSlots");
  renderTimeSlots(eveningTimes, "eveningSlots");
}

function renderCalendar() {
  const calendar = document.getElementById("calendar");
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const daysInMonth = [
    "",
    "",
    "",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    "",
  ];

  let html = days.map((d) => `<div class="day-label">${d}</div>`).join("");

  html += daysInMonth
    .map((day, i) => {
      if (day === "") return '<div class="day empty"></div>';
      if (day === 18) return `<div class="day selected">${day}</div>`;
      return `<div class="day">${day}</div>`;
    })
    .join("");

  calendar.innerHTML = html;
}

renderCalendar();
renderTimeSlots(morningTimes, "morningSlots");
renderTimeSlots(eveningTimes, "eveningSlots");
