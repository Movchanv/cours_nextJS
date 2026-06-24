import WebsiteHeader from "@/composants/ui/WebsiteHeader";
import { createClient } from "@/prismicio";
import ImagesSlice from "@/slices/ImagesSlice";
import TextSlice from "@/slices/TextSlice";
import VideoSlide from "@/slices/VideoSlide";
import { SliceZone } from "@prismicio/react";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  const client = createClient();
  const websites = await client.getAllByType("website");

  return websites.map((w) => ({
    slug: w.uid,
  }));
}

type WebsitePageType = {
  params: Promise<{ slug: string }>;
};

// export async function generateMetadata({ params }: WebsitePageType) {
  // const { slug } = await params;
  // const client = createClient();
  // const website = await client.getByUID("website", slug);


  // return {
      // title: website.data.meta_title,
    // description: website.data.meta_description,
    // openGraph: {
      // image: website.data.meta_image
    // }
    
  //}
// }

export default async function WebsitePage({ params }: WebsitePageType) {
  const { slug } = await params;
  const client = createClient();
  const website = await client.getByUID("website", slug);

  if (!website) redirect("/websites");

  return (
    <main>
      {website && <WebsiteHeader website={website} />}
      <SliceZone
        slices={website.data.slices}
        components={{
          text_slice: TextSlice,
          images_slice: ImagesSlice,
          video_slide: VideoSlide,
        }}
      />
    </main>
  );
}
