
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SendHorizonal } from "lucide-react";

// Inline SVG for Cricket Bat icon
const CricketBatIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8 sm:w-10 sm:h-10 inline-block mr-2 transform -rotate-45 text-primary dark:text-primary"
  >
    <path d="M19.5826 2.71997C19.2076 2.34497 18.5926 2.34497 18.2176 2.71997L13.4126 7.52497L10.5826 4.69497C10.2076 4.31997 9.59263 4.31997 9.21763 4.69497L4.68263 9.22997C4.30763 9.60497 4.30763 10.2199 4.68263 10.595L8.09263 14.005C7.80263 14.845 7.14263 15.965 6.20263 17.455C5.73263 18.205 5.92263 19.175 6.59263 19.665C7.27263 20.155 8.16263 19.945 8.73263 19.145C9.97263 17.425 10.9326 16.235 11.6126 15.555L15.0226 18.965C15.3976 19.34 16.0126 19.34 16.3876 18.965L20.9226 14.43C21.2976 14.055 21.2976 13.44 20.9226 13.065L18.0926 10.235L20.9226 7.40497C21.2976 7.02997 21.2976 6.41497 20.9226 6.03997L19.5826 4.69997V2.71997Z M14.8226 9.01497L16.6826 7.15497L18.0926 8.56497L16.2326 10.425L14.8226 9.01497Z" />
  </svg>
);

// This component is no longer used on the homepage directly, 
// but can be kept for other potential uses or deleted if not needed elsewhere.
// It can be linked from the new "Contact Us Now" button in StatsAndImageSection.jsx
export function ContactUsForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted:", data);
    alert("Message sent! (This is a demo)");
    event.target.reset();
  };

  const labelClasses = `
    absolute left-0 text-muted-foreground transition-all duration-200 ease-in-out pointer-events-none
    peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
    peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary
    peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary
  `;

  const inputBaseClasses = `
    peer w-full text-base pt-5 pb-2 px-0 border-0 border-b-2 
    border-gray-300 dark:border-gray-600 bg-transparent 
    focus:ring-0 focus:border-primary dark:focus:border-primary 
    placeholder:text-transparent 
    transition-colors
  `;


  return (
    <section id="contact-us-form-actual" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground dark:text-white">
                <CricketBatIcon />
                <span className="text-primary dark:text-primary">Get in</span> Touch with Us
              </h2>
              <p className="mt-3 text-muted-foreground">
                Have questions or need assistance? Fill out the form below, and we'll get back to you shortly.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-8 bg-card p-6 sm:p-8 rounded-lg shadow-xl">
              <div className="relative">
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder=" " 
                  required
                  className={inputBaseClasses}
                />
                <label htmlFor="name" className={labelClasses}>
                  Name
                </label>
              </div>
              <div className="relative">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder=" "
                  required
                  className={inputBaseClasses}
                />
                <label htmlFor="email" className={labelClasses}>
                  Email
                </label>
              </div>
              <div className="relative">
                <Textarea
                  id="message"
                  name="message"
                  placeholder=" "
                  rows={4}
                  required
                  className={inputBaseClasses}
                />
                <label htmlFor="message" className={labelClasses}>
                  Message
                </label>
              </div>
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                <SendHorizonal className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
    </section>
  );
}
