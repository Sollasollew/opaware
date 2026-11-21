import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { getProduct } from '../data/catalog';
import { ProductMotif } from '../components/ProductMotif';
import { useShop } from '../context/ShopContext';

export function CartPage() {
  const { cart, setQty, removeFromCart, cartTotal, clearCart } = useShop();
  const [ordered, setOrdered] = useState(false);
  const [name, setName] = useState('');

  const onCheckout = (e: FormEvent) => {
    e.preventDefault();
    setOrdered(true);
    clearCart();
  };

  if (ordered) {
    return (
      <div className="bag-page">
        <div className="wrap">
          <h1>Order logged in the ledger</h1>
          <div className="success-box">
            <h2>Thanks{name ? `, ${name}` : ''}.</h2>
            <p>
              This is a demo checkout — no payment taken, no elves dispatched.
              In a real Opaware shop, your crate would be packed under workshop
              lamps and stamped READY FOR MISCHIEF.
            </p>
            <Link className="btn btn-primary" to="/catalog">
              Keep browsing
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bag-page">
      <div className="wrap">
        <h1>Cart</h1>
        <p className="lead">
          Everything here is sample stock. Checkout is theatrical — generous,
          not greedy.
        </p>

        {cart.length === 0 ? (
          <div className="bag-list">
            <div className="empty">
              <p>The cart is empty. The stockroom is not.</p>
              <Link className="btn btn-primary" to="/catalog">
                Browse stuff
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="bag-list">
              {cart.map((item) => {
                const p = getProduct(item.productId);
                if (!p) return null;
                return (
                  <div className="bag-row" key={p.id}>
                    <ProductMotif
                      motif={p.motif}
                      hue={p.hue}
                      title={p.name}
                    />
                    <div>
                      <h3>
                        <Link to={`/product/${p.id}`}>{p.name}</Link>
                      </h3>
                      <div className="qty-controls">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => setQty(p.id, item.qty - 1)}
                        >
                          −
                        </button>
                        <span>{item.qty}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => setQty(p.id, item.qty + 1)}
                        >
                          +
                        </button>
                        <button
                          type="button"
                          onClick={() => removeFromCart(p.id)}
                          style={{
                            marginLeft: '0.5rem',
                            width: 'auto',
                            padding: '0 0.5rem',
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="bag-price price">${p.price * item.qty}</div>
                  </div>
                );
              })}
            </div>

            <div className="bag-total">
              <div>
                <div>Bench total</div>
                <strong>${cartTotal}</strong>
              </div>
              <form className="checkout-form" onSubmit={onCheckout}>
                <label>
                  Grandparent name
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Grandpa Nick"
                    required
                  />
                </label>
                <label>
                  Delivery note (optional)
                  <input placeholder="Leave by the workbench" />
                </label>
                <button type="submit" className="btn btn-primary">
                  Place demo order
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
