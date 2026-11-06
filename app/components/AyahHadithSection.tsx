import LightSection from "./LightSection";
import AudioPlayer from "./AudioPlayer";

interface AyahResponse {
  success: boolean;
  data: {
    surah: {
      name_english: string;
      name_arabic: string;
    };
    verse: {
      verse_key: string;
      arabic: string;
      translations: {
        sahih_international: string;
      };
      audio: {
        ayah_audio: string;
      }[];
    };
  };
}

interface HadithResponse {
  success: boolean;
  data: {
    collection_name: string;
    hadithnumber: number;
    arabic: string;
    english: string;
    grade: string;
  };
}

export default async function AyahHadithSection() {
  try {
    const [ayahRes, hadithRes] = await Promise.all([
      fetch("https://ummahapi.com/api/quran/random", { next: { revalidate: 86400 } }),
      fetch("https://ummahapi.com/api/hadith/random?collection=bukhari", { next: { revalidate: 86400 } }),
    ]);

    const ayahData = await ayahRes.json();
    const hadithData = await hadithRes.json();

    if (!ayahData?.success || !hadithData?.success) return null;

    const ayah = ayahData.data;
    const hadith = hadithData.data;
    const audio = ayah?.verse?.audio;
    const audioUrl: string | undefined =
      typeof audio === "string"
        ? audio
        : Array.isArray(audio)
        ? audio[0]?.ayah_audio ?? audio[0]?.url ?? audio[0]
        : audio?.ayah_audio ?? audio?.url ?? audio?.src;

    return (
      <LightSection>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark-green-text text-center mb-4">
          Daily Reflection
        </h2>
        <p className="text-brand-body-cream text-center mb-12 text-lg">
          A fresh Ayah and Hadith — every time you visit
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
          {/* Ayah Card */}
          <div className="bg-brand-dark-green rounded-2xl border border-brand-gold/30 flex flex-col" style={{ maxHeight: "480px" }}>
            {/* Fixed header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 flex-shrink-0">
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">
                Ayah of the Day
              </span>
              <span className="text-brand-gold/60 text-xs">
                {ayah.surah.name_english} &bull; {ayah.verse.verse_key}
              </span>
            </div>
            <div className="w-full h-px bg-brand-gold/30 flex-shrink-0" />
            {/* Scrollable body */}
            <div className="card-scroll overflow-y-auto flex-1 px-6 py-4 flex flex-col gap-4">
              <p dir="rtl" className="text-brand-white text-2xl sm:text-3xl leading-loose text-right font-arabic">
                {ayah.verse.arabic}
              </p>
              <p className="text-brand-gold/70 text-sm text-right">&mdash; {ayah.surah.name_arabic}</p>
              <div className="w-full h-px bg-brand-gold/30" />
              <p className="text-brand-off-white-body text-base leading-relaxed italic">
                &ldquo;{ayah.verse.translations.sahih_international}&rdquo;
              </p>
            </div>
            {/* Fixed footer */}
            {audioUrl && (
              <div className="px-6 pb-5 pt-3 border-t border-brand-gold/20 flex-shrink-0">
                <AudioPlayer src={audioUrl} />
              </div>
            )}
          </div>

          {/* Hadith Card */}
          <div className="bg-brand-cream rounded-2xl border border-brand-gold/30 flex flex-col" style={{ maxHeight: "480px" }}>
            {/* Fixed header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-3 flex-shrink-0">
              <span className="text-brand-dark-green-text text-xs font-semibold uppercase tracking-widest">
                Hadith of the Day
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-dark-green text-brand-gold border border-brand-gold/30">
                {hadith.grade}
              </span>
            </div>
            <p className="text-brand-gold text-sm font-medium px-6 pb-3 flex-shrink-0">
              {hadith.collection_name} #{hadith.hadithnumber}
            </p>
            <div className="w-full h-px bg-brand-gold/30 flex-shrink-0" />
            {/* Scrollable body */}
            <div className="card-scroll overflow-y-auto flex-1 px-6 py-4 flex flex-col gap-4">
              <p dir="rtl" className="text-brand-dark-green-text text-xl sm:text-2xl leading-loose text-right">
                {hadith.arabic}
              </p>
              <div className="w-full h-px bg-brand-gold/30" />
              <p className="text-brand-body-cream text-base leading-relaxed italic">
                &ldquo;{hadith.english}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </LightSection>
    );
  } catch (err) {
    console.error("[AyahHadithSection] failed:", err);
    return null;
  }
}
