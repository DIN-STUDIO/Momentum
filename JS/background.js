const image = ["0.jpg", "1.jpg", "2.jpg"]

const randNum = Math.random() * image.length
const fNum = Math.floor(randNum)
const chosenImage = image[fNum]

const backgroundImages = document.createElement("img")  //createElement는 생성만 해놓고 아직 html에 추가하지는 않음
backgroundImages.src = "img/" + chosenImage

document.body.appendChild(backgroundImages) // 생성만 된 element를 직접적으로 html에 추가함.