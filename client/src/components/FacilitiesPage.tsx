import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Waves, Baby, TreePine, Users } from 'lucide-react';

export function FacilitiesPage() {
  const facilities = [
    {
      icon: Waves,
      title: 'Swimming Pool',
      description: 'Our crystal-clear swimming pool offers the perfect spot for relaxation and recreation. Enjoy poolside service, comfortable loungers, and a safe, well-maintained environment for swimmers of all ages.',
      features: [
        'Open daily 7:00 AM - 8:00 PM',
        'Depth: 1.2m - 2.5m',
        'Pool bar service available',
        'Changing rooms and showers',
        'Pool towels provided',
        'Lifeguard on duty'
      ],
      images: [
        'https://images.unsplash.com/photo-1738407282253-979e31f45785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHBvb2x8ZW58MXx8fHwxNzYwNzkxNjg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1738407282253-979e31f45785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHBvb2x8ZW58MXx8fHwxNzYwNzkxNjg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1738407282253-979e31f45785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHBvb2x8ZW58MXx8fHwxNzYwNzkxNjg5fDA&ixlib=rb-4.1.0&q=80&w=1080'
      ]
    },
    {
      icon: Baby,
      title: 'Children\'s Play Area',
      description: 'A dedicated, safe, and exciting play area for children featuring trampolines and bouncing castles. Kids can enjoy hours of fun while parents relax knowing their children are in a secure, supervised environment.',
      features: [
        'Trampolines of various sizes',
        'Inflatable bouncing castles',
        'Supervised play sessions',
        'Age-appropriate zones',
        'Safety mats and padding',
        'Open 9:00 AM - 7:00 PM'
      ],
      images: [
        'https://images.unsplash.com/photo-1654343532574-53e699fe0cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlncm91bmQlMjBvdXRkb29yfGVufDF8fHx8MTc2MDc1OTI2NXww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1654343532574-53e699fe0cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlncm91bmQlMjBvdXRkb29yfGVufDF8fHx8MTc2MDc1OTI2NXww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1654343532574-53e699fe0cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlncm91bmQlMjBvdXRkb29yfGVufDF8fHx8MTc2MDc1OTI2NXww&ixlib=rb-4.1.0&q=80&w=1080'
      ]
    },
    {
      icon: TreePine,
      title: 'Aesthetic Gardens',
      description: 'Our beautifully landscaped gardens provide a tranquil oasis perfect for leisurely walks, photography, or simply enjoying nature. The gardens feature a variety of indigenous and exotic plants, creating a stunning backdrop for any occasion.',
      features: [
        'Landscaped walking paths',
        'Photo-worthy spots',
        'Outdoor seating areas',
        'Garden weddings available',
        'Variety of flora and fauna',
        'Well-maintained lawns'
      ],
      images: [
        'https://images.unsplash.com/photo-1532302780319-95689ab9d79a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGdhcmRlbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjA3OTE2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1532302780319-95689ab9d79a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGdhcmRlbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjA3OTE2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1532302780319-95689ab9d79a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGdhcmRlbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjA3OTE2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080'
      ]
    },
    {
      icon: Users,
      title: 'Conference Rooms',
      description: 'State-of-the-art conference facilities equipped with modern technology and comfortable seating. Perfect for corporate meetings, seminars, training sessions, and special events.',
      features: [
        'Multiple room sizes available',
        'Capacity: 20-200 people',
        'High-speed WiFi',
        'Projector and AV equipment',
        'Whiteboard and flip charts',
        'Catering services available',
        'Professional event support'
      ],
      images: [
        'https://images.unsplash.com/photo-1744095407215-66e40734e23a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcm9vbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNjk5MDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1744095407215-66e40734e23a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcm9vbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNjk5MDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1744095407215-66e40734e23a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcm9vbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNjk5MDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[400px]">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1607320874448-d33f052651e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGV4dGVyaW9yJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MDc3Mzk5OXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Facilities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl mb-4">Our Facilities</h1>
            <p className="text-xl">Everything you need for the perfect stay</p>
          </div>
        </div>
      </div>

      {/* Facilities Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-20">
          {facilities.map((facility, index) => (
            <div key={index} className={`${index !== 0 ? 'pt-16 border-t border-gray-200' : ''}`}>
              {/* Title & Icon */}
              <div className="text-center mb-8">
                <facility.icon className="w-16 h-16 mx-auto mb-4 text-red-600" />
                <h2 className="text-3xl mb-4">{facility.title}</h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  {facility.description}
                </p>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {facility.images.map((image, imgIndex) => (
                  <ImageWithFallback
                    key={imgIndex}
                    src={image}
                    alt={`${facility.title} ${imgIndex + 1}`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                ))}
              </div>

              {/* Features */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">Features & Amenities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {facility.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Ready to Experience Our Facilities?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Whether you're planning a relaxing getaway, a family celebration, or a corporate event, 
            our facilities are designed to make your visit unforgettable.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded transition-colors">
              Book Now
            </button>
            <button className="px-8 py-3 bg-white hover:bg-gray-100 text-black border border-gray-300 rounded transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
