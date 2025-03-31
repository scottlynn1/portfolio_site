import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
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
                    {/* <Github className="mr-2 h-4 w-4" /> */}
                    Code
                  </a>
                </Button>
                <Button asChild size="sm">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    {/* <ExternalLink className="mr-2 h-4 w-4" /> */}
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
    </>
  )
}

export default App
