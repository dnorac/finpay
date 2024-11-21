import localFont from "next/font/local";

const font = localFont({ src: "./fonts/helveticanowdisplay-medium.ttf" });
export const fontBold = localFont({
  src: "./fonts/Helvetica-Bold.ttf",
  variable: "--font-bold",
});

export default font;
