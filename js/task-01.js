const amountItemEls = document.querySelectorAll(".item");
console.log("Number of categories:", amountItemEls.length);

amountItemEls.forEach((itemEl) => {
    const categoryEl = itemEl.querySelector("h2");
    const elementEl = itemEl.querySelectorAll("li");
    console.log('Category:', categoryEl.textContent);
    console.log('Elements:', elementEl.length);
})



// const categoryEl = document.querySelectorAll(".item > h2");
// const elementEl = document.querySelectorAll("ul")
// console.log('Category:', categoryEl[0].textContent);
// console.log('Elements:', elementEl);



