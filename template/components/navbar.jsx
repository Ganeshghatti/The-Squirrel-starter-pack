import { cn } from "@/lib/utils";

import { Menu } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import { NavItems } from "@/constants";

const Navbar = () => {
  return (
    <section className="py-4">
      <div className="container">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Link href={"/"}>
                <span className="text-xl font-bold">Squirrel</span>
              </Link>
            </div>
            <div className="flex items-center">
              {NavItems.map((item) => (
                <Link
                  key={item.link}
                  className={cn(
                    "text-muted-foreground",
                    navigationMenuTriggerStyle,
                    buttonVariants({
                      variant: "ghost",
                    })
                  )}
                  href={item.link}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <Link href={"/auth/login"}>
              <Button variant="outline">Log in</Button>
            </Link>
            <Link href={"/auth/register"}>
              <Button>Register</Button>
            </Link>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">Squirrel</span>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold">Squirrel</span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="mb-8 mt-8 flex flex-col gap-4">
                  {NavItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className="font-semibold"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <div className="mt-2 flex flex-col gap-3 w-full">
                    <Link href={"/auth/login"}>
                      <Button variant="outline" className="w-full">
                        Log in
                      </Button>
                    </Link>
                    <Link href={"/auth/register"}>
                      <Button className="w-full">Register</Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
