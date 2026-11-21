export function MischiefMeter({ level }: { level: number }) {
  return (
    <div className="mischief" aria-label={`Mischief level ${level} of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= level ? 'on' : undefined} />
      ))}
    </div>
  );
}
