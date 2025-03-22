"use client";

import "~/styles/starboy-logo.css";
import type { JSX } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "~/components/ui/navigation-menu";

/**
 *
 * @see https://tailwindcss.com/docs/flex-grow
 */
export default function TopBar(): JSX.Element {
  return (
    <div className="flex">
      <div className="size-14 flex-auto"></div>
      <div className="size-14 grow">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="size-14 flex-auto"></div>
    </div>
  );
}
