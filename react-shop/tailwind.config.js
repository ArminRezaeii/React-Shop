/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "primary": "#384AEB",
        "opacity": "rgb(255, 255, 255,0.5);",

      },
      fontSize: {
        small: "9px"
      },
      borderColor: {
        "eee": "#EEEEEE",
        "blue": "#384AEB"
      },
      textColor: {
        "mainColor": "#384AEB",
        "textColor": "#777777",
        "textColor2": "#222222",
        "textColor3": "#555555",
        "textColor4": "#495057",
        "textColor5": "#7B838A"
      },
      boxShadow: {
        "boxSHodw": " rgba(56, 74, 235, 0.1) 0px -5px 20px 0px"

      }


    }
  },
 
  
}

