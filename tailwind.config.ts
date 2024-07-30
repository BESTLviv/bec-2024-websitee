import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'portraitt': '375px',
        'step01': '490px',
        'step1': '590px',
        'step2': '750px',
        'step3': '900px',
        '1090xl': '1090px',
        '1130px': '1130px',
        '3xl': '1300px',

      },

      backgroundImage: {
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'lines1Home': "url('/lines1Home.svg')",
        'lines1Organizers': "url('/linesOrganizers.svg')",
        'lines1OrganizersM': "url('/linesOrganizersM.svg')",
        'linesHome2M': "url('/linesHome2M.svg')",
      },
      backgroundColor: {
       "side": 'rgb(14, 14, 14)',
       "modal": 'rgba(61, 61, 61, 0.6)'
      },
      colors: {
        title: 'rgba(245, 160, 32)',
        customGray: 'rgb(200, 200, 200)',
        link: 'rgb(204, 204, 204)',
        linkModal: 'rgba(50, 50, 50, 1)',

        customOrange: 'rgb(245, 160, 32)',
        customBrown: 'rgb(67, 44, 9)',

        propositionBorder: "  rgb(245, 160, 32)",
        borderButton: "rgba(255, 255, 255, 0.4)",
        partner: "rgb(172, 170, 170)",
        extra: "rgb(192, 192, 192)"
      },
      fontFamily: {
        daysOne: ['DaysOne'], 
        rubik: ['Rubik'], 
        rubikB: ['RubikB'], 
        aviano: ['Aviano'],
      }
    },
  },
  plugins: [],
};
export default config;
