import { Icons } from "@/components/icons"

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons 
  label?: string
}
export interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  onAddToCart: (item: MenuItemProps) => void;
}
export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}
export interface SidebarNavItem extends NavItemWithChildren {}

export interface MainNavItem extends NavItem {}


