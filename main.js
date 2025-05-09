let arrayFruit = [
    {
        name: 'Apple',
        description: 'A juicy red fruit',
        price: 1.00,
        imgUrl: 'https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=',
    },
    {
        name: 'Orange',
        description: 'A juicy red fruit',
        price: 2.00,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsa3K1PkfEgVzc6JeayE-uGwejpsBDBbVBUw&s',
    },
    {
        
        name: 'Banana',
        description: 'A juicy red fruit',
        price: 2.00,
        imgUrl: 'https://organicmandya.com/cdn/shop/files/BananaPachabale.jpg?v=1721369894',
    },
    {
        name: 'Grape',
        description: 'Grape fruit is the best and health',
        price: 3.00,
        imgUrl: 'https://gofresh.com.kw/wp-content/uploads/2023/10/grapgree-1.jpg',
    },
];
localStorage.setItem('Fruit',JSON.stringify(arrayFruit));
let getFruitFromLocal = JSON.parse(localStorage.getItem('Fruit'));
console.log(localStorage.getItem('Fruit'));
let main_card = document.getElementById('main_card');
main_card.innerHTML = '';
main_card.style.display = 'flex';

getFruitFromLocal.forEach(item => {

    let card = document.createElement('div');
    card.className = 'card my-5 mx-3';
    card.style.width = '18rem';

    card.innerHTML = `
        <img src="${item.imgUrl}" class="card-img-top h-50" alt="...">
        <div class="card-body h-auto">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            <p class="card-text text-danger">${item.price}$</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
    main_card.appendChild(card);
});
