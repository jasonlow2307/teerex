import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useDocumentTitle = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Get the translated title based on current language
    const siteTitle = t("common.title");

    // Update document title
    document.title = siteTitle;

    // Listen for language changes
  }, [t, i18n.language]); // Re-run when language changes
};
