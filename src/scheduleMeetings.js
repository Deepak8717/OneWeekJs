const meetings = [
  { startTime: "09:00", endTime: "10:30" },
  { startTime: "10:00", endTime: "11:30" },
  { startTime: "11:45", endTime: "12:30" },
  { startTime: "12:00", endTime: "13:00" },
  { startTime: "13:30", endTime: "15:00" },
  { startTime: "14:00", endTime: "15:30" },
];

function scheduleMeeting(meetings) {
  meetings.sort((a, b) => a.endTime - b.endTime);
  const schedule = [meetings[0]];
  for (let i = 0; i < meetings.length - 1; i++) {
    if (meetings[i].startTime > schedule[schedule.length - 1].endTime) {
      schedule.push(meetings[i]);
    }
  }
  console.log(schedule);
}

scheduleMeeting(meetings);
