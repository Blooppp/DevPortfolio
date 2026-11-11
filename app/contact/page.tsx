
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageSquare,
  Radio,
} from "lucide-react";

const contactDetails = [
  {
    title: "EMAIL",
    value: "jalcana@gbox.ncf.edu.ph",
    icon: Mail,
    color: "bg-[#FFF0E8]",
  },
  {
    title: "PHONE",
    value: "+639811486634",
    icon: Phone,
    color: "bg-[#FFF5CC]",
  },
  {
    title: "LOCATION",
    value: "Milaor, Philippines",
    icon: MapPin,
    color: "bg-[#E8F5E9]",
  },
];

export default function Contact() {
  return (
    <main className="mx-auto max-w-5xl space-y-10 py-12">

      {/* PAGE HEADER */}

      <section className="space-y-3">

        <div className="flex items-center gap-3">
          <span className="h-3 w-3 animate-pulse rounded-full bg-green-500" />

          <p className="pixel-text text-[9px] text-[#E53935]">
            COMMUNICATION CENTER
          </p>
        </div>

        <h1 className="text-4xl font-black tracking-tight md:text-5xl">
          LET'S CONNECT<span className="text-[#E53935]">.</span>
        </h1>

        <p className="max-w-2xl text-sm leading-7 text-gray-500">
          Have a question, collaboration idea, or project in mind?
          Send me a message through my trainer communication center.
          I'd be happy to hear from you!
        </p>

      </section>

      {/* COMMUNICATION STATUS */}

      <div className="flex items-center gap-3 rounded-md border-2 border-[#202020] bg-[#FFF5CC] p-4 shadow-[3px_3px_0_#202020]">

        <Radio className="h-6 w-6 text-[#E53935]" />

        <div>
          <p className="text-xs font-black">
            TRAINER COMMUNICATION SYSTEM
          </p>

          <p className="mt-1 text-[10px] text-gray-600">
            The communication center is ready for your message.
          </p>
        </div>

      </div>

      {/* CONTACT CONTENT */}

      <section className="grid gap-6 md:grid-cols-3">

        {/* CONTACT INFORMATION */}

        <div className="space-y-4">

          <div className="space-y-2">
            <p className="pixel-text text-[8px] text-[#E53935]">
              CONTACT DETAILS
            </p>

            <h2 className="text-xl font-black">
              FIND ME HERE
            </h2>
          </div>

          {contactDetails.map((item) => {

            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="pokedex-card"
              >

                <CardContent className="flex items-center gap-3 p-4">

                  <div className={`rounded-md border-2 border-[#202020] p-3 ${item.color}`}>
                    <Icon className="h-5 w-5 text-[#202020]" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] font-bold tracking-widest text-gray-400">
                      {item.title}
                    </p>

                    <p className="mt-1 break-words text-xs font-bold">
                      {item.value}
                    </p>
                  </div>

                </CardContent>

              </Card>
            );

          })}

        </div>

        {/* MESSAGE FORM */}

        <Card className="pokedex-card overflow-hidden md:col-span-2">

          <CardHeader className="border-b-2 border-[#E8DCAE] bg-[#FFF5CC]">

            <div className="flex items-center gap-3">

              <div className="rounded-md border-2 border-[#202020] bg-white p-2">
                <MessageSquare className="h-5 w-5 text-[#E53935]" />
              </div>

              <div>
                <CardTitle className="text-xl font-black">
                  SEND A MESSAGE
                </CardTitle>

                <CardDescription className="mt-1 text-xs">
                  Fill out the form to contact me.
                </CardDescription>
              </div>

            </div>

          </CardHeader>

          <CardContent className="p-6">

            <form className="space-y-5">

              {/* NAME AND EMAIL */}

              <div className="grid gap-4 sm:grid-cols-2">

                <div className="space-y-2">

                  <label
                    htmlFor="name"
                    className="text-xs font-bold"
                  >
                    TRAINER NAME
                  </label>

                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    className="rounded-md border-2 border-[#202020] bg-[#FFFDF5] font-mono text-xs focus-visible:ring-[#E53935]"
                  />

                </div>

                <div className="space-y-2">

                  <label
                    htmlFor="email"
                    className="text-xs font-bold"
                  >
                    EMAIL ADDRESS
                  </label>

                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="rounded-md border-2 border-[#202020] bg-[#FFFDF5] font-mono text-xs focus-visible:ring-[#E53935]"
                  />

                </div>

              </div>

              {/* SUBJECT */}

              <div className="space-y-2">

                <label
                  htmlFor="subject"
                  className="text-xs font-bold"
                >
                  MESSAGE SUBJECT
                </label>

                <Input
                  id="subject"
                  placeholder="Project Inquiry / Hello"
                  required
                  className="rounded-md border-2 border-[#202020] bg-[#FFFDF5] font-mono text-xs focus-visible:ring-[#E53935]"
                />

              </div>

              {/* MESSAGE */}

              <div className="space-y-2">

                <label
                  htmlFor="message"
                  className="text-xs font-bold"
                >
                  YOUR MESSAGE
                </label>

                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message here..."
                  required
                  className="resize-none rounded-md border-2 border-[#202020] bg-[#FFFDF5] font-mono text-xs focus-visible:ring-[#E53935]"
                />

              </div>

              {/* SUBMIT BUTTON */}

              <Button
                type="submit"
                className="pixel-button h-12 w-full rounded-md border-2 border-[#202020] bg-[#E53935] font-mono text-xs text-white hover:bg-[#C62828] sm:w-auto"
              >

                <Send className="mr-2 h-4 w-4" />

                SEND MESSAGE

              </Button>

            </form>

          </CardContent>

        </Card>

      </section>

      {/* BOTTOM MESSAGE */}

      <section className="pixel-border pixel-background p-8 text-center">

        <p className="pixel-text text-[9px] leading-7 text-[#E53935]">
          END OF TRANSMISSION
        </p>

        <h2 className="mt-5 text-2xl font-black leading-relaxed">
          THANKS FOR STOPPING BY!
        </h2>

        <p className="mt-3 text-xs text-gray-500">
          Every great connection starts with a simple hello.
        </p>

      </section>

    </main>
  );
}
