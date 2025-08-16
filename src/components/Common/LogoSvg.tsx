
import React from "react";
type Props = { className?: string };

const LogoSvg: React.FC<Props> = ({ className }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="1024.000000pt"
      height="1024.000000pt"
      viewBox="0 0 1024.000000 1024.000000"
      preserveAspectRatio="xMidYMid meet"
      className={`solob-logo ${className}`}
    >
      <g
        transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
        fill="currentColor"
        stroke="none"
      >
        <path
          d="M4735 7889 c-687 -60 -1367 -394 -1822 -897 -628 -694 -871 -1654
-648 -2561 166 -674 627 -1300 1237 -1680 517 -323 1151 -472 1830 -433 412
24 734 99 1073 248 334 147 601 330 863 592 125 125 152 157 147 173 -4 12
-113 244 -242 517 -129 274 -251 532 -270 575 -20 42 -39 77 -42 77 -3 0 -24
-28 -45 -63 -316 -500 -686 -754 -1256 -863 -134 -26 -572 -31 -737 -9 -609
81 -1064 388 -1288 869 -94 200 -135 397 -135 641 0 388 90 681 295 956 69 93
220 242 316 313 202 149 462 254 734 297 48 8 490 13 1382 16 l1313 4 120 177
c67 97 252 368 411 602 160 234 295 433 300 443 9 16 -75 17 -1713 16 -948 -1
-1768 -6 -1823 -10z"
        />
      </g>
    </svg>
  );
};

export default LogoSvg;
