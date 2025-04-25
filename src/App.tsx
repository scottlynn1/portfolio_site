import './App.css'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Code, Cpu } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import faceAvatar from './assets/face2.jpg'
import fullPhoto from './assets/fullphoto.jpg'
import solarProject from './assets/solarproject.png'
import UIProject from './assets/UIproject.png'
import analysisProject from './assets/analysisproject2.png'
import ContactForm from './components/form'
import AnimateOnScroll from './components/AnimateOnScroll'
import { useEffect, useState } from "react"




function App() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Create a resize event listener
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    // Add event listener to track window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex flex-col md:flex-row h-16 items-center justify-between w-full py-2">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6" />
            <span className="text-lg font-bold">DevPortfolio</span>
          </div>
          <nav className="flex gap-6">
            <a href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </a>
            <a href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </a>
            <a href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
              Skills
            </a>
            <a href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </a>
          </nav>
          <div className="hidden md:flex items-center gap-2">
            {/* <ModeToggle /> */}
            <Button asChild size="sm" className="hidden md:flex">
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </header>
      <main>
      <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center shadow-lg">
        <div className="relative w-48 h-48 mb-8 rounded-full overflow-hidden border-4 border-primary">
          <Avatar className='w-full h-full'>
            <AvatarImage src={faceAvatar} />
            <AvatarFallback>SL</AvatarFallback>
          </Avatar>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">Scott Lynn</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-[700px]">
          Data Analyst & Software Engineer with a passion for building scalable web applications and data-driven solutions.
          <br />
          <span className="text-primary"> Based in Florida, working everywhere! &#127760; &#128187;</span>
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <a href="#projects">View My Work</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
        <div className="flex gap-4 mt-8">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/scottlynn1?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/scott-lynn-data-eng" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:scottlynnfwa@gmail.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>
      </section>
      <section id="about" className="py-4 md:py-8 scroll-mt-16 shadow-lg">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className='p-4 md:ml-8 font-mono'>
            <h2 className="text-3xl font-bold tracking-tighter mb-4">About Me</h2>
            <p className="text-muted-foreground mb-4">
            I'm an aspiring data analyst and developer with several projects and freelance work under my belt.
            I have worked with frameworks and tools like Django, React, Postgresql and Power BI to analyze datasets, automate processes, and create user-friendly UIs'.
            Passionate about problem-solving, I enjoy leveraging data and technology to build innovative solutions.
            </p>
            <p className="text-muted-foreground mb-6">
              When I'm not coding, you can find me kayaking, reading tech blogs, or contributing to open-source
              projects. I'm always eager to learn new technologies and improve my skills.
            </p>
            {/* <Button asChild variant="outline">
              <a href="#" className="inline-flex items-center">
                <User className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button> */}
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
          <AspectRatio ratio={16 / 9}>
            <img src={fullPhoto} alt="Girl in a jacket" width="500" height="600" className='m-auto'></img>
          </AspectRatio>
          </div>
        </div>
      </section>
      <AnimateOnScroll reappear threshold={viewportWidth > 770 ? 0.5 : 0.2}>
      <section id="projects" className="py-4 md:py-8 scroll-mt-16 shadow-lg">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1 */}
          <Card>
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                <img src={solarProject} alt="Project 1" className="object-cover rounded-t-lg max-h-[240px] m-auto" />
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <CardTitle>Solar Energy Output Estimator</CardTitle>
              <CardDescription className="mt-2 mb-4">
                A full-stack Django application for estimating solar energy output and optimal system configurations.
              </CardDescription>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>Django</Badge>
                <Badge>Google Maps API</Badge>
                <Badge>Javascript</Badge>
                <Badge>Tailwindcss</Badge>
                <Badge>Docker</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline" size="sm">
                <a href="https://github.com/scottlynn1/Solar_energy_dashboard" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
              <Button asChild size="sm">
                <a href="https://project2.scottlynn.live" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
              <img src={UIProject} alt="Project 1" className="object-cover rounded-t-lg max-h-[240px] m-auto" />
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <CardTitle>User Interface for Database</CardTitle>
              <CardDescription className="mt-2 mb-4">
                A UI created using React to interect with a database of aggregated costumer reviews for product level analysis using a LLM.
              </CardDescription>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>React</Badge>
                <Badge>Django</Badge>
                <Badge>LlamaIndex LLM</Badge>
                <Badge>Tailwindcss</Badge>
                <Badge>Docker</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline" size="sm">
                <a href="https://github.com/scottlynn1/summerizer" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
              <Button asChild size="sm">
                <a href="https://project1.scottlynn.live" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
              <img src={analysisProject} alt="Project 1" className="object-cover rounded-t-lg max-h-[240px] m-auto" />
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <CardTitle>Data Analysis of Starbucks</CardTitle>
              <CardDescription className="mt-2 mb-4">
                Analysis into causes of recent negetive revenue growth of Starbucks through scraping and processing reviews.
              </CardDescription>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>Python</Badge>
                <Badge>Selenium</Badge>
                <Badge>Natural Language Processing</Badge>
                <Badge>Postresql</Badge>
                <Badge>PowerBI</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline" size="sm">
                <a href="https://github.com/scottlynn1/data_analysis_project_on_starbucks" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
              {/* <Button asChild size="sm">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </a>
              </Button> */}
            </CardFooter>
          </Card>
        </div>
      </section>
      </AnimateOnScroll>
      <AnimateOnScroll reappear threshold={viewportWidth > 770 ? 0.5 : 0.2}>
      <section id="skills" className="py-12 md:py-24 scroll-mt-16 shadow-lg">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">Skills & Technologies</h2>
        <div className="flex gap-6 flex-wrap justify-center">
          <Card className="flex flex-col items-center p-6 max-w-[300px]">
            <Cpu className="h-10 w-10 mb-4 text-primary" />
            <CardTitle className="text-center">Frontend</CardTitle>
            <CardContent className="pt-4 text-center">
              <p className="text-muted-foreground">React, TypeScript, Tailwind, CSS, Javascript, HTML</p>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center p-6 max-w-[300px]">
            <Cpu className="h-10 w-10 mb-4 text-primary" />
            <CardTitle className="text-center">Backend</CardTitle>
            <CardContent className="pt-4 text-center">
              <p className="text-muted-foreground">Django, Express, Postgresql, Cassandra, REST APIs</p>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center p-6 max-w-[300px]">
            <Cpu className="h-10 w-10 mb-4 text-primary" />
            <CardTitle className="text-center">Data Analysis</CardTitle>
            <CardContent className="pt-4 text-center">
              <p className="text-muted-foreground">Web Scraping, SQL, Excel, Python, PowerBI</p>
            </CardContent>
          </Card>
        </div>
      </section>
      </AnimateOnScroll>
      
      <section id="contact" className="py-12 px-4 md:py-24 scroll-mt-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className='font-mono'>
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Get In Touch</h2>
            <p className="text-muted-foreground mb-6">
              I'm currently available for freelance work and full-time positions. If you have a project that needs
              some creative coding or if you're looking to hire, feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a href="mailto:scottlynnfwa@gmail.com" className="hover:underline">
                  scottlynnfwa@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Github className="h-5 w-5 mr-3 text-primary" />
                <a href="https://github.com/scottlynn1?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  github.com/scottlynn1
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 mr-3 text-primary" />
                <a href="https://www.linkedin.com/in/scott-lynn-data-eng" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  linkedin.com/in/scott-lynn-data-eng
                </a>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
            {/* <form action='https://script.google.com/macros/s/AKfycbwx_xlZMdmO2eHfMc8sTkt_J56UwDQgoQ4hRor95x4o8phKd8ukI5UP0GSTPbtfNrU9Aw/exec' method='POST' className="space-y-4">
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
              <Button className="w-full">
                Send Message
              </Button>
            </form> */}
          </div>
        </div>
      </section>
      </main>
      <footer className="border-t py-6 md:py-8 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-2">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            <span className="font-medium">Scott Lynn</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Scott Lynn. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/scottlynn1?tab=repositories" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/scott-lynn-data-eng" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:scottlynnfwa@gmail.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
