import {
  HeroBanner,
  SpecialDishes,
  SignatureMenu,
  HospitalityPillars,
  ServiceSchedule,
  ReviewsSlider,
  BanquetingInquiry,
} from "@/components/home";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full bg-white dark:bg-[#0D0C0A] transition-colors duration-200">
      {/* 1. Hero / Banner Section with #F5F1EB (60%) warm ivory background */}
      <HeroBanner />

      {/* 2. Special For You / Delicious Dishes Section with White (#FFFFFF) background */}
      <SpecialDishes />

      {/* 3. Heritage Gastronomy / Signature À La Carte & Bar with #F5F1EB (60%) warm ivory background */}
      <SignatureMenu />

      {/* 4. Imperial Standard / Three Pillars of Royal Hospitality with White (#FFFFFF) background */}
      <HospitalityPillars />

      {/* 5. Royal Hospitality / Opening Hours & Service Schedule with #F5F1EB (60%) warm ivory background */}
      <ServiceSchedule />

      {/* 6. What Our Customers Say / Customer Reviews Slider with White (#FFFFFF) background */}
      <ReviewsSlider />

      {/* 7. Banqueting & Direct Inquiries / Contact Form with #F5F1EB (60%) warm ivory background */}
      <BanquetingInquiry />

      {/* Subsequent sections will continue to alternate backgrounds */}
    </main>
  );
}
