"use client";
import { frontendRoutes } from "@/assets/constants/frontend-routes";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-white">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href={frontendRoutes.DASHBOARD}>Return Homen</Link>
    </div>
  );
}
