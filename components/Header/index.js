// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const myHead = document.createElement('div');
    const myDate = document.createElement('span');
    const myTitle = document.createElement('h1');
    const myTemp = document.createElement('span');

    myHead.classList.add('header');
    myDate.classList.add('date');
    myTemp.classList.add('temp');

    myDate.textContent = ('SMARCH 28, 2019');
    myTitle.textContent = ('Lambda Times');
    myTemp.textContent = ('98°')

    myHead.appendChild(myDate);
    myHead.appendChild(myTitle);
    myHead.appendChild(myTemp);

    return myHead
}

const headContainer = document.querySelector('.header-container')
headContainer.appendChild(Header());
