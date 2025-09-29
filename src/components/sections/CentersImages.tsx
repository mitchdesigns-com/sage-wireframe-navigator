import React from 'react'
import Image from 'next/image'

interface List {
  url: string
  alternativeText: string
}
interface CentersImagesProps {
  list?: List[]
}

const CentersImages: React.FC<CentersImagesProps> = ({ list }) => {
  return (
    <section className="bg-Secondary-Light-Scrub">
      <div className="container-custom mx-auto max-w-[1392px] py-20">
        <div className={`flex items-center gap-18 `}>
          {/* Image */}
          <div className="w-full">
            {list && (
              <div className="grid grid-cols-3 gap-4 ">
                {list.map((li, idx) => (
                  <div
                    key={idx}
                    className="flex items-start  flex-col bg-white w-full h-[120px] rounded-[8px] relative overflow-hidden"
                  >
                    <Image
                      fill
                      src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${li.url}`}
                      alt="center"
                      className="object-contain p-5"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CentersImages
