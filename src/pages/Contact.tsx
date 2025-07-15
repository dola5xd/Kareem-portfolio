import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  return (
    <section className="relative h-screen py-20 rounded contact">
      <span className="absolute inset-0 block w-full h-1/3 bg-gradient-to-t to-blue-zodiac-800 via-transparent from-transparent" />
      <div className="flex flex-col items-center justify-center w-full h-full px-2 mx-auto text-center gap-y-5 py-7 sm:px-7 md:px-20">
        <h1 className="relative text-5xl sm:text-7xl">Contact Me</h1>

        <form
          action="https://formsubmit.co/Kareemyasser.ui@gmail.com"
          method="POST"
          onSubmit={() => setStatus("loading")}
          className="p-8 space-y-5 shadow-md md:w-1/2 bg-primary-900 rounded-xl"
        >
          {/* Required hidden field to disable CAPTCHA and auto reply */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for your message!"
          />
          <input
            type="hidden"
            name="_next"
            value="https://yourdomain.com/thank-you"
          />
          {/* Optional honeypot field for bots */}
          <input title="bots" type="text" name="_honey" className="hidden" />

          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="relative w-full p-3 text-lg bg-transparent border rounded-lg border-primary-800 placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full p-3 text-lg bg-transparent border rounded-lg border-primary-800 placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
          />
          <input
            type="text"
            name="subject"
            required
            placeholder="Subject"
            className="w-full p-3 text-lg bg-transparent border rounded-lg border-primary-800 placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
          />
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Your Message"
            className="w-full p-3 text-lg bg-transparent border rounded-lg border-primary-800 placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full p-3 text-xl font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status === "loading" && (
          <p className="mt-4 text-lg text-blue-400">Sending message...</p>
        )}
      </div>
    </section>
  );
}
