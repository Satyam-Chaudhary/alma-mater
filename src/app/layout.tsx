
import "./globals.css";
import Nav from "./components/Nav";
import { inter } from "./ui/fonts";
import {
  ClerkProvider,
} from '@clerk/nextjs'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
      <body className={inter.className}>
        <div className="relative min-h-screen isolate overflow-hidden border-b border-gray-200 bg-white">
        <Nav/>
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-gray-400 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                width={150}
                height={150}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth={1}
              fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
            />
          </svg>
          {children}
        </div>
      </body>
      </ClerkProvider>
    </html>
  );
}
