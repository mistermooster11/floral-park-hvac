import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Floral Park HVAC Corp — how we collect, use, and protect your personal information when you contact us or use our website.",
  alternates: { canonical: "https://floralparkhvac.com/privacy-policy" },
  robots: { index: false, follow: false },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
