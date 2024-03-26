import "./globals.css";

export const metadata = {
  title: "Naranbaatar | Personal Portfolio",
  description: "Full Stack Developer - 6 months experience",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
