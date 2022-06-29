import React, { createContext, useState, useContext } from "react";

export const languages = {
  en: "en",
  mn: "mn",
};

export const LanguageContext = createContext({
  language: undefined,
  setLanguage: async (language) => null,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(languages.en);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
