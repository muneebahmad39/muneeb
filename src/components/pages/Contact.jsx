
export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Thank you for contacting LUXORA!");
  }

  return (
    <main className="page">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input placeholder="Your name" required />
        <input
          type="email"
          placeholder="Your email"
          required
        />
        <textarea placeholder="Your message" required />
        <button className="btn" type="submit">
          Send Message
        </button>
      </form>
    </main>
  );
}
