import { FormEvent, useRef, useState } from "react";
import Iridescence from "../components/Iridescence";
import emailjs from "@emailjs/browser";

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
    <section className="relative py-20 contact">
      <div className="absolute top-0 left-0 w-full h-full rounded-md">
        <Iridescence
          color={[0.6, 0.6, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={2}
        />
      </div>
      <div className="relative flex flex-col w-full h-full px-2 mx-auto text-center py-7 sm:px-7 md:px-20">
        <h1 className="text-5xl sm:text-7xl">Contact Me</h1>
        <div className="flex flex-col items-center lg:flex-row gap-7">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="self-center mt-12 shadow-md p-7 sm:p-10 lg:p-12 lg:w-1/2 bg-primary-900 rounded-xl"
          >
            <div className="grid gap-4 md:grid-cols-2">
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
              className="w-full p-3 mt-4 font-bold text-white duration-500 rounded-lg sm:text-xl bg-blue-zodiac-500 hover:bg-blue-zodiac-700 focus:outline-none focus:ring focus:ring-blue-zodiac-400"
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
          <h6 className="py-4 text-3xl sm:text-5xl">Or</h6>
          <div className="grid w-full gap-4 lg:w-1/2 xl:grid-cols-2">
            <div className="p-5 shadow-md bg-primary-900 rounded-xl flex flex-col gap-1.5">
              <h3 className="text-3xl font-semibold sm:text-4xl">Email</h3>
              <p className="text-xl sm:text-2xl">kareemyasserg6@gmail.com</p>
            </div>
            <div className="p-5 shadow-md bg-primary-900 rounded-xl flex flex-col gap-1.5">
              <h3 className="text-3xl font-semibold sm:text-4xl">Phone</h3>
              <p className="text-xl sm:text-2xl">+20 108089176</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
