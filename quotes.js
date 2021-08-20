const quotes = [
    {
        quote : "Apple is innovational",
        author : "Hyotaek"
    }, 
    {
        quote : "Chicken is very delicious",
        author : "Kwon Hyotaek"
    },
    {
        quote : "Millitary is waste of life",
        author : "Hyotaek Kwon"},
    {
        quote : "I wish JeonYeok",
        author : "KHT"
    },
    {
        quote : "Now, I want to eat something....(21.08.01.21:26)",
        author : "Hyo Taek Kwon"
    }
]
const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const randomNum = Math.random() * quotes.length
const floorNum = Math.floor(randomNum)
const todayQuote = quotes[floorNum]

quote.innerText = todayQuote.quote
author.innerText = todayQuote.author