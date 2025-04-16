"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, PackageCheck } from "lucide-react"
import Link from "next/link"

type ServiceOption = {
  id: string
  name: string
  description: string
  price: number
}

type PackageDetails = {
  name: string
  description: string
  basePrice: number
  services: ServiceOption[]
  frequency: string
  discount: number
  totalPrice: number
}

export default function PackageGeneratorPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    locationType: "house",
    propertySize: "medium",
    frequency: "one-time",
    services: [] as string[],
    specialRequirements: "",
    name: "",
    email: "",
    phone: "",
  })

  const [generatedPackage, setGeneratedPackage] = useState<PackageDetails | null>(null)

  const serviceOptions: Record<string, ServiceOption[]> = {
    house: [
      { id: "general", name: "General Cleaning", description: "Dusting, vacuuming, and mopping", price: 80 },
      { id: "deep", name: "Deep Cleaning", description: "Thorough cleaning of all areas", price: 150 },
      { id: "windows", name: "Window Cleaning", description: "Interior and exterior window cleaning", price: 60 },
      {
        id: "kitchen",
        name: "Kitchen Deep Clean",
        description: "Detailed cleaning of kitchen appliances and surfaces",
        price: 70,
      },
      { id: "bathroom", name: "Bathroom Deep Clean", description: "Detailed cleaning of bathrooms", price: 70 },
    ],
    office: [
      {
        id: "general",
        name: "General Office Cleaning",
        description: "Dusting, vacuuming, and trash removal",
        price: 100,
      },
      { id: "deep", name: "Deep Office Cleaning", description: "Thorough cleaning of all office areas", price: 180 },
      { id: "windows", name: "Window Cleaning", description: "Interior and exterior window cleaning", price: 80 },
      { id: "restrooms", name: "Restroom Sanitation", description: "Detailed cleaning of restrooms", price: 70 },
      {
        id: "kitchen",
        name: "Kitchen/Break Room Cleaning",
        description: "Cleaning of kitchen and break room areas",
        price: 60,
      },
    ],
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleCheckboxChange = (id: string, checked: boolean) => {
    if (checked) {
      setFormData({ ...formData, services: [...formData.services, id] })
    } else {
      setFormData({ ...formData, services: formData.services.filter((service) => service !== id) })
    }
  }

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  const handleGeneratePackage = () => {
    // Calculate size multiplier
    const sizeMultiplier = formData.propertySize === "small" ? 0.8 : formData.propertySize === "large" ? 1.3 : 1

    // Get selected services
    const selectedServices = serviceOptions[formData.locationType].filter((service) =>
      formData.services.includes(service.id),
    )

    // Calculate base price
    const basePrice = selectedServices.reduce((total, service) => total + service.price, 0) * sizeMultiplier

    // Calculate discount based on frequency
    let discount = 0
    if (formData.frequency === "weekly") {
      discount = 0.15
    } else if (formData.frequency === "bi-weekly") {
      discount = 0.1
    } else if (formData.frequency === "monthly") {
      discount = 0.05
    }

    // Calculate total price
    const totalPrice = basePrice * (1 - discount)

    // Generate package name
    const packageName = `${formData.propertySize.charAt(0).toUpperCase() + formData.propertySize.slice(1)} ${
      formData.locationType.charAt(0).toUpperCase() + formData.locationType.slice(1)
    } Cleaning Package`

    // Generate package description
    const packageDescription = `Custom cleaning package for your ${formData.propertySize} ${formData.locationType} with ${
      formData.frequency === "one-time" ? "one-time" : `${formData.frequency} recurring`
    } service.`

    // Set generated package
    setGeneratedPackage({
      name: packageName,
      description: packageDescription,
      basePrice,
      services: selectedServices,
      frequency: formData.frequency,
      discount,
      totalPrice,
    })

    // Move to next step
    handleNextStep()
  }

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Location Type</Label>
        <RadioGroup
          value={formData.locationType}
          onValueChange={(value) => handleSelectChange("locationType", value)}
          className="flex flex-col space-y-1"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="house" id="house-type" />
            <Label htmlFor="house-type" className="font-normal">
              House/Residential
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="office" id="office-type" />
            <Label htmlFor="office-type" className="font-normal">
              Office/Commercial
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label>Property Size</Label>
        <Select value={formData.propertySize} onValueChange={(value) => handleSelectChange("propertySize", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select property size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="small">Small (Up to 1000 sq ft)</SelectItem>
            <SelectItem value="medium">Medium (1000-2000 sq ft)</SelectItem>
            <SelectItem value="large">Large (2000+ sq ft)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Cleaning Frequency</Label>
        <Select value={formData.frequency} onValueChange={(value) => handleSelectChange("frequency", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select frequency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="one-time">One-time Cleaning</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="bi-weekly">Bi-weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <Label>Services Required</Label>
        <div className="grid gap-2">
          {serviceOptions[formData.locationType].map((service) => (
            <div key={service.id} className="flex items-start space-x-2">
              <Checkbox
                id={service.id}
                checked={formData.services.includes(service.id)}
                onCheckedChange={(checked) => handleCheckboxChange(service.id, checked as boolean)}
              />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor={service.id} className="font-medium">
                  {service.name}
                </Label>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="specialRequirements">Special Requirements</Label>
        <Textarea
          id="specialRequirements"
          name="specialRequirements"
          value={formData.specialRequirements}
          onChange={handleInputChange}
          placeholder="Any special requirements or areas that need extra attention..."
          className="min-h-[100px]"
        />
      </div>

      <Button onClick={handleNextStep} className="w-full">
        Next Step
      </Button>
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="John Doe"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="john.doe@example.com"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="123-456-7890"
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 pt-4">
        <Button variant="outline" onClick={handlePrevStep} className="flex-1">
          Previous
        </Button>
        <Button onClick={handleGeneratePackage} className="flex-1">
          Generate Package
        </Button>
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="space-y-6">
      {generatedPackage && (
        <>
          <div className="rounded-lg bg-primary/10 p-4 flex items-center gap-3">
            <PackageCheck className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-semibold">Your Custom Package is Ready!</h3>
              <p className="text-sm text-muted-foreground">
                Based on your requirements, we've created a personalized cleaning package for you.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold">{generatedPackage.name}</h3>
              <p className="text-muted-foreground">{generatedPackage.description}</p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-2">Included Services:</h4>
              <ul className="space-y-2">
                {generatedPackage.services.map((service) => (
                  <li key={service.id} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">{service.name}</span>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold mb-2">Pricing Details:</h4>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>Base Price:</span>
                  <span>${generatedPackage.basePrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Frequency:</span>
                  <span>
                    {generatedPackage.frequency === "one-time"
                      ? "One-time"
                      : generatedPackage.frequency === "weekly"
                        ? "Weekly"
                        : generatedPackage.frequency === "bi-weekly"
                          ? "Bi-weekly"
                          : "Monthly"}
                  </span>
                </div>
                {generatedPackage.discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount:</span>
                    <span>-{(generatedPackage.discount * 100).toFixed(0)}%</span>
                  </div>
                )}
                <Separator className="my-2" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Price:</span>
                  <span>${generatedPackage.totalPrice.toFixed(2)}</span>
                </div>
                {generatedPackage.frequency !== "one-time" && (
                  <p className="text-sm text-muted-foreground">*Price per cleaning session</p>
                )}
              </div>
            </div>
          </div>

          <div className="pt-4 space-y-4">
            <Button asChild className="w-full">
              <Link href="/contact">Book This Package</Link>
            </Button>
            <Button variant="outline" onClick={() => setStep(1)} className="w-full">
              Start Over
            </Button>
          </div>
        </>
      )}
    </div>
  )

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Custom Cleaning Package Generator
          </h1>
          <p className="max-w-[700px] mx-auto text-white/90 md:text-xl">
            Answer a few questions to get a personalized cleaning package tailored to your needs.
          </p>
        </div>
      </section>

      {/* Package Generator Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Package Generator</CardTitle>
                <CardDescription>
                  {step === 1 && "Step 1: Tell us about your cleaning needs"}
                  {step === 2 && "Step 2: Your contact information"}
                  {step === 3 && "Step 3: Your custom cleaning package"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {step === 1 && renderStep1()}
                {step === 2 && renderStep2()}
                {step === 3 && renderStep3()}
              </CardContent>
              <CardFooter className="border-t pt-6">
                <div className="flex justify-between w-full text-sm text-muted-foreground">
                  <div>Step {step} of 3</div>
                  <div>
                    {step === 1 && "Cleaning Requirements"}
                    {step === 2 && "Contact Information"}
                    {step === 3 && "Generated Package"}
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
