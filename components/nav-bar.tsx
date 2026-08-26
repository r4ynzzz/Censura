"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuList,
} from "./ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "About Us",
    href: "/about-us",
    description: "Information on the company and it's vision",
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Get out latest posts on changes.",
  },
  {
    title: "Management Team",
    href: "/management-team",
    description: "Meet the team behind the product.",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    description: "Contact details for any situation.",
  },
  {
    title: "Support",
    href: "/support",
    description: "Customer support for those in need.",
  },
  {
    title: "Reviews",
    href: "/reviews",
    description: "A look at what customers have to say about our product.",
  },
];

const features: { title: string; href: string; description: string }[] = [
  {
    title: "Custom Forms",
    href: "/forms-info",
    description: "Information on the company and it's vision",
  },
  {
    title: "Analytics",
    href: "/analytics-info",
    description: "Get out latest posts on changes.",
  },
  {
    title: "MF Doom",
    href: "/management-team",
    description: "Meet the team behind the product.",
  },
];

export default function NavBar() {
  const router = useRouter();

  return (
    <nav className="flex bg-blue-900/99 text-white drop-shadow-md justify-center items-center sticky top-0 z-1">
      <div className="bg-blue-950/60 flex items-center justify-between rounded-4xl py-4 px-6 lg:px-14 w-3/4 m-2">
        <h1 className="font-bold">Censura</h1>
        <span>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-96 gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {features.map((feature) => (
                      <li key={feature.title}>
                        <Link
                          href={feature.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            {feature.title}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {feature.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="hidden md:flex">
                <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-96 gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                      <li key={component.title}>
                        <Link
                          href={component.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            {component.title}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {component.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Content</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink>Pricing</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </span>
        <span className="">
          <Button
            variant="outline"
            className="mx-2 text-primary"
            onClick={() => router.push("/sign-in")}
          >
            Login
          </Button>
          <Button onClick={() => router.push("/sign-up")}>Apply Now</Button>
        </span>
      </div>
    </nav>
  );
}
