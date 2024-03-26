/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = 'https://platzi-avo.vercel.app/api/avo'

async function fetchData() {
    const response = await fetch(url);
    const info = await response.json();
    displayItems(info.data);
}
fetchData();

function displayItems(item){
    const allItems = [];
    item.forEach((element) =>{
        const imagen = document.createElement('img');

        const titulo = document.createElement('h1');
        
        const precio = document.createElement('div');

        const container = document.createElement('div');
        container.append(imagen, titulo, precio);

        allItems.push(container);
    }
    );
    document.body.append(...allItems);
}