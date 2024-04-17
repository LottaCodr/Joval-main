import React from "react";
import { Separator } from "@/components/ui/separator";
import CardItems from "../components/Cards/CardItems";
import { FEATURED_ITEMS } from "@/config/items";

const FeaturedItemsScreen = () => {
  return (
    <div className=" w-auto  ">
      
        {/* Featured Section */}
        <Separator />
        <section className="  mb-12  justify-start  ">
          <h1 className="text-3xl w-screen font-bold text-white mb-4 pl-4  h-[60px] p-4 ">
            Featured Items
          </h1>
          <Separator />
          <div className=" grid grid-cols-4 gap-4  pt-4 lg:gap-7 md:gap-5  ">
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
        <section className="mb-12   ">
          <h1 className="text-3xl font-bold text-white mb-4 pl-4  h-[60px] p-4 rounded-t-lg">
            Favourite Meals
          </h1>
          <Separator />
          <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   pt-4 lg:gap-10 md:gap-5  ">
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
        <section className="mb-12  ">
          <h1 className="text-3xl font-bold text-white mb-4 pl-4  h-[60px] p-4 rounded-t-lg">
            Favourite Drinks
          </h1>
          <Separator />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   pt-4 lg:gap-10 md:gap-5  ">
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
        <section className="mb-12  ">
          <h1 className="text-3xl font-bold text-white mb-4 pl-4 bg-primary-dark h-[60px] p-4 rounded-t-lg">
            Favourite Sports
          </h1>
          <Separator />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   pt-4 lg:gap-10 md:gap-5 ">
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
      
    </div>
  );
};

export default FeaturedItemsScreen;
