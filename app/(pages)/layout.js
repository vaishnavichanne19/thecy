import "../globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Work_Sans } from "next/font/google";
import { Roboto } from "next/font/google";
import AppWrapper from "../AppWrapper";
import AosLoader from "../AosLoader";



const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  // title: "Home Page", or
  title: {
    default: "Customization and You", //some page do not add a metadata they show this default title
    template: "%s | Customization and You",
  },

  description: "Customization and You provide multiple services",
  authors: [
    { name: "vaishnavi channe" },
    { name: "Customization and You", url: "https://thecy.in" },
  ],
  keywords: ["best services provide", "digital marketing"],
  icons: {
    icon: "/../images/logo.svg",
  },
  metadataBase: new URL("https://thecy.in"),
  openGraph: {
    title: "Customization and You",
    description: "Customization and You provide multiple services",
    url: "https://thecy.in",
    siteName: "Customization and You",
    images: [
      {
        url: "/images/logo.svg",
        width: 1200,
        height: 500,
        alt: "Customization and You",
      },
      ,
    ],
    type: "website",
  },
  twitter: {
    card: "Customization and You",
    title: "Customization and You",
    description: "Customization and You provide multiple services",
    creator: "@Customization and You",
    images: ["/images/logo.svg"],
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Customization and You provides digital marketing, web design, video editing, and branding services." />
      </head>
      <body className={`${workSans.variable} ${roboto.variable}`}>
        <AosLoader/>
        <AppWrapper>
        {children}
        </AppWrapper>
      </body>
    </html>
  );
}
