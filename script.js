// Data produk
const products = [
    {
        id: 1,
        title: "Followers Worldwide",
        price: "Rp50.000",
        image: "https://i.pinimg.com/236x/dc/8e/cb/dc8ecb71cab52c5f804158b402d947b0.jpg",
        logo: "https://i.pinimg.com/736x/ae/a3/35/aea335fd233887bd3057d9a01b111828.jpg",
        whatsapp: "6285182767896", // Nomor WhatsApp
        message: "Saya minat followers worldwide instagram nya ka, bisa berikan info selengkapnya?" // Pesan default
    },
    {
        id: 2,
        title: "Like Worldwide",
        price: "Rp5.000",
        image: "https://i.pinimg.com/736x/2b/af/29/2baf293c9c5a64f14de45701b8e533e9.jpg",
        logo: "https://i.pinimg.com/736x/ae/a3/35/aea335fd233887bd3057d9a01b111828.jpg",
        whatsapp: "6285182767896",
        message: "Saya minat like worldwide instagram nya ka, bisa berikan info selengkapnya?"
    },
    {
        id: 3,
        title: "Views Reels / Story",
        price: "Rp10.000",
        image: "https://i.pinimg.com/736x/91/e1/fc/91e1fcf89bf291ebad5a46a91baf9315.jpg",
        logo: "https://i.pinimg.com/736x/ae/a3/35/aea335fd233887bd3057d9a01b111828.jpg",
        whatsapp: "6285182767896",
        message: "Saya minat views story / reels instagram nya ka, bisa berikan info selengkapnya?"
    },
    {
        id: 4,
        title: "Followers Indonesia",
        price: "Rp100.000",
        image: "https://i.pinimg.com/736x/11/c2/41/11c241f0ef14c02b1acd2084a6c1a82f.jpg",
        logo: "https://i.pinimg.com/736x/ae/a3/35/aea335fd233887bd3057d9a01b111828.jpg",
        whatsapp: "6285182767896", // Nomor WhatsApp
        message: "Saya minat followers indonesia instagram nya ka, bisa berikan info selengkapnya?" // Pesan default
    },
    {
        id: 5,
        title: "Like Indonesia",
        price: "Rp30.000",
        image: "https://i.pinimg.com/736x/2b/af/29/2baf293c9c5a64f14de45701b8e533e9.jpg",
        logo: "https://i.pinimg.com/736x/ae/a3/35/aea335fd233887bd3057d9a01b111828.jpg",
        whatsapp: "6285182767896",
        message: "Saya minat like indonesia instagram nya ka, bisa berikan info selengkapnya?"
    },
    {
        id: 6,
        title: "Comment Post",
        price: "Rp50.000",
        image: "https://i.pinimg.com/236x/de/8c/cf/de8ccfcc9252b76cccd808e64a40427e.jpg",
        logo: "https://i.pinimg.com/736x/ae/a3/35/aea335fd233887bd3057d9a01b111828.jpg",
        whatsapp: "6285182767896",
        message: "Saya minat comment instagram nya ka, bisa berikan info selengkapnya?"
    },
    {
        id: 7,
        title: "Followers Worldwide",
        price: "Rp50.000",
        image: "https://i.pinimg.com/236x/dc/8e/cb/dc8ecb71cab52c5f804158b402d947b0.jpg",
        logo: "https://i.pinimg.com/236x/55/45/a2/5545a2a9ce938ec70e0941cdd7a82105.jpg",
        whatsapp: "6285182767896", // Nomor WhatsApp
        message: "Saya minat followers worldwide tiktok nya ka, bisa berikan info selengkapnya?" // Pesan default
    },
    {
        id: 8,
        title: "Like Worldwide",
        price: "Rp10.000",
        image: "https://i.pinimg.com/736x/2b/af/29/2baf293c9c5a64f14de45701b8e533e9.jpg",
        logo: "https://i.pinimg.com/236x/55/45/a2/5545a2a9ce938ec70e0941cdd7a82105.jpg",
        whatsapp: "6285182767896",
        message: "Saya minat like worldwide tiktok nya ka, bisa berikan info selengkapnya?"
    },
    {
        id: 9,
        title: "Views Vt",
        price: "Rp7.000",
        image: "https://i.pinimg.com/736x/91/e1/fc/91e1fcf89bf291ebad5a46a91baf9315.jpg",
        logo: "https://i.pinimg.com/236x/55/45/a2/5545a2a9ce938ec70e0941cdd7a82105.jpg",
        whatsapp: "6285182767896",
        message: "Saya minat views tiktok nya ka, bisa berikan info selengkapnya?"
    },
    {
        id: 10,
        title: "Followers Worldwide",
        price: "$Rp30.000",
        image: "https://i.pinimg.com/236x/dc/8e/cb/dc8ecb71cab52c5f804158b402d947b0.jpg",
        logo: "https://i.pinimg.com/236x/d8/ff/30/d8ff3064a3067ac45a70f762f4977d90.jpg",
        whatsapp: "6285182767896", // Nomor WhatsApp
        message: "Saya minat followers worldwide facebook nya ka, bisa berikan info selengkapnya?" // Pesan default
    },
    {
        id: 11,
        title: "Like Worldwide",
        price: "Rp50.000",
        image: "https://i.pinimg.com/736x/2b/af/29/2baf293c9c5a64f14de45701b8e533e9.jpg",
        logo: "https://i.pinimg.com/236x/d8/ff/30/d8ff3064a3067ac45a70f762f4977d90.jpg",
        whatsapp: "6285182767896",
        message: "Saya minat like worldwide facebook nya ka, bisa berikan info selengkapnya?"
    },
    {
        id: 12,
        title: "Views Reels",
        price: "Rp30.000",
        image: "https://i.pinimg.com/736x/91/e1/fc/91e1fcf89bf291ebad5a46a91baf9315.jpg",
        logo: "https://i.pinimg.com/236x/d8/ff/30/d8ff3064a3067ac45a70f762f4977d90.jpg",
        whatsapp: "6285182767896",
        message: "Saya minat views reels worldwide facebook nya ka, bisa berikan info selengkapnya?"
    }
];

// Render produk ke halaman
const productList = document.getElementById('product-list');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    productCard.innerHTML = `
        <div class="product-logo">
            <img src="${product.logo}" alt="Logo ${product.title}">
        </div>
        <div class="product-image">
            <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="product-details">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-price">${product.price}</p>
            <a href="https://wa.me/${product.whatsapp}?text=${encodeURIComponent(product.message)}" 
               class="whatsapp-button" 
               target="_blank">
               Pesan via WhatsApp
            </a>
        </div>
    `;

    productList.appendChild(productCard);
});
