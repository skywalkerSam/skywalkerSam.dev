"use client";

import "~/styles/starboy-logo.css";
import type { JSX } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // NavigationMenuViewport,
} from "~/components/ui/navigation-menu";
import Link from "next/link";

/**
 *
 * @see https://tailwindcss.com/docs/flex-grow
 */
export default function TopBar(): JSX.Element {
  return (
    <div className="flex">
      <div className="size-14 flex-none"></div>
      <div className="size-14 grow">
        <NavigationMenu>
          {/* Projects */}

          <NavigationMenuList>
            <div>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div>
                    <NavigationMenuLink>
                      <a
                        href="https://github.com/skywalkerSam/dashboard-demo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Dashboard
                      </a>
                    </NavigationMenuLink>
                  </div>

                  <div>
                    <NavigationMenuLink>
                      <a
                        href="https://github.com/skywalkerSam/next-gallery"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Gallery
                      </a>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>

          {/* Ex-Projects */}

          <NavigationMenuList>
            <div className="p-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Ex-Projects</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div>
                    <NavigationMenuLink>
                      <a
                        href="https://github.com/skywalkerSam/stardate"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Stardate
                      </a>
                    </NavigationMenuLink>
                  </div>

                  <div>
                    <NavigationMenuLink>
                      <a
                        href="https://github.com/skywalkerSam/houseOfCards"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Cards
                      </a>
                    </NavigationMenuLink>
                  </div>

                  <div>
                    <NavigationMenuLink>
                      <a
                        href="https://github.com/skywalkerSam/faceDetection"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Faces
                      </a>
                    </NavigationMenuLink>
                  </div>

                  <div>
                    <NavigationMenuLink>
                      <a
                        href="https://github.com/skywalkerSam/dalleWrapper"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Images
                      </a>
                    </NavigationMenuLink>
                  </div>

                  <div>
                    <NavigationMenuLink>
                      <a
                        href="https://github.com/skywalkerSam/animalSearch"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Search
                      </a>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="size-14 flex-none">
        {/* About */}

        <NavigationMenu>
          <NavigationMenuList>
            <div>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="pointer hover:text-sky-400">
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
