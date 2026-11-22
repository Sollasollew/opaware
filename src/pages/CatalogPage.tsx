import { Link, useParams } from 'react-router-dom';
import {
  categories,
  getCategory,
  products,
  productsByCategory,
  type CategoryId,
} from '../data/catalog';
import { ProductTile } from '../components/ProductTile';

export function CatalogPage() {
  const { categoryId } = useParams();
  const active = categoryId ? getCategory(categoryId) : undefined;
  const list = active
    ? productsByCategory(active.id as CategoryId)
    : products;

  return (
    <div className="catalog-page">
      <div className="wrap">
        <p className="crumb">
          <Link to="/">OpaWare</Link> / Catalog
          {active ? ` / ${active.name}` : ''}
        </p>
        <h1>{active ? active.name : 'The whole stockroom'}</h1>
        <p className="lead" style={{ color: 'var(--sawdust)', maxWidth: '42ch' }}>
          {active
            ? active.tagline
            : 'Seven drawers of mischief. Pick a label or wander the bench.'}
        </p>

        <nav className="filter-row" aria-label="Categories">
          <Link to="/catalog" className={!active ? 'active' : undefined}>
            All stuff
          </Link>
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/catalog/${c.id}`}
              className={active?.id === c.id ? 'active' : undefined}
            >
              {c.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="panel panel-products">
        <div className="wrap product-grid">
          {list.map((p) => (
            <ProductTile key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
