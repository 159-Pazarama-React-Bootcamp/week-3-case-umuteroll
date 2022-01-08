import * as React from "react"
const SvgComponent = (props) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path opacity={0.1} fill="url(#a)" d="M-230 0h940v1080h-940z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="matrix(.00122 0 0 .00106 0 0)" />
      </pattern>
      <image
        id="b"
        width={824}
        height={945}
      />
    </defs>
  </svg>
)
export default SvgComponent