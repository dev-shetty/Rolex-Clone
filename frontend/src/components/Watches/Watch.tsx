interface props {
  img: string
  name: string
  desc: string
}

function Watch({ img, name, desc }: props) {
  return (
    <div className="my-4 basis-[40%] lg:basis-[30%] shrink-0">
      <div className="overflow-hidden rounded-3xl">
        <img
          src={img}
          alt={name}
          className="h-[75%] hover:scale-105 transition-all duration-500"
        />
      </div>
      <div>
        <div className="my-2 leading-4">
          <p className="font-bold uppercase">{name}</p>
          <p className="text-primary-600 text-sm">{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Watch
