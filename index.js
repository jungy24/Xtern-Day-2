const rosterForm = document.querySelector('form')

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const list = document.querySelector('.list')

  const name = form.personName.value

  const ul = document.createElement('ul')
  const li = document.createElement('li')
  li.textContent = name + ' '
  //li = combine(name, makeButton())

  const button = document.createElement('button')
  button.innerHTML = 'Highlight ' + name
  li.appendChild(button)

  list.insertBefore(li, list.childNodes[0])

}

function makeButton(){
  const button = document.createElement('button')
  button.innerHTML = 'Highlight Name'
  return button
}

function combine(n, b) {
  const li1 = document.createElement('li')
  li1.innerHTML = `${n}     ${b}`
  return li1
}

rosterForm.addEventListener('submit', handleSubmit)