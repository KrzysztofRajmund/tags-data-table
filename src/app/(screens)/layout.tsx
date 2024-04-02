import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex min-h-screen w-full items-start justify-center p-6 md:px-14 md:py-16">
      {children}
    </section>
  );
}
