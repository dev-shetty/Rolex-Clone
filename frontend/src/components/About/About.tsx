function About() {
  return (
    <div className="w-4/5 md:w-3/5 mx-auto py-16">
      <div>
        <h2 className="tracking-[0.5rem] md:text-xl lg:text-3xl xl:text-4xl lg:leading-[3.5rem] font-extrabold bg-blur-watch bg-center text-transparent bg-clip-text">
          ROLEX WATCHES ARE CRAFTED WITH SCRUPULOUS ATTENTION TO DETAIL.
        </h2>
      </div>
      <div className="py-4 md:py-8">
        <p className="font-extralight text-primary-600">
          Explore the Rolex collection of prestigious, high-precision
          timepieces. Rolex offers a wide assortment of Classic and Professional
          watch models to suit any wrist. Discover the broad selection of Rolex
          watches to find a perfect combination of style and functionality.
        </p>
      </div>
      <div className="flex flex-col mt-2 sm:mt-0 sm:flex-row gap-6 text-secondary-400 items-center">
        <button className="border-[1px] border-secondary-400 px-4 py-2 rounded-full">
          Watch Finder
        </button>
        <button>Configure your watch</button>
      </div>
    </div>
  )
}

export default About
