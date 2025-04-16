import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Clock } from "lucide-react"

export default function ContactInfoPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Contact Information</h1>
          <p className="max-w-[700px] mx-auto text-white/90 md:text-xl">
            Get in touch with ISC Cleaning Services. We're here to help with all your cleaning needs.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Phone</CardTitle>
                <CardDescription>Call us directly</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-primary">061 986 2198</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Our customer service team is available during business hours to answer your calls.
                </p>
                <Button asChild className="w-full mt-4">
                  <a href="tel:0619862198">Call Now</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
                <CardDescription>Send us an email</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-primary">KS2910749@GMAIL.COM</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Email us for quotes, inquiries, or to schedule a cleaning service.
                </p>
                <Button asChild className="w-full mt-4">
                  <a href="mailto:KS2910749@GMAIL.COM">Email Now</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Business Hours</CardTitle>
                <CardDescription>When we're available</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <Button asChild className="w-full mt-6" variant="outline">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">Ready to Book a Cleaning Service?</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground mb-6">
              Contact us today to schedule your cleaning service or get a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Book Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/package-generator">Generate Custom Package</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
