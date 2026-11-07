import { APP_STORE_URL, PLAY_STORE_URL } from "@/content/site";

type StoreButtonsProps = {
  className?: string;
  wrapped?: boolean;
  centered?: boolean;
};

export function StoreButtons({
  className = "",
  wrapped = true,
  centered = false,
}: StoreButtonsProps) {
  const buttons = (
    <>
      <a className="btn btn-store" href={APP_STORE_URL}>
        <span>
          <small>Download on the</small>
          <span>App Store</span>
        </span>
      </a>
      <a className="btn btn-store" href={PLAY_STORE_URL}>
        <span>
          <small>Get it on</small>
          <span>Google Play</span>
        </span>
      </a>
    </>
  );

  if (!wrapped) return buttons;

  return (
    <div
      className={`hero-ctas ${className}`.trim()}
      style={centered ? { justifyContent: "center" } : undefined}
    >
      {buttons}
    </div>
  );
}
