const list = [
    {
        "name": "Mayodenoche",
        "image": "https://i5.walmartimages.com/asr/46535c5c-7151-4626-b969-83e772ba0d21.3bd9fed39226c0c5918d6e09bdaeb571.jpeg",
        "price": "$1000"
    },
    {
        "name": "Suspicious Mayodenoche",
        "image": "https://www.tasteofhome.com/wp-content/uploads/2024/12/Korean-Corn-Dogs_EXPS_TOHVP24_277260_MR_12_03_2.jpg",
        "price": "$500"
    },
    {
        "name": "Credit Card",
        "image": "https://pngimg.com/uploads/credit_card/credit_card_PNG71.png",
        "price": "$200"
    },
    {
        "name": "a normal ssd that won't brick",
        "image": "https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-blue-sn580-nvme-ssd/gallery/wd-blue-sn580-nvme-ssd-250gb-front.png.thumb.1280.1280.png",
        "price": "$300"
    },
    {
        "name": "Galaxy Donut",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glazed-Donut.jpg/1920px-Glazed-Donut.jpg",
        "price": "$150"
    },
    {
        "name": "Virtual Shoes",
        "image": "https://academy.scene7.com/is/image/academy/20841626?$pdp-gallery-ng$",
        "price": "$1200"
    },
    {
        "name": "Cursed Banana",
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
        "price": "$80"
    },
    {
        "name": "Invisible Cloak (Probably)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Chess_tile.png?20050618233941",
        "price": "$999"
    },
    {
        "name": "Bread Helmet",
        "image": "https://i.kym-cdn.com/photos/images/original/000/184/659/IChJ1.jpg",
        "price": "$210"
    },
    {
        "name": "Meme NFT",
        "image": "https://i.imgflip.com/4/4t0m5.jpg",
        "price": "$9999"
    },
    {
        "name": "Suspicious Soup",
        "image": "https://media.istockphoto.com/photos/fish-soup-japanese-style-fish-soup-with-soy-sauce-picture-id505400398?k=20&m=505400398&s=612x612&w=0&h=MJFHkTLJ30FdSSXEPiR2JUXUDGiZVm_UmebV91oPEBk=",
        "price": "$45"
    },
    {
        "name": "The Bay Harbor Butcher",
        "image": "https://tse4.mm.bing.net/th/id/OIP.6a12uOEQUikVNM0Ol4jj2QHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        "price": "$275"
    },
    {
        "name": "Dogecoin Coin",
        "image": "https://thevideoink.com/wp-content/uploads/2022/05/Dogecoin-1.jpg",
        "price": "$420"
    },
    {
        "name": "Funky Flashlight",
        "image": "https://thumbs.dreamstime.com/b/groovy-cartoon-travel-flashlight-funny-character-face-vector-comic-emoji-camping-lamp-traveler-portable-funky-emotion-347328145.jpg",
        "price": "$33"
    },
    {
        "name": "Mystery Box",
        "image": "https://cdn.shoplightspeed.com/shops/610593/files/2916194/mystery-box-mystery-box-7500.jpg",
        "price": "$777"
    },
    {
        "name": "Choco Katana",
        "image": "https://th.bing.com/th/id/R.9e5bc5c6f910c61aeaa4203fc1453155?rik=1PmCUiZGCfRzvw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-JoAYS2gdgbc%2fTf9J_23fB2I%2fAAAAAAAACj4%2foHqMEqi5Dls%2fs1600%2fPocky_1_wm.jpeg&ehk=goZLkdj2G0eLOrQQffmO2rW3pJEvZr%2bMWjENn4pQa20%3d&risl=&pid=ImgRaw&r=0",
        "price": "$199"
    },
    {
        "name": "Air Fryer Drone",
        "image": "https://th.bing.com/th/id/OIP.BVe9-1FegAKZd9yCZGc0FQHaD3?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        "price": "$1450"
    },
    {
        "name": "Mini Volcano",
        "image": "https://th.bing.com/th/id/R.22a84ebb179a87c5972a0602f2baa9cc?rik=CJAmo%2bPsTCqxBw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-jQKtk_FK7b8%2fTV8q5uddyjI%2fAAAAAAAAAVo%2fpcC66MXURUU%2fs1600%2farenal%2bvolcano%2beruption.jpg&ehk=baZlhYP1vQFJFG0KGEMGKZNBhLLl%2bouGEBbZwDlcWZs%3d&risl=&pid=ImgRaw&r=0",
        "price": "$605"
    },
    {
        "name": "Quantum Dice",
        "image": "https://cdn11.bigcommerce.com/s-70184/images/stencil/1280w/products/3914/10989/d20-dice-transparent-blue__20693.1665519675.jpg?c=2",
        "price": "$888"
    },
    {
        "name": "Time-Travel Alarm Clock",
        "image": "https://i5.walmartimages.com/asr/4c40c713-7ccb-4e16-81e6-a70d900170b8.0c1153c4cd79501bd330bddb5c083bac.jpeg",
        "price": "$1234"
    }
]





function cards (l) {
    const card_div = document.querySelector('.item-container');
    for(let [key, value] of Object.entries(l)) {
        card_div.insertAdjacentHTML("beforeend", `<div class="item">
        <img class="item-image" src="${l[key]['image']}" alt="${l[key]['name']}">
            <p class="item-description">${l[key]['name']}</p>
            <p class="price">${l[key]['price']}</p>
        <button class="purchase" id="${l[key]['name']}">Purchase</button>
        </div>`);
    }
}
cards(list)


let total_shopping_cart = []
document.querySelectorAll('.purchase').forEach(btn => {
    btn.addEventListener('click', function() {
        const btn_id = btn.getAttribute('id');
        const shopping_cart = document.querySelector('.shopping');
        const filter_data = list.filter(item => item.name  === btn_id);
        const price = filter_data[0]['price'];

        if(total_shopping_cart.length === 0) {
            if((total_shopping_cart.includes(filter_data[0]['name'])) === false){
                
                total_shopping_cart.push({ 'name': btn_id, 'price': price, 'quanity': 1});
                shopping_cart.insertAdjacentHTML("beforeend", `<div class="shopping-item" id="div-${btn_id}">
                    <p class="cart-description">${btn_id}</p>
                    <p class="cost">${price}</p>
                    <button class="quanity-minus" id="${btn_id}"><p class="add-text">-</p></button>
                    <p class="quanity" id="${btn_id}">1</p>
                    <button class="quanity-plus" id="${btn_id}"><p class="add-text">+</p></button>
                </div>`);

                document.querySelectorAll('.quanity-minus').forEach(btn => {
                    btn.addEventListener('click', function(){
                    const quant_minus_id = btn.getAttribute('id');
                    const quant_minus_filter = total_shopping_cart.filter(item => item.name === quant_minus_id);
                    edit_quanity(quant_minus_id, quant_minus_filter, 'hi');
                    console.log(total_shopping_cart);})


                document.querySelectorAll('.quanity-plus').forEach(btn => {
                    btn.addEventListener('click', function(){
                    const quant_plus_id = btn.getAttribute('id');
                    const quant_plus_filter = total_shopping_cart.filter(item => item.name === quant_plus_id);
                    edit_quanity(quant_plus_id, quant_plus_filter, '+');
                    console.log(total_shopping_cart);})                

    })
});
        } else {
            const shopping_filter = total_shopping_cart.filter(item => item.name  === btn_id);
            console.log('hi')
            edit_quanity(btn_id, shopping_filter, '+');
        }
        }

        total_shopping_cart.forEach(cart => {


            if((cart.includes(filter_data[0]['name'])) === false){
                
                total_shopping_cart.push({ 'name': btn_id, 'price': price, 'quanity': 1});
                shopping_cart.insertAdjacentHTML("beforeend", `<div class="shopping-item" id="div-${btn_id}">
                    <p class="cart-description">${btn_id}</p>
                    <p class="cost">${price}</p>
                    <button class="quanity-minus" id="${btn_id}"><p class="add-text">-</p></button>
                    <p class="quanity" id="${btn_id}">1</p>
                    <button class="quanity-plus" id="${btn_id}"><p class="add-text">+</p></button>
                </div>`);

                document.querySelectorAll('.quanity-minus').forEach(btn => {
                    btn.addEventListener('click', function(){
                    const quant_minus_id = btn.getAttribute('id');
                    const quant_minus_filter = total_shopping_cart.filter(item => item.name === quant_minus_id);
                    edit_quanity(quant_minus_id, quant_minus_filter, 'hi');
                    console.log(total_shopping_cart);})


                document.querySelectorAll('.quanity-plus').forEach(btn => {
                    btn.addEventListener('click', function(){
                    const quant_plus_id = btn.getAttribute('id');
                    const quant_plus_filter = total_shopping_cart.filter(item => item.name === quant_plus_id);
                    edit_quanity(quant_plus_id, quant_plus_filter, '+');
                    console.log(total_shopping_cart);})                

    })
});
        } else {
            const shopping_filter = total_shopping_cart.filter(item => item.name  === btn_id);
            console.log('hi')
            edit_quanity(btn_id, shopping_filter, '+');
        }})

        
});
});

function edit_quanity (id, filter, sign) {
    if(sign === 'hi') {
        --filter[0]['quanity'];
    } else {
        ++filter[0]['quanity'];
    }

    document.getElementById(`div-${id}`).innerHTML =
                `<p class="cart-description">${id}</p>
                <p class="cost">${filter[0]['price']}</p>
                <button class="quanity-minus" id="${id}"><p class="add-text">-</p></button>
                <p class="quanity" id="${id}">${filter[0]['quanity']}</p>
                <button class="quanity-plus" id="${id}"><p class="add-text">+</p></button>`;
    
}



