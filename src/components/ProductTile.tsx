import { Link } from 'react-router-dom';
import type { Product } from '../data/catalog';
import { ProductMotif } from './ProductMotif';
import { MischiefMeter } from './MischiefMeter';

export function ProductTile({ product }: { product: Product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-tile">
      <ProductMotif
        motif={product.motif}
        hue={product.hue}
        title={product.name}
      />
      <div>
        <h3>{product.name}</h3>
        <p style={{ margin: '0.35rem 0 0.65rem', color: 'var(--ink-soft)', fontSize: '0.95rem' }}>
          {product.blurb}
        </p>
        <div className="product-meta">
          <MischiefMeter level={product.mischiefLevel} />
          <span className="price">${product.price}</span>
        </div>
      </div>
    </Link>
  );
}
