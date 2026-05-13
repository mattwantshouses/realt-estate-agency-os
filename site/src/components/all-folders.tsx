"use client";

import { specialists } from "@/lib/specialists";
import { FolderCard } from "./folder-card";

export function AllFolders() {
  return (
    <div className="grid md:grid-cols-2 gap-3">
      {specialists.map((spec) => (
        <FolderCard key={spec.slug} specialist={spec} />
      ))}
    </div>
  );
}
