import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  Hotel,
  UtensilsCrossed,
  Phone,
  Star,
  Users,
  Waves,
} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  // Resolve public/static image URLs so they work regardless of base path
  const resolvePublic = (p: string) => new URL(p, import.meta.url).href;

  const heroImages = [
    {
      src: resolvePublic("/clubhouse-front.jpg"),
      title: "Welcome to HighPoint Resort",
      subtitle: "Experience luxury in the heart of Kitengela",
    },
    {
      src: resolvePublic("/clubhouse-front.jpg"),
      title: "Relax by the Pool",
      subtitle: "Unwind in our pristine swimming pool",
    },
    {
      src: resolvePublic("/clubhouse-front.jpg"),
      title: "Luxurious Rooms",
      subtitle: "Comfortable accommodations for your perfect stay",
    },
  ];

  const quickLinks = [
    {
      icon: Hotel,
      title: "Book a Room",
      description: "Reserve your perfect accommodation",
      page: "rooms",
      color: "text-red-600",
    },
    {
      icon: UtensilsCrossed,
      title: "Reserve Dining",
      description: "Book a table at our restaurant",
      page: "restaurant",
      color: "text-red-600",
    },
    {
      icon: Phone,
      title: "Contact Us",
      description: "Get in touch with our team",
      page: "contact",
      color: "text-red-600",
    },
  ];

  const features = [
    { icon: Hotel, text: "Luxury Guest Rooms" },
    { icon: UtensilsCrossed, text: "Fine Dining Restaurant" },
    { icon: Waves, text: "Swimming Pool" },
    { icon: Users, text: "Conference Facilities" },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Amazing place! The staff was incredibly friendly and the facilities were top-notch. Will definitely come back!",
    },
    {
      name: "John K.",
      rating: 5,
      text: "Perfect venue for our corporate event. The conference rooms were well-equipped and the catering was excellent.",
    },
    {
      name: "Grace W.",
      rating: 5,
      text: "My kids loved the play area! The whole family had a wonderful time. Highly recommend for family getaways.",
    },
    {
      name: "David L.",
      rating: 5,
      text: "The pool area is absolutely stunning! Clean, well-maintained, and the perfect place to relax. Great service too!",
    },
    {
      name: "Mary N.",
      rating: 5,
      text: "Outstanding restaurant with delicious food. The chef really knows how to blend local and international flavors perfectly.",
    },
    {
      name: "Peter O.",
      rating: 5,
      text: "Beautiful gardens and peaceful atmosphere. Exactly what we needed for our weekend getaway from Nairobi.",
    },
    {
      name: "Ann W.",
      rating: 5,
      text: "Excellent location and easy to find. The rooms are spacious and very comfortable. Highly recommended!",
    },
    {
      name: "James M.",
      rating: 5,
      text: "Great value for money! The facilities exceeded our expectations. Will definitely be returning with friends.",
    },
    {
      name: "Lucy K.",
      rating: 5,
      text: "The staff went above and beyond to make our anniversary special. Thank you for the wonderful memories!",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {heroImages.map((image, index) => (
              <CarouselItem key={index}>
                <div
                  className="relative h-[500px] md:h-[600px] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${image.src})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                      <h1 className="text-4xl md:text-6xl mb-4">
                        {image.title}
                      </h1>
                      <p className="text-xl md:text-2xl mb-8">
                        {image.subtitle}
                      </p>
                      <Button
                        onClick={() => onNavigate("rooms")}
                        className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
                      >
                        Book Your Stay
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>

      {/* Quick Links */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-6">
                <link.icon className={`w-12 h-12 ${link.color} mb-4`} />
                <h3 className="text-xl mb-2">{link.title}</h3>
                <p className="text-gray-600 mb-4">{link.description}</p>
                <Button
                  onClick={() => onNavigate(link.page)}
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl text-center mb-12">
          Why Choose HighPoint Resort?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="w-16 h-16 mx-auto mb-4 text-red-600" />
              <p className="text-gray-700">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Preview */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl mb-6">Discover HighPoint Resort</h2>
              <p className="text-gray-700 mb-4">
                Located in the serene suburbs of Kitengela (Olooloitikosh,
                Isinya, Kajiado County), HighPoint Resort offers a perfect blend
                of luxury, comfort, and natural beauty.
              </p>
              <p className="text-gray-700 mb-6">
                Our resort features beautifully appointed guest rooms, a
                world-class restaurant and bar, a pristine swimming pool,
                children's play area, stunning aesthetic gardens, and modern
                conference facilities.
              </p>
              <Button
                onClick={() => onNavigate("about")}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Learn More About Us
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ImageWithFallback
                src="/clubhouse-front.jpg"
                alt="Resort Exterior"
                className="w-full h-48 object-cover rounded-lg"
              />
              <ImageWithFallback
                src="/resort-arial-view.jpg"
                alt="Pool"
                className="w-full h-48 object-cover rounded-lg"
              />
              <ImageWithFallback
                src="/resort-banner.jpg"
                alt="Restaurant"
                className="w-full h-48 object-cover rounded-lg"
              />
              <ImageWithFallback
                src="/clubhouse-night2.jpg"
                alt="Gardens"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl text-center mb-12">What Our Guests Say</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full md:basis-1/3"
              >
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-red-600 text-red-600"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic flex-1">
                      "{testimonial.text}"
                    </p>
                    <p className="text-gray-900">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
    </div>
  );
}
