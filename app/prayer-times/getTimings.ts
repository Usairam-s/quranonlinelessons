export interface PrayerTimings {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

export interface PrayerData {
  timings: PrayerTimings;
  hijriDate: string;
  gregorianDate: string;
  timezone: string;
}

export async function getTimings(city: string, apiCountry: string): Promise<PrayerData | null> {
  const now = new Date();
  const date = `${String(now.getDate()).padStart(2, "0")}-${String(now.getMonth() + 1).padStart(2, "0")}-${now.getFullYear()}`;

  const url = `https://api.aladhan.com/v1/timingsByCity/${date}?city=${encodeURIComponent(city)}&country=${encodeURIComponent(apiCountry)}&method=3`;

  try {
    const res = await fetch(url, { next: { revalidate: 21600 } });
    if (!res.ok) return null;

    const json = await res.json();
    if (json.code !== 200) return null;

    const t = json.data.timings;
    return {
      timings: {
        Fajr: t.Fajr,
        Sunrise: t.Sunrise,
        Dhuhr: t.Dhuhr,
        Asr: t.Asr,
        Maghrib: t.Maghrib,
        Isha: t.Isha,
      },
      hijriDate: `${json.data.date.hijri.day} ${json.data.date.hijri.month.en} ${json.data.date.hijri.year} AH`,
      gregorianDate: json.data.date.readable,
      timezone: json.data.meta.timezone,
    };
  } catch {
    return null;
  }
}
