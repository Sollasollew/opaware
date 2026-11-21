import { Link } from 'react-router-dom';

export function StoryPage() {
  return (
    <div className="bag-page">
      <div className="wrap" style={{ maxWidth: '44rem' }}>
        <p className="crumb">
          <Link to="/">Opaware</Link> / Our Story
        </p>
        <h1>A mad toyshop with good manners</h1>
        <p className="lead">
          Opaware exists for grandparents who still believe the best gifts are
          slightly dangerous to boredom — and for grandkids who know which adult
          keeps the interesting drawers unlocked.
        </p>

        <div className="success-box" style={{ marginTop: '2rem' }}>
          <h2>Workshop warmth</h2>
          <p>
            Think wood, leather, brass, and sawdust light — not fluorescent
            retail. Every crate is packed under workshop lamps, with labels
            written like a maker who expects you to read them.
          </p>

          <h2>Built, not bought</h2>
          <p>
            We borrow Offerman’s wry ruggedness: handmade where it matters, dry
            humor in the margins, and zero patience for corporate toy-speak.
            If it feels like it rolled off a committee, it does not ship.
          </p>

          <h2>Curious maker energy</h2>
          <p>
            Adam Savage lives in the margins — prototypes, labeled drawers,
            “tested on grandkids,” and the science of fun. We want kids to
            ask how it works, then immediately try it louder.
          </p>

          <h2>Santa’s private stockroom</h2>
          <p>
            Generosity without kitsch. No elves. No jingling mascots. Just an
            improbable inventory of gifts that feel magical because someone
            cared enough to build them well.
          </p>

          <Link className="btn btn-primary" to="/catalog">
            Stock the list
          </Link>
        </div>
      </div>
    </div>
  );
}
