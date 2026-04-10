import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "全网最离谱的 SBTI 性格测试",
  description: "快来测测你是纯种牛马还是精神病患！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className="min-h-screen max-w-md mx-auto relative bg-yellow-400 shadow-2xl overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}