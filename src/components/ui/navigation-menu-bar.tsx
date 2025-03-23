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

const exProjects: { title: string; href: string; description: string }[] = [
  {
    title: "Hello React!",
    href: "https://github.com/skywalkerSam/hello-react",
    description: "The Hello World of React.",
  },
  {
    title: "House Of Cards",
    href: "https://github.com/skywalkerSam/houseOfCards",
    description:
      "A simple game where you'd waste your time matching two cards at a time.)",
  },
  {
    title: "Dashboard Demo",
    href: "https://github.com/skywalkerSam/dashboard-demo",
    description: "Dashboard Demo w/ NEXT.js + Vercel.",
  },
  {
    title: "Tic Tac Toe",
    href: "https://github.com/skywalkerSam/tictactoe",
    description: "Simple Tic Tac Toe.)",
  },
  {
    title: "Face Detection",
    href: "https://github.com/skywalkerSam/faceDetection",
    description: "Basic Face Detection w/ Clarifai.",
  },
  {
    title: "Face Detection Demo",
    href: "https://github.com/skywalkerSam/face-detection-vite",
    description: "Face Detection Demo built w/ Vite + React.",
  },
  {
    title: "Dall-E Wrapper",
    href: "https://github.com/skywalkerSam/dalleWrapper",
    description:
      "Mimicking Dall-E-like Responses w/ Randomized Preset Images.)",
  },
  {
    title: "Animal Farm",
    href: "https://github.com/skywalkerSam/animalSearch",
    description: "POC for Searching Things.",
  },
  {
    title: "Timer",
    href: "https://github.com/skywalkerSam/timer",
    description: "A Simple Timer made w/ React.",
  },
  {
    title: "Clock",
    href: "https://github.com/skywalkerSam/clock",
    description: "A Simple Clock made w/ React.",
  },
  {
    title: "Workspace",
    href: "https://github.com/skywalkerSam/workspace",
    description: "A Simple Workspace made w/ React.",
  },
  {
    title: "To Do",
    href: "https://github.com/skywalkerSam/todo",
    description: "A Simple To Do made w/ React.",
  },
  {
    title: "Robofriends",
    href: "https://github.com/skywalkerSam/robofriends",
    description: "A Collection of Robot Cards made w/ React.",
  },
];

const archivedProjects: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "The Hello World Project",
    href: "https://github.com/skywalkerSam/the-hello-world-project",
    description:
      "Hello World for Every Programming Language possible! Hopefully.)",
  },
  {
    title: "...introductionToWebDevelopment",
    href: "https://github.com/skywalkerSam/introductionToWebDevelopment",
    description: "Introduction to Web Development, fr*",
  },
  {
    title: "Project Cortana",
    href: "https://github.com/skywalkerSam/Project-Cortana",
    description: "Project Cortana. Inspired by Halo Infinite.)",
  },
  {
    title: "JS 101",
    href: "https://github.com/skywalkerSam/JS-101",
    description: 'JavaScript 101 (Not, Java. "JavaScript".)',
  },
  {
    title: "Python 101",
    href: "https://github.com/skywalkerSam/Python-101",
    description: "Introduction to Python 3",
  },
  {
    title: "ML 101",
    href: "https://github.com/skywalkerSam/ML-101",
    description: "Machine Learning 101",
  },
  {
    title: "Game Development",
    href: "https://github.com/skywalkerSam/Game-Dev-101",
    description: "Game Development 101",
  },
  {
    title: "Guessing Game",
    href: "https://github.com/skywalkerSam/Guessing-Game",
    description: "A Terminal-based Guessing Game written in C++",
  },
  {
    title: "Audio Generator",
    href: "https://github.com/skywalkerSam/Audio-Generator",
    description: "Text-to-Audio w/ Python 3",
  },
  {
    title: "IT 101",
    href: "https://github.com/skywalkerSam/IT-101",
    description: "Getting Started with Information Technologies",
  },
  // {
  //   title: "Linux 101",
  //   href: "https://github.com/skywalkerSam/Linux-101",
  //   description: "Linux 101",
  // },
  {
    title: "Sidewalks",
    href: "https://github.com/skywalkerSam/Sidewalks",
    description: "Sidewalks...",
  },
];
export function NavigationMenuBar() {
  return (
    <div className="flex">
      <div className="size-14 flex-none"></div>
      <div className="size-14 flex-grow">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="https://github.com/skywalkerSam"
                      >
                        <img src="/icon.svg" height={60} width={60} alt="Starboy Logo"></img>
                        <div className="mb-2 mt-4 text-lg font-medium">
                          <p className="text-sm leading-tight text-muted-foreground">
                            Handcrafted by
                          </p>
                          skywalkerSam.dev
                        </div>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem
                    href="https://github.com/skywalkerSam/stardate"
                    title="Project Stardate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    A better standard for dating things (at least for me.)
                  </ListItem>
                  <ListItem
                    href="https://github.com/skywalkerSam/next-gallery"
                    title="Next Gallery"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Image Gallery Showcase w/ NEXT.js + Vercel.
                  </ListItem>
                  {/* <ListItem
                    href="https://github.com/skywalkerSam/life-in-dots"
                    title="Typography"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Life In Dots
                  </ListItem> */}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Ex-Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="size-14 flex-none">
        <a
          href="https://github.com/skywalkerSam/skywalkerSam.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/github-mark-white.svg"
            alt="GitHub Logo"
            width={30}
            height={30}
            className="mt-1 p-1"
          />
        </a>
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
