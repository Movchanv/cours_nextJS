import { WebsiteType } from "@/types/website";
import Image from 'next/image';

export default function Header() {
  return (
    <article>
        <Image
          src="/public/websites/web.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
    </article>
  );
}
