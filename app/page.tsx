import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Star, Sparkles } from "lucide-react"
import HeroCarousel from "@/components/hero-carousel"
import Marquee from "@/components/marquee"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section with Carousel */}
      <section className="relative w-full">
        <HeroCarousel />

        {/* Marquee */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md py-3 border-t border-white/20">
          <Marquee speed={100}>
            <div className="flex items-center gap-8 px-4">
              <div className="flex items-center gap-2 text-white font-medium">
                <Sparkles className="h-5 w-5 text-yellow-300" /> PROFESSIONAL CLEANING SERVICES
              </div>
              <div className="flex items-center gap-2 text-white font-medium">
                <CheckCircle2 className="h-5 w-5 text-green-300" /> 100% SATISFACTION GUARANTEED
              </div>
              <div className="flex items-center gap-2 text-white font-medium">
                <Sparkles className="h-5 w-5 text-yellow-300" /> ECO-FRIENDLY PRODUCTS
              </div>
              <div className="flex items-center gap-2 text-white font-medium">
                <CheckCircle2 className="h-5 w-5 text-green-300" /> EXPERIENCED STAFF
              </div>
              <div className="flex items-center gap-2 text-white font-medium">
                <Sparkles className="h-5 w-5 text-yellow-300" /> AFFORDABLE RATES
              </div>
              <div className="flex items-center gap-2 text-white font-medium">
                <CheckCircle2 className="h-5 w-5 text-green-300" /> FLEXIBLE SCHEDULING
              </div>
            </div>
          </Marquee>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-2">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Professional Cleaning Solutions
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              We offer a range of professional cleaning services to meet your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* House Cleaning */}
            <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg">
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-background/80 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative aspect-video overflow-hidden rounded-md">
                <Image
                  src="/isc-1.png"
                  alt="House Cleaning"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-xl mb-2">House Cleaning</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our house cleaning services include dusting, vacuuming, mopping, bathroom cleaning, kitchen cleaning,
                  and more.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  <Link href="/services#house-cleaning">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Office Cleaning */}
            <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg">
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-background/80 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative aspect-video overflow-hidden rounded-md">
                <Image
                  src="/isc-2.png"
                  alt="Office Cleaning"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-xl mb-2">Office Cleaning</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our office cleaning services include desk cleaning, floor care, restroom sanitation, trash removal,
                  and more.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  <Link href="/services#office-cleaning">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Contract Cleaning */}
            <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg">
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-background/80 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative aspect-video overflow-hidden rounded-md">
                <Image
                  src="/contract-cleaning.jpg"
                  alt="Contract Cleaning"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-xl mb-2">Contract Cleaning</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our contract cleaning services provide regular scheduled cleaning for businesses and residential
                  properties.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  <Link href="/services#contract-cleaning">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="w-full py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-2">
              Transformations
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Before & After</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              See the difference our professional cleaning services can make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before & After 1 */}
            <div className="bg-background rounded-lg overflow-hidden shadow-md">
              <div className="grid grid-cols-2 gap-2 p-2">
                <div className="relative aspect-square rounded-md overflow-hidden">
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                    BEFORE
                  </div>
                  <Image src="/before-1.jpg" alt="Before cleaning" fill className="object-cover" />
                </div>
                <div className="relative aspect-square rounded-md overflow-hidden">
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                    AFTER
                  </div>
                  <Image src="/after-1.jpg" alt="After cleaning" fill className="object-cover" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Kitchen Deep Clean</h3>
                <p className="text-sm text-muted-foreground">
                  Complete transformation of a kitchen with our deep cleaning service.
                </p>
              </div>
            </div>

            {/* Before & After 2 */}
            <div className="bg-background rounded-lg overflow-hidden shadow-md">
              <div className="grid grid-cols-2 gap-2 p-2">
                <div className="relative aspect-square rounded-md overflow-hidden">
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                    BEFORE
                  </div>
                  <Image src="/before-2.jpg" alt="Before cleaning" fill className="object-cover" />
                </div>
                <div className="relative aspect-square rounded-md overflow-hidden">
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                    AFTER
                  </div>
                  <Image src="/after-2.jpg" alt="After cleaning" fill className="object-cover" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Office Carpet Cleaning</h3>
                <p className="text-sm text-muted-foreground">
                  Revitalized office carpet with our professional cleaning equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-2">
              Our Process
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How We Work</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Our simple and effective process ensures a seamless cleaning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Book</h3>
                <p className="text-muted-foreground">Schedule your cleaning service online or by phone.</p>
              </div>
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/30 -z-10">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Confirm</h3>
                <p className="text-muted-foreground">We'll confirm your appointment and cleaning requirements.</p>
              </div>
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/30 -z-10">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary"></div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Clean</h3>
                <p className="text-muted-foreground">Our professional team will clean your space thoroughly.</p>
              </div>
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/30 -z-10">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary"></div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold">Enjoy</h3>
                <p className="text-muted-foreground">Enjoy your clean and refreshed space.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-2">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Don't just take our word for it. Here's what our satisfied customers have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="bg-background border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "ISC Cleaning Services did an amazing job with our house. The team was professional, thorough, and
                  paid attention to every detail. Our home has never looked better!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-3">
                    JD
                  </div>
                  <div>
                    <h4 className="font-semibold">Jane Doe</h4>
                    <p className="text-sm text-muted-foreground">Residential Client</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-background border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "We've been using ISC for our office cleaning for over a year now. Their consistent quality and
                  reliability have made them an invaluable partner for our business."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-3">
                    MS
                  </div>
                  <div>
                    <h4 className="font-semibold">Michael Smith</h4>
                    <p className="text-sm text-muted-foreground">Business Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-background border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "The custom package generator helped me find exactly what I needed. The cleaning team was professional
                  and the results were outstanding. Highly recommend!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-3">
                    AJ
                  </div>
                  <div>
                    <h4 className="font-semibold">Amanda Johnson</h4>
                    <p className="text-sm text-muted-foreground">Apartment Resident</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 md:py-24 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">500+</div>
              <p className="text-white/80">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">1,200+</div>
              <p className="text-white/80">Cleanings Completed</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">15+</div>
              <p className="text-white/80">Professional Cleaners</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">100%</div>
              <p className="text-white/80">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-background border-t">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Ready for a Cleaner Space?
            </h2>
            <p className="text-muted-foreground md:text-xl mb-8">
              Contact us today to schedule your cleaning service or get a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact">Book Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link href="/package-generator">Generate Custom Package</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
