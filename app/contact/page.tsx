import { submitContact } from "@/actions/contact";

export default function ContactPage() {
  return (
    <main>
      <h1>Server Action</h1>

      <form action={submitContact}>
        <div>
          <label htmlFor="subject">Objet</label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
          />
        </div>

        <button type="submit">
          Envoyer
        </button>
      </form>
    </main>
  );
}