import Link from "next/link";

import dynamic from "next/dynamic";

const FacebookPage = dynamic(
  () => import("@/components/FacebookPage/FacebookPage"),
  {
    ssr: false,
  }
);

const FacebookVideo = dynamic(
  () => import("@/components/FacebookVideo/FacebookVideo"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex text-white">
        <Link className="" href="/form">
          Form
        </Link>
        <FacebookPage />
        <FacebookVideo />
      </div>
    </main>
  );
}
