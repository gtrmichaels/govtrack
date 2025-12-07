"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github } from "lucide-react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder submit handler
    console.log("Login attempt:", { email, password })
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Unicorn.studio Interactive Background - Behind Everything */}
      <div 
        id="unicorn-studio-background" 
        className="fixed inset-0 z-0 h-screen w-full"
        aria-hidden="true"
      />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 flex min-h-[calc(100vh-4rem)] w-full items-center justify-center py-16 sm:py-20">
        <div className="w-full max-w-[420px] px-4">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold text-foreground sm:text-4xl">
              Login to GovTrack
            </h1>
            <p className="text-sm text-muted-foreground">
              Access your dashboard and continue your work.
            </p>
          </div>

          {/* Login Card */}
          <Card className="border-border/40 shadow-md">
            <CardHeader>
              <CardTitle className="sr-only">Login Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Input */}
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {/* Login Button */}
                <Button
                  type="submit"
                  variant="default"
                  className="w-full rounded-none"
                >
                  Login
                </Button>

                {/* Sign Up Link */}
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Link
                      href="/get-started"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Get Started
                    </Link>
                  </p>
                </div>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">
                      or continue with
                    </span>
                  </div>
                </div>

                {/* GitHub Login Button */}
                <Button
                  type="button"
                  variant="secondary"
                  className="w-full rounded-none"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Login
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Footer Text */}
          <p className="mt-6 text-center text-xs text-muted-foreground">
            By continuing, you agree to our Terms & Privacy Policy.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
