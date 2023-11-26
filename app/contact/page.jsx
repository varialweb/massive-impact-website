import ContactForm from "../ContactForm";
import Nav from "../Nav";

export default function ContactPage() {
  return (
    <div>
      <Nav />
      <main className="p-3 py-8 md:p-8 md:py-12 xl:p-12 xl:py-16">
        <ContactForm />
      </main>
    </div>
  )
}