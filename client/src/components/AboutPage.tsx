import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Hotel, UtensilsCrossed, Waves, Users, TreePine, Baby } from 'lucide-react';

export function AboutPage() {
  const facilities = [
    {
      icon: Hotel,
      title: 'Guest Rooms',
      description: 'Luxuriously appointed rooms with modern amenities, comfortable bedding, and stunning views. Each room features air conditioning, flat-screen TV, WiFi, and en-suite bathroom.',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzYwNzM2MjcxfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: UtensilsCrossed,
      title: 'Restaurant & Bar',
      description: 'Our restaurant offers a diverse menu featuring local and international cuisine. The bar serves a wide selection of beverages, cocktails, and wines in a relaxed atmosphere.',
      image: 'https://images.unsplash.com/photo-1543539571-2d88da875d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzYwNjgxNzA1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Waves,
      title: 'Swimming Pool',
      description: 'Our pristine swimming pool is perfect for relaxation and recreation. Open daily with comfortable loungers and a poolside bar service.',
      image: 'https://images.unsplash.com/photo-1738407282253-979e31f45785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHBvb2x8ZW58MXx8fHwxNzYwNzkxNjg5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Baby,
      title: 'Children\'s Play Area',
      description: 'A safe and fun play area for children featuring trampolines and bouncing castles. Parents can relax knowing their children are enjoying themselves in a secure environment.',
      image: 'https://images.unsplash.com/photo-1654343532574-53e699fe0cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlncm91bmQlMjBvdXRkb29yfGVufDF8fHx8MTc2MDc1OTI2NXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: TreePine,
      title: 'Aesthetic Gardens',
      description: 'Beautifully landscaped gardens provide a tranquil setting for walks, photos, or simply enjoying nature. Perfect for outdoor events and weddings.',
      image: 'https://images.unsplash.com/photo-1532302780319-95689ab9d79a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGdhcmRlbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjA3OTE2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Users,
      title: 'Conference Rooms',
      description: 'State-of-the-art conference facilities equipped with AV equipment, WiFi, and comfortable seating. Ideal for corporate events, meetings, and seminars.',
      image: 'https://images.unsplash.com/photo-1744095407215-66e40734e23a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcm9vbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNjk5MDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[400px]">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1607320874448-d33f052651e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGV4dGVyaW9yJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MDc3Mzk5OXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="HighPoint Resort"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl mb-4">About HighPoint Resort</h1>
            <p className="text-xl">Your luxury retreat in Kitengela</p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl mb-6">Our Story</h2>
          <p className="text-gray-700 mb-4">
            HighPoint Resort is a premier destination for relaxation, dining, and events in the heart of Kitengela's suburbs. Located in Olooloitikosh, Isinya, Kajiado County, we offer a perfect escape from the hustle and bustle of city life.
          </p>
          <p className="text-gray-700 mb-4">
            Our mission is to provide exceptional hospitality in a beautiful, serene environment. Whether you're here for a weekend getaway, a family celebration, a corporate event, or simply to enjoy our restaurant and facilities, we strive to make every visit memorable.
          </p>
          <p className="text-gray-700">
            We pride ourselves on our attention to detail, warm service, and commitment to creating experiences that exceed expectations.
          </p>
        </div>

        {/* Facilities Grid */}
        <h2 className="text-3xl text-center mb-12">Our Facilities</h2>
        <div className="grid grid-cols-1 gap-12">
          {facilities.map((facility, index) => (
            <Card key={index} className={index % 2 === 0 ? '' : 'bg-gray-50'}>
              <CardContent className="p-0">
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
                  <div className={`${index % 2 === 0 ? '' : 'md:col-start-2'}`}>
                    <ImageWithFallback
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <facility.icon className="w-12 h-12 text-red-600 mb-4" />
                    <h3 className="text-2xl mb-4">{facility.title}</h3>
                    <p className="text-gray-700">{facility.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center mb-12">Our Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl mb-4">Find Us</h3>
              <p className="text-gray-700 mb-4">
                HighPoint Resort is conveniently located in Olooloitikosh, Isinya, Kajiado County - in the beautiful suburbs of Kitengela.
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Address:</strong></p>
                <p>Olooloitikosh, Isinya</p>
                <p>Kajiado County, Kenya</p>
                <p className="mt-4"><strong>Contact:</strong></p>
                <p>Email: highpointresort@gmail.com</p>
                <p>Phone: +254 700 000 000</p>
              </div>
            </div>
            <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127643.02145866857!2d36.8219462!3d-1.3719264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a6bf7445dc1%3A0x940b62a3c8efde4c!2sKajiado%20County%2C%20Kenya!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
