import type { Metadata } from "next";

import { Header } from "@/components/shared";

export const metadata: Metadata = {
  title: "Next Pizza | Главная",
};

export default function HomeLayout(
  props: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
  }>
) {
  return (
    <main className="min-h-screen">
      <Header />
      {props.children}
      {props.modal}
    </main>
  );
}
