import WebsiteHeader from "@/composants/ui/WebsiteHeader";
import { WebsiteType } from "@/types/website";
import { notFound } from "next/navigation";

async function getWebsites(): Promise<WebsiteType[]> {
  return fetch("http://localhost:3000/websites.json", {
    cache: "force-cache",
  }).then((res) => res.json());
}

export async function generateStaticParams() {
  const websites = await getWebsites();

  return websites.map((w) => ({
    slug: w.slug,
  }));
}

export default async function WebsitePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const websites = await getWebsites();

  const currentWebsite = websites.find(
    (w) => w.slug === slug
  );

  if (!currentWebsite) {
    notFound();
  }

  return (
    <main>
      <WebsiteHeader website={currentWebsite} />
    </main>
  );
}