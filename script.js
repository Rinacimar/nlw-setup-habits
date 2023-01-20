// Comentario
const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  // const today = "16/01"
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("🔴 Dia já incluso 🔴")
    return
  }

  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('Setup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('Setup@habits'))
nlwSetup.setData(data)
nlwSetup.load()

/*
const data = {
  water: ["01-02", "01-06"],
  gym: ["01-02", "01-03", "01-04", "01-05", "01-06", "01-09", "01-10", "01-11"],
  sleep: ["01-01", "01-06"],
  food: ["01-06"],
}


*/
