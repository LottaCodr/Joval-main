import { NavItem, SidebarNavItem } from "@/types/nav"


interface DocsConfig {
  mainNav: NavItem[]
  sideNav: SidebarNavItem[]
}


export const USER_NAV_BAR = {
    mainNav: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "About",
        href: "/about",
      },
      {
        title: "Pricing",
        href: "/pricing",
      },
      {
        title: "Blog",
        href: "/blog",
      },   
     
      {
        title: "Twitter",
        href: "https://twitter.com/joval",
        external: true,
      },
    ],
}
export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "Blog",
      href: "/blog",
    },   
   
    {
      title: "Twitter",
      href: "https://twitter.com/joval",
      external: true,
    },
  ],

  sideNav: [
    {
      title: "Featured Items",
      items: [
        {
          title: "Featured",
          href: "/users",
          items: [],
        },
      ],
    },
    {
      title: "Cafe",
      items: [
        {
          title: "Meals",
          href: "/users/Screens/Cafe/Meals",
          items: [],
        },
        {
          title: "Drinks",
          href: "/users/Screens/Cafe/Drinks",
          items: [],
        },
        
        
      ],
    },
    
    {
      title: "Sports Centre",
      items: [
        {
          title: "Football",
          href: "/users/Screens/Sports",
          items: [],
        },
        {
          title: "My Tickets",
          href: "/users/Screens/Sports/My_Tickets",
          items: [],
        },
      ],
    },
    {
      title: "My Wallet",
      items: [
        {
          title: "Add Card",
          href: "/users/Screens/My_Wallet",
          items: [],
        },
        {
          title: "Fund Me",
          href: "/users/Screens/My_Wallet/Fund_Wallet",
          items: [],
        },
      ],
    },
    {
      title: "Order History",
      items: [
        {
          title: "Order",
          href: "/users/Screens/Order_History",
          items: [],
        },
      ],
    },
    {
      title: "Get help",
      href: "/get-help",
      items: [
        {
          title: "Help",
          href: "/get-help",
          items: [],
        },
      ],
    },
    {
      title: "Settings",
      items: [
        {
          title: "Profile",
          href: "/users/settings",
          items: [],
        },
        {
          title: "Appearance",
          href: "/users/settings/appearance",
          items: [],
        },
        {
          title: "Notifications",
          href: "/users/settings/notifications",
          items: [],
        },
      ],

    }
  ],
}