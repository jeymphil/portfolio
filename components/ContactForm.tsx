import { FileText, Link, Mail, Phone, X, icons } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import emailjs from "emailjs-com";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import MenuButton from "./MyComponents/MenuButton";

export default function ContactForm() {
  const heroInfiniteRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    tl.to(
      heroInfiniteRef.current,
      {
        marginLeft: 0,
        marginRight: 0,
        opacity: 1,
        ease: "power1.out",
      },
      1.2
    );

    return () => {};
  });

  const triggerEmail = async (data:any) => {
    await emailjs
      .send("service_sedy9gv", "template_mu6tudf", data, "8hHQogOcP4JJI8BHs")
      .then((success) => {
        alert("Message Sent Successfully!");
      })
      .catch((err) => {
        alert("Something Went Wrong!");
      });
  };

  const onFormSubmit = (e:any) => {
    e.preventDefault();
    const data = {
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value,
    };
  };

  return (
    <div className="contact-form h-[100vh] mx-auto flex justify-center items-center">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 md:w-full sm:w-full lg:w-full p-5 md:pl-[100px]  md:pr-[100px]">
        <div className="col-span-4 lg:col-span-2 md:col-span-4 ">
          <span className="overflow-hidden inline-block">
            <span className="translate-y- text-[23px] items-center gap-2 flex  ">
              <MenuButton>
                <span className="font-extrabold ">Let&#39;s talk.</span> <br />
              </MenuButton>
            </span>
          </span>
          <br />
          <span className="text-[50px]">Tell me about your project.</span>
          <br />
          <span>Let&#39;s create something together!</span>
          <div className="buttons ">
            <Button className=" mr-2 mt-2" variant="outline">
              <Mail className="h-4 w-4" /> : jmphillengracia@gmail.com
            </Button>
            <Button className=" mr-2 mt-2" variant="outline">
              <Phone className="h-4 w-4" /> : +639124327490
            </Button>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-2 md:col-span-4 sm:col-span-4">
          <Card className="relative pl-[35px] pr-[35px] pt-[35px] pb-[20px] overflow-hidden mt-5 ">
            <div className="absolute -top-2 right-1 rotate-[20deg]">
              <div className="dps bg-yellow-500 border-transparent dark:text-gray-700 overflow-hidden -mr-10 w-[250px]  border-2 borderblack font-normal uppercase lg:relative lg:text-xl lg:leading-10">
                <div className="group flex h-full cursor-pointer items-center whitespace-nowrap text-bold">
                  <span className="group-hover:paused animate-loopL">
                    Contact Me - Contact Me -&nbsp;
                  </span>
                  <span className="group-hover:paused animate-loopL">
                    Contact Me - Contact Me -&nbsp;
                  </span>
                </div>
              </div>
            </div>
            <form action="#" className="formjs" onSubmit={onFormSubmit}>
              <div className="grid w-full max-w-full items-center gap-1.5 mb-2">
                <label htmlFor="name">Name:</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Name"
                  autoComplete="name"
                  required
                />
              </div>
              <div className="grid w-full max-w-full items-center gap-1.5 mb-2">
                <label htmlFor="email">Email:</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className="grid w-full max-w-full items-center gap-1.5 mb-2">
                <label htmlFor="message">Message:</label>
                <Textarea
                  required
                  className="placeholder:text-gray-500"
                  id="message"
                  name="message"
                  autoComplete="message"
                  rows={5}
                  placeholder="Enter message..."
                />
              </div>
              <div className="flex justify-end">
                <Button value={"Submit"} type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
