let number = 0
let sentence = 'the number 3.'

document.getElementById('button').addEventListener('click', addition)

function addition () {
  number = document.getElementById('input').value
  number = number * number
  alert(number)
}
