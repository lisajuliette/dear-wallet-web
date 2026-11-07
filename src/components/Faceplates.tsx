import type { CSSProperties } from "react";

const plates = [
  { name: "Cloud Candy", a: "#F6CDEB", b: "#C6EFDD", o: "#4A72A8" },
  { name: "Lilac Sky", a: "#E1CBF2", b: "#B9E6EC", o: "#5F52B8" },
  { name: "Peach Fuzz", a: "#B8B8FF", b: "#FFD8BE", o: "#5F4FD6" },
  { name: "Peach Soda", a: "#F9D2CC", b: "#FAC7C3", o: "#835AA5", locked: true },
  { name: "Orchid Pop", a: "#FFEAFC", b: "#BEDA62", o: "#8E1E78", locked: true },
  { name: "Midnight CD", a: "#1C1838", b: "#2A2350", o: "#B8B8FF", locked: true },
] as const;

export function Faceplates() {
  return (
    <div className="plates">
      {plates.map((plate) => (
        <div className="plate" key={plate.name}>
          <span
            className={`fp${"locked" in plate && plate.locked ? " locked" : ""}`}
            style={
              {
                "--a": plate.a,
                "--b": plate.b,
                "--o": plate.o,
              } as CSSProperties
            }
          />
          {plate.name}
        </div>
      ))}
    </div>
  );
}
