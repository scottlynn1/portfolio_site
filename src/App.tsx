import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, User, Code, Briefcase, Cpu, Send } from "lucide-react"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6" />
            <span className="text-lg font-bold">DevPortfolio</span>
          </div>
          <nav className="hidden md:flex gap-6">
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
          <div className="flex items-center gap-2">
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
      <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
        <div className="relative w-24 h-24 mb-8 rounded-full overflow-hidden border-4 border-primary">
          {/* <Image
            src="/placeholder.svg?height=96&width=96"
            alt="Developer"
            width={96}
            height={96}
            className="object-cover"
            priority
          /> */}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">John Developer</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-[700px]">
          Full Stack Developer specializing in React, Next.js, and Node.js
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
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:john@example.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>
      </section>
      <section id="about" className="py-12 md:py-24 scroll-mt-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter mb-4">About Me</h2>
            <p className="text-muted-foreground mb-4">
              I'm a passionate full-stack developer with 5+ years of experience building web applications. I
              specialize in creating responsive, accessible, and performant web experiences using modern technologies.
            </p>
            <p className="text-muted-foreground mb-6">
              When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source
              projects. I'm always eager to learn new technologies and improve my skills.
            </p>
            <Button asChild variant="outline">
              <a href="#" className="inline-flex items-center">
                <User className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            {/* <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Developer working"
              fill
              className="object-cover"
            /> */}
          </div>
        </div>
      </section>

      <section id="projects" className="py-12 md:py-24 scroll-mt-16">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1 */}
          <Card>
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                {/* <Image
                  src="/placeholder.svg?height=192&width=384"
                  alt="Project 1"
                  fill
                  className="object-cover rounded-t-lg"
                /> */}
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <CardTitle>E-Commerce Platform</CardTitle>
              <CardDescription className="mt-2 mb-4">
                A full-featured online store built with Next.js, Stripe, and a headless CMS.
              </CardDescription>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>Next.js</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Stripe</Badge>
                <Badge>Tailwind</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline" size="sm">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
              <Button asChild size="sm">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Project 2 */}
          <Card>
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                {/* <Image
                  src="/placeholder.svg?height=192&width=384"
                  alt="Project 2"
                  fill
                  className="object-cover rounded-t-lg"
                /> */}
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <CardTitle>Task Management App</CardTitle>
              <CardDescription className="mt-2 mb-4">
                A collaborative task manager with real-time updates using React and Firebase.
              </CardDescription>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>React</Badge>
                <Badge>Firebase</Badge>
                <Badge>Redux</Badge>
                <Badge>Material UI</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline" size="sm">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
              <Button asChild size="sm">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Project 3 */}
          <Card>
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                {/* <Image
                  src="/placeholder.svg?height=192&width=384"
                  alt="Project 3"
                  fill
                  className="object-cover rounded-t-lg"
                /> */}
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <CardTitle>AI Content Generator</CardTitle>
              <CardDescription className="mt-2 mb-4">
                A tool that uses AI to generate marketing content with Node.js and OpenAI API.
              </CardDescription>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>Node.js</Badge>
                <Badge>Express</Badge>
                <Badge>OpenAI</Badge>
                <Badge>MongoDB</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline" size="sm">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
              <Button asChild size="sm">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section id="skills" className="py-12 md:py-24 scroll-mt-16">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Card className="flex flex-col items-center p-6">
            <Cpu className="h-10 w-10 mb-4 text-primary" />
            <CardTitle className="text-center">Frontend</CardTitle>
            <CardContent className="pt-4 text-center">
              <p className="text-muted-foreground">React, Next.js, TypeScript, Tailwind CSS, Redux</p>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center p-6">
            <Cpu className="h-10 w-10 mb-4 text-primary" />
            <CardTitle className="text-center">Backend</CardTitle>
            <CardContent className="pt-4 text-center">
              <p className="text-muted-foreground">Node.js, Express, NestJS, GraphQL, REST APIs</p>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center p-6">
            <Cpu className="h-10 w-10 mb-4 text-primary" />
            <CardTitle className="text-center">Database</CardTitle>
            <CardContent className="pt-4 text-center">
              <p className="text-muted-foreground">MongoDB, PostgreSQL, MySQL, Redis, Prisma</p>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center p-6">
            <Cpu className="h-10 w-10 mb-4 text-primary" />
            <CardTitle className="text-center">DevOps</CardTitle>
            <CardContent className="pt-4 text-center">
              <p className="text-muted-foreground">Docker, CI/CD, AWS, Vercel, GitHub Actions</p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section id="contact" className="py-12 md:py-24 scroll-mt-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Get In Touch</h2>
            <p className="text-muted-foreground mb-6">
              I'm currently available for freelance work and full-time positions. If you have a project that needs
              some creative coding or if you're looking to hire, feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a href="mailto:john@example.com" className="hover:underline">
                  john@example.com
                </a>
              </div>
              <div className="flex items-center">
                <Github className="h-5 w-5 mr-3 text-primary" />
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                github.com/johndeveloper
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 mr-3 text-primary" />
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  linkedin.com/in/johndeveloper
                </a>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
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
                />
              </div>
              <Button className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            <span className="font-medium">John Developer</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} John Developer. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:john@example.com">
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
