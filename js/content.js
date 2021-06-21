const sentences = [
  "test sentence"  
]

const paragraphs = [
  "test paragraph"
]


function bootstrap() {
  document.querySelector("#sentence").click(() => {
    alert('yay')
  })

  document.querySelector("#paragraph").click(() => {
    alert('yo')
  })
}


miro.onReady(bootstrap)
