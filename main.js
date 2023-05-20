const billAmount = document.querySelector("#bill-amount")
const peopleCount = document.querySelector("#people-count")
const btns = document.querySelectorAll(".btns")
const custom = document.querySelector("#custom")
const showTip = document.querySelector(".show-tip")
const showTotal = document.querySelector(".show-total")
const resBtn = document.querySelector(".reset-btn")




let many = Number(billAmount.value)
let manyPercent = Number(btns[0].value)
let people = Number(peopleCount.value)




billAmount.addEventListener("input", () => {
    many = Number(billAmount.value)
    console.log(many)
    calculate()
})




btns.forEach( (btn) => {
    btn.addEventListener("click", () => {
       manyPercent = Number(btn.value)
       calculate()
    })
 })


peopleCount.addEventListener("input", () => {
    people = Number(peopleCount.value)
    console.log(people) 
    calculate()
})





let calculate = () => {

    if(billAmount != 0){
        let amount = many * (manyPercent / 100)
        let total = many / people + amount
        showTip.textContent = amount
        showTotal.textContent = Math.floor(total)
    }
}



resBtn.addEventListener("click", () => {
  showTip.textContent = "$0.00"
  showTotal.textContent = "$0.00"  
})