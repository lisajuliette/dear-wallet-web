import Image from "next/image";
import type { ReactNode } from "react";

type StepProps = {
  image: string;
  title: string;
  children: ReactNode;
};

export function Step({ image, title, children }: StepProps) {
  return (
    <li className="step">
      <Image src={image} alt="" width={96} height={96} />
      <h3>{title}</h3>
      <p>{children}</p>
    </li>
  );
}
