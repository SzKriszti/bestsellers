const root = document.querySelector("#root")

const header = root.insertAdjacentHTML("beforeend", `
 <header>New York Times Bestsellers</header>
`)

books.forEach((book, index) => root.insertAdjacentHTML("beforeend", `
  <div class="book">

    <h4>${book.sub}</h4>
    <h2>${book.title}</h2>
    <p>${book.text}</p>

    <div class="number">${index+1}</div>

    <button>read more</button>

  </div>
`))