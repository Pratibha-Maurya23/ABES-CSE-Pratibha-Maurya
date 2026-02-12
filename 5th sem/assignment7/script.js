const items = {
  "tvs": [
    {
      "name": "LG",
      "price": 55000,
      "rating": 4.5,
      "image": "images/sony.webp",
      "description": "LG 55-inch 4K Ultra HD Smart LED TV with AI ThinQ, Dolby Vision, and immersive sound."
    },
    {
      "name": "Samsung",
      "price": 60000,
      "rating": 4.7,
      "image": "images/samsung.jpg",
      "description": "Samsung 55-inch Crystal 4K UHD Smart TV with HDR, slim design, and voice assistant support."
    },
    {
      "name": "Sony",
      "price": 65000,
      "rating": 4.8,
      "image": "images/Lg.webp",
      "description": "Sony Bravia 55-inch 4K UHD Smart TV with X-Reality PRO, Dolby Atmos, and sleek bezel-less design."
    }
  ],
  "phones": [
    {
      "name": "Vivo",
      "price": 22000,
      "rating": 4.3,
      "image": "images/vivo.webp",
      "description": "Vivo V27 5G with 6.78-inch AMOLED display, 64MP OIS camera, and 4600mAh battery with fast charging."
    },
    {
      "name": "Google",
      "price": 62000,
      "rating": 4.7,
      "image": "images/google.webp",
      "description": "Google Pixel 8 with Tensor G3 processor, advanced AI features, 50MP dual camera, and clean stock Android experience."
    },
    {
      "name": "Oppo",
      "price": 28000,
      "rating": 4.4,
      "image": "images/oppo.webp",
      "description": "Oppo Reno 10 Pro with 6.7-inch AMOLED display, 32MP telephoto portrait camera, and 80W fast charging."
    },
    {
      "name": "Redmi",
      "price": 18000,
      "rating": 4.2,
      "image": "images/redmi.webp",
      "description": "Redmi Note 13 Pro 5G with Snapdragon 7s Gen 2, 200MP OIS camera, 120Hz AMOLED display, and 5100mAh battery."
    }
  ],
  "games": [
    {
      "name": "Ludo",
      "price": 150,
      "rating": 4.5,
      "image": "images/lodo.webp",
      "description": "Classic board game played with dice and tokens. Fun for family and friends, available in wooden and plastic sets."
    },
    {
      "name": "Chess",
      "price": 500,
      "rating": 4.8,
      "image": "images/chess.jpg",
      "description": "Strategic two-player board game with 32 pieces and 64 squares. Improves problem-solving and critical thinking skills."
    },
    {
      "name": "Carrom",
      "price": 700,
      "rating": 4.6,
      "image": "images/caram.jpg",
      "description": "Popular indoor strike-and-pocket board game with wooden coins, striker, and powder for smooth play."
    }
  ]
}


function renderCards(items,containerId){
  const container = document.querySelector("#"+containerId);
  if(!container) return;

  items.forEach(item =>{
    container.innerHTML +=  `<div class="card mb-3" style="max-width: 740px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src=${item.image} class="img-fluid rounded-start" alt="..." style="width: 200px;">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.description}</p>
          <p class="card-text"><small class="text-body-secondary">${item.rating} ⭐</small></p>
          <p class="card-text"><small class="text-body-secondary">${item.price} Rupees</small></p>
        </div>
      </div>
    </div>
  </div>`
  })
}

if (document.getElementById("tvs")) renderCards(items.tvs, "tvs");
if (document.getElementById("phones")) renderCards(items.phones, "phones");
if (document.getElementById("games")) renderCards(items.games, "games");
