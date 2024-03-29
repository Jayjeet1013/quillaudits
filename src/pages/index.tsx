import { Inter } from "next/font/google";
import Head from "next/head";
import Hero from "@/components/home/Hero";
import CaseStudies from "@/components/home/CaseStudies";
import Subscribe from "@/components/home/Subscribe";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>QuillAudits</title>
        <meta name="QuillAudits" content="QuillAudits" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div>
        <Hero />
        <CaseStudies />
        <Subscribe />
      </div>
    </>
  );
}
