export function GoalBar({ filled = 9 }: { filled?: number }) {
  return (
    <>
      <div
        className="goal-bar"
        role="img"
        aria-label="75 percent of the goal"
      >
        {Array.from({ length: 12 }, (_, i) => (
          <i key={i} className={i < filled ? "on" : undefined} />
        ))}
      </div>
      <div className="goal-meta">
        <span>$450 of $600</span>
        <span>75%</span>
      </div>
    </>
  );
}
