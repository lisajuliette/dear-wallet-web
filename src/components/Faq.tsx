import Link from "next/link";

const items = [
  {
    q: "Is this a budgeting app?",
    a: "Not really. Budgeting apps track what you spend. Dear Wallet keeps the things you didn't buy, so you can see how much those small pauses add up to.",
  },
  {
    q: "Does it connect to my bank?",
    a: "No, and it never will. You log things yourself, and only an amount and a name are needed.",
  },
  {
    q: "What if I end up buying it anyway?",
    a: 'Tap "i bought it after all" on the item. It leaves your tally, nothing else changes, and you can undo it. Stars, stickers and milestones you earned stay yours.',
  },
  {
    q: "Do I need an account?",
    a: "No. You can start logging straight away. Sign in with Apple or email when you want a backup or want to use Dear Wallet on another phone, including switching between iPhone and Android.",
  },
  {
    q: "Is it on iPhone and Android?",
    a: "Yes, both. Sign in on either and your tally, diary and stickers follow you, even if you switch from one to the other.",
  },
];

export function Faq() {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.q}>
          <summary>{item.q}</summary>
          <div>
            <p>{item.a}</p>
          </div>
        </details>
      ))}
      <details>
        <summary>Where is my data stored?</summary>
        <div>
          <p>
            On your phone first, then backed up to our database in the EU if you
            sign in. The <Link href="/privacy">privacy policy</Link> has the
            details.
          </p>
        </div>
      </details>
    </div>
  );
}
