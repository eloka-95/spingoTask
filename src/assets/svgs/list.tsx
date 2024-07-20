import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
const SVGComponent = (props) => (
    <Svg
        width={25}
        height={36}
        viewBox="0 0 25 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M19.625 2.08334H5.375C4.13236 2.08334 3.125 3.0907 3.125 4.33335V20.6667C3.125 21.9093 4.13236 22.9167 5.375 22.9167H19.625C20.8676 22.9167 21.875 21.9093 21.875 20.6667V4.33334C21.875 3.0907 20.8676 2.08334 19.625 2.08334Z"
            stroke="#00A6FB"
            strokeWidth={1.5}
            strokeLinecap="round"
        />
        <Path
            d="M17.7083 7.29166H15.625"
            stroke="#00A6FB"
            strokeWidth={1.125}
            strokeLinecap="round"
        />
        <Path
            d="M17.7083 17.7083H15.625"
            stroke="#00A6FB"
            strokeWidth={1.125}
            strokeLinecap="round"
        />
        <Path
            d="M3.125 12.5H21.875"
            stroke="#00A6FB"
            strokeWidth={1.125}
            strokeLinecap="round"
        />
        <Circle cx={12.5} cy={32.5} r={3.5} fill="#00A6FB" />
    </Svg>
);
export default SVGComponent;
