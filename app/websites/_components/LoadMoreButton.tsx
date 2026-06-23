"use client";

import { Button } from "@/composants/ui/Button";

export default function LoadMoreButton() {
  const handleClick = () => {
    console.log("Charger plus de sites web");
  };

  return (
    <Button onClick={handleClick}>
      Charger plus de sites web
    </Button>
  );
}