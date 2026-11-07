import Image from "next/image";
import { Button } from "@/components/Button";
import { Chip } from "@/components/Chip";
import { DiaryPage } from "@/components/DiaryPage";
import { Faceplates } from "@/components/Faceplates";
import { Faq } from "@/components/Faq";
import { GoalBar } from "@/components/GoalBar";
import { PhoneMockup } from "@/components/PhoneMockup";
import { PrivacyList } from "@/components/PrivacyList";
import { RecapCard } from "@/components/RecapCard";
import { RetroWindow, WindowBody } from "@/components/RetroWindow";
import { SectionHead } from "@/components/SectionHead";
import { Step } from "@/components/Step";
import { StickerShelf } from "@/components/StickerShelf";
import { StoreButtons } from "@/components/StoreButtons";
import { HOME_DESCRIPTION, SITE_NAME } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: SITE_NAME },
  description: HOME_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_NAME,
    description: HOME_DESCRIPTION,
    url: "/",
  },
};

export default function HomePage() {
  return (
    <main id="top">
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <Chip>iPhone + Android ♡ private by default</Chip>
            <h1>a lil diary for the money u kept</h1>
            <p className="lede">
              Dear Wallet is a pocket diary for the things you wanted and
              didn&apos;t buy. Log a nvm in under 10 seconds, get a little reward,
              and watch the money you kept add up.
            </p>
            <div className="hero-ctas">
              <StoreButtons wrapped={false} />
              <Button href="#how" variant="ghost">
                see how it works
              </Button>
            </div>
            <ul className="hero-notes">
              <li>no budgets</li>
              <li>no streaks</li>
              <li>no bank login</li>
              <li>no ads</li>
            </ul>
          </div>
          <PhoneMockup />
        </div>
      </section>

      <section className="section" id="how" aria-labelledby="how-title">
        <div className="wrap">
          <SectionHead
            label="how it works"
            title="three taps, one lil win"
            titleId="how-title"
          >
            <p className="lede">
              Most money apps track what you spent. Dear Wallet keeps the moments
              you paused, and makes them feel like something.
            </p>
          </SectionHead>
          <ol className="steps">
            <Step image="/stickers/common-flip-phone.svg" title="log the nvm">
              Saw it, wanted it, walked away? Type how much it was and what it
              was. That&apos;s all it needs, and it works offline.
            </Step>
            <Step image="/stickers/rare-holo-cd.svg" title="get a lil reward">
              Every day you show up earns a star on your calendar, and stickers
              drop as you go. The rare ones are holo.
            </Step>
            <Step
              image="/stickers/common-kept-stack.svg"
              title="watch it add up"
            >
              Your tally grows by day, week and month. Point it at a goal and see
              how close you are to the thing you actually want.
            </Step>
          </ol>
        </div>
      </section>

      <section className="section" id="features" aria-labelledby="feat-title">
        <div className="wrap">
          <SectionHead
            label="what's inside"
            title="cute on purpose"
            titleId="feat-title"
          />
          <div className="bento">
            <RetroWindow
              title="DIARY.EXE"
              tint="c1"
              dots={2}
              className="feature span-4"
            >
              <WindowBody>
                <h3>a diary that&apos;s actually fun to keep</h3>
                <p>
                  A gentle prompt each day, five moods to pick from, and one line
                  is plenty. Then decorate the page with the stickers you&apos;ve
                  earned.
                </p>
                <DiaryPage />
              </WindowBody>
            </RetroWindow>

            <RetroWindow title="GOAL" tint="c3" className="feature span-2">
              <WindowBody>
                <h3>one goal at a time</h3>
                <p>Pick something fun to keep money for. No deadline, no budget.</p>
                <p className="label" style={{ marginTop: 6 }}>
                  keeping money for
                </p>
                <p style={{ fontWeight: 900, fontSize: 19 }}>concert tickets</p>
                <GoalBar />
              </WindowBody>
            </RetroWindow>

            <RetroWindow title="FACEPLATES" tint="c5" className="feature span-3">
              <WindowBody>
                <h3>swap your faceplate</h3>
                <p>
                  Six palettes, like snap-on phone covers. Three are yours from
                  day one; the rest pop open as you log and write.
                </p>
                <Faceplates />
                <p className="muted">
                  Tap one and the whole app changes colour straight away. Midnight
                  CD unlocks at $1,000 kept.
                </p>
              </WindowBody>
            </RetroWindow>

            <RetroWindow
              title="RECAP"
              tint="c2"
              holo
              className="feature span-3"
            >
              <WindowBody>
                <h3>your month as a mixtape</h3>
                <p>
                  Every month becomes a CD with a track list of the things you
                  said nvm to. Save it or share it as a story-sized card.
                </p>
                <RecapCard />
              </WindowBody>
            </RetroWindow>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="stk-title">
        <div className="wrap">
          <SectionHead
            label="collect them all"
            title="75 stickers, earned not sold"
            titleId="stk-title"
            center
          >
            <p className="lede">
              Stickers drop as you log and write. New packs unlock at milestones
              and with the seasons. You can&apos;t buy them, and you never lose
              them.
            </p>
          </SectionHead>
        </div>
        <StickerShelf />
      </section>

      <section className="section" aria-labelledby="promise-title">
        <div className="wrap">
          <SectionHead
            label="the dear wallet promise"
            title="no shame, ever"
            titleId="promise-title"
          />
          <ul className="promises">
            <li>
              <strong>no budgets to blow</strong>
              <span>
                Nothing to stay under. Every nvm counts, big or small.
              </span>
            </li>
            <li>
              <strong>no streaks to lose</strong>
              <span>
                Stars never reset. Skip a week and your calendar is still glowing.
              </span>
            </li>
            <li>
              <strong>bought it after all?</strong>
              <span>
                All good. It quietly leaves your tally, and you can undo it.
              </span>
            </li>
            <li>
              <strong>no guilt-trip pings</strong>
              <span>
                One optional weekly check-in, written like a text from a friend.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section" id="privacy" aria-labelledby="priv-title">
        <div className="wrap">
          <RetroWindow title="PRIVACY.EXE" tint="c4" dots={3}>
            <PrivacyList />
          </RetroWindow>
        </div>
      </section>

      <section className="section" id="faq" aria-labelledby="faq-title">
        <div className="wrap">
          <SectionHead
            label="questions"
            title="good to know"
            titleId="faq-title"
            center
          />
          <Faq />
        </div>
      </section>

      <section className="section" id="download" aria-labelledby="dl-title">
        <div className="wrap">
          <RetroWindow
            title="DEAR_WALLET.EXE"
            tint="c1"
            dots={3}
            className="cta-window"
          >
            <WindowBody>
              <Image
                className="logo"
                src="/logo-mark.svg"
                alt=""
                width={120}
                height={118}
              />
              <h2 id="dl-title">start ur kept total today</h2>
              <p className="lede">
                Your first nvm takes ten seconds. Your future self says thanks.
              </p>
              <StoreButtons centered />
            </WindowBody>
          </RetroWindow>
        </div>
      </section>
    </main>
  );
}
