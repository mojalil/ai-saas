"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Testimonials = [
  {
    name: "Gavin Thomas",
    avatar: "G",
    title: "Conent Creator",
    quote:
      "I have been able to generate content for my YouTube channel 100x faster than before.",
  },
  {
    name: "Tanya Singh",
    avatar: "T",
    title: "Founder",
    quote: "Super intuitive and easy to use. I can't wait to see what the future holds.",
  },
  {
    name: "Shannon Jackson",
    avatar: "S",
    title: "Freelancer",
    quote: "Team is really responsive and really cares about their customers."
  },
  {
    name: "Xing Wei",
    avatar: "X",
    title: "Solopreneur",
    quote: "I was able to generate a logo for my startup in minutes.",
  },

];

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Testimonials.map((testimonial) => (
          <Card
            key={testimonial.name}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{testimonial.name}</p>
                  <p className="text-zinc-400 text-sm">{testimonial.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {testimonial.quote}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
