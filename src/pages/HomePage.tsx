import { Link } from 'react-router-dom';
import { categories, products } from '../data/catalog';
import { HeroWorkshop } from '../components/HeroWorkshop';
import { ProductTile } from '../components/ProductTile';

const featured = products.filter((p) =>
  ['glitter-cannon', 'volcano-yes', 'wooden-mysteries', 'kite-circus'].includes(
    p.id,
  ),
);

export function HomePage() {
  return (
    <>
      <section className="hero" aria-label="Opaware hero">
        <div className="hero-visual">
          <HeroWorkshop />
        </div>
        <div className="hero-content">
          <p className="hero-brand">Opaware</p>
          <h1 className="hero-headline">
            Handmade mischief from a proper workshop.
          </h1>
          <p className="hero-support">
            Wry gifts built under sawdust light — labeled drawers, dry humor,
            and a few things we definitely tested on grandkids.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" to="/catalog">
              Browse the workshop
            </Link>
            <Link className="btn btn-ghost" to="/story">
              How we build
            </Link>
          </div>
        </div>
      </section>

      <section className="section panel" aria-labelledby="cats-heading">
        <div className="wrap">
          <div className="section-head">
            <h2 id="cats-heading">Open a drawer</h2>
            <p>
              Categories the way a woodshop keeps its hardware — labeled,
              slightly opinionated, and not for fluorescent aisles.
            </p>
          </div>
          <div className="category-rail">
            {categories.map((cat, i) => (
              <Link
                key={cat.id}
                to={`/catalog/${cat.id}`}
                className="category-link"
              >
                <span className="category-index">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>
                  <strong>{cat.name}</strong>
                  <span>{cat.tagline}</span>
                </span>
                <span className="category-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="feat-heading">
        <div className="wrap">
          <div className="section-head">
            <h2 id="feat-heading">Bench favorites</h2>
            <p>
              Things that earned a permanent spot under the lamp — rugged,
              a little mischievous, still standing after grandkid field trials.
            </p>
          </div>
        </div>
        <div className="panel panel-products">
          <div className="wrap product-grid">
            {featured.map((p) => (
              <ProductTile key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="story-heading">
        <div className="wrap story-band">
          <div className="story-copy">
            <h2 id="story-heading">Built, not bought off a fluorescent aisle</h2>
            <p>
              Opaware is a rugged little toyshop for grandparents who prefer
              handmade mischief over plastic promises. Dry humor on the crate.
              Maker notes in the margins. Generosity without the kitsch.
            </p>
            <Link className="btn btn-primary" to="/story">
              Read the workshop story
            </Link>
          </div>
          <div className="drawer-labels" aria-hidden="true">
            <div>
              JINGLES <small>Drawer 4B</small>
            </div>
            <div>
              MAGNETS — SERIOUS <small>Bench left</small>
            </div>
            <div>
              TESTED ON GRANDKIDS <small>Pass</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
