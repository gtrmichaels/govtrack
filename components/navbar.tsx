import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-auto">
            <Image
              src="/Gtrack.png"
              alt="GovTrack Logo"
              width={48}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Navigation Links - Center */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#projects"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="#tracking"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Tracking
          </Link>
          <Link
            href="#transparency"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Transparency
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="#resources"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Resources
          </Link>
        </div>

        {/* CTA Buttons - Right */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Button variant="secondary" size="sm" className="sm:h-9 sm:px-4 rounded-none" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="default" size="sm" className="sm:h-9 sm:px-4 rounded-none" asChild>
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

