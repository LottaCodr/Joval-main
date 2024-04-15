import React from 'react'

type CategoriesProps = {
    category: string;

}

const Categories = ({category}: CategoriesProps) => {
  return (
    
  
    <div className="   cursor-pointer  rounded-lg bg-white hover:bg-red-800 hover:text-white shadow w-auto  p-4 mb-4 mr-4  ">
      <p className="text-red-800 hover:text-white w-full text-center text-xl font-semibold mb-2 "> {category}</p>
    </div>
  

  )
}

export default Categories