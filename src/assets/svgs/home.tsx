import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
    <Svg
        width={25}
        height={26}
        viewBox="0 0 25 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M9.39584 3.45824L3.78126 7.83324C2.84376 8.56241 2.08334 10.1145 2.08334 11.2916V19.0103C2.08334 21.427 4.05209 23.4062 6.46876 23.4062H18.5313C20.9479 23.4062 22.9167 21.427 22.9167 19.0207V11.4374C22.9167 10.177 22.0729 8.56241 21.0417 7.84366L14.6042 3.33324C13.1458 2.3124 10.8021 2.36449 9.39584 3.45824Z"
            stroke="#292D32"
            strokeWidth={1.5625}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M12.5 19.2396V16.1146"
            stroke="#292D32"
            strokeWidth={1.5625}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default SVGComponent;
