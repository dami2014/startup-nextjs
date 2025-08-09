import CatNameSearch from "@/components/CatSearch/CatNameSearch";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cat Name Finder – Unique, Cute & Themed Cat Names",
  description:
    "Find the perfect cat name by gender, color, breed, and more. Discover unique, cute, and meaningful names for your feline friend with our Cat Name Finder.",
};

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}


      {/* Search Section */}
      <section id="search" className="py-16">
        <div className="container mx-auto px-4">
          <CatNameSearch />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
