import { useState } from "react";
import { Button } from "@/components/ui/button";

const ContactForm = () => {

  const [error, setError] = useState('hidden');
  const [success, setSuccess] = useState('hidden');


  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
   
    fetch("https://script.google.com/macros/s/AKfycbwx_xlZMdmO2eHfMc8sTkt_J56UwDQgoQ4hRor95x4o8phKd8ukI5UP0GSTPbtfNrU9Aw/exec", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
     }).then((res) => res.json()).then((data) => {
      console.log(data);
      if (data.result === "success") {
        setSuccess('block ');
        setError('hidden');
        form.reset();
        console.log("Message sent successfully");
      } else {
        setError('block text-red-500');
        setSuccess('hidden');
        console.log("Something went wrong");
      }
    }).catch(() => {
      setError('block text-red-500');
      setSuccess('hidden');
      console.log("Something went wrong");
      })
}


  return (<form onSubmit={handelSubmit} action='https://script.google.com/macros/s/AKfycbwx_xlZMdmO2eHfMc8sTkt_J56UwDQgoQ4hRor95x4o8phKd8ukI5UP0GSTPbtfNrU9Aw/exec' method='POST' className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Name
                </label>
                <input
                  id="name"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your name"
                  name="name"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your email"
                  name="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Subject
              </label>
              <input
                id="subject"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Message
              </label>
              <textarea
                id="message"
                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Your message"
                name="message"
              />
            </div>
            <div className={error}>Something Went Wrong</div>
            <div className={success}>Thank You! I'll get back to you as soon as I can.</div>
            <Button className="w-full">
              Send Message
            </Button>
          </form>
          )
        }

export default ContactForm