import Image from "next/image"

 type ButtonProps = {
    type: 'button' | 'submit',
    title: string,
    icon?: string,
    variant: string,
    full?: boolean,
    onClick?: () => void
 }

const Button = ({type, title, icon, variant, full, onClick}: ButtonProps) => {
  return (
    <button 
    className={`w-full text-lg bg-red-800 sm:text-base  ${variant} lg:text-lg sm:h-16 lg:h-18 py-2 px-8 m-0 font-bold border border-red-800 text-white rounded-md hover:bg-red-800 transition duration-300 ease-in-out`}    onClick={onClick}
    
    type={type} > {icon && <Image src={icon}  alt={title} width={24} height={24} /> } <label className="bold-16 text-xl whitespace-nowrap cursor-pointer">{title}</label> </button>


  )
}

export default Button