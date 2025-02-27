function Animatedlogo() {
  return (
    <svg
      height="200"
      viewBox="0 0 249 349"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-draw"
    >
      {/* Stroke Animation */}
      <g className="stroke-[#8b243c] stroke-[2px] animate-outline">
        <line x1="0.5" y1="1" x2="0.5" y2="349" />
        <line y1="0.5" x2="126" y2="0.5" />
        <line x1="126.5" y1="1" x2="126.5" y2="60" />
        <line x1="70" y1="59.5" x2="126" y2="59.5" />
        <line x1="70.5" y1="60" x2="70.5" y2="145" />
        <line x1="70" y1="144.5" x2="126" y2="144.5" />
        <line x1="126.5" y1="145" x2="126.5" y2="206" />
        <line x1="70" y1="205.5" x2="126" y2="205.5" />
        <line x1="70.5" y1="206" x2="70.5" y2="349" />
        <line y1="348.5" x2="70" y2="348.5" />
      </g>

      {/* Filled Sections with Grow Animation */}
      <g className="fill-gray-300  origin-top">
        <rect x="148" width="89" height="59" className="animate-height" />
        <rect
          x="99"
          y="208"
          width="27"
          height="141"
          className="animate-height"
        />
        <rect x="99" y="72" width="27" height="70" className="animate-height" />
        <rect
          x="160"
          y="145"
          width="37"
          height="61"
          className="animate-height"
        />
      </g>
      <path
        d="M245 2L245.898 4.76393H248.804L246.453 6.47214L247.351 9.23607L245 7.52786L242.649 9.23607L243.547 6.47214L241.196 4.76393H244.102L245 2Z"
        fill="#D9D9D9"
      />
      <path
        d="M245 51L245.898 53.7639H248.804L246.453 55.4721L247.351 58.2361L245 56.5279L242.649 58.2361L243.547 55.4721L241.196 53.7639H244.102L245 51Z"
        fill="#D9D9D9"
      />
      <path
        d="M245 14L245.898 16.7639H248.804L246.453 18.4721L247.351 21.2361L245 19.5279L242.649 21.2361L243.547 18.4721L241.196 16.7639H244.102L245 14Z"
        fill="#D9D9D9"
      />
      <path
        d="M245 26L245.898 28.7639H248.804L246.453 30.4721L247.351 33.2361L245 31.5279L242.649 33.2361L243.547 30.4721L241.196 28.7639H244.102L245 26Z"
        fill="#D9D9D9"
      />
      <path
        d="M245 38L245.898 40.7639H248.804L246.453 42.4721L247.351 45.2361L245 43.5279L242.649 45.2361L243.547 42.4721L241.196 40.7639H244.102L245 38Z"
        fill="#D9D9D9"
      />
    </svg>
  );
}

export default Animatedlogo;
