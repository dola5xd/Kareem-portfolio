import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Aurora from "../components/Aurora";

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState({ message: "", type: "" });

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus({ message: "Sending...", type: "loading" });

    emailjs
      .sendForm("adelYasser", "template_yui8p2n", form.current, {
        publicKey: "HNdP806FCFVmc58P0",
      })
      .then(
        () => {
          setStatus({ message: "Message sent successfully!", type: "success" });
          if (!form.current) return;
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus({
            message: "Failed to send message. Try again.",
            type: "error",
          });
        }
      );
  };
  return (
    <section className="relative py-20 rounded contact">
      <div className="hidden md:block absolute inset-0 w-full min-h-[500px] ">
        <Aurora
          colorStops={["#69b2f1", "#99cdf7", "#69b2f1"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div className="relative flex flex-col items-center justify-center w-full h-full px-2 mx-auto text-center py-7 sm:px-7 md:px-20">
        <h1 className="text-5xl sm:text-7xl">Contact Me</h1>
        <div className="flex items-center justify-center w-full px-4 md:px-20 md:w-1/2">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="self-center shadow-md mt-7 md:mt-12 p-7 sm:p-10 lg:p-12 lg:w-full bg-primary-900 rounded-xl"
          >
            <div className="grid gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="p-3 bg-transparent border rounded-lg sm:text-xl border-primary-500 placeholder:text-primary-200 text-primary-200 focus:outline-none focus:ring focus:ring-blue-zodiac-400 focus:border-transparent"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="p-3 bg-transparent border rounded-lg sm:text-xl border-primary-500 placeholder:text-primary-200 text-primary-200 focus:outline-none focus:ring focus:ring-blue-zodiac-400 focus:border-transparent"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 mt-4 bg-transparent border rounded-lg sm:text-xl border-primary-500 placeholder:text-primary-200 text-primary-200 focus:outline-none focus:ring focus:ring-blue-zodiac-400 focus:border-transparent"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full p-3 mt-4 bg-transparent border rounded-lg sm:text-xl border-primary-500 placeholder:text-primary-200 text-primary-200 focus:outline-none focus:ring focus:ring-blue-zodiac-400 focus:border-transparent"
            ></textarea>

            <button
              type="submit"
              className="w-full p-3 mt-4 font-bold tracking-wider text-white duration-500 rounded-lg sm:text-xl bg-blue-zodiac-600 hover:bg-blue-zodiac-700 focus:outline-none focus:ring focus:ring-blue-zodiac-400"
            >
              Send Message
            </button>

            {status.message && (
              <p
                className={`mt-4 text-center ${
                  status.type === "success" ? "text-green-500" : "text-red-500"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
