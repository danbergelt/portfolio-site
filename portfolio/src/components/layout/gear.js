import React from "react"

const Gear = ({ color, size, spin }) => {
  return (
    <>
      <svg
        className={spin}
        height={size}
        width={size}
        fill={color}
        // xmlnsDc="http://purl.org/dc/elements/1.1/"
        // xmlnsCc="http://creativecommons.org/ns#"
        // xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        // xmlnsSvg="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/2000/svg"
        // xmlnsSodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
        // xmlnsInkscape="http://www.inkscape.org/namespaces/inkscape"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
      >
        <g transform="translate(0,-952.3622)">
          <path
            d="m 43.843749,955.36223 c -1.30854,-0.005 -2.54443,1.10114 -2.875,2.15625 l -2.625,9.1875 c -1.84429,0.60599 -3.61316,1.31975 -5.3125,2.1875 l -8.34375,-4.625 c -1.13284,-0.63531 -2.67736,-0.42042 -3.59375,0.5 l -8.65625,8.6875 c -0.90648,0.91206 -1.12038,2.43614 -0.5,3.5625 l 4.625,8.37501 c -0.85904,1.6842 -1.58536,3.4548 -2.1875,5.2812 l -9.1874998,2.625 c -1.25395,0.3529 -2.19537,1.6037 -2.1875,2.9063 l 0,12.31251 c 0.006,1.2922 0.94359,2.5249 2.1875,2.875 l 9.1562498,2.5937 c 0.60386,1.8403 1.35422,3.6164 2.21875,5.3125 l -4.625,8.375 c -0.62038,1.1264 -0.40648,2.6505 0.5,3.5625 l 8.65625,8.6875 c 0.91639,0.9204 2.46091,1.1353 3.59375,0.5 l 8.34375,-4.625 c 1.70047,0.8683 3.46689,1.6126 5.3125,2.2188 l 2.625,9.1562 c 0.35006,1.2439 1.58278,2.1819 2.875,2.1875 l 12.3125,0 c 1.29222,-0.01 2.52494,-0.9436 2.875,-2.1875 l 2.625,-9.1562 c 1.84561,-0.6062 3.61203,-1.3505 5.3125,-2.2188 l 8.34375,4.625 c 1.13284,0.6353 2.67736,0.4204 3.59375,-0.5 l 8.65625,-8.6875 c 0.90648,-0.912 1.12038,-2.4361 0.5,-3.5625 l -4.625,-8.375 c 0.86452,-1.6961 1.6149,-3.4722 2.21875,-5.3125 l 9.15625,-2.5937 c 1.24391,-0.3501 2.18185,-1.5828 2.1875,-2.875 l 0,-12.31251 c 0.008,-1.3026 -0.93355,-2.5534 -2.1875,-2.9063 l -9.1875,-2.625 c -0.60214,-1.8264 -1.32847,-3.597 -2.1875,-5.2812 l 4.625,-8.37501 c 0.62038,-1.12636 0.40648,-2.65044 -0.5,-3.5625 l -8.65625,-8.6875 c -0.91639,-0.92042 -2.46091,-1.13531 -3.59375,-0.5 l -8.34375,4.625 c -1.69934,-0.86775 -3.46821,-1.58151 -5.3125,-2.1875 l -2.625,-9.1875 c -0.36132,-1.23251 -1.59062,-2.15448 -2.875,-2.15625 l -12.3125,0 z m 2.25,6 7.8125,0 2.40625,8.46875 c 0.27467,0.995 1.09875,1.81908 2.09375,2.09375 2.52705,0.69618 4.90929,1.69031 7.15625,2.96875 0.88689,0.51041 2.03996,0.5227 2.9375,0.0312 l 7.75,-4.3125 5.5,5.5 -4.3125,7.71871 c -0.5009,0.8923 -0.5009,2.0453 0,2.9375 1.27843,2.247 2.30382,4.6605 3,7.1875 0.26916,0.9878 1.07889,1.8098 2.0625,2.0938 l 8.5,2.4062 0,7.78131 -8.5,2.4375 c -0.97639,0.2784 -1.78407,1.0861 -2.0625,2.0625 -0.69618,2.527 -1.72157,4.9405 -3,7.1875 -0.5009,0.8922 -0.5009,2.0452 0,2.9375 l 4.3125,7.75 -5.5,5.4687 -7.75,-4.3125 c -0.89754,-0.4914 -2.05061,-0.4791 -2.9375,0.031 -2.24696,1.2785 -4.6292,2.3038 -7.15625,3 -0.98777,0.2692 -1.80976,1.0789 -2.09375,2.0625 l -2.40625,8.5 -7.8125,0 -2.40625,-8.5 c -0.28399,-0.9836 -1.10598,-1.7933 -2.09375,-2.0625 -2.52704,-0.6962 -4.90929,-1.7215 -7.15625,-3 -0.88689,-0.5104 -2.03996,-0.5227 -2.9375,-0.031 l -7.75,4.3125 -5.5,-5.4687 4.3125,-7.75 c 0.5009,-0.8923 0.5009,-2.0453 0,-2.9375 -1.27844,-2.247 -2.3038,-4.6605 -3,-7.1875 -0.27843,-0.9764 -1.08611,-1.7841 -2.0625,-2.0625 l -8.4999998,-2.4375 0,-7.78131 8.4999998,-2.4062 c 0.98361,-0.284 1.79334,-1.106 2.0625,-2.0938 0.6962,-2.527 1.72156,-4.9405 3,-7.1875 0.5009,-0.8922 0.5009,-2.0452 0,-2.9375 l -4.3125,-7.71866 5.5,-5.5 7.75,4.3125 c 0.89754,0.49145 2.05061,0.47916 2.9375,-0.0312 2.24696,-1.27844 4.62921,-2.27257 7.15625,-2.96875 0.995,-0.27467 1.81908,-1.09875 2.09375,-2.09375 l 2.40625,-8.4688 z m 3.90625,18.99996 c -12.11474,0 -22,9.8854 -22,22.00001 0,12.1147 9.88526,22 22,22 12.11474,0 22,-9.8853 22,-22 0,-12.11461 -9.88526,-22.00001 -22,-22.00001 z m 0,6 c 8.87208,0 16,7.128 16,16.00001 0,8.872 -7.12792,16 -16,16 -8.87208,0 -16,-7.128 -16,-16 0,-8.87201 7.12792,-16.00001 16,-16.00001 z"
            fill={color}
            fillOpacity="1"
            stroke="none"
            marker="none"
            visibility="visible"
            display="inline"
            overflow="visible"
          ></path>
        </g>
      </svg>
    </>
  )
}

export default Gear