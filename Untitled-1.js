import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

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
    image: "/ghi.webp",
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
    title: "Zwrot VAT z Zagranicy",
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

export default function Home() {
  return (
    <main className={inter.className}>
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <Image
          src="/path-to-your-image.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col">
          <nav className="py-4">
            <ul className="flex justify-center space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white text-[18px] leading-[28px] tracking-[1px] hover:underline"
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                      fontWeight: 100,
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex-grow flex flex-col items-center justify-center">
            <h1
              className="text-white text-[48px] font-light leading-[58px] mb-2"
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
            <circle cx="5%" cy="10%" r="50" fill="#000080" fillOpacity="0.05" />
            <circle
              cx="95%"
              cy="50%"
              r="100"
              fill="#b8860b"
              fillOpacity="0.05"
            />
            <rect
              x="80%"
              y="80%"
              width="150"
              height="150"
              fill="#000080"
              fillOpacity="0.05"
            />
            <path
              d="M0,0 L100,100 L200,0 Z"
              fill="#b8860b"
              fillOpacity="0.05"
              transform="translate(50, 50)"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 pt-8 relative z-10">
          <h2
            className="text-4xl font-semibold mb-12 text-center"
            style={{ color: "#000080" }}
          >
            O NAS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
              >
                <div className="relative h-80 md:h-96">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                  />
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
            <h2
              className="text-3xl font-semibold mb-8 text-center"
              style={{ color: "#000080" }}
            >
              NASZE USŁUGI
            </h2>

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
          <h2
            className="text-3xl font-semibold mb-8 text-center"
            style={{ color: "#000080" }}
          >
            Co mówią o nas
          </h2>
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
                  "Polecam! Jestem zielona jeżeli chodzi o prowadzenie jdg, z Panią Izą spotkałam się aby zasięgnąć rady profesjonalisty w tej kwestii, pomogła mi wybrać odpowiednią formę opodatkowania i dodała mi odwagi aby iść na swoje. Polecam, raz jeszcze!",
              },
              {
                name: "Jan Kowalski",
                role: "Właściciel małej firmy",
                image: "/jan.jpg",
                quote:
                  "Współpraca z MMK Biuro Rachunkowe to czysta przyjemność. Profesjonalizm, terminowość i indywidualne podejście to ich znaki rozpoznawcze. Dzięki nim mogę skupić się na rozwijaniu mojego biznesu, nie martwiąc się o sprawy księgowe.",
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
                  className="text-xl font-bold mb-1 text-darkNavy"
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
    </main>
  );
}
