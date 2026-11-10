// All wedding content lives here. Leave a value "" to show "to be announced" / hide the feature.
const WEDDING_CONFIG = {
  bride: { name: "Dhanushri" }, groom: { name: "Manojkumar" },
  // ISO with offset, e.g. "2026-12-12T07:30:00+05:30"
  wedding: { date: "", timezone: "Asia/Kolkata" },
  // One entry per event. start/end are ISO strings like the wedding date. embedUrl: Google Maps > Share > Embed a map (src only).
  events: [
    { name: { en: "Wedding Reception", ta: "திருமண வரவேற்பு" }, start: "", end: "", venue: "", address: "", mapsUrl: "", embedUrl: "", desc: { en: "", ta: "" } },
    { name: { en: "Muhurtham", ta: "முகூர்த்தம்" }, start: "", end: "", venue: "", address: "", mapsUrl: "", embedUrl: "", desc: { en: "", ta: "" } }
  ],
  contact: { whatsappNumber: "" }, // country code, digits only, e.g. "919876543210"
  media: { hero: "assets/images/hero.jpg",
    gallery: ["assets/images/gallery/couple-01.jpg","assets/images/gallery/couple-02.jpg","assets/images/gallery/couple-03.jpg"],
    backgroundMusic: "assets/audio/wedding-bgm.mp3" },
  features: { scratchCard: true, countdown: true, musicPlayer: true, rsvp: true, qrCode: true, addToCalendar: true }
};
