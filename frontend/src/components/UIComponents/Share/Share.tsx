import { FaTwitter, FaGithub, FaLinkedin, FaDev } from "react-icons/fa"
function Share() {
  return (
    <div className="py-8 bg-primary-200">
      <div className="flex flex-col items-center justify-center mx-auto gap-4">
        <div>
          <p className="text-xl tracking-widest font-extralight">
            DEVEESH SHETTY
          </p>
        </div>
        <div className="flex gap-8">
          <a href="https://github.com/Deveesh-Shetty" target="_blank">
            <div className="border-[1px] p-2 rounded-full border-secondary-400 text-secondary-400 hover:bg-secondary-400 hover:text-primary-100 cursor-pointer transition-colors duration-500">
              <FaGithub />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/deveesh-shetty-908539214"
            target="_blank"
          >
            <div className="border-[1px] p-2 rounded-full border-secondary-400 text-secondary-400 hover:bg-secondary-400 hover:text-primary-100 cursor-pointer transition-colors duration-500">
              <FaLinkedin />
            </div>
          </a>
          <a href="https://twitter.com/shettydeveesh" target="_blank">
            <div className="border-[1px] p-2 rounded-full border-secondary-400 text-secondary-400 hover:bg-secondary-400 hover:text-primary-100 cursor-pointer transition-colors duration-500">
              <FaTwitter />
            </div>
          </a>
          <a href="https://dev.to/deveeshshetty1209" target="_blank">
            <div className="border-[1px] p-2 rounded-full border-secondary-400 text-secondary-400 hover:bg-secondary-400 hover:text-primary-100 cursor-pointer transition-colors duration-500">
              <FaDev />
            </div>
          </a>
        </div>
        <div>
          <p>
            Original Website - &nbsp;
            <a
              href="https://www.rolex.com/en-us"
              target="_blank"
              className="text-secondary-400 hover:underline"
            >
              rolex.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Share
