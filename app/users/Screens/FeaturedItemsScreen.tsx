import React from "react";
import { Separator } from "@/components/ui/separator";
import CardItems from "../components/Cards/CardItems";
import { FEATURED_ITEMS } from "@/config/items";

const FeaturedItemsScreen = () => {
  return (
    <>
      
        {/* Featured Section */}
        <Separator />
        <section className="  mb-12  ">
          <h1 className="text-3xl font-bold text-white mb-4 pl-4  h-[60px] p-4 rounded-t-lg">
            Featured Items
          </h1>
          <Separator />
          <div className="grid   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-screen pt-4  gap-10 lg:gap-0 md:gap-5  ">
            {FEATURED_ITEMS.map((features) => (
              <CardItems
                // key={features.id} {/* Crucial for React optimization */}
                price={features.price}
                itemName={features.itemDescription}
                image={features.img}
                buttonName="ADD TO CART"
              />
            ))}
          </div>
        </section>
        <Separator />

        {/* MEALS Section */}
        <section className="mb-12 flex-nowrap overflow-hidden ">
          <h1 className="text-4xl font-bold text-white mb-4 pl-4  h-[60px] p-4 rounded-t-lg">
            Favourite Meals
          </h1>
          <Separator />
          <div className=" grid   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-screen pt-4  gap-10 lg:gap-0 md:gap-5  ">
            {FEATURED_ITEMS.map((features) => (
              <CardItems
                // key={features.id} {/* Crucial for React optimization */}
                price={features.price}
                itemName={features.itemDescription}
                image={features.img}
                buttonName={"ADD TO CART"}
              />
            ))}
          </div>
        </section>

        <Separator />

        {/* Drinks Section */}
        <section className="mb-12 overflow-hidden ">
          <h1 className="text-4xl font-bold text-white mb-4 pl-4  h-[60px] p-4 rounded-t-lg">
            Favourite Drinks
          </h1>
          <Separator />
          <div className="grid   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-screen pt-4  gap-10 lg:gap-0 md:gap-5 ">
            {FEATURED_ITEMS.map((features) => (
              <CardItems
                // key={features.id} {/* Crucial for React optimization */}
                price={features.price}
                itemName={features.itemDescription}
                image={features.img}
                buttonName={"ADD TO CART"}
              />
            ))}
          </div>
        </section>

        <Separator />

        {/* Sports Section */}
        <section className="mb-12  w-screen">
          <h1 className="text-4xl font-bold text-white mb-4 pl-4 bg-primary-dark h-[60px] p-4 rounded-t-lg">
            Favourite Sports
          </h1>
          <Separator />
          <div className="grid   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-screen pt-4  gap-10 lg:gap-0 md:gap-5 ">
            {FEATURED_ITEMS.map((features) => (
              <CardItems
                // key={features.id} {/* Crucial for React optimization */}
                price={features.price}
                itemName={features.itemDescription}
                image={features.img}
                buttonName={"ADD TO CART"}
              />
            ))}
          </div>
        </section>
      
    </>
  );
};

export default FeaturedItemsScreen;
