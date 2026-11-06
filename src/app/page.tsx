import { HeroBanner } from "@/components/home";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full bg-white">
      {/* 1. Hero / Banner Section with #F5F1EB (60%) warm ivory background */}
      <HeroBanner />

      {/* Subsequent sections will alternate: White (#FFFFFF) -> Ivory (#F5F1EB/60) */}
    </main>
  );
}
