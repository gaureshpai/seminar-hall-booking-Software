"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { saveContact } from "@/actions/contactActions"
import toast from "react-hot-toast"

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e);
    try {
      const savedC = await saveContact({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      })
      console.log(savedC);
      toast.success("Message Sent Successfully");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("An Error ocurred, try again")
      console.log("An Error occured while sending, please try again", error);
      throw new Error("An Error has occured while sending the form, PLease try again")
    }
    console.log(formData);
  }

  return (
    <div className="w-full">
      <section
        className="relative h-[50vh] bg-cover bg-center justify-items-center"
        style={{ backgroundImage: "url('/images/facilities.jpg')" }}
      >
        <div className="container relative z-10 flex h-full flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-white">Contact Us</h2>
          <ol className="flex items-center space-x-2 mt-4">
            <li>
              <a href="/" className="text-white font-bold">
                Home
              </a>
            </li>
            <li className="text-white font-bold">→</li>
            <li className="text-white font-bold">Contact Us</li>
          </ol>
        </div>
      </section>

      <section className="py-20 max-w-7xl justify-center mx-auto">
        <div className="container mx-auto px-4">
          <div className="mb-16 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.883682578107!2d74.82619107507549!3d12.915196787395066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a7940000001%3A0x37b1d2f42900de85!2sAJ%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1738516545679!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">AJ INSTITUTE OF ENGINEERING & TECHNOLOGY</p>
                    <p className="text-sm text-muted-foreground">Mangaluru</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">0824 2455048</p>
                    <p className="text-sm text-muted-foreground">Mon to Sat 9am to 5pm</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">support@Enigma.com</p>
                    <p className="text-sm text-muted-foreground">Send us your query anytime!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 px-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Enter Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px]"
                />
                <div className="text-right">
                  <Button type="submit" className="rounded-none bg-yellow-500 text-white py-3 px-10 hover:bg-yellow-600 transition duration-300 font-bold w-fit">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactForm;