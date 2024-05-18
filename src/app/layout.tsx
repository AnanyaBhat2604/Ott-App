import Providers from "@/package/Providers/Providers";
import "./globals.css";

// export const metadata: Metadata = {
//   title: "OTT App",
//   description: "OTT application",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
