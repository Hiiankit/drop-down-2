import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 theme: {
    colors: {
      'bluedash':'hsla(257, 48%, 51%, 1)',
      'white' : 'hsla(210, 40%, 98%, 1)',
      'background': 'hsla(210, 37%, 93%, 1)',
      'bgUpload' :"hsla(270, 33%, 99%, 0.72)",
       'bordercol' : "hsla(201, 21%, 87%, 1)",
       'FileUpl' : "hsla(225, 12%, 53%, 1)",
       'buttonback' : "hsla(216, 21%, 73%, 1)",
      'formtext' : " hsla(223, 10%, 40%, 1)",
      'formborder' : "       hsla(17, 100%, 50%, 1)",
      'pdfBg': "rgba(255, 255, 255, 0.48)"

      
       
       
    },
    fontFamily: {
      "font-family": "Montserrat, sans-serif"
    },
    screens: {
        'custom': '1440px',
      },

  },
  plugins: [],
};
export default config;
