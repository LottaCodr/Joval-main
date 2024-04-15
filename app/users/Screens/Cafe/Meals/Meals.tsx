import { KITCHEN_CATEGORIES, FEATURED_ITEMS } from '@/config/items';
import React from 'react';
import CardItems from '../../../components/Cards/CardItems';
import Categories from '../../../components/Categories';
import { Separator } from "@/components/ui/separator";



const Meals = () => {
  return (
    <section className=" ml-16 justify-center items-center ">
      {/* Category Navigation */}
      <div className=" mb-8">
        
        <div className="container flex w-screen sm:w-auto hover:text-white items-center">
          {KITCHEN_CATEGORIES.map((category, index) => (
            <Categories key={index} category={category} />
          ))}
        </div>
      </div>

      {/* Featured Items Section */}
      <Separator />
        <h2 className="text-4xl font-bold text-white mb-4 pl-4  h-[60px] p-4 rounded-t-lg">Meals</h2>
        <Separator />
        <div className="grid  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5  pt-4 gap-0 ">
          {FEATURED_ITEMS.map((item) => (
            <CardItems
              // key={item.id} // Crucial for React optimization
              price={item.price}
              itemName={item.itemDescription}
              image={item.img}
              buttonName='ADD TO CART'
            />
          ))}
        </div>
      
    </section>
  );
};

export default Meals;
