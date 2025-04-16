import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-black">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-300">ISC Services</h3>
            <p className="text-sm text-muted-foreground">
              Professional cleaning services for a clean home or office every time.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-300">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                Home
              </Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                Services
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                Contact
              </Link>
              <Link href="/package-generator" className="text-sm text-muted-foreground hover:text-primary">
                Package Generator
              </Link>
            </nav>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-300">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>061 986 2198</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>KS2910749@GMAIL.COM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ISC Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
