import type { GetServerSideProps } from "next";

type Website = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
};

type PageProps = {
  website: Website;
};

export default function Slug({ website }: PageProps) {
  const allImages = [website.thumbnail, ...website.images];

  return (
    <>
      <h1>{website.title}</h1>
      <p>{website.description}</p>
      <div>
        {allImages.map((image) => (
          <img key={image} src={'/' + image} alt={website.title}/>
        ))}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async ({params}) => {

  const slug = params?.slug as string;
  const res = await fetch('http://localhost:3000/websites.json');
  const websites = (await res.json()) as Website[];
  const website = websites.find((item) => item.slug === slug);

  if (!website) {
    return {
      redirect: {
        destination: "/website",
        permanent: false,
      },
    };
  }

  return {
    props: {
      website: {
        slug: website.slug,
        title: website.title,
        description: website.description,
        thumbnail: website.thumbnail,
        images: website.images,
      },
    },
  };
};
