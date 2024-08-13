/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins"],
                pretendard: ["Pretendard"],
            },
            colors: {
                // new
                // "primary-main": "#FF4471",
                // "primary-sub": "#FF84A2",
                // white: "#ffffff",
                // success: "#00A811", //#3BB85D
                // information: "#006ADE", //006ADE
                // warning: "#E99A00", // EF9400
                // error: "#EF4B27", //E94E2C
                // "gray-01": "#FAFAFA", //neutral-01
                // "gray-02": "#EEEEEE", //neutral-02
                // "gray-03": "#DDDDDD", //neutral-03
                // "gray-04": "#CCCCCC", //gray-04
                // "gray-05": "#C5C5C5", //neutral-05
                // "gray-06": "#AAAAAA", //neutral-06
                // gray: "#777777", //neutral-07
                // "gray-07": "#777777", //neutral-07
                // black: "#000000", //neutral-08
                // "gray-08": "#333333", //neutral-08
            },
        },
    },
    plugins: [],
});
