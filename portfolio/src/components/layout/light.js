import React from "react"
import "animate.css"

const Light = ({ size, color, dark, lightMode, darkMode }) => {
  const animate = "animated fadeInUp light"

  return (
    <>
      {dark && (
        <svg
          className={dark ? animate : "light"}
          onClick={() => lightMode()}
          height={size}
          width={size}
          fill={color}
          // xmlns:dc="http://purl.org/dc/elements/1.1/"
          // xmlns:cc="http://creativecommons.org/ns#"
          // xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
          // xmlns:svg="http://www.w3.org/2000/svg"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
          // xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
        >
          <g transform="translate(0,-952.36218)">
            <path
              d="m 35.216009,962.37337 a 2.0001998,2.0001998 0 0 0 -0.4063,0.125 c -15.7636,5.8419 -24.8124002,21.1128 -24.8124002,38.65633 0,22.7364 18.4510002,41.2187 41.1874002,41.2187 17.5436,0 32.8457,-9.0801 38.6876,-24.8438 a 2.0001998,2.0001998 0 0 0 -2.625,-2.5625 c -4.2177,1.6961 -8.8501,2.5938 -13.7188,2.5938 -20.1992,0 -38.7188,-18.55083 -38.7188,-38.75003 0,-4.8688 0.8664,-9.5012 2.5626,-13.7187 a 2.0001998,2.0001998 0 0 0 -2.1563,-2.7188 z m -2.8437,5.625 c -0.9383,3.4708 -1.5626,7.0589 -1.5626,10.8125 0,22.60863 20.1102,42.75003 42.7188,42.75003 3.7511,0 7.3437,-0.6567 10.8125,-1.5938 -6.1115,11.7169 -18.512,18.4063 -33.1563,18.4063 -20.5747,0 -37.1874,-16.644 -37.1874,-37.2187 0,-14.64293 6.6602,-27.04423 18.375,-33.15633 z"
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
      )}
      {!dark && (
        <svg
          className={!dark ? animate : "light"}
          onClick={() => darkMode()}
          height={size}
          width={size}
          fill={color}
          // xmlns:dc="http://purl.org/dc/elements/1.1/"
          // xmlns:cc="http://creativecommons.org/ns#"
          // xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
          // xmlns:svg="http://www.w3.org/2000/svg"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
          // xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
        >
          <g transform="translate(0,-952.36218)">
            <path
              d="m 38.353123,958.8955 c 1.600442,-0.42884 3.245423,0.52097 3.674234,2.12132 l 4.141105,15.45481 c 0.42885,1.60049 -0.520865,3.24545 -2.121307,3.67428 -1.600346,0.42882 -3.245398,-0.52087 -3.674248,-2.12136 l -4.141105,-15.45482 c -0.428811,-1.60034 0.520975,-3.24542 2.121321,-3.67423 z m 40.78206,10.81333 c 0.945516,-0.18295 1.950056,0.10196 2.682302,0.83419 1.171536,1.1715 1.174609,3.06575 0.0031,4.23739 l -11.301482,11.31044 c -1.171592,1.17155 -3.095995,1.18259 -4.26754,0.0111 -1.171582,-1.17159 -1.144443,-3.07383 0.02711,-4.24547 L 77.58013,970.54603 c 0.439347,-0.43928 0.987769,-0.72733 1.555053,-0.8372 z M 8.8640759,988.53792 c 0.432721,-0.0787 0.892647,-0.0598 1.3427251,0.0607 l 15.442592,4.14438 c 1.600419,0.4289 2.575042,2.06272 2.14622,3.66314 -0.428839,1.60032 -2.100945,2.55295 -3.701348,2.12416 L 8.6516729,994.38592 c -1.6004,-0.4289 -2.544864,-2.07091 -2.116035,-3.67123 0.268028,-1.00025 0.995503,-1.74936 1.905846,-2.06358 0.136601,-0.047 0.278355,-0.087 0.422592,-0.11323 z m 36.7359931,-2.59645 c 9.034584,-2.42081 18.399851,2.98622 20.82066,12.0208 2.420812,9.03463 -2.986231,18.39983 -12.020815,20.82063 -9.034575,2.4208 -18.399851,-2.9862 -20.820663,-12.0208 -2.42081,-9.03456 2.986243,-18.39982 12.020818,-20.82063 z m 1.552914,5.79555 c -5.902386,1.58154 -9.359714,7.56981 -7.778177,13.47218 1.58154,5.9024 7.569807,9.3597 13.472194,7.7782 5.902396,-1.5816 9.359714,-7.5698 7.778174,-13.47221 -1.581537,-5.90238 -7.569795,-9.35971 -13.472191,-7.77817 z m 27.41001,14.39628 c 0.432722,-0.079 0.892637,-0.06 1.342725,0.061 l 15.442587,4.1444 c 1.6004,0.4289 2.544876,2.0707 2.116035,3.6712 -0.42882,1.6003 -2.07077,2.5448 -3.671163,2.116 l -15.442587,-4.1443 c -1.600419,-0.4289 -2.575039,-2.0629 -2.14622,-3.6632 0.268038,-1.0002 1.025688,-1.7574 1.936031,-2.0716 0.136601,-0.047 0.278355,-0.087 0.422592,-0.1133 z m -43.527032,11.6631 c 0.945516,-0.183 1.980231,0.094 2.712487,0.8261 1.171527,1.1715 1.144443,3.0738 -0.02711,4.2454 l -11.301487,11.3105 c -1.171583,1.1715 -3.065829,1.1745 -4.237355,0 -1.171601,-1.1716 -1.174609,-3.0658 -0.0031,-4.2374 l 11.301487,-11.3104 c 0.439356,-0.4393 0.987769,-0.7274 1.555053,-0.8372 z m 24.916867,6.7821 c 1.600443,-0.4288 3.245423,0.521 3.674235,2.1213 l 4.141104,15.4548 c 0.428838,1.6005 -0.520877,3.2454 -2.12132,3.6743 -1.600346,0.4288 -3.245397,-0.5209 -3.674234,-2.1214 l -4.141105,-15.4548 c -0.428812,-1.6003 0.520974,-3.2454 2.12132,-3.6742 z"
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
      )}
    </>
  )
}

export default Light