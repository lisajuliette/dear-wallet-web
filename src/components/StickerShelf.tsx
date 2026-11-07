import Image from "next/image";

const stickers = [
  { src: "/stickers/desk-lava-lamp.svg", rare: false },
  { src: "/stickers/rare-holo-disco-ball.svg", rare: true },
  { src: "/stickers/common-mixtape.svg", rare: false },
  { src: "/stickers/gel-butterfly-clips.svg", rare: false },
  { src: "/stickers/goal-piggy-bank.svg", rare: false },
  { src: "/stickers/loved-record-player.svg", rare: false },
  { src: "/stickers/rare-holo-butterfly.svg", rare: true },
  { src: "/stickers/sleep-bunny-slippers.svg", rare: false },
  { src: "/stickers/dial-desktop-pet.svg", rare: false },
  { src: "/stickers/mall-nvm-bag.svg", rare: false },
  { src: "/stickers/rare-holo-puffy-heart.svg", rare: true },
  { src: "/stickers/cozy-cocoa-mug.svg", rare: false },
  { src: "/stickers/summer-heart-sunnies.svg", rare: false },
  { src: "/stickers/desk-disposable-camera.svg", rare: false },
  { src: "/stickers/loved-cake-slice.svg", rare: false },
  { src: "/stickers/common-lil-cloud.svg", rare: false },
];

export function StickerShelf() {
  const loop = [...stickers, ...stickers];

  return (
    <div className="shelf" aria-hidden="true">
      <div className="shelf-track">
        {loop.map((sticker, index) => (
          <Image
            key={`${sticker.src}-${index}`}
            src={sticker.src}
            alt=""
            width={112}
            height={112}
            className={sticker.rare ? "rare" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
