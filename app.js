// Selector for the plus and subtract button
const plusSign = document.querySelectorAll('.plus')
const subtract = document.querySelectorAll('.sub')

// plus button function.
// it loops through the 3 plus buttons on the page and adds an event listener to each button
// Then it stopsPropagation() so the event doesn't bubble up the DOM Tree and cause other event listeners to fire
//quantity is then selected using the target event which identifies which of the plus buttons was clicked
//nextElementSibling is used to navigate to the quantity and increment the innerhtml with ++
// The total is then selected using nextElementSibling element
// The cost of the item is also selected using nextElementSibling element
// newTotal is a multiplication of the cost by the quantity
// The newTotal is assigned as innerHTML to total
plusSign.forEach(function (plus) {
  plus.addEventListener('click', function (e) {
    e.stopPropagation()
    let quantity = e.target.nextElementSibling
    quantity.innerHTML++
    let total =
      e.target.nextElementSibling.nextElementSibling.nextElementSibling
        .nextElementSibling
    let cost = e.target.nextElementSibling.nextElementSibling.nextElementSibling
    let newTotal = quantity.innerHTML * cost.innerHTML
    total.innerHTML = newTotal
    // console.log(total, cost, newTotal)
    console.log(quantity)
  })
})

//Same logic as above. Use forEach to get which unique subtrct button is firing then add eventlistener. use the nextElementSibling to naviate the elements and instead of incrementing, decrement.
//I also added a function so that it wuantity is less than 0 the function stops working
subtract.forEach(function (subs) {
  subs.addEventListener('click', function (e) {
    e.stopPropagation()
    let quantity = e.target.previousElementSibling
    if (quantity.innerHTML <= 0) {
      return
    }
    quantity.innerHTML--
    let total = e.target.nextElementSibling.nextElementSibling
    // console.log(total)

    let cost = e.target.nextElementSibling
    let newTotal = quantity.innerHTML * cost.innerHTML
    total.innerHTML = newTotal
    // console.log(total, cost, newTotal)
    console.log(quantity.innerHTML)
  })
})

//Still need to figure out how to make the Total at te bottom work
