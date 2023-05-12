let inicial = "L"

let pessoas = [
    {
        nome: "Marcos",
        idade: 35
    },
    {
        nome: "Leticia",
        idade: 25
    }, 
    {
        nome: "Kaiky",
        idade: 27
    },
    {
        nome: "Thiago",
        idade: 28
    },
    {
        nome: "Leonardo",
        idade: 40
    }
]

const newArray = pessoas
  .filter(item => item.nome.startsWith(inicial))
  .map(pessoa => pessoa.nome)
const media = pessoas
  .filter(item => item.nome.startsWith(inicial))
  .reduce((a, b) => a + b.idade / newArray.length, 0)
console.log(newArray, media)