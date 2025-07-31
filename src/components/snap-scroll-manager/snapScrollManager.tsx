"use client";

import { useSnapScroll } from "@/hooks/useSnapScroll";

export default function SnapScrollManager({
  scrollRef,
}: {
  scrollRef: React.RefObject<HTMLElement>;
}) {
  useSnapScroll(scrollRef, 500);
  return null;
}
