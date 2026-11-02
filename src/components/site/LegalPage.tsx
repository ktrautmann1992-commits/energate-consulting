import type { ReactNode } from "react";
import { SiteLayout } from "./Layout";

export function LegalPage({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-5 py-16 lg:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">{title}</h1>
        <div className="mt-10 space-y-8 leading-relaxed text-muted-foreground [&_h2]:mb-2 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground">
          {children}
        </div>
      </article>
    </SiteLayout>
  );
}
