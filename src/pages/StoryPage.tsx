import { Link } from 'react-router-dom';

export function StoryPage() {
  return (
    <div className="bag-page">
      <div className="wrap" style={{ maxWidth: '44rem' }}>
        <p className="crumb">
          <Link to="/">OpaWare</Link> / Our Story
        </p>
        <h1>A workshop with a sense of humor</h1>
        <p className="lead">
          OpaWare is for grandparents who still believe the best gifts are
          built, not bought in a hurry — and for grandkids who know which adult
          keeps the interesting drawers unlocked.
        </p>

        <div className="success-box" style={{ marginTop: '2rem' }}>
          <h2>Built, not bought</h2>
          <p>
            Wood, leather, brass, and sawdust light. Dry humor in the margins.
            Zero patience for corporate toy-speak. If it feels like a committee
            designed it, it does not leave the bench.
          </p>

          <h2>Labeled drawers (on purpose)</h2>
          <p>
            Prototypes, “tested on grandkids,” and the quiet thrill of figuring
            out how the thing works before you make it louder. Curiosity lives
            on the bench, not in a brochure.
          </p>

          <h2>Generous without the kitsch</h2>
          <p>
            There is wonder here, the way a well-stocked workshop feels magical
            at dusk. No elves. No mascots. Just crates packed like someone
            cared enough to build them well and write the label straight.
          </p>

          <Link className="btn btn-primary" to="/catalog">
            Stock the list
          </Link>
        </div>
      </div>
    </div>
  );
}
