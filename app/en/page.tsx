"use client";

import { Hero } from "@/components/hero";
import { Leva } from "leva";

export default function HomeEn() {
  return (
    <>
      <Hero lang="en" />
      <Leva hidden />
    </>
  );
}
