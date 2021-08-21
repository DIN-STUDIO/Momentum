const image = ["0.jpg", "1.jpg", "2.jpg"]

const randNum = Math.random() * image.length
const fNum = Math.floor(randNum)
const chosenImage = image[fNum]

const backgroundImages = document.createElement("img")
backgroundImages.src = chosenImage

document.body.appendChild(backgroundImages)