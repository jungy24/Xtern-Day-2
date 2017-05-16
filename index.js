const rosterForm = document.querySelector('form')

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const list = document.querySelector('.list')

  const name = form.personName.value

  const ol = document.createElement('ol')
  const li = document.createElement('li')
  li.textContent = name
  list.appendChild(li)

}

rosterForm.addEventListener('submit', handleSubmit)