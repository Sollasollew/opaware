import { Link } from 'react-router-dom';
import { getProduct } from '../data/catalog';
import { ProductMotif } from '../components/ProductMotif';
import { useShop } from '../context/ShopContext';

export function ListPage() {
  const { list, toggleList, addToCart } = useShop();

  return (
    <div className="bag-page">
      <div className="wrap">
        <h1>Grandparent&apos;s List</h1>
        <p className="lead">
          A personal stockroom shortlist — save now, conspire later. No
          accounts required in this demo.
        </p>

        {list.length === 0 ? (
          <div className="bag-list">
            <div className="empty">
              <p>Nothing pinned yet. Wander the drawers.</p>
              <Link className="btn btn-primary" to="/catalog">
                Open the catalog
              </Link>
            </div>
          </div>
        ) : (
          <div className="bag-list">
            {list.map((id) => {
              const p = getProduct(id);
              if (!p) return null;
              return (
                <div className="bag-row" key={id}>
                  <ProductMotif motif={p.motif} hue={p.hue} title={p.name} />
                  <div>
                    <h3>
                      <Link to={`/product/${p.id}`}>{p.name}</Link>
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--ink-soft)' }}>
                      {p.blurb}
                    </p>
                    <div className="qty-controls" style={{ marginTop: '0.5rem' }}>
                      <button
                        type="button"
                        className="btn btn-ember"
                        style={{ width: 'auto', height: 'auto', padding: '0.45rem 0.85rem' }}
                        onClick={() => addToCart(p.id)}
                      >
                        Add to cart
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleList(p.id)}
                        style={{ width: 'auto', padding: '0 0.65rem' }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="bag-price price">${p.price}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
