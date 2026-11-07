import { Todo } from "@/components/Todo";
import { COMPANY, LAST_UPDATED, SUPPORT_EMAIL } from "@/content/site";

export const privacyToc = [
  { href: "#summary", label: "the short version" },
  { href: "#who", label: "who we are" },
  { href: "#collect", label: "what we collect" },
  { href: "#not", label: "what we don't collect" },
  { href: "#why", label: "why we use it" },
  { href: "#where", label: "where it's stored" },
  { href: "#share", label: "who we share it with" },
  { href: "#keep", label: "how long we keep it" },
  { href: "#rights", label: "your rights" },
  { href: "#children", label: "children" },
  { href: "#changes", label: "changes" },
  { href: "#contact", label: "contact" },
];

export function PrivacyContent() {
  return (
    <>
      <p className="muted">Last updated {LAST_UPDATED}</p>
      <h2 id="summary">The short version</h2>
      <ul>
        <li>
          Dear Wallet works without an account. What you log stays on your phone
          until you choose to sign in.
        </li>
        <li>
          If you sign in, we store your entries so you can back them up and use
          them on another phone.
        </li>
        <li>
          We don&apos;t connect to your bank, show ads, use analytics or tracking
          tools, or sell your data.
        </li>
        <li>
          You can export everything, or delete your account and all of its data,
          from settings in the app.
        </li>
      </ul>

      <h2 id="who">Who we are</h2>
      <p>
        Dear Wallet is made by {COMPANY},{" "}
        <Todo>[legal form, e.g. VOF / B.V.]</Todo>, registered with the Dutch
        Chamber of Commerce (KvK) under number <Todo>[KvK number]</Todo>, at{" "}
        <Todo>[registered address]</Todo>, the Netherlands. We are the controller
        of the personal data described here. Contact us at{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>

      <h2 id="collect">What we collect</h2>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>When</th>
              <th>Where it lives</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>What you log:</strong> amounts, names, categories, notes,
                tags, and whether you bought something after all
              </td>
              <td>When you log or edit an item</td>
              <td>On your phone; in our database if you sign in</td>
            </tr>
            <tr>
              <td>
                <strong>Photos</strong> you add to items or your loved list
              </td>
              <td>Only when you add one</td>
              <td>On your phone; in private storage if you sign in</td>
            </tr>
            <tr>
              <td>
                <strong>Diary entries:</strong> text, mood and sticker placement
              </td>
              <td>When you write or decorate a page</td>
              <td>On your phone; in our database if you sign in</td>
            </tr>
            <tr>
              <td>
                <strong>Progress:</strong> stars, stickers, milestones, goals,
                palette choice and settings
              </td>
              <td>As you use the app</td>
              <td>On your phone; in our database if you sign in</td>
            </tr>
            <tr>
              <td>
                <strong>Account details:</strong> your email address, or the
                anonymous email relay Apple gives us if you use Sign in with Apple
                and hide your email
              </td>
              <td>When you sign in</td>
              <td>Our database</td>
            </tr>
            <tr>
              <td>
                <strong>An anonymous account ID</strong>, a random identifier
                created on first launch so your data can be backed up later
                without your name or email
              </td>
              <td>First launch</td>
              <td>On your phone and in our database</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="not">What we don&apos;t collect</h2>
      <ul>
        <li>
          Bank, card or transaction data. Dear Wallet never connects to financial
          accounts.
        </li>
        <li>
          Face or fingerprint data. Biometric unlock (Face ID on iPhone,
          fingerprint or face unlock on Android) is handled by your phone&apos;s
          operating system; the app only learns whether unlocking succeeded, and
          only on your phone.
        </li>
        <li>
          Your passcode. It is stored as a hash in your phone&apos;s secure storage
          (Keychain on iPhone, Keystore on Android) and never leaves it.
        </li>
        <li>Location, contacts, advertising identifiers or browsing data.</li>
        <li>
          Analytics or usage tracking. There are no analytics or advertising SDKs
          in the app.
        </li>
      </ul>
      <p>
        Weekly check-in reminders are scheduled on your phone as local
        notifications; we don&apos;t run a push notification service for them.
      </p>

      <h2 id="why">Why we use it</h2>
      <ul>
        <li>
          <strong>To provide the app</strong> (performance of our agreement with
          you, GDPR article 6(1)(b)): saving what you log, syncing across your
          phones, restoring your data when you sign in, and calculating totals,
          rewards and milestones.
        </li>
        <li>
          <strong>To keep the service secure</strong> (legitimate interest,
          article 6(1)(f)): preventing abuse of our servers and fixing errors. Our
          hosting provider keeps short-lived technical logs, such as IP addresses
          on requests, for this.
        </li>
        <li>
          <strong>To answer you</strong> (legitimate interest): when you email us,
          we use your message and address to reply.
        </li>
      </ul>
      <p>
        We don&apos;t use your data for advertising, profiling or automated
        decisions, and we don&apos;t read your diary.
      </p>

      <h2 id="where">Where it&apos;s stored</h2>
      <p>
        Data you sync is stored with Supabase, our database and file storage
        provider, in their <Todo>[EU region, e.g. Frankfurt, Germany]</Todo>{" "}
        region. Data is encrypted in transit and at rest. Each account can only
        read its own rows and photos; this is enforced by the database itself.
      </p>

      <h2 id="share">Who we share it with</h2>
      <p>
        We don&apos;t sell or rent your data. We only use these service providers,
        under data processing agreements:
      </p>
      <ul>
        <li>
          <strong>Supabase</strong>: database, authentication and file storage.
        </li>
        <li>
          <strong>Apple</strong>: if you choose Sign in with Apple, Apple confirms
          your identity and gives us your email or a relay address.
        </li>
        <li>
          <strong>Apple and Google</strong>: the App Store and Google Play handle
          downloads and app updates under their own privacy policies. We receive
          no personal data about you from them.
        </li>
      </ul>
      <p>
        If a provider processes data outside the EEA, transfers are covered by the
        EU Standard Contractual Clauses or an adequacy decision. We may disclose
        data if Dutch or EU law requires it.
      </p>

      <h2 id="keep">How long we keep it</h2>
      <ul>
        <li>Synced data is kept while your account exists.</li>
        <li>
          When you delete your account in settings, your entries, diary, photos
          and account are deleted from our database and storage straight away.
          Encrypted backups held by our provider roll off within <Todo>[30]</Todo>{" "}
          days.
        </li>
        <li>
          Data that was never synced lives only on your phone and is removed when
          you delete the app.
        </li>
        <li>Emails to support are kept for up to two years, then deleted.</li>
      </ul>

      <h2 id="rights">Your rights</h2>
      <p>
        Under the GDPR you can ask to access, correct, delete or export your data,
        and you can object to or restrict how we use it. Most of this you can do
        yourself in the app:
      </p>
      <ul>
        <li>
          <strong>Export:</strong> Settings › export my data gives you your items
          and diary as CSV and your photos as a zip.
        </li>
        <li>
          <strong>Delete:</strong> Settings › account › delete account removes
          your account and everything in it.
        </li>
      </ul>
      <p>
        For anything else, email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> and we&apos;ll
        reply within one month. You also have the right to complain to the Dutch
        Data Protection Authority (Autoriteit Persoonsgegevens) or the authority
        where you live.
      </p>

      <h2 id="children">Children</h2>
      <p>
        Dear Wallet is not directed at children under 16, and we don&apos;t
        knowingly collect data from them. If you think a child has given us data,
        contact us and we&apos;ll delete it.
      </p>

      <h2 id="changes">Changes</h2>
      <p>
        If we change this policy, we&apos;ll update the date at the top. If the
        change is significant, we&apos;ll tell you in the app before it takes
        effect.
      </p>

      <h2 id="contact">Contact</h2>
      <p>
        {COMPANY}, <Todo>[registered address]</Todo>, the Netherlands. Email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>
    </>
  );
}
