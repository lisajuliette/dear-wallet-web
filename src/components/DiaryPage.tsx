import Image from "next/image";

export function DiaryPage() {
  return (
    <div className="diary-mini">
      <div className="page">
        <div className="d">NOV 5 · PROUD</div>
        <div className="dw">Dear Wallet,</div>
        <p>
          almost bought the platform sneakers. put them back. honestly felt kinda
          iconic.
        </p>
        <Image
          className="stk"
          src="/stickers/common-butterfly.svg"
          alt=""
          width={58}
          height={58}
          style={{ right: 10, top: 8, transform: "rotate(12deg)" }}
        />
        <Image
          className="stk"
          src="/stickers/mood-proud.svg"
          alt=""
          width={46}
          height={46}
          style={{ right: 56, bottom: 6, width: 46 }}
        />
      </div>
      <div className="moods" aria-label="Moods: proud, chill, tempted">
        <Image src="/stickers/mood-proud.svg" alt="proud" width={52} height={52} />
        <Image src="/stickers/mood-chill.svg" alt="chill" width={52} height={52} />
        <Image
          src="/stickers/mood-tempted.svg"
          alt="tempted"
          width={52}
          height={52}
        />
      </div>
    </div>
  );
}
