import "./globals.css";

export const metadata = {
  title: "Compass",
  description: "We help our audience succeed with creative thinking.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
