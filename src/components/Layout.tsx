import { Link, NavLink, Outlet } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

export function Layout() {
  const { cartCount, listCount } = useShop();

  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Skip to stuff
      </a>
      <header className="topbar">
        <Link to="/" className="topbar-brand" aria-label="Opaware home">
          Opaware
        </Link>
        <nav className="topbar-nav" aria-label="Primary">
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/story">Our Story</NavLink>
          <NavLink to="/list" className="nav-pill">
            Grandparent&apos;s List
            {listCount > 0 ? <span className="count">{listCount}</span> : null}
          </NavLink>
          <NavLink to="/cart" className="nav-pill">
            Cart
            {cartCount > 0 ? <span className="count">{cartCount}</span> : null}
          </NavLink>
        </nav>
      </header>
      <main id="main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="footer-brand">
          <p className="footer-wordmark">Opaware</p>
          <p>
            Handmade workshop stock for grandparents and the co-conspirators
            they love. Built under the lamp, labeled on purpose.
          </p>
        </div>
        <div className="footer-meta">
          <p>Demo catalog. No real payments. Sample data only.</p>
          <p>
            Custom domain <span className="mono">opaware.com</span> is
            aspirational — user-owned separately from this Cursor-hosted demo.
          </p>
        </div>
      </footer>
    </div>
  );
}
