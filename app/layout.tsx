import "./globals.css";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} mx-8 my-12`}>
        <nav className="bg-slate-100 flex">
          <a className="bg-slate-300 p-3 m-2 rounded-xl" href="/">
            <Image src="/favicon.ico" width={32} height={32} alt="logo" />
          </a>
          <ul className="flex">
            <a
              href="about"
              className="bg-slate-300 p-3 m-2 rounded-xl flex justify-center items-center"
            >
              <li className="text-black">About</li>
            </a>
            <a
              href="sign-up"
              className="bg-slate-300 p-3 m-2 rounded-xl flex justify-center items-center "
            >
              <li className="text-black">Sign Up</li>
            </a>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
