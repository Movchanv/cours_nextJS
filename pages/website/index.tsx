import type { GetServerSideProps } from "next";
import Link from "next/link";

type Website = {
  slug: string;
  title: string;
  description: string;
};

type PageProps = {
  websites: Website[];
};

export default function Index({ websites }: PageProps) {
  return (
    <>
      <h1>Websites</h1>
      <ul>
        {websites.map((website) => (
          <li key={website.slug}>
            <Link href={'/website/' + website.slug}>{website.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {

    const res = await fetch('http://localhost:3000/websites.json');
    const websites = (await res.json()) as Website[];
    return {
      props: {
        websites: websites.map((website) => ({
          slug: website.slug,
          title: website.title,
          description: website.description,
        })),
      },
    };
};
