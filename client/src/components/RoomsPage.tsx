import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { CalendarIcon, Users, Bed, Wifi, Tv, Wind } from 'lucide-react';
import { format } from 'date-fns';

export function RoomsPage() {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  const rooms = [
    {
      title: 'Deluxe Room',
      description: 'Spacious and elegantly furnished with modern amenities',
      price: 'KES 8,000',
      guests: '2 Adults',
      beds: '1 King Bed',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzYwNzM2MjcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      amenities: ['Free WiFi', 'Air Conditioning', 'Flat Screen TV', 'En-suite Bathroom', 'Mini Bar', 'Room Service']
    },
    {
      title: 'Executive Suite',
      description: 'Luxurious suite with separate living area and premium features',
      price: 'KES 12,000',
      guests: '3 Adults',
      beds: '1 King Bed + Sofa Bed',
      image: 'https://images.unsplash.com/photo-1744000311897-510b64f9a2e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN1aXRlJTIwYmVkcm9vbXxlbnwxfHx8fDE3NjA3NzU5NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      amenities: ['Free WiFi', 'Air Conditioning', 'Flat Screen TV', 'Jacuzzi', 'Mini Bar', 'Balcony', 'Room Service']
    },
    {
      title: 'Family Room',
      description: 'Perfect for families with children, spacious and comfortable',
      price: 'KES 10,000',
      guests: '4 Adults + 2 Children',
      beds: '2 Queen Beds',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzYwNzM2MjcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      amenities: ['Free WiFi', 'Air Conditioning', 'Flat Screen TV', 'En-suite Bathroom', 'Play Area Access', 'Room Service']
    },
    {
      title: 'Standard Room',
      description: 'Comfortable accommodation with essential amenities',
      price: 'KES 6,000',
      guests: '2 Adults',
      beds: '1 Queen Bed',
      image: 'https://images.unsplash.com/photo-1744000311897-510b64f9a2e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN1aXRlJTIwYmVkcm9vbXxlbnwxfHx8fDE3NjA3NzU5NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      amenities: ['Free WiFi', 'Air Conditioning', 'Flat Screen TV', 'En-suite Bathroom']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[400px]">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzYwNzM2MjcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Rooms"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl mb-4">Our Rooms</h1>
            <p className="text-xl">Comfort and luxury for every guest</p>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="bg-white shadow-md py-8 -mt-16 relative z-10">
        <div className="container mx-auto px-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl mb-6">Check Availability</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <Label>Check-in</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkIn ? format(checkIn, 'PPP') : 'Select date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={checkIn}
                        onSelect={setCheckIn}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <Label>Check-out</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkOut ? format(checkOut, 'PPP') : 'Select date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={checkOut}
                        onSelect={setCheckOut}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <Label>Guests</Label>
                  <Input type="number" placeholder="2" min="1" defaultValue="2" />
                </div>
                <div className="flex items-end">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Check Availability
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Rooms Gallery */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8">
          {rooms.map((room, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  <div className="md:col-span-1">
                    <ImageWithFallback
                      src={room.image}
                      alt={room.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="flex flex-col h-full">
                      <div className="flex-1">
                        <h3 className="text-2xl mb-2">{room.title}</h3>
                        <p className="text-gray-600 mb-4">{room.description}</p>
                        
                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-700">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-red-600" />
                            {room.guests}
                          </div>
                          <div className="flex items-center gap-2">
                            <Bed className="w-4 h-4 text-red-600" />
                            {room.beds}
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="text-sm mb-2">Amenities:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {room.amenities.map((amenity, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                {amenity.includes('WiFi') && <Wifi className="w-4 h-4 text-red-600" />}
                                {amenity.includes('TV') && <Tv className="w-4 h-4 text-red-600" />}
                                {amenity.includes('Air') && <Wind className="w-4 h-4 text-red-600" />}
                                <span>{amenity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div>
                          <p className="text-sm text-gray-600">Starting from</p>
                          <p className="text-2xl text-red-600">{room.price}<span className="text-sm text-gray-600">/night</span></p>
                        </div>
                        <Button className="bg-red-600 hover:bg-red-700 text-white">
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl mb-6 text-center">Check-in Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <div>
                <h4 className="mb-2">Check-in Time</h4>
                <p className="text-gray-700">2:00 PM</p>
              </div>
              <div>
                <h4 className="mb-2">Check-out Time</h4>
                <p className="text-gray-700">11:00 AM</p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6 text-sm">
              Early check-in and late check-out available upon request (subject to availability)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
