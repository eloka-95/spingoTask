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
            d="M7.16669 19.4062V17.25"
            stroke="#292D32"
            strokeWidth={1.5}
            strokeLinecap="round"
        />
        <Path
            d="M12.5 19.4062V15.0938"
            stroke="#292D32"
            strokeWidth={1.5}
            strokeLinecap="round"
        />
        <Path
            d="M17.8333 19.4063V12.9271"
            stroke="#292D32"
            strokeWidth={1.5}
            strokeLinecap="round"
        />
        <Path
            d="M17.8334 6.59375L17.3542 7.15625C14.6979 10.2604 11.1354 12.4583 7.16669 13.4479"
            stroke="#292D32"
            strokeWidth={1.5}
            strokeLinecap="round"
        />
        <Path
            d="M14.7812 6.59375H17.8333V9.63542"
            stroke="#292D32"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M9.37498 23.4167H15.625C20.8333 23.4167 22.9166 21.3333 22.9166 16.125V9.87501C22.9166 4.66668 20.8333 2.58334 15.625 2.58334H9.37498C4.16665 2.58334 2.08331 4.66668 2.08331 9.87501V16.125C2.08331 21.3333 4.16665 23.4167 9.37498 23.4167Z"
            stroke="#292D32"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default SVGComponent;
