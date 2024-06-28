"use client";

import Postcard from "@/components/MyComponents/Postcard";
import { Pin, Search } from "lucide-react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,

} from "@/components/ui/command";

import {
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";

import Image from "next/image";
import Link from "next/link";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";

export default function Project() {
  const scrollToSection = (id:any) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return (
    <div className="grow w-full mt-[100px] min-h-[100vh]">
      <div className="psearch fixed -mt-[40.5px] ml-[45px] z-10 invisible ">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="p-[6px]  rounded-md bg-white border dark:border-gray-700 dark:bg-black dark:text-white">
              <Search />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <Command>
              <CommandInput placeholder="Search..." />
              <CommandList>

                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <div
                      className="w-full"
                      onClick={() => scrollToSection("14")}
                    >
                      MenSalon
                    </div>
                  </CommandItem>
                  <CommandItem>
                    <div
                      className="w-full"
                      onClick={() => scrollToSection("13")}
                    >
                      CoffeeLATE
                    </div>
                  </CommandItem>
                  <CommandItem>
                    <div
                      className="w-full"
                      onClick={() => scrollToSection("12")}
                    >
                      Makeup Glamour
                    </div>
                  </CommandItem>
                  <CommandItem>
                    <div
                      className="w-full"
                      onClick={() => scrollToSection("11")}
                    >
                      Digiarts
                    </div>
                  </CommandItem>
                  <CommandItem>
                    <div
                      className="w-full"
                      onClick={() => scrollToSection("10")}
                    >
                      Freshbook
                    </div>
                  </CommandItem>
                  <CommandItem>
                    <div
                      className="w-full"
                      onClick={() => scrollToSection("9")}
                    >
                      PineStudio
                    </div>
                  </CommandItem>
                  <CommandItem>
                    <div
                      className="w-full"
                      onClick={() => scrollToSection("8")}
                    >
                      Coffin and Service
                    </div>
                  </CommandItem>
                  <CommandItem>
                    <div
                      className="w-full"
                      onClick={() => scrollToSection("7")}
                    >
                      Depedozamiz
                    </div>
                  </CommandItem>
                  <CommandItem>
                    <div
                      className="w-full"
                      onClick={() => scrollToSection("6")}
                    >
                      Depedozamiz loader
                    </div>
                  </CommandItem>
                  <CommandItem>
                    <div
                      className="w-full"
                      onClick={() => scrollToSection("5")}
                    >
                      Uzmi V2
                    </div>
                  </CommandItem>
                  <CommandItem>
                    <div
                      className="w-full"
                      onClick={() => scrollToSection("4")}
                    >
                      eMusic
                    </div>
                  </CommandItem>
                  <CommandItem>
                    <div
                      className="w-full"
                      onClick={() => scrollToSection("3")}
                    >
                      ResortHub
                    </div>
                  </CommandItem>
                  <CommandItem>
                    <div
                      className="w-full"
                      onClick={() => scrollToSection("2")}
                    >
                      NeveahFood
                    </div>
                  </CommandItem>
                  <CommandItem>
                    <div
                      className="w-full"
                      onClick={() => scrollToSection("1")}
                    >
                      DineInRestaurant
                    </div>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
              </CommandList>
            </Command>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="sm:container ">
        <div className="h-auto grid md:grid-cols-4 gap-5 justify-center items-center">
          <div className="col-span-4 lg:col-span-3 md:col-span-4">
            <div className="" id="14">
              <Postcard
                pin={""}
                heading="MenSaIon is your gateway to sophisticated, timeless fashion for men. With a focus on quality craftsmanship and contemporary elegance, MenSaIon offers an exclusive collection designed to enhance your wardrobe and express your individuality. Discover the perfect blend of classic and modern styles, tailored to make you look and feel your best every day. "
                content={
                  <>
                    <span className="mr-6 text-bold">Website: MenSalon</span>
                    <div className="flex gap-5 overflow-x-auto">
                      <Image
                        className="rounded-md h-[300px] w-[400px] object-cover object-top"
                        src="/mensalon.gif"
                        width={150}
                        height={100}
                        alt="web view"
                        unoptimized
                      />
                      <Image
                        className="rounded-md h-[300px] w-[200px] object-cover object-top"
                        src="/mensalonmobile.gif"
                        width={150}
                        height={100}
                        alt="mobile view"
                        unoptimized
                      />
                    </div>
                    <Link
                      href="https://mensalon.logiclynxz.com/login.html"
                      passHref
                    >
                      <span>
                        {"Link: "}
                        <span className="text-bold text-blue-500">
                          https://mensalon.logiclynxz.com/login.html
                        </span>
                      </span>
                    </Link>
                  </>
                }
                date="June 17, 2024"
              />
            </div>
            <div className="" id="13">
              <Postcard
                pin={""}
                heading="CoffeeLATE is a cozy ordering system for a coffee lover that are lazy to make their own coffee. "
                content={
                  <>
                    <span className="mr-6 text-bold">Website: CoffeeLATE</span>
                    <div className="flex gap-5 overflow-x-auto">
                      <Image
                        className="rounded-md h-[300px] w-[400px] object-cover object-top"
                        src="/coffeelate.gif"
                        width={150}
                        height={100}
                        alt="web view"
                        unoptimized
                      />
                      <Image
                        className="rounded-md h-[300px] w-[200px] object-cover object-top"
                        src="/coffeelatemobile.gif"
                        width={150}
                        height={100}
                        alt="mobile view"
                        unoptimized
                      />
                    </div>

                    <Link href="https://coffee-venz.logiclynxz.com/" passHref>
                      <span>
                        {"Link: "}
                        <span className="text-bold text-blue-500">
                          https://coffee-venz.logiclynxz.com/
                        </span>
                      </span>
                    </Link>
                  </>
                }
                date="June 10, 2024"
              />
            </div>
            <div className="" id="12">
              <Postcard
                pin={""}
                heading="Glamour makeup is a stunning and sophisticated style of makeup that enhances your natural features while giving you a glamorous and polished look. "
                content={
                  <>
                    <span className="mr-6 text-bold">
                      Website: Makeup Glamour
                    </span>
                    <div className="flex gap-5 overflow-x-auto">
                      <Image
                        className="rounded-md h-[300px] w-[400px] object-cover object-top"
                        src="/makeupglamour.gif"
                        width={150}
                        height={100}
                        alt="web view"
                        unoptimized
                      />
                      <Image
                        className="rounded-md h-[300px] w-[200px] object-cover object-top"
                        src="/makeupglamourmobile.gif"
                        width={150}
                        height={100}
                        alt="mobile view"
                        unoptimized
                      />
                    </div>

                    <Link
                      href="https://makeupglamour-epe.logiclynxz.com/"
                      passHref
                    >
                      <span>
                        {"Link: "}
                        <span className="text-bold text-blue-500">
                          https://makeupglamour-epe.logiclynxz.com/
                        </span>
                      </span>
                    </Link>
                  </>
                }
                date="June 09, 2024"
              />
            </div>
            <div className="" id="11">
              <Postcard
                pin={""}
                heading="If you're looking for a place to commission stunning, personalized works of digital art, look no further than this website! The perfect place to commission your next digital art masterpiece. "
                content={
                  <>
                    <span className="mr-6 text-bold">Website: Digiarts</span>
                    <div className="flex gap-5 overflow-x-auto">
                      <Image
                        className="rounded-md h-[300px] w-[400px] object-cover object-top"
                        src="/digiarts.gif"
                        width={150}
                        height={100}
                        alt="web view"
                        unoptimized
                      />
                      <Image
                        className="rounded-md h-[300px] w-[200px] object-cover object-top"
                        src="/digiartsmobile.gif"
                        width={150}
                        height={100}
                        alt="mobile view"
                        unoptimized
                      />
                    </div>
                    <Link href="https://digiarts.logiclynxz.com" passHref>
                      <span>
                        {"Link: "}
                        <span className="text-bold text-blue-500">
                          https://digiarts.logiclynxz.com
                        </span>
                      </span>
                    </Link>
                  </>
                }
                date="May 28, 2024"
              />
            </div>
            <div className="" id="10">
              <Postcard
                pin={""}
                heading="Welcome to Freshbook, the ultimate ebook destination. Freshbook believes in the power of literature to inspire, educate, and entertain. They offer a diverse range of ebooks, support independent authors and small publishers, provide affordable prices, and ensure a user-friendly, secure platform that respects customers' privacy. Discover a world of stories with Freshbook."
                content={
                  <>
                    <span className="mr-6 text-bold">Website: Freshbook</span>
                    <div className="flex gap-5 overflow-x-auto">
                      <Image
                        className="rounded-md h-[300px] w-[400px] object-cover object-top"
                        src="/freshbook.gif"
                        width={150}
                        height={100}
                        alt="web view"
                        unoptimized
                      />
                      <Image
                        className="rounded-md h-[300px] w-[200px] object-cover object-top"
                        src="/freshbookmobile.gif"
                        width={150}
                        height={100}
                        alt="mobile view"
                        unoptimized
                      />
                    </div>
                    <Link href="https://freshbooks.logiclynxz.com" passHref>
                      <span>
                        {"Link: "}
                        <span className="text-bold text-blue-500">
                          https://freshbooks.logiclynxz.com
                        </span>
                      </span>
                    </Link>
                  </>
                }
                date="May 26, 2024"
              />
            </div>
            <div className="" id="9">
              <Postcard
                pin={""}
                heading="Looking for stunning and captivating videography services for your special moments? Look no further than Pine Studios! The team of skilled professionals is dedicated to providing you with the highest quality videography services, tailored to meet your specific needs. "
                content={
                  <>
                    <span className="mr-6 text-bold">Website: PineStudio</span>
                    <div className="flex gap-5 overflow-x-auto">
                      <Image
                        className="rounded-md h-[300px] w-[400px] object-cover object-top"
                        src="/pinestudio.gif"
                        width={150}
                        height={100}
                        alt="web view"
                        unoptimized
                      />
                      <Image
                        className="rounded-md h-[300px] w-[200px] object-cover object-top"
                        src="/pinestudiomobile.gif"
                        width={150}
                        height={100}
                        alt="mobile view"
                        unoptimized
                      />
                    </div>
                    <Link href="https://pine-studio.logiclynxz.com/" passHref>
                      <span>
                        {"Link: "}
                        <span className="text-bold text-blue-500">
                          https://pine-studio.logiclynxz.com/
                        </span>
                      </span>
                    </Link>
                  </>
                }
                date="May 20, 2024"
              />
            </div>
            <div className="" id="8">
              <Postcard
                pin={""}
                heading="Coffin and Service "
                content={
                  <>
                    <span className="mr-6 text-bold">
                      Website: Coffin and Service
                    </span>
                    <div className="flex gap-5 overflow-x-auto">
                      <Image
                        className="rounded-md h-[300px] w-[400px] object-cover object-top"
                        src="/coffinandservice.gif"
                        width={150}
                        height={100}
                        alt="web view"
                        unoptimized
                      />
                      <Image
                        className="rounded-md h-[300px] w-[200px] object-cover object-top"
                        src="/coffinandservicemobile.gif"
                        width={150}
                        height={100}
                        alt="mobile view"
                        unoptimized
                      />
                    </div>
                    <Link href="https://dayoncoffin.logiclynxz.com/" passHref>
                      <span>
                        {"Link: "}
                        <span className="text-bold text-blue-500">
                          https://dayoncoffin.logiclynxz.com/
                        </span>
                      </span>
                    </Link>
                  </>
                }
                date="May 01, 2024"
              />
            </div>
            <div className="" id="7">
              <Postcard
                pin={""}
                heading="This system was made during my OJT at DepedOzamiz. "
                content={
                  <>
                    <span className="mr-6 text-bold">Website: DepedOzamiz</span>
                    <div className="flex gap-5 overflow-x-auto">
                      <Image
                        className="rounded-md h-[300px] w-[400px] object-cover object-top"
                        src="/depedozamis.gif"
                        width={150}
                        height={100}
                        alt="web view"
                        unoptimized
                      />
                      <Image
                        className="rounded-md h-[300px] w-[200px] object-cover object-top"
                        src="/depedozamismobile.gif"
                        width={150}
                        height={100}
                        alt="mobile view"
                        unoptimized
                      />
                    </div>
                    <span>Link: For Government Use Only.</span>
                  </>
                }
                date="February 28, 2024"
              />
            </div>
            <div className="" id="6">
              <Postcard
                pin={""}
                heading="This loader was made during my OJT at DepedOzamiz. "
                content={
                  <>
                    <span className="mr-6 text-bold">
                      Loader: DepedOzamiz loader
                    </span>
                    <div className="flex gap-5 overflow-x-auto">
                      <Image
                        className="rounded-md h-[300px] w-[400px] object-cover object-top"
                        src="/depedozamisloader.gif"
                        width={150}
                        height={100}
                        alt="web view"
                        unoptimized
                      />
                      <Image
                        className="rounded-md h-[300px] w-[200px] object-cover object-center"
                        src="/depedozamisloadermobile.gif"
                        width={150}
                        height={100}
                        alt="mobile view"
                        unoptimized
                      />
                    </div>
                    <span>Link: For Government Use Only.</span>
                  </>
                }
                date="February 15, 2024"
              />
            </div>
            <div className="" id="5">
              <Postcard
                pin={""}
                heading="Uzmi is an online eCommerce platform that specializes in offering a vast collection of branded shoes. Our primary goal is to provide our customers with an exceptional online shopping experience by offering top-quality products and excellent customer service.. "
                content={
                  <>
                    <span className="mr-6 text-bold">Website: Uzmi V2</span>
                    <div className="flex gap-5 overflow-x-auto">
                      <Image
                        className="rounded-md h-[300px] w-[400px] object-cover object-top"
                        src="/uzmiv2.gif"
                        width={150}
                        height={100}
                        alt="web view"
                        unoptimized
                      />
                      <Image
                        className="rounded-md h-[300px] w-[200px] object-cover object-top"
                        src="/uzmiv2mobile.gif"
                        width={150}
                        height={100}
                        alt="mobile view"
                        unoptimized
                      />
                    </div>
                    <span>Link: No link.</span>
                  </>
                }
                date="January 03, 2024"
              />
            </div>
            <div className="" id="4">
              <Postcard
                pin={""}
                heading="eMusic"
                content={
                  <>
                    <span className="mr-6 text-bold">Website: eMusic</span>
                    <div className="flex gap-5 overflow-x-auto">
                      <Image
                        className="rounded-md h-[300px] w-[400px] object-cover object-top"
                        src="/emusic.gif"
                        width={150}
                        height={100}
                        alt="web view"
                        unoptimized
                      />
                      <Image
                        className="rounded-md h-[300px] w-[200px] object-cover object-top"
                        src="/emusicmobile.gif"
                        width={150}
                        height={100}
                        alt="mobile view"
                        unoptimized
                      />
                    </div>
                    <span>Link: No link.</span>
                  </>
                }
                date="September 06, 2023"
              />
            </div>
            <div className="" id="3">
              <Postcard
                pin={""}
                heading="An online resort booking platform that focuses on room services and local resorts can offer a targeted and personalized experience for travelers. By partnering with local resorts, customers can enjoy an authentic and immersive experience that showcases the local culture and flavor of the region."
                content={
                  <>
                    <span className="mr-6 text-bold">Website: ResortHub</span>
                    <div className="flex gap-5 overflow-x-auto">
                      <Image
                        className="rounded-md h-[300px] w-[400px] object-cover object-top"
                        src="/resorthub.gif"
                        width={150}
                        height={100}
                        alt="web view"
                        unoptimized
                      />
                      <Image
                        className="rounded-md h-[300px] w-[200px] object-cover object-top"
                        src="/resorthubmobile.gif"
                        width={150}
                        height={100}
                        alt="mobile view"
                        unoptimized
                      />
                    </div>
                    <span>Link: No link.</span>
                  </>
                }
                date="June 4, 2023"
              />
            </div>
            <div className="" id="2">
              <Postcard
                pin={""}
                heading="NeveahFood"
                content={
                  <>
                    <span className="mr-6 text-bold">Website: NeveahFood</span>
                    <div className="flex gap-5 overflow-x-auto">
                      <Image
                        className="rounded-md h-[300px] w-[400px] object-cover object-top"
                        src="/neveahfood.gif"
                        width={150}
                        height={100}
                        alt="web view"
                        unoptimized
                      />
                      <Image
                        className="rounded-md h-[300px] w-[200px] object-cover object-top"
                        src="/neveahfoodmobile.gif"
                        width={150}
                        height={100}
                        alt="mobile view"
                        unoptimized
                      />
                    </div>
                    <span>Link: No link.</span>
                  </>
                }
                date="May 21, 2023"
              />
            </div>
            <div className="" id="1">
              <Postcard
                pin={""}
                heading="DineInRestaurant"
                content={
                  <>
                    <span className="mr-6 text-bold">
                      Website: DineInRestaurant
                    </span>
                    <div className="flex gap-5 overflow-x-auto">
                      <Image
                        className="rounded-md h-[300px] w-[400px] object-cover object-top"
                        src="/dineinrestaurant.gif"
                        width={150}
                        height={100}
                        alt="web view"
                        unoptimized
                      />
                      <Image
                        className="rounded-md h-[300px] w-[200px] object-cover object-top"
                        src="/dineinrestaurantmobile.gif"
                        width={150}
                        height={100}
                        alt="mobile view"
                        unoptimized
                      />
                    </div>
                    <span>Link: No link.</span>
                  </>
                }
                date="May 06, 2023"
              />
            </div>
            <div className="text-end">
              <small className="">
                I have more projects that I didn&#39;t show it here🙂.
              </small>
            </div>
          </div>
          <div className="relative h-auto col-span-4 lg:col-span-1 md:col-span-4 sm:col-span-4">
            <div className="abtps fixed top-[11%] ">
              <Command>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>

                  <CommandGroup heading="Suggestions">
                    <CommandItem>
                      <div
                        className="w-full"
                        onClick={() => scrollToSection("14")}
                      >
                        MenSalon
                      </div>
                    </CommandItem>
                    <CommandItem>
                      <div
                        className="w-full"
                        onClick={() => scrollToSection("13")}
                      >
                        CoffeeLATE
                      </div>
                    </CommandItem>
                    <CommandItem>
                      <div
                        className="w-full"
                        onClick={() => scrollToSection("12")}
                      >
                        Makeup Glamour
                      </div>
                    </CommandItem>
                    <CommandItem>
                      <div
                        className="w-full"
                        onClick={() => scrollToSection("11")}
                      >
                        Digiarts
                      </div>
                    </CommandItem>
                    <CommandItem>
                      <div
                        className="w-full"
                        onClick={() => scrollToSection("10")}
                      >
                        Freshbook
                      </div>
                    </CommandItem>
                    <CommandItem>
                      <div
                        className="w-full"
                        onClick={() => scrollToSection("9")}
                      >
                        PineStudio
                      </div>
                    </CommandItem>
                    <CommandItem>
                      <div
                        className="w-full"
                        onClick={() => scrollToSection("8")}
                      >
                        Coffin and Service
                      </div>
                    </CommandItem>
                    <CommandItem>
                      <div
                        className="w-full"
                        onClick={() => scrollToSection("7")}
                      >
                        Depedozamiz
                      </div>
                    </CommandItem>
                    <CommandItem>
                      <div
                        className="w-full"
                        onClick={() => scrollToSection("6")}
                      >
                        Depedozamiz loader
                      </div>
                    </CommandItem>
                    <CommandItem>
                      <div
                        className="w-full"
                        onClick={() => scrollToSection("5")}
                      >
                        Uzmi V2
                      </div>
                    </CommandItem>
                    <CommandItem>
                      <div
                        className="w-full"
                        onClick={() => scrollToSection("4")}
                      >
                        eMusic
                      </div>
                    </CommandItem>
                    <CommandItem>
                      <div
                        className="w-full"
                        onClick={() => scrollToSection("3")}
                      >
                        ResortHub
                      </div>
                    </CommandItem>
                    <CommandItem>
                      <div
                        className="w-full"
                        onClick={() => scrollToSection("2")}
                      >
                        NeveahFood
                      </div>
                    </CommandItem>
                    <CommandItem>
                      <div
                        className="w-full"
                        onClick={() => scrollToSection("1")}
                      >
                        DineInRestaurant
                      </div>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                </CommandList>
              </Command>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
