import { useState } from "react"
import {
  BiExit,
  BiWorld,
  CgHome,
  FaAngleDown,
  FaAngleUp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
  FaWeibo,
  FaYoutube,
  SiWechat,
} from "react-icons/all"
import LanguageModal from "../Modals/LanguageModal"

function Footer() {
  const [accessibility, setAccessibility] = useState<boolean>(false)
  const [isContrast, setIsContrast] = useState<boolean>(false)
  const [isAnimations, setIsAnimations] = useState<boolean>(false)
  const [languagesModal, setLanguagesModal] = useState<boolean>(true)

  const handleAccessibility = () => {
    if (accessibility) setAccessibility(false)
    else setAccessibility(true)
  }

  return (
    <footer className="bg-primary-800 text-primary-300 text-sm transition-colors duration-500 pt-8">
      <div className="flex justify-between mx-16 mb-8">
        <div className="with-icons">
          <BiWorld />
          <p>Languages</p>
        </div>
        <div className="with-icons" onClick={handleAccessibility}>
          <p>Accessibility</p>
          <FaAngleDown />
        </div>
      </div>
      <div className="w-7/12 mx-auto md:grid md:grid-cols-3 gap-4 pb-24">
        {accessibility && (
          <div className="col-span-3 flex flex-col md:flex-row mx-auto md:mx-0 md:justify-between my-8 md:my-4 gap-4">
            <div className="flex flex-col gap-2">
              <p className="font-bold">INCREASE CONTRAST</p>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="contrast"
                  id="contrast"
                  checked={isContrast}
                  className="switch"
                  onChange={() =>
                    isContrast ? setIsContrast(false) : setIsContrast(true)
                  }
                />
                <p>{isContrast ? "Enabled" : "Disabled"}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold">REDUCE ANIMATIONS</p>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="animations"
                  id="animations"
                  checked={isAnimations}
                  className="switch"
                  onChange={() =>
                    isAnimations
                      ? setIsAnimations(false)
                      : setIsAnimations(true)
                  }
                />
                <p>{isAnimations ? "Enabled" : "Disabled"}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold">ACCESSIBILITY STATEMENT</p>
              <div className="flex items-center gap-2">
                <p>Read our statement</p>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-4">
          <div>
            <p className="footer-title">ROLEX WATCHES</p>
            <ul>
              <li>Rolex Watches</li>
              <li>New Watches 2022</li>
              <li>Configure your watch</li>
              <li>Watch finder</li>
              <li>Men's watches</li>
              <li>Women's watches</li>
              <li>History & Watchmaking</li>
            </ul>
          </div>
          <div>
            <p className="footer-title">WORLD OF ROLEX</p>
            <ul>
              <li>Sports, Arts and Exploration</li>
            </ul>
          </div>
          <div>
            <p className="footer-title">SERVICES</p>
            <ul>
              <li>Buying a Rolex</li>
              <li>Find a jeweler</li>
              <li>Watch care & service</li>
              <li>Your selection</li>
              <li>Frequently Asked Questions</li>
              <li className="with-icons">
                <BiExit />
                <p>Newsroom</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="footer-title">THE COLLECTION</p>
            <ul>
              <li>Air-King</li>
              <li>Cosmograph Daytona</li>
              <li>Datejust</li>
              <li>Lady-Datejust</li>
              <li>Day-Date</li>
              <li>Explorer</li>
              <li>GMT-Master II</li>
              <li>Milgauss</li>
              <li>Oyster Perpetual</li>
              <li>Sea-Dweller</li>
              <li>Sky-Dweller</li>
              <li>Submariner</li>
              <li>Yacht-Master</li>
              <li>Cellini</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="footer-title">OFFICIAL CHANNELS</p>
            <ul>
              <li className="with-icons">
                <FaFacebook />
                <p>Facebook</p>
              </li>
              <li className="with-icons">
                <FaInstagram />
                <p>Instagram</p>
              </li>
              <li className="with-icons">
                <FaTwitter />
                <p>Twitter</p>
              </li>
              <li className="with-icons">
                <FaYoutube />
                <p>Youtube</p>
              </li>
              <li className="with-icons">
                <FaPinterest />
                <p>Pinterest</p>
              </li>
              <li className="with-icons">
                <FaLinkedin />
                <p>Linkedin</p>
              </li>
              <li className="with-icons">
                <SiWechat />
                <p>WeChat</p>
              </li>
              <li className="with-icons">
                <FaWeibo />
                <p>Weibo</p>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer-title">LEGAL NOTICES</p>
            <ul>
              <li>Terms of use</li>
              <li>Privacy Notice</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div>
            <p className="footer-title">MEDIA</p>
            <ul>
              <li>Wallpapers</li>
              <li>Brochures</li>
              <li>User guides</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="flex mx-8 justify-center text-2xl border-t-[1px] border-t-primary-600 pt-4 hover:text-accent-400 hover:border-t-accent-400 transition-colors duration-300 pb-8"
        onClick={() => window.scrollTo(0, 0)}
      >
        <FaAngleUp />
      </div>
      {languagesModal && (
        <LanguageModal setLanguagesModal={setLanguagesModal} />
      )}
    </footer>
  )
}

export default Footer
