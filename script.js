let age = 0
let day = 0

document.getElementById('enter').addEventListener('click', enter)

function enter () {
  day = document.getElementById('input').value
  if (day === 'Monday' || day === 'Thusday'|| day === 'Wensday' || day === 'Thursday' || day === 'Friday')
  { alert('Time for school!')
   day = document.getElementById('input2')
.value
  } if (day === 'Saturday'|| day === 'Sunday') { alert('Time to relax')
  ('age').value }
  age = document.getElementById('input2').value
 if (age >= 18 && day !== 'Sunday' && day !== 'Saturday')
   document.getElementById('enter')
   alert('Time for work')
}
