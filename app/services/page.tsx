import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Home, Building2, ClipboardCheck, CheckCircle2 } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Our Cleaning Services</h1>
          <p className="max-w-[700px] mx-auto text-white/90 md:text-xl">
            Professional cleaning services tailored to your needs. We offer house cleaning, office cleaning, and
            contract cleaning services.
          </p>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="house" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-primary/80 text-white">
              <TabsTrigger value="house" id="house-cleaning">
                House Cleaning
              </TabsTrigger>
              <TabsTrigger value="office" id="office-cleaning">
                Office Cleaning
              </TabsTrigger>
              <TabsTrigger value="contract" id="contract-cleaning">
                Contract Cleaning
              </TabsTrigger>
            </TabsList>

            <TabsContent value="house" className="mt-6">
              <Card className="bg-primary/20 border-primary/60">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Home className="h-5 w-5 text-primary" />
                    <CardTitle className="text-primary">House Cleaning Services</CardTitle>
                  </div>
                  <CardDescription className="text-primary/60">Professional cleaning for your home</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-primary">What We Offer</h3>
                      <ul className="space-y-2 text-primary">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Deep cleaning of all rooms</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Dusting and wiping of all surfaces</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Vacuuming and mopping of floors</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Bathroom and kitchen sanitization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Window cleaning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Laundry and ironing (optional)</span>
                        </li>
                      </ul>
                    </div>
                    <div className="relative h-[250px] rounded-lg overflow-hidden">
                      <Image
                        src="/isc-2.png?height=500&width=800"
                        alt="House Cleaning"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-lg font-semibold mb-2">Why Choose Our House Cleaning</h3>
                    <p className="text-muted-foreground mb-4">
                      Our house cleaning services are designed to give you more time to enjoy your home and less time
                      cleaning it. We use eco-friendly products and follow a detailed cleaning checklist to ensure your
                      home is spotless.
                    </p>
                    <Button asChild>
                      <Link href="/contact">Book House Cleaning</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="office" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <CardTitle>Office Cleaning Services</CardTitle>
                  </div>
                  <CardDescription>Keep your workplace clean and professional</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">What We Offer</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Desk and workstation cleaning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Floor care (vacuuming, mopping)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Restroom sanitation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Kitchen and break room cleaning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Trash removal</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Window and glass cleaning</span>
                        </li>
                      </ul>
                    </div>
                    <div className="relative h-[250px] rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=500&width=800"
                        alt="Office Cleaning"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-lg font-semibold mb-2">Why Choose Our Office Cleaning</h3>
                    <p className="text-muted-foreground mb-4">
                      A clean office creates a positive impression on clients and provides a healthier environment for
                      employees. Our office cleaning services are scheduled at your convenience, with minimal disruption
                      to your business operations.
                    </p>
                    <Button asChild>
                      <Link href="/contact">Book Office Cleaning</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contract" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <ClipboardCheck className="h-5 w-5 text-primary" />
                    <CardTitle>Contract Cleaning Services</CardTitle>
                  </div>
                  <CardDescription>Regular scheduled cleaning services</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">What We Offer</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Customized cleaning schedules</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Daily, weekly, or monthly services</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Dedicated cleaning team</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Quality control inspections</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Flexible contract terms</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Discounted rates for long-term contracts</span>
                        </li>
                      </ul>
                    </div>
                    <div className="relative h-[250px] rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=500&width=800"
                        alt="Contract Cleaning"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-lg font-semibold mb-2">Why Choose Our Contract Cleaning</h3>
                    <p className="text-muted-foreground mb-4">
                      Our contract cleaning services provide peace of mind with regular scheduled cleaning. We offer
                      competitive rates for ongoing services and ensure consistent quality with our dedicated cleaning
                      teams.
                    </p>
                    <Button asChild>
                      <Link href="/contact">Book Contract Cleaning</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Pricing</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Transparent pricing for our cleaning services. Contact us for a custom quote based on your specific
                needs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>Basic Cleaning</CardTitle>
                <CardDescription>Perfect for regular maintenance cleaning</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <span className="text-4xl font-bold">Starting at</span>
                  <p className="text-muted-foreground">Contact for pricing</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>General dusting and wiping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Vacuuming and mopping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Bathroom cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Kitchen cleaning</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg border-primary">
              <CardHeader className="bg-primary text-white">
                <CardTitle>Deep Cleaning</CardTitle>
                <CardDescription className="text-white/90">Thorough cleaning for a spotless space</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="text-center">
                  <span className="text-4xl font-bold">Starting at</span>
                  <p className="text-muted-foreground">Contact for pricing</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>All basic cleaning services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Deep cleaning of bathrooms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Inside cabinet cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Window cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Appliance cleaning</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>Contract Cleaning</CardTitle>
                <CardDescription>Regular scheduled cleaning services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <span className="text-4xl font-bold">Custom</span>
                  <p className="text-muted-foreground">Tailored to your needs</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Customized cleaning plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Scheduled cleaning visits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Dedicated cleaning team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Discounted rates</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Ready to Experience Our Cleaning Services?
          </h2>
          <p className="max-w-[700px] mx-auto text-white/90 md:text-xl mb-8">
            Contact us today to schedule your cleaning service or get a custom quote.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="/contact">Book Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
