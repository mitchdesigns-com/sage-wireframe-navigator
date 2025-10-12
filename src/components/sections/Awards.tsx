interface images {
  url: string
  alternativeText: string
}

export default function Awards({
  title,
  images,
}: {
  title: string
  images: images[]
}) {
  return (
    <div className="bg-Primary-Black content-stretch flex flex-col gap-8 md:gap-15 items-center justify-center md:py-42 py-8 relative size-full px-4 md:px-0">
      <h3 className="text-[28px] md:text-[40px] text-white font-bold">
        {title}
      </h3>
      <div className="gap-3 md:gap-4 items-center justify-center relative grid grid-cols-2 md:grid-cols-6 w-full container-custom max-w-[1392px] px-6">
        {images.map((image, idx) => (
          <div
            key={idx}
            className={`bg-no-repeat aspect-[218/158] rounded-xl bg-white bg-center bg-contain`}
            style={{
              backgroundImage: `url('${process.env.NEXT_PUBLIC_API_BASE_URL}${image.url}')`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
