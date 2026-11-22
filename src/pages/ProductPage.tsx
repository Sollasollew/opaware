import { Link, useParams } from 'react-router-dom';
import { getCategory, getProduct } from '../data/catalog';
import { ProductMotif } from '../components/ProductMotif';
import { MischiefMeter } from '../components/MischiefMeter';
import { useShop } from '../context/ShopContext';

export function ProductPage() {
  const { productId } = useParams();
  const product = productId ? getProduct(productId) : undefined;
  const { addToCart, toggleList, list } = useShop();

  if (!product) {
    return (
      <div className="bag-page">
        <div className="wrap">
          <h1>Missing from the bench</h1>
          <p className="lead">That prototype wandered off. Try the catalog.</p>
          <Link className="btn btn-primary" to="/catalog">
            Back to stockroom
          </Link>
        </div>
      </div>
    );
  }

  const cat = getCategory(product.category);
  const onList = list.includes(product.id);

  return (
    <div className="detail">
      <div className="wrap">
        <p className="crumb">
          <Link to="/">OpaWare</Link> /{' '}
          <Link to={`/catalog/${product.category}`}>{cat?.name}</Link> /{' '}
          {product.name}
        </p>
        <div className="detail-grid">
          <div className="detail-visual">
            <ProductMotif
              motif={product.motif}
              hue={product.hue}
              title={product.name}
            />
          </div>
          <div className="detail-panel">
            <h1>{product.name}</h1>
            <p>{product.blurb}</p>
            <div className="tag-row">
              <span>${product.price}</span>
              <span>Ages {product.ages}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                Mischief <MischiefMeter level={product.mischiefLevel} />
              </span>
            </div>
            <p>{product.story}</p>
            <p className="tested">
              <strong>Tested on:</strong> {product.testedOn}
            </p>
            <div className="detail-actions">
              <button
                type="button"
                className="btn btn-ember"
                onClick={() => addToCart(product.id)}
              >
                Add to cart
              </button>
              <button
                type="button"
                className="btn btn-ghost"
                style={{
                  color: 'var(--ink)',
                  borderColor: 'rgba(61,41,24,0.35)',
                }}
                onClick={() => toggleList(product.id)}
              >
                {onList ? 'On Grandparent’s List' : 'Save to Grandparent’s List'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
