let $form = document.getElementById("form")
let $inputOne = document.getElementById("inputOne")
let $inputTwo = document.getElementById("inputTwo")
let $result = document.getElementById("result")

$form.addEventListener("submit", function (evento) {
  evento.preventDefault()

  let parseOneInput = parseInt($inputOne.value) || 0
  let parseTwoInput = parseInt($inputTwo.value) || 0

  $result.textContent = parseOneInput + parseTwoInput


  $inputOne.value = "";
  $inputTwo.value = "";
})

