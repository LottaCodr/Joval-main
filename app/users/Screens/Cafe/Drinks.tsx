import { FEATURED_ITEMS, KITCHEN_CATEGORIES } from "@/config/items";
import React from "react";
import CardItems from "../../components/CardItems";
import Categories from "../../components/Categories";

const Drinks = () => {
  return (
    <>
      {/* FOR THE CATEGORIES */}
      <div className="max-w-screen mb-10 mt-10 ">
        <div className=" flex-auto sm:min-width  relative w-full sm:w-auto lg:w-auto">
          {KITCHEN_CATEGORIES.map((meals, index) => (
            <Categories key={index} category={meals} />
          ))}
        </div>
      </div>

      <div className="mx-auto w-auto max-w-full px-2 sm:px-4 lg:px-6 xl:px-8">
        <section className="mb-8 overflow-hidden w-full ">
          <h1 className="text-2xl font-bold text-white mb-4 pl-4 bg-zinc-800 h-[60px] p-4 rounded-t-lg">
            Chicken Caesar Salad
          </h1>
          <div className="placeholder-shimmer bg-zinc-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4">
            {FEATURED_ITEMS.map((features) => (
              <CardItems
                // key={features.id} {/* Crucial for React optimization */}
                price={features.price}
                itemName={features.itemDescription}
                image={features.img}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Drinks;
