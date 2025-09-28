export default function MinusIcon({
  className = 'w-24 h-24',
  color = '#CAF48E',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.70117 11.1738H17.2969C17.531 11.1738 17.7278 11.2532 17.8887 11.4131C18.0494 11.5727 18.1299 11.7696 18.1299 12.0049C18.1298 12.2399 18.0492 12.4351 17.8887 12.5918C17.7279 12.7486 17.5311 12.8271 17.2969 12.8271H6.70117C6.46715 12.8271 6.27202 12.7466 6.11328 12.5869C5.95458 12.4274 5.87509 12.2313 5.875 11.9961C5.875 11.7611 5.95393 11.5658 6.1123 11.4092C6.27102 11.2524 6.467 11.1739 6.70117 11.1738Z"
        fill={color}
        stroke={color}
        strokeWidth="0.05"
      />
    </svg>
  )
}
