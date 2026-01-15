import './App.css';

// Компонент одной карточки
function ProductCard({ title, price, image, isNew }: { title: string, price: string, image: string, isNew?: boolean }) {
  return (
    <div className="card">
      {/* Левая часть: Информация */}
      <div className="card-info">
        {isNew && <span className="label-new">NEW</span>}
        
        <h3 className="card-title" title={title}>{title}</h3>
        
        <div className="card-price">
          <span className="price-val">{price}</span>
          <span className="price-cur">грн</span>
        </div>

        <div className="card-actions">
          <button className="btn-buy">Купити</button>
          
          {/* Кнопка сравнения (появляется при наведении) */}
          <button className="btn-compare">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M7 15h0" /><path d="M17 15h0" />
            </svg>
          </button>
        </div>
      </div>

      {/* Правая часть: Картинка */}
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
}

// Основной компонент
function App() {
  const products = [
    {
      title: 'Чохол BMW iPhone 15 Pro Max 6.7" black hardcase...',
      price: '1 780',
      // Ссылка заменена на стабильную (Amazon/Rozetka CDN)
      image: 'https://yellow.ua/media/catalog/product/cache/9/image/508x508/9df78eab33525d08d6e5fb8d27136e95/5/1/51z9jjq3ahl._ac_.jpg', 
      isNew: true,
    },
    {
      title: 'Навушники Realme Buds Air 7 Pro (Glory Beige)',
      price: '3 449',
      // Стабильное фото белых/бежевых наушников
      image: 'https://yellow.ua/media/catalog/product/cache/9/image/508x508/9df78eab33525d08d6e5fb8d27136e95/r/e/realmbuds-air7-pro-beige-03-1024x1024.jpg',
      isNew: true,
    },
    {
      title: 'Смартфон Honor 90 8/256GB Black (UA)',
      price: '16 949',
      // Стабильное фото Honor 90
      image: 'https://yellow.ua/media/catalog/product/cache/9/image/508x508/9df78eab33525d08d6e5fb8d27136e95/h/e/hehva8sb3k1_1.jpg',
      isNew: true,
    },
    {
      title: 'Ноутбук Xiaomi Redmi Book 16 2025 16/512GB...',
      price: '34 749',
      // Фото ноутбука Xiaomi
      image: 'https://yellow.ua/media/catalog/product/cache/9/image/508x508/9df78eab33525d08d6e5fb8d27136e95/1/2/12121212.jpg',
      isNew: true,
    },
    {
      title: 'Стайлер Dyson Airwrap i.d. HS08 Complete Long...',
      price: '24 199',
      // Фото Dyson
      image: 'https://yellow.ua/media/catalog/product/cache/9/image/508x508/9df78eab33525d08d6e5fb8d27136e95/3/6/36_600_4.jpg',
      isNew: true,
    },
    {
      title: 'Ноутбук HP Victus 15-fb2724nw (B4MD6EA)',
      price: '27 899',
      // Фото HP Victus
      image: 'https://yellow.ua/media/catalog/product/cache/9/image/508x508/9df78eab33525d08d6e5fb8d27136e95/q/i/qiehj3tw8h3sys3qlfj3k8sje8y5e4ur.jpg',
      isNew: true,
    },
  ];

  return (
    <div className="container">
      <h1 className="page-title">Новинки</h1>
      <div className="grid">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}

export default App;