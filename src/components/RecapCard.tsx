export function RecapCard() {
  return (
    <div className="recap-mini">
      <div className="cd-card" aria-label="Example monthly recap card">
        <span className="t">wanted but didn&apos;t</span>
        <span className="cd" />
        <ol>
          <li>
            <span>1 sneakers</span>
            <span>$89</span>
          </li>
          <li>
            <span>2 lip gloss</span>
            <span>$17.50</span>
          </li>
          <li>
            <span>3 bubble tea</span>
            <span>$6.50</span>
          </li>
        </ol>
        <span className="tot">$474.50 KEPT</span>
      </div>
      <p className="muted" style={{ flex: "1 1 180px", minWidth: 0 }}>
        Got something you loved? The loved list keeps those too, with photos and
        no prices, and they never touch your kept total.
      </p>
    </div>
  );
}
