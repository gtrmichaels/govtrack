import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function Home() {
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

      {/* Hero Section - 100vh */}
      <section className="relative z-10 flex h-screen w-full items-center justify-center">
        <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col items-center gap-6">
            {/* Headline - Centered */}
            <h1 className="flex w-full max-w-4xl flex-col items-center text-center text-5xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              <span>TRANSPARENCY</span>
              <span>MADE REAL</span>
            </h1>
            
            {/* CTA Button */}
            <div className="mt-2 sm:mt-4">
              <Button size="lg" variant="default" asChild className="text-base rounded-none">
                <Link href="/get-started">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 w-full bg-background py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <Card className="border-border/40">
              <CardHeader>
                <CardTitle className="text-xl">Real-Time Project Tracking</CardTitle>
                <CardDescription>
                  Monitor government projects as they progress with live updates and comprehensive timelines.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 2 */}
            <Card className="border-border/40">
              <CardHeader>
                <CardTitle className="text-xl">Verified Funding Reports</CardTitle>
                <CardDescription>
                  Access audited financial data and funding allocations with complete transparency and verification.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 3 */}
            <Card className="border-border/40">
              <CardHeader>
                <CardTitle className="text-xl">Citizen Oversight Tools</CardTitle>
                <CardDescription>
                  Empower citizens with tools to monitor, analyze, and engage with public projects and spending.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative z-10 w-full bg-background py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <div className="mx-auto max-w-3xl space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                1
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-semibold text-foreground">Agencies upload project data</h3>
                <p className="text-muted-foreground">
                  Government agencies and departments submit their project information, timelines, and funding details to the platform.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                2
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-semibold text-foreground">Auditors verify reports</h3>
                <p className="text-muted-foreground">
                  Independent auditors review and validate all submitted data to ensure accuracy and compliance with standards.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                3
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-semibold text-foreground">Public views progress transparently</h3>
                <p className="text-muted-foreground">
                  Citizens can access verified project information, track progress, and hold government accountable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview Section */}
      <section id="projects" className="relative z-10 w-full bg-background py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Project Card 1 */}
            <Card className="overflow-hidden border-border/40">
              <div className="relative h-48 w-full bg-muted">
                <div className="flex h-full items-center justify-center">
                  <span className="text-muted-foreground">Project Image</span>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Infrastructure Upgrade</CardTitle>
                  <Badge variant="secondary">In Progress</Badge>
                </div>
                <CardDescription>Major city infrastructure modernization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">65%</span>
                  </div>
                  <Progress value={65} />
                </div>
              </CardContent>
            </Card>

            {/* Project Card 2 */}
            <Card className="overflow-hidden border-border/40">
              <div className="relative h-48 w-full bg-muted">
                <div className="flex h-full items-center justify-center">
                  <span className="text-muted-foreground">Project Image</span>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Public Park Renovation</CardTitle>
                  <Badge variant="default">Active</Badge>
                </div>
                <CardDescription>Community park restoration project</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">42%</span>
                  </div>
                  <Progress value={42} />
                </div>
              </CardContent>
            </Card>

            {/* Project Card 3 */}
            <Card className="overflow-hidden border-border/40">
              <div className="relative h-48 w-full bg-muted">
                <div className="flex h-full items-center justify-center">
                  <span className="text-muted-foreground">Project Image</span>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>School Modernization</CardTitle>
                  <Badge variant="outline">Planning</Badge>
                </div>
                <CardDescription>District-wide educational facility updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">18%</span>
                  </div>
                  <Progress value={18} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative z-10 w-full bg-background py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Join the Movement for Accountability
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Be part of the solution. Help create a more transparent and accountable government.
            </p>
            <Button size="lg" variant="default" asChild className="text-base rounded-none">
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
