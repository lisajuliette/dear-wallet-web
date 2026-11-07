import Image from "next/image";

export function PhoneMockup() {
  return (
    <div className="stage" aria-hidden="true">
      <Image
        className="float f1"
        src="/stickers/common-nvmd-boba.svg"
        alt=""
        width={104}
        height={104}
      />
      <Image
        className="float f2"
        src="/stickers/rare-holo-star.svg"
        alt=""
        width={104}
        height={104}
      />
      <Image
        className="float f3"
        src="/stickers/desk-pager-143.svg"
        alt=""
        width={104}
        height={104}
      />
      <Image
        className="float f4"
        src="/stickers/common-pixel-heart.svg"
        alt=""
        width={104}
        height={104}
      />
      <div className="phone">
        <div className="screen">
          <div className="top">
            <div>
              <div className="hi">HI JAZMINE ♡</div>
              <div className="ttl">Dear Wallet</div>
            </div>
            <div className="stars">★ 12 stars</div>
          </div>
          <div className="w">
            <div className="b">
              <span>KEPT TODAY</span>
            </div>
            <div className="in">
              <div className="big">$24.00</div>
              <div className="cap">2 things u didn&apos;t buy ♡</div>
              <div className="month">
                <span>this month</span>
                <b>$474.50</b>
              </div>
            </div>
          </div>
          <div className="quest">
            <Image
              src="/stickers/common-gold-star.svg"
              alt=""
              width={34}
              height={34}
            />
            <p>
              <small>DAILY QUEST</small>
              write one line in ur diary
            </p>
          </div>
          <div className="w">
            <div className="b">
              <span>TODAY&apos;S NVMS</span>
            </div>
            <div className="row">
              <Image
                src="/stickers/common-nvmd-boba.svg"
                alt=""
                width={28}
                height={28}
              />
              bubble tea
              <b>$6.50</b>
            </div>
            <div className="row">
              <Image
                src="/stickers/common-lip-gloss.svg"
                alt=""
                width={28}
                height={28}
              />
              glitter lip gloss
              <b>$17.50</b>
            </div>
          </div>
          <div className="taskbar">
            <i />
            <i />
            <span className="log">LOG</span>
            <i />
            <i />
          </div>
        </div>
      </div>
      <div className="reward-pop">
        <span className="script">nvm!</span>
        <span>$24 STAYS WITH U ♡</span>
      </div>
    </div>
  );
}
