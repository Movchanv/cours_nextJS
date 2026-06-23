import Website from "@/composants/ui/Website";
import { WebsiteType } from "@/types/website";
import Link from "next/link";

export async function getStaticProps() {
  const websites = await fetch("http://localhost:3000/websites.json").then(
    (res) => res.json(),
  );

  return {
    props: { websites },
  };
}

type WebsitesPageType = {
  websites: WebsiteType[];
};

export default function WebsitesPage({ websites }: WebsitesPageType) {
  console.log("websites: ", websites);
  return (
    <div>
      <h1>WebsitesPage</h1>
      <div className="flex">
        {websites &&
          websites.map((w, i) => (
            <Link key={`website-${i}`} href={`/websites/${w.slug}`}>
              <Website website={w} />
            </Link>
          ))}
      </div>
    </div>
  );
}
