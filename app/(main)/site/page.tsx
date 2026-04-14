import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pricingCards } from "@/lib/constants";
import clsx from "clsx";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center w-full pt-32 overflow-hidden">
        {/* grid background */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        <p className="text-center text-muted-foreground text-sm md:text-base">
          Run your agency, in one place
        </p>

        <h1 className="text-center font-extrabold tracking-tight text-6xl sm:text-8xl md:text-[180px] bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text">
          Plura
        </h1>

        <div className="relative flex justify-center mt-[-40px] md:mt-[-80px]">
          <Image
            src="/assets/preview.png"
            alt="App preview"
            width={1200}
            height={1200}
            priority
            className="rounded-2xl border border-muted shadow-2xl"
          />
          <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-background z-10" />
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="flex flex-col items-center gap-6 mt-[-40px] md:mt-20 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">
          Choose what fits you right
        </h2>

        <p className="text-muted-foreground text-center max-w-xl">
          Our straightforward pricing plans are tailored to meet your needs. If
          you're not ready to commit, you can get started for free.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {pricingCards.map((card) => {
            const isPopular = card.title === "Unlimited Saas";

            return (
              <Card
                key={card.title}
                className={clsx(
                  "w-[300px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.03] hover:shadow-xl",
                  {
                    "border-2 border-primary shadow-lg": isPopular,
                  }
                )}
              >
                <CardHeader>
                  <CardTitle
                    className={clsx("text-lg", {
                      "text-primary": isPopular,
                      "text-muted-foreground": !isPopular,
                    })}
                  >
                    {card.title}
                  </CardTitle>

                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold">
                      {card.price}
                    </span>
                    <span className="text-muted-foreground text-sm mb-1">
                      /month
                    </span>
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col items-start gap-5">
                  <div className="space-y-2">
                    {card.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                      >
                        <Check className="w-4 h-4 text-primary" />
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/agency?plan=${card.priceId}`}
                    className={clsx(
                      "w-full text-center p-2 rounded-md text-sm font-medium transition-colors",
                      {
                        "bg-primary text-white hover:bg-primary/90":
                          isPopular,
                        "bg-muted text-foreground hover:bg-muted/70":
                          !isPopular,
                      }
                    )}
                  >
                    Get Started
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Page;











































// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { pricingCards } from "@/lib/constants";
// import clsx from "clsx";
// import { Check } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Page = () => {
//     return (
//         <>
//             <section className="h-full w-full pt-36 relative flex items-center justify-center flex-col">
//                 {/* grid */}
//                 <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />

//                 <p className="text-center">Run your agency, in one place</p>
//                 <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
//                     <h1 className="text-9xl font-bold text-center md:text-[300px]">Plura</h1>
//                 </div>
//                 <div className="flex justify-center items-center relative md:mt-[-70px]">
//                     <Image src={"/assets/preview.png"} alt="banner-image" width={1200} height={1200} className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted" />
//                     <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
//                 </div>
//             </section>
//             <section className="flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[-60px]">
//                 <h2 className="text-4xl text-center"> Choose what fits you right</h2>
//                 <p className="text-muted-foreground text-center">
//                     Our straightforward pricing plans are tailored to meet your needs. If
//                     {" you're"} not <br />
//                     ready to commit you can get started for free.
//                 </p>
//                 <div className="flex justify-center gap-2 flex-wrap mt-6">
//                     {pricingCards.map((card) => (
//                         <Card
//                             key={card.title}
//                             className={clsx("w-[300px] flex flex-col justify-between", {
//                                 "border-2 border-primary": card.title === "Unlimited Saas",
//                             })}
//                         >
//                             <CardHeader>
//                                 <CardTitle
//                                     className={clsx("", {
//                                         "text-muted-foreground": card.title !== "Unlimited Saas",
//                                     })}
//                                 >
//                                     {card.title}
//                                 </CardTitle>
//                                 <CardDescription>{card.description}</CardDescription>
//                             </CardHeader>
//                             <CardContent>
//                                 <span className="text-3xl font-bold">{card.price}</span>
//                                 <span className="text-muted-foreground">/m</span>
//                             </CardContent>
//                             <CardFooter className="flex flex-col items-start gap-4">
//                                 <div>
//                                     {card.features.map((feature) => (
//                                         <div key={feature} className="flex gap-2 items-center">
//                                             <Check className="text-muted-foreground" />
//                                             <p>{feature}</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <Link
//                                     href={`/agency?plan=${card.priceId}`}
//                                     className={clsx("w-full text-center bg-primary p-2 rounded-md", {
//                                         "!bg-muted-foreground": card.title !== "Unlimited Saas",
//                                     })}
//                                 >
//                                     Get Started
//                                 </Link>
//                             </CardFooter>
//                         </Card>
//                     ))}
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Page;