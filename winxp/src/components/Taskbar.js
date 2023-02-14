function Taskbar({ taskList }) {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();

  function hourOrganize() {
    if (hour > 12) {
      return `오후 0${hour - 12}`;
    } else if (12 >= hour >= 10) {
      return `오후 ${hour}`;
    } else {
      return `오전 0${hour}`;
    }
  }

  function minuteOrganize() {
    if (minute >= 10) {
      return minute;
    } else {
      return `0${minute}`;
    }
  }

  return (
    <section className="taskbar">
      <button>시작</button>
      <ul>
        {taskList.map((li, i) => (
          <li key={i}>{li}</li>
        ))}
      </ul>
      <div>
        {hourOrganize()}:{minuteOrganize()}
      </div>
    </section>
  );
}

export default Taskbar;