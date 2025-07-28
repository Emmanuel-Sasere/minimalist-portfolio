import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sasere Portfolio",
  description: `Code Alchemist | Frontend Engineer & Mobile Developer
Turning ideas into fast, scalable apps with React Native, TypeScript. Focused on clean code, great UX, and real-world impact.`,
  keywords: ['Frontend Engineer', 'React Native Developer', 'TypeScript', 'Supabase', 'Mobile App Developer', 'Fullstack Developer', 'FastAPI', 'Software Engineer', 'Scalable Apps', 'Clean Code', 'UI/UX', 'Tech Innovator']
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}