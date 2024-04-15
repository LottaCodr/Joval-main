import {  FEATURED_ITEMS, SPORTS_CATEGORIES } from '@/config/items';
import React from 'react';
import { Separator } from "@/components/ui/separator";

import Categories from '../../components/Categories';
import CardItems from '../../components/Cards/CardItems';


const Sports = () => {
  return (
    <section className="  ml-16 justify-center items-center ">
      {/* Category Navigation */}
      <div className="categories-wrapper mb-8">
        <div className="container flex w-screen sm:w-auto justify-center items-center lg:w-[700px]  overflow-x-auto  ">
          {SPORTS_CATEGORIES.map((category, index) => (
            <Categories key={index} category={category} />
          ))}
        </div>
      </div>

      {/* Featured Items Section */}
      <Separator />
      
        <h2 className="text-4xl font-bold text-white mb-4 pl-4  h-[60px] p-4 rounded-t-lg">FOOTBALL</h2>
        <Separator />
        <div className="grid  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5  pt-4 sm:gap-10 md:gap5 ">
          {FEATURED_ITEMS.map((item) => (
            <CardItems
              // key={item.id} // Crucial for React optimization
              price={item.price}
              itemName={item.itemDescription}
              image={item.img}
              buttonName='ADD TO TICKET'
            />
          ))}
        </div>
      
    </section>
  );
};

export default Sports;
