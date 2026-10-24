"use client";

// Compatibility export for older English homepage imports.
// The shared editorial component owns the verified quotes and has no numeric counters.
import HomeTestimonials from "../../../../components/home-testimonials";

export default function EnglishHomeTestimonials() {
  return <HomeTestimonials locale="en" />;
}
