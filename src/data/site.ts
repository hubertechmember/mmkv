export const site = {
  name: "Biuro Rachunkowe Izabela Towpik",
  owner: "Izabela Towpik",
  city: "Zielona Góra",
  street: "ul. Batorego 95a/1",
  postcode: "65-735",
  nip: "9730928311",
  regon: "527337007",
  phone: "+48 605 467 936",
  phoneHref: "tel:+48605467936",
  whatsapp: "https://wa.me/48605467936",
  email: "kontakt@biuro-towpik.pl",
  facebook: "https://www.facebook.com/profile.php?id=61556579010353",
  messenger: "https://m.me/61556579010353",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.622416726905!2d15.492244425060232!3d51.971024155306814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4705aa42610eb0f3%3A0x69b9e36be50b5a4b!2s51%C2%B058'15.7%22N%2015%C2%B029'32.1%22E!5e0!3m2!1spl!2sus!4v1622366043703!5m2!1spl!2sus",
} as const;

export const nav = [
  { label: "Usługi", href: "#uslugi" },
  { label: "KSeF", href: "#ksef" },
  // { label: "Wycena", href: "#cennik" },
  { label: "O mnie", href: "#o-mnie" },
  { label: "Opinie", href: "#opinie" },
  { label: "Aktualności", href: "#aktualnosci" },
  { label: "Kontakt", href: "#kontakt" },
] as const;
