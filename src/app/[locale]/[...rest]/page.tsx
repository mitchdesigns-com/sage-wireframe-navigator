export const runtime = 'edge'

export default function NotFound() {
  return (
    <div className="h-[calc(100vh-305px)] md:h-[calc(100vh-105px)] bg-white flex justify-center items-center flex-col gap-5 relative">
      <svg
        width="200"
        height="119"
        viewBox="0 0 200 119"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-10 md:top-24 -left-3 md:left-2/3"
      >
        <path
          opacity="0.5"
          d="M199.541 113.323L180.871 118.319L158.84 88.5247L122.615 92.7044L113.185 78.1118L105.325 61.995L86.2743 63.2656L67.8055 62.4569L59.9529 47.2544L53.6105 31.7942C44.5787 31.6661 24.5809 29.5656 15.711 28.5313L8.59249 -5.70204L0.607677 -5.95767L7.00045 -39.239L32.1816 -34.4022L40.0918 -34.7086L48.2658 -5.01985L65.5228 -1.70508L82.6435 -2.43345L86.9743 12.0926L93.0053 28.2233L109.916 27.6372L128.255 25.317L135.228 40.3504L143.52 53.2638L178.194 48.6035L195.755 77.9042L199.541 113.323Z"
          fill="#EB9719"
          fillOpacity="0.6"
        />
      </svg>
      <svg
        width="212"
        height="250"
        viewBox="0 0 212 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-16 md:top-1/2 -left-4"
      >
        <path
          opacity="0.5"
          d="M-41.9761 247.046L-44.6076 220.229L1.38053 196.689L3.85766 145.909L26.0731 136.25L50.0283 129.099L52.607 102.604L57.9137 77.3818L80.6097 70.0322L103.317 64.8186C105.544 52.4235 112.976 25.3914 116.413 13.4248L165.121 11.4069L167.286 0.481039L211.616 16.8332L199.244 50.3741L197.869 61.325L155.173 65.8269L146.694 88.8129L143.808 112.53L122.842 115.188L99.2827 119.821L96.2485 143.217L95.2752 168.971L73.0118 175.148L53.365 183.623L51.9011 232.379L7.60681 249.881L-41.9761 247.046Z"
          fill="#EB9719"
          fillOpacity="0.6"
        />
      </svg>
      <svg
        width="166"
        height="166"
        viewBox="0 0 166 166"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-28 -right-12 md:bottom-5 md:right-24"
      >
        <path
          d="M25.8751 48.4466L0.867486 41.3276L39.4732 0.276057L64.9067 5.67945L76.1913 10.8488L91.6277 11.7667L108.053 66.6623L158.699 73.2249L165.634 92.9787L150.575 165.376L142.352 144.938L130.268 122.449L79.6585 112.07L56.3291 56.3714L41.7056 54.3803L25.8751 48.4466Z"
          fill="#EB9719"
          fillOpacity="0.6"
        />
      </svg>
      <svg
        width="195"
        height="86"
        viewBox="0 0 195 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 md:bottom-5 -right-20 md:left-1/4"
      >
        <path
          d="M23.7422 73.4751L0.698224 85.5182L0.460951 29.166L22.6334 15.5849L34.3784 11.5705L46.2105 1.61418L95.9039 30.1427L137.168 0.0533441L155.793 9.61408L194.685 72.5069L174.655 63.3358L150.411 55.3337L106.548 82.6292L51.2925 58.2687L39.3117 66.8869L23.7422 73.4751Z"
          fill="#EB9719"
          fillOpacity="0.6"
        />
      </svg>

      <h4 className="text-base md:text-h4">Error 404</h4>
      <h2 className="text-4xl leading-[1em] md:text-h1 font-horseland -mb-2 text-center">
        This page doesn’t exist.
      </h2>
      <p className="text-base md:text-h4">
        Sorry, can't find the page you're looking for.
      </p>
      <button>Go to homepage</button>
    </div>
  )
}
