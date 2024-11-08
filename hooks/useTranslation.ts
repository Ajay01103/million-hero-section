import { useRouter } from "next/navigation"
import { translations } from "./translations"

// This type represents the structure of each language's translations
type Translation = (typeof translations)[keyof typeof translations]

/**
 * The function returns the translations for the current locale if it exists in the translations
 * object.
 * @returns The translations object for the specified locale, if it exists in the translations object.
 */
export function useTranslations(): Translation {
  const { locale } = useRouter()

  if (locale && locale in translations) {
    return translations[locale as keyof typeof translations]
  }

  // backup locale
  return translations["en-US"]
}
