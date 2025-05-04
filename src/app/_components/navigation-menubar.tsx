"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "~/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { exProjects } from "_data/projects/ex-projects";
import { archivedProjects } from "_data/projects/archived-projects";
import { majorProjects } from "_data/projects/projects";

export function NavigationMenuBar() {
  return (
    <div className="flex">
      <div className="flex size-9 md:flex-none lg:flex-grow"></div>
      <div className="size-9 flex-grow gap-0 tracking-tighter md:tracking-normal lg:tracking-wide">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <img
                          src="/starboy.svg"
                          height={60}
                          width={60}
                          alt="Starboy Logo"
                        ></img>
                        <div className="mb-2 mt-4 text-lg font-medium">
                          <p className="text-sm leading-tight text-muted-foreground">
                            Handcrafted by
                          </p>
                          Sam Skywalker
                        </div>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {majorProjects.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Ex-Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {exProjects.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Archives</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {archivedProjects.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex size-9 md:flex-none lg:flex-grow">
        {/* <a
          href="https://github.com/skywalkerSam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/github-logo-white.svg"
            alt="GitHub Logo"
            width={30}
            height={30}
            className="mt-1 p-1"
          />
        </a> */}
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
