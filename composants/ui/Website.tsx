import { WebsiteType } from "@/types/website";
import Image from "next/image";
import Link from "next/link";

export default function Website({
  website: { slug, title, thumbnail },
}: {
  website: WebsiteType;
}) {
  return (
    <Link href={`websites/${slug}`}>
      <div className="relative">
        <Image
          src={`/websites/${thumbnail}`}
          alt={`Image ${title}`}
          width="900"
          height="600"
          className="rounded-lg"
        />
        <h3 className="mt-4">{title}</h3>
      </div>
    </Link>
  );
}
