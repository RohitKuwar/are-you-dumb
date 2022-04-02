document.getElementById('btn-yes').addEventListener('click', function() {
  document.getElementById('btn-container').setAttribute('class', 'hide')
  document.getElementById('heading').innerText = 'I knew it! :3'
})
document.getElementById('btn-no').addEventListener('click', function() {
  let a = Math.random()*3
  let b = Math.random()*3
  document.getElementById('btn-no').style = `transform: translate(${a}em, ${b}em)`
})