"use client";

import { Button } from "@/components/ui/button";
import { PackageItems } from "@/constants";
import Link from "next/link";
import useStore from "@/store";

export default function Home() {
  const { increment, decrement, count } = useStore((state) => state);

  return (
    <>
      <div className="container py-10">
        <div className="border p-5 rounded-lg border-gray-300 space-y-2 bg-white">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold">Squirrel</h1>
            <Button onClick={() => increment()}>{count}</Button>
          </div>
          <h2 className="text-2xl font-semibold">Starter Template</h2>
          <p className="text-muted-foreground">
            This starter template is made for the only purpose to give you a
            proper quick start whenever you get your hands on the new project.
          </p>
        </div>
        <section>
          <h1 className="text-2xl text-center font-semibold py-10">
            Used Packages and Tools
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PackageItems.map((item, index) => (
              <Link
                href={item.link}
                target="_blank"
                key={index}
                className={`bg-white p-5 rounded-lg border border-gray-300 cursor-pointer`}
              >
                <h1 className="text-xl font-semibold">{item.title}</h1>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </section>
        <section className="items-center justify-center flex flex-col">
          <h1 className="text-2xl text-center font-semibold py-10">
            Api Endpoint
          </h1>
          <div className="flex gap-3">
            <Link
              href={"/api/base"}
              className="border rounded-lg border-gray-300"
            >
              <p className="text-center bg-white font-semibold hover:bg-white/40 border-gray-300 rounded-lg p-5">
                GET API Endpoint
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
