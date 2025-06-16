// src/components/Footer.jsx
import { useState } from 'react'
import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { Globe, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const { t, i18n } = useTranslation()
  const [email, setEmail] = useState('')

  const changeLanguage = (lng:any) => i18n.changeLanguage(lng)

  const quickLinks = [
    { to: '/main-quest', label: t('Main quest') },
    { to: '/side-quest', label: t('Side quest') },
    { to: '/rating', label: t('Rating') },
    { to: '/duel', label: t('Duel') },
  ]

  const resources = [
    { to: '/about', label: t('About') },
    { to: '/contact', label: t('Contact') },
    { to: '/help', label: t('Help') },
   
  ]

  return (
    <footer className="bg-gradient-to-r  from-gray-900 via-black to-gray-900 text-gray-300 pt-12 sm:pt-16 pb-6 sm:pb-8 ">
      <div className=" mx-4 sm:mx-16    grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

        <div className="flex flex-col space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white">Coders War</h3>
          <p className="text-xs sm:text-sm leading-relaxed xl:max-w-80">
            {t('Coders War is an epic educational platform crafted for budding developers. Arm yourself with knowledge, logic and creativity—forge your path to mastery in code battles and quests!')}
          </p>
          <div className="flex space-x-3 text-sm sm:text-base">
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Discord" className="hover:text-white">
              <i className="fab fa-discord"></i>
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-white">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

     
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg sm:text-xl font-semibold text-white">{t('Quick Links')}</h4>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
            {quickLinks.map(item => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-white transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg sm:text-xl font-semibold text-white">{t('Resources')}</h4>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
            {resources.map(item => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-white transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg sm:text-xl font-semibold text-white">{t('Stay Updated')}</h4>
          <form
            onSubmit={(e) => { e.preventDefault(); /* handler */ }}
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center bg-gray-800 rounded overflow-hidden text-xs sm:text-sm">
              <Mail className="ml-2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                type="email"
                placeholder={t('Your email')}
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 bg-transparent p-2 focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm sm:py-2 py-1 rounded font-medium transition"
            >
              {t('Subscribe')}
            </button>
          </form>

          <div className="space-y-2 text-xs sm:text-sm">
            <a href='tel:+998919089292' className="flex items-center">
              <Phone className="w-4 h-4 text-gray-400 mr-2" /><span>+998 (91) 908 92 92</span>
            </a>
            <a href='mailto:shoxumarzoda@gmail.com' className="flex items-center">
        
              <Mail className="w-4 h-4 text-gray-400 mr-2" /><span>shoxumarzoda@gmail.com</span>
            </a>
            <div className="flex items-center">
              <Globe className="w-4 h-4 text-gray-400 mr-2" />
              <select
                onChange={e => changeLanguage(e.target.value)}
                value={i18n.language}
                className="bg-gray-800 p-1 rounded focus:outline-none text-xs sm:text-sm"
              >
                <option value="en">English</option>
                <option value="uz">O‘zbekcha</option>
                <option value="ru">Русский</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-[10px] sm:text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Coders War. {t('All rights reserved.')}
      </div>
    </footer>
  )
}
