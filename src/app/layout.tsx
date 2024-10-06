import type { Metadata } from "next";
import localFont from "next/font/local";
// import { Inter, Roboto } from "next/font/google";
import "../app/ui/styles/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// const inter = Inter({ subsets: ["latin"] });

// const roboto = Roboto({
//   weight: ["400", "700"],
//   style: ["normal"],
//   subsets: ["latin"],
//   display: "swap",
// });
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        // className={roboto.className}
      >
        {children}
      </body>
    </html>
  );
}
