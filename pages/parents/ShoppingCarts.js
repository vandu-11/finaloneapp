import React, { useState } from 'react';
import Header from '../../components/Header';
import styles from './ShoppingCarts.module.css';
import CartPage from '../../components/CartPage';
import Footer from '../../components/Footer';

function ShoppingCarts() {
  const [isViewingFavorites, setIsViewingFavorites] = useState(false);
  const [footballItems, setFootballItems] = useState([
    {
      id: 1,
      name: 'Football Jersey',
      price: 29.99,
      image: '/images/football-jersey.jfif',
      rating: 4.5,
      favorite: false,
    },
    {
      id: 2,
      name: 'Football Shoes',
      price: 49.99,
      image: '/images/football-shoes.jfif',
      rating: 4.2,
      favorite: false,
    },
    {
      id: 3,
      name: 'Football',
      price: 19.99,
      image: '/images/football.jfif',
      rating: 4.0,
      favorite: false,
    },
    {
      id: 4,
      name: 'Football jersey',
      price: 29.99,
      image: '/images/jersey.jfif',
      rating: 4.5,
      favorite: false,
    },
    // Add more items as needed
  ]);

  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCartPage = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleFavorite = (item) => {
    const updatedFootballItems = [...footballItems];
    updatedFootballItems[item.id - 1] = {
      ...updatedFootballItems[item.id - 1],
      favorite: !item.favorite,
    };
    setFootballItems(updatedFootballItems);
  };

  const getFavoriteItems = () => {
    return footballItems.filter((item) => item.favorite);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const filteredItems = footballItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.topBar}>
        <div className={styles.iconContainer}>
          <span
            role="img"
            aria-label="Search"
            onClick={() => setSearchQuery('')}
          >
            🔍
          </span>
        </div>
        <div className={styles.iconContainer}>
          <span role="img" aria-label="Cart" onClick={toggleCartPage}>
            🛒
          </span>
          <span className={styles.cartCount}>{cart.length}</span>
        </div>
        <div className={styles.iconContainer}>
          <span
            role="img"
            aria-label="Favorites"
            onClick={() => setIsViewingFavorites(!isViewingFavorites)}
          >
            ❤️
          </span>
        </div>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      {isViewingFavorites ? (
        <div className={styles.productList}>
          <h1>Favorite Items</h1>
          <ul className={styles.productList}>
            {getFavoriteItems().map((item) => (
              <li key={item.id} className={styles.productItem}>
                <div className={styles.productImage}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={styles.productInfo}>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <div className={styles.productRating}>
                    <span>Rating: {item.rating}</span>
                  </div>
                  <div className={styles.productActions}>
                    <button
                      onClick={() => toggleFavorite(item)}
                      className={
                        item.favorite
                          ? styles.favoriteButtonActive
                          : styles.favoriteButton
                      }
                    >
                      ❤️
                    </button>
                    <button
                      onClick={() => addToCart(item)}
                      className={styles.cartButton}
                    >
                      {cart.includes(item) ? 'In Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={styles.productList}>
          <h1>Football Items</h1>
          <ul className={styles.productList}>
            {filteredItems.map((item) => (
              <li key={item.id} className={styles.productItem}>
                <div className={styles.productImage}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={styles.productInfo}>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <div className={styles.productRating}>
                    <span>Rating: {item.rating}</span>
                  </div>
                  <div className={styles.productActions}>
                    <button
                      onClick={() => toggleFavorite(item)}
                      className={
                        item.favorite
                          ? styles.favoriteButtonActive
                          : styles.favoriteButton
                      }
                    >
                      ❤️
                    </button>
                    <button
                      onClick={() => addToCart(item)}
                      className={styles.cartButton}
                    >
                      {cart.includes(item) ? 'In Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {isCartOpen && <CartPage selectedItems={cart} setCart={setCart} />}
      <div className={styles.new}>
        <Footer />
      </div>
    </div>
  );
}

export default ShoppingCarts;
