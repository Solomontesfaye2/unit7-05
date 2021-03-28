let bass1 = 0
let bass2 = 0
let height = 0
let answer = 0

document.getElementById('calculate').addEventListener('click', calculate)

function calculate () {
  bass1 = document.getElementById('bass-1').value
  bass1 = parseInt(bass1)
  bass2 = document.getElementById('bass-2').value
  bass2 = parseInt(bass2)
  height = document.getElementById('height').value
  height = parseInt(height)
  answer = (bass1 + bass2) * height / 2
  alert(answer)
}
