import Footer from "@/components/layout/Footer";
import MaxWidthWraapper from "@/components/layout/MaxWidthWraapper";
import Navbar from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <MaxWidthWraapper className="min-h-screen w-full">

        <div className="w-full">
          <div className="max-w-[800px] mx-auto">

            <h1 className="text-[2rem] md:text-[4rem] font-bold text-center ">
              Become More Productive With Taskit!
            </h1>
            <p className="text-sm md:text-[1.2rem] text-gray-500 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni velit iusto beatae harum maxime earum tempora nobis exercitationem. Inventore quis, ad suscipit omnis accusantium quasi.
            </p>

            <div className="flex gap-5 justify-center py-5 items-center gap-5">
              <Button variant="outline">
                <Link href={'/login'}>
                  Get Started
                </Link>
              </Button>
              <Button variant={'ghost'}>
                Know more about it!
              </Button>
            </div>
          </div>
        </div>

      </MaxWidthWraapper>
      <Footer />
    </>
  );
}
