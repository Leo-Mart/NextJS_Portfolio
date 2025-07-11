/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#5C6A72",
            h1: {
              color: "#5C6A72",
            },
            h2: {
              color: "#5C6A72",
            },
            a: {
              color: "#5C6A72",
            },
            strong: {
              color: "#5C6A72",
            },
          },
        },
        invert: {
          css: {
            color: "#D3C6AA",

            h1: {
              color: "#D3C6AA",
            },
            h2: {
              color: "#D3C6AA",
            },
            a: {
              color: "#D3C6AA",
            },
            strong: {
              color: "#D3C6AA",
            },
          },
        },
      },
    },
  },
};

// bg-[#EAE4CA] text-[#5C6A72] dark:bg-[#333C43] dark:text-[#D3C6AA]
