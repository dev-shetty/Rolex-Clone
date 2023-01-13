import { useContext } from "react"
import { AiOutlineClose } from "react-icons/ai"
import LanguageModalContext from "../../../context/LangaugageModalContext"

function LangaugesModal() {
  const { setLanguageModal } = useContext(LanguageModalContext)
  return (
    <div className="fixed flex flex-col top-0 z-20 w-5/6 md:w-2/4 h-full bg-primary-800 pl-4 md:pl-16 py-12 md:py-32">
      <div className=" border-b-[1px] border-b-primary-600 w-11/12 md:w-3/4">
        <p className="title md:text-xl tracking-wider">LANGUAGES</p>
        <div className="flex gap-4 md:justify-between my-4 text-[0.75rem] md:text-base md:w-3/4">
          <div>
            <ul className="flex flex-col gap-3">
              <li>English</li>
              <li>Français</li>
              <li>Italiano</li>
              <li>繁體中文</li>
              <li>Español</li>
              <li>한국어</li>
              <li>العربية</li>
              <li>Bahasa Indonesia</li>
              <li>Tiếng Việt</li>
              <li>Polski</li>
              <li>ภาษาไทย</li>
              <li>Bahasa Malaysia</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              <li>English US</li>
              <li>Deutsch</li>
              <li>简体中文</li>
              <li>日本語</li>
              <li>Português</li>
              <li>Русский</li>
              <li>Türkçe</li>
              <li>فارسی</li>
              <li>Nederlands</li>
              <li>हिंदी</li>
              <li>עברית</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="absolute top-4 md:top-8 left-2 md:left-16 text-primary-100 cursor-pointer"
        onClick={() => setLanguageModal(false)}
      >
        <AiOutlineClose className="scale-125" />
      </div>
    </div>
  )
}

export default LangaugesModal
