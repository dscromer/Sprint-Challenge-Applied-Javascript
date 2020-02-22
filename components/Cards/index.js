// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cards = document.querySelector('.cards-container');

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then((res) => {
        console.log(res.data.articles);
        const bootstrapArticles = res.data.articles.bootstrap;
        const javascriptArticles = res.data.articles.javascript;
        const jqueryArticles = res.data.articles.jquery;
        const technologyArticles = res.data.articles.technology;
        const nodeArticles = res.data.articles.node;

        bootstrapArticles.forEach((arr) => {
            cards.appendChild(newCard(arr))
        })
        javascriptArticles.forEach((arr) => {
            cards.appendChild(newCard(arr))
        })
        jqueryArticles.forEach((arr) => {
            cards.appendChild(newCard(arr))
        })
        technologyArticles.forEach((arr) => {
            cards.appendChild(newCard(arr))
        })
        nodeArticles.forEach((arr) => {
            cards.appendChild(newCard(arr))
        })
        
    })
    .catch((err) => {
        console.log(`You hit an error: ${err}`);
    });

function newCard(arr) {
    const thisCard = document.createElement('div');
    const headline = document.createElement('div');
    const authorContainer = document.createElement('div');
    const imgContainer = document.createElement('div');
    const imgAuthor = document.createElement('img');
    const authorName = document.createElement('span');

    thisCard.classList.add('card');
    headline.classList.add('headline');
    authorContainer.classList.add('author');
    imgContainer.classList.add('img-container');
    
    headline.textContent = (arr.headline);
    imgAuthor.src = (arr.authorPhoto);
    authorName.textContent = (`By ${arr.authorName}`);

    thisCard.appendChild(headline);
    thisCard.appendChild(authorContainer);
    authorContainer.appendChild(imgContainer);
    imgContainer.appendChild(imgAuthor);
    authorContainer.appendChild(authorName);

    return thisCard;
}