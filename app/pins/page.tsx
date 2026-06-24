"use client";

import { usePinStore } from "@/store/usePinStore";
import { useEffect, useState } from "react";
import { createClient } from "@/prismicio";
import { WebsiteDocument } from "@/prismicio-types";
import Link from "next/link";

export default function PinsPage() {
  const pins = usePinStore((state) => state.pins);

  const [websites, setWebsites] = useState<WebsiteDocument[]>([]);

  useEffect(() => {
    async function fetchData() {
      const client = createClient();
      const data = await client.getAllByType("website");
      setWebsites(data);
    }

    fetchData();
  }, []);

  const pinnedWebsites = websites.filter((site) =>
    pins.includes(site.uid)
  );

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">My Pins</h1>

      {pinnedWebsites.length === 0 ? (
        <p>No pins yet</p>
      ) : (
        <div className="grid gap-4">
          {pinnedWebsites.map((site) => (
            <Link
              key={site.uid}
              href={`/websites/${site.uid}`}
              className="border p-4 rounded"
            >
              {site.data.title}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}