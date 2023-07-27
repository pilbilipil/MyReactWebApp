import { createContext, useContext, useState } from 'react';
import { LocalizedStrings } from 'react-localization'
 
// Инициализация строк для разных языков
const strings = new LocalizedStrings({
  en: {
    how: "How do you want your egg today?",
    choice: "How to choose the egg"
  },
  it: {
    how: "Come vuoi il tuo uovo oggi?",
    choice: "Come scegliere l'uovo"
  }
});

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en'); // Здесь 'en' - язык по умолчанию

  // Функция для изменения выбранного языка
  const changeLanguage = (language) => {
    setCurrentLanguage(language);
    strings.setLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default strings;
