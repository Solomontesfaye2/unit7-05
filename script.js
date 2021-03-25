let day = 0

document.getElementById('enter').addEventListener('click', enter)

function enter () {
  day = document.getElementById('input').value
  if (day === 'Monday' || day === 'Thusday'|| day === 'Wensday' || day === 'Thursday' || day === 'Friday')
  { alert('Time for school!')
   day = document.getElementById('input')
      .value
  }
}
