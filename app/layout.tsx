import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yuqian | Performer, Creator & Technologist",
  description: "The digital EPK of Yuqian / 索煜倩 — performer, actor, creator and technologist.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
