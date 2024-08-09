"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import Carousel from "./Carousel";
import MessengerLogo from "./MessengerLogo";
import { Facebook, Phone, Mail, MessageCircle } from "lucide-react";
import { useRef } from "react";
const inter = Inter({ subsets: ["latin"] });

const navItems = [
  { name: "O NAS", href: "#o-nas" },
  { name: "POLECAJĄ NAS", href: "#testimonials" },
  { name: "KONTAKT", href: "#contact" },
];

const services = [
  {
    title: "KSIĘGOWOŚĆ 360°",
    description:
      "Oferujemy kompleksową obsługę księgową, od prowadzenia ksiąg rachunkowych po sporządzanie sprawozdań finansowych. Nasza usługa obejmuje pełen zakres potrzeb księgowych Twojej firmy.",
    image: "/abc.webp",
  },
  {
    title: "U NAS WIESZ Z KIM PRACUJESZ",
    description:
      "Stawiamy na personalne podejście. Każdy klient ma przypisanego dedykowanego księgowego, co zapewnia ciągłość i spójność w obsłudze oraz buduje zaufanie i wzajemne zrozumienie.",
    image: "/def.webp",
  },
  {
    title: "NIEUSTANNE DOSKONALENIE",
    description:
      "Inwestujemy w ciągły rozwój naszego zespołu. Regularnie aktualizujemy naszą wiedzę o zmianach w przepisach i najnowszych trendach w księgowości, aby zapewnić naszym klientom najwyższą jakość usług.",
    images: ["/1.png", "/2.png", "/3.png"], // Replace single image with array of images
  },
];

const detailedServices = [
  {
    title: "Książka Przychodów i Rozchodów (KPiR)",
    description:
      "Profesjonalne prowadzenie Książki Przychodów i Rozchodów to podstawa rzetelnej księgowości dla małych i średnich przedsiębiorstw. Nasz zespół ekspertów zadba o prawidłowe ewidencjonowanie wszystkich operacji gospodarczych, zapewniając zgodność z aktualnymi przepisami podatkowymi. Oferujemy nie tylko bieżące prowadzenie KPiR, ale również doradztwo w zakresie optymalizacji podatkowej oraz przygotowanie niezbędnych deklaracji i sprawozdań.",
  },
  {
    title: "Ryczałt od Przychodów Ewidencjonowanych",
    description:
      "Dla przedsiębiorców wybierających uproszczoną formę opodatkowania, oferujemy kompleksową obsługę ryczałtu od przychodów ewidencjonowanych. Nasz serwis obejmuje prowadzenie ewidencji przychodów, kalkulację należnego podatku, przygotowywanie i składanie deklaracji podatkowych oraz doradztwo w zakresie korzystania z ulg i odliczeń. Zapewniamy pełne wsparcie, aby ta forma opodatkowania była dla Państwa jak najbardziej korzystna i bezproblemowa.",
  },
  {
    title: "Zwrot VAT z zagranicy",
    description:
      "Odzyskiwanie VAT-u z transakcji międzynarodowych może być skomplikowanym procesem. Nasz zespół specjalizuje się w przygotowywaniu i obsłudze wniosków o zwrot VAT z zagranicy. Oferujemy pełną analizę dokumentacji, identyfikację możliwości odzyskania podatku, przygotowanie niezbędnych formularzy oraz reprezentację przed zagranicznymi organami podatkowymi. Dzięki naszemu doświadczeniu i znajomości procedur, maksymalizujemy szanse na szybki i pełny zwrot należnego VAT-u.",
  },
  {
    title: "Kompleksowa Obsługa Kadrowo-Płacowa",
    description:
      "Nasza usługa kadrowo-płacowa to więcej niż tylko naliczanie wynagrodzeń. Oferujemy pełen zakres wsparcia, obejmujący zarządzanie dokumentacją pracowniczą, sporządzanie umów, obliczanie wynagrodzeń i składek ZUS, przygotowywanie deklaracji podatkowych oraz obsługę świadczeń pracowniczych. Nasz zespół dba o zgodność z aktualnymi przepisami prawa pracy i ubezpieczeń społecznych, zapewniając Państwu spokój i pewność w kwestiach personalnych.",
  },
  {
    title: "Pomoc przy Zakładaniu Działalności Gospodarczej",
    description:
      "Rozpoczęcie własnej działalności gospodarczej to ekscytujący, ale często skomplikowany proces. Oferujemy kompleksowe wsparcie na każdym etapie zakładania firmy. Od wyboru optymalnej formy prawnej i opodatkowania, przez przygotowanie niezbędnej dokumentacji, rejestrację w urzędach, aż po doradztwo w zakresie pozyskiwania finansowania i optymalizacji kosztów początkowych. Nasi eksperci pomogą Państwu pewnie stawiać pierwsze kroki w świecie biznesu, minimalizując ryzyko błędów i maksymalizując szanse na sukces.",
  },
];

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState("");
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = navItems.map((item) => item.href.slice(1));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
          break;
        }
      }
    };

    const throttle = (func: Function, limit: number) => {
      let inThrottle: boolean;
      return function (this: any) {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    };

    const throttledHandleScroll = throttle(handleScroll, 100);

    window.addEventListener("scroll", throttledHandleScroll);
    handleScroll(); // Call once to set initial active section

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  return (
    <main className={inter.className}>
      {/* Sticky Navigation */}
      <nav className="sticky top-0 bg-white shadow-md py-4 z-50">
        <ul className="flex justify-center space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`text-[18px] leading-[28px] tracking-[1px] transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? "text-darkNavy underline font-bold"
                    : "text-gray-600 hover:text-darkNavy"
                }`}
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                  textDecorationColor:
                    activeSection === item.href.slice(1)
                      ? "#000080"
                      : "transparent",
                  textDecorationThickness: "1px",
                  textUnderlineOffset: "4px",
                }}
              >
                <span
                  className={`hover:font-semibold ${
                    activeSection === item.href.slice(1)
                      ? "font-bold"
                      : "font-normal"
                  }`}
                  style={{
                    color:
                      activeSection === item.href.slice(1)
                        ? "#000080"
                        : "inherit",
                  }}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <Image
          src="/path-to-your-image.jpg"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col">
          <div className="flex-grow flex flex-col items-center justify-center">
            <h1
              className="text-white text-[48px] font-light leading-[58px] mb-2 text-center"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
              }}
            >
              MMK BIURO RACHUNKOWE
              <br />
              <span className="text-[32px] font-light block text-center tracking-wider">
                IZABELA TOWPIK
              </span>
            </h1>
            <div className="h-8"></div>
            <p className="text-white text-[18px] font-semibold leading-[28px] max-w-2xl text-center mb-4">
              OTRZYMAJ BEZPŁATNĄ WYCENĘ USŁUG
            </p>
            <button
              className="text-white px-6 py-2 rounded-full text-[16px] font-medium mt-2"
              style={{ backgroundColor: "#b8860b" }}
              onClick={scrollToContact}
            >
              SKONTAKTUJ SIĘ
            </button>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <Link href="#o-nas" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* O NAS Section */}
      <section
        id="o-nas"
        className="relative min-h-screen w-full bg-gray-100 py-16 overflow-hidden"
      >
        {/* Sticky Navigation */}
        <nav className="sticky top-0 bg-white shadow-md py-4 z-10">
          <ul className="flex justify-center space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`text-[18px] leading-[28px] tracking-[1px] transition-all duration-300 ${
                    item.name === "O NAS"
                      ? "text-darkNavy underline font-bold"
                      : "text-gray-600 hover:text-darkNavy"
                  }`}
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                    textDecorationColor:
                      item.name === "O NAS" ? "#000080" : "transparent",
                    textDecorationThickness: "1px",
                    textUnderlineOffset: "4px",
                  }}
                >
                  <span
                    className={`hover:font-semibold ${
                      item.name === "O NAS" ? "font-bold" : "font-normal"
                    }`}
                    style={{
                      color: item.name === "O NAS" ? "#000080" : "inherit",
                    }}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Background Shapes */}
        <div className="absolute inset-0 z-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5%" cy="10%" r="50" fill="#e0aa64" fillOpacity="0.5" />
            <circle
              cx="95%"
              cy="50%"
              r="100"
              fill="#e0aa64"
              fillOpacity="0.05"
            />
            <rect
              x="80%"
              y="80%"
              width="150"
              height="150"
              fill="#e0aa64"
              fillOpacity="0.5"
            />
            <path
              d="M0,0 L100,100 L200,0 Z"
              fill="#e0aa64"
              fillOpacity="0.5"
              transform="translate(50, 50)"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 pt-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
              >
                <div className="relative h-80 md:h-96">
                  {service.images ? (
                    <Carousel images={service.images} />
                  ) : (
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  )}
                </div>
                <div className="p-6 flex-grow">
                  <h3
                    className="text-xl font-medium mb-4"
                    style={{ color: "#000080" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Enhanced Usługi Section with Numbered Blocks */}
          <div className="mt-16">
            {detailedServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 mb-6 relative"
              >
                <div
                  className="absolute top-0 right-0 w-12 h-12 bg-darkGold text-white rounded-tr-lg rounded-bl-lg flex items-center justify-center text-2xl font-bold"
                  style={{ backgroundColor: "#b8860b" }}
                >
                  {index + 1}
                </div>
                <h3
                  className="text-xl font-semibold mb-3 pr-14"
                  style={{ color: "#000080" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll to Top Arrow */}
        <div className="fixed bottom-8 right-8">
          <Link
            href="#"
            className="text-darkNavy hover:text-darkGold transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Hubert W.",
                role: "IT Product Owner",
                image: "/hubert.jpg",
                quote:
                  "Dotychczas korzystałem z usług jednego z największych w Polsce biur księgowości. Wszystko było fajnie, dopóki nie miałem pytań. W MMK doświadczyłem klientocentrycznego podejścia jakie sam stosuję w swojej codziennej pracy i dzięki temu mam nadzieję na wieloletnią współpracę.",
              },
              {
                name: "Ola W.",
                role: "Mobilna stylistka",
                image: "/ola.jpg",
                quote:
                  "Polecam! Jestem zielona jeżeli chodzi o prowadzenie jdg, z Panią Izą spotkałam się, aby zasięgnąć rady profesjonalisty w tej kwestii, pomogła mi wybrać odpowiednią formę opodatkowania i dodała mi odwagi aby iść na swoje. Polecam raz jeszcze!",
              },
              {
                name: "Sandra P.",
                role: "Właścicielka małej firmy",
                image: "/jan.png",
                quote:
                  "Jestem bardzo zadowolona, Pani Iza pomogła mi pozyskać dofinansowanie z PUP, ekspresowo sporządzony wniosek i pozytywna decyzja, wszystko trwało miesiąc. Polecam",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ color: "#000080" }}
                >
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{testimonial.role}</p>
                <p className="text-gray-700 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact and Map */}
      <section id="contact" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="container mx-auto px-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.622416726905!2d15.492244425060232!3d51.971024155306814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4705aa42610eb0f3%3A0x69b9e36be50b5a4b!2s51%C2%B058'15.7%22N%2015%C2%B029'32.1%22E!5e0!3m2!1spl!2sus!4v1622366043703!5m2!1spl!2sus"
              width="100%"
              height="450"
              style={{ border: "none" }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Facebook Widget */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61556579010353&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=589832485920704"
              width="500"
              height="600"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-darkGold text-white py-8" ref={contactRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                MMK BIURO RACHUNKOWE - IZABELA TOWPIK
              </h3>
              <p className="mb-2">NIP: 9730928311</p>
              <p className="mb-2">REGON: 527337007</p>
              <p className="mb-2">ul. Batorego 95a/1, 65-735 Zielona Góra</p>
              <p className="text-sm mt-4">
                © 2024 Volani. Wszelkie prawa zastrzeżone.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://m.me/61556579010353"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-all duration-300 hover:bg-white hover:bg-opacity-20 flex items-center"
                >
                  <MessengerLogo size={32} color="white" />
                  <span className="ml-2">Messenger</span>
                </a>
                <a
                  href="https://wa.me/48605467936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-all duration-300 hover:bg-white hover:bg-opacity-20 flex items-center"
                >
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23 17.7C23 21.2353 20.0899 24.1 16.5 24.1C15.3493 24.1 14.2646 23.8316 13.3 23.3539L10 24.1L10.7699 20.9693C10.2003 20.0064 9.90003 18.8898 9.90003 17.7C9.90003 14.1647 12.8102 11.3 16.4 11.3C20.0898 11.3 23 14.1647 23 17.7ZM16.5 22.84C19.4001 22.84 21.7 20.5633 21.7 17.7C21.7 14.8367 19.4001 12.56 16.5 12.56C13.6 12.56 11.3 14.8367 11.3 17.7C11.3 18.7857 11.6087 19.796 12.1479 20.6457L11.6705 22.4865L13.5915 22.0274C14.4415 22.5447 15.4436 22.84 16.5 22.84Z"
                      fill="#25D366"
                    />
                    <path
                      d="M19.3 18.9C19.1 18.8 18.3 18.4 18.2 18.3C18 18.3 17.9 18.2 17.7 18.4C17.5 18.6 17.2 19 17.1 19.1C16.9 19.2 16.8 19.2 16.6 19.1C16.4 19 15.9 18.8 15.3 18.3C14.8 17.9 14.5 17.4 14.3 17.2C14.2 17 14.3 16.9 14.4 16.8C14.5 16.7 14.6 16.6 14.7 16.5C14.8 16.4 14.8 16.3 14.9 16.2C15 16.1 14.9 16 14.9 15.9C14.9 15.8 14.5 15 14.4 14.6C14.3 14.2 14.1 14.3 14 14.3H13.7C13.5 14.3 13.3 14.4 13.1 14.6C12.9 14.8 12.5 15.2 12.5 16C12.5 16.8 13.1 17.6 13.2 17.7C13.3 17.8 14.5 19.6 16.3 20.3C17.5 20.8 17.9 20.8 18.4 20.7C18.7 20.7 19.4 20.3 19.5 19.9C19.7 19.5 19.7 19.1 19.6 19.1C19.6 19 19.5 19 19.3 18.9Z"
                      fill="#25D366"
                    />
                  </svg>
                  <span className="ml-2">WhatsApp</span>
                </a>
                <a
                  href="mailto:kontakt@biuro-towpik.pl"
                  className="p-2 rounded-full transition-all duration-300 hover:bg-white hover:bg-opacity-20 flex items-center"
                >
                  <Mail size={32} color="white" />
                  <span className="ml-2">Email</span>
                </a>
                <a
                  href="tel:+48605467936"
                  className="p-2 rounded-full transition-all duration-300 hover:bg-white hover:bg-opacity-20 flex items-center"
                >
                  <Phone size={32} color="white" />
                  <span className="ml-2">Telefon</span>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-semibold mb-4">Znajdź nas online</h4>
              <a
                href="https://www.facebook.com/profile.php?id=61556579010353"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all duration-300 hover:bg-white hover:bg-opacity-20 flex items-center"
              >
                <Facebook size={32} color="white" />
                <span className="ml-2">Facebook</span>
              </a>
              {/* Możesz dodać więcej linków do mediów społecznościowych tutaj */}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
