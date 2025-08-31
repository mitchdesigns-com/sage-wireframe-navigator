const awards = [
  {
    name: 'image 10',
    img: '/images/awards/01.png',
    className: 'bg-size-[77.34%_35.57%,auto] bg-white',
    style: {},
    nodeId: '8381:108897',
  },
  {
    name: 'image 11',
    img: '/images/awards/02.png',
    className: 'bg-center bg-cover bg-no-repeat',
    style: {},
    nodeId: '8381:108899',
  },
  {
    name: 'image 7',
    img: '/images/awards/03.png',
    className: 'bg-[50%_49.44%] bg-no-repeat bg-size-[122.28%_111.03%]',
    style: {},
    nodeId: '8381:108901',
  },
  {
    name: 'image 12',
    img: '/images/awards/04.png',
    className: 'bg-[50%_47.11%] bg-no-repeat bg-size-[110.49%_111.16%]',
    style: {},
    nodeId: '8381:108903',
  },
  {
    name: 'image 13',
    img: '/images/awards/05.png',
    className: 'bg-center bg-cover bg-no-repeat',
    style: {},
    nodeId: '8381:108905',
  },
  {
    name: 'image 14',
    img: '/images/awards/06.png',
    className:
      'bg-white content-stretch flex flex-col gap-2.5 items-center justify-center relative',
    style: {},
    nodeId: '8493:5656',
    inner: {
      className: 'bg-[0%_44.12%] bg-no-repeat bg-size-[100%_121.78%]',
      style: {},
      nodeId: '8493:5657',
    },
  },
]

export default function Awards() {
  return (
    <div className="bg-Primary-Black content-stretch flex flex-col gap-[60px] items-center justify-center md:py-40 py-10 relative size-full">
      <h3 className="heading-3 text-white font-bold">{`Awards & Recognition`}</h3>
      <div className="gap-4 items-center justify-center relative grid grid-cols-6 w-full container-custom">
        {awards.map((award, idx) => (
          <div
            key={idx}
            className={`bg-no-repeat aspect-[218/158] rounded-xl bg-white bg-center bg-contain`}
            style={{ backgroundImage: `url('${award.img}')` }}
          />
        ))}
      </div>
    </div>
  )
}
