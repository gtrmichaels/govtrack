import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Handshake, ShieldCheck, Users } from "lucide-react"

export default function GetStarted() {
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
      <main className="relative z-10 w-full">
        {/* Header Section */}
        <section className="relative z-10 w-full bg-background py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Start Using GovTrack
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">
                GovTrack helps public agencies, NGOs, auditors, and citizens monitor government-funded projects with transparency. Choose the role that fits how you want to engage with national projects.
              </p>
            </div>
          </div>
        </section>

        {/* Cards Grid Section */}
        <section className="relative z-10 w-full bg-background py-8 sm:py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Card 1: Government Agency */}
              <Card className="flex flex-col border-border/40 transition-shadow hover:shadow-md">
                <CardHeader className="flex-1">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Government Agency</CardTitle>
                  <CardDescription className="mt-2">
                    Register your institution, publish new projects, update progress reports, and manage your national development portfolio.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="default" className="w-full rounded-none" asChild>
                    <Link href="/register-agency">Register Agency</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Card 2: NGO / Development Partner */}
              <Card className="flex flex-col border-border/40 transition-shadow hover:shadow-md">
                <CardHeader className="flex-1">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Handshake className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">NGO / Development Partner</CardTitle>
                  <CardDescription className="mt-2">
                    Track the initiatives you support, upload funding utilization reports, and stay aligned with project outcomes.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="default" className="w-full rounded-none" asChild>
                    <Link href="/join-partner">Join as Partner</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Card 3: Auditor / Verification Body */}
              <Card className="flex flex-col border-border/40 transition-shadow hover:shadow-md">
                <CardHeader className="flex-1">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Auditor / Verification Body</CardTitle>
                  <CardDescription className="mt-2">
                    Verify project progress, upload audit summaries, flag discrepancies, and strengthen public accountability.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="default" className="w-full rounded-none" asChild>
                    <Link href="/auditor-access">Auditor Access</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Card 4: Citizen / Public Viewer */}
              <Card className="flex flex-col border-border/40 transition-shadow hover:shadow-md">
                <CardHeader className="flex-1">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Citizen / Public Viewer</CardTitle>
                  <CardDescription className="mt-2">
                    Browse national projects, check real progress, view budgets, and report issues affecting your community.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="default" className="w-full rounded-none" asChild>
                    <Link href="/projects">View Projects</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
