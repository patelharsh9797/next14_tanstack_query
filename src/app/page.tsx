import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2 className="text-2xl text-center pt-12 text-primary">{`Testing the new 'React Query 5' w/ 'Next.js 14'`}</h2>
      <div className="flex items-center justify-center flex-wrap gap-8">
        <Link href="client" className={buttonVariants()}>
          Client Side Query
        </Link>
        <Link href="server" className={buttonVariants()}>
          Server Side Query
        </Link>
      </div>
    </>
  );
}
