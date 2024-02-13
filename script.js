const root = document.querySelector('#root')

const skeleton = () => `
  <header class='header'>The New York Times Best Sellers</header>
  <div class='books'></div>
`

const bookComponent = (book) => `
  <div class='book'>
    <h2>${book.title}</h2>
    <h4>${book.sub}</h4>
    <p>${book.text}</p>
    <div class='number'>${book.id}</div>
    <button>read more</button>
  </div>
`

const loadEvent = () => {
  root.innerHTML = skeleton()

  const booksElement = document.querySelector('.books')
  
  books.forEach(book => {
    booksElement.insertAdjacentHTML('beforeend', bookComponent(book))
  })
}

window.addEventListener('load', loadEvent)





/*const header = root.insertAdjacentHTML("beforeend", `
 <header>The New York Times Best Sellers</header>
`)


books.forEach((book, index) => root.insertAdjacentHTML("beforeend", `
  <div class="book">

    <h2>${book.title}</h2>
    <h4>${book.sub}</h4>
    <p>${book.text}</p>

    <div class="number">${index+1}</div>

    <button>read more</button>

  </div>
`))*/
  

