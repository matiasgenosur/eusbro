import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Guarantee from "@/components/Guarantee";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Gallery />
      <Guarantee />
      <ContactForm />
    </>
  );
}
