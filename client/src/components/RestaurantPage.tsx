import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

export function RestaurantPage() {
  const [reservationDate, setReservationDate] = useState<Date>();

  const menuCategories = {
    breakfast: [
      { name: 'Full English Breakfast', price: 'KES 850', description: 'Eggs, bacon, sausage, beans, toast' },
      { name: 'Continental Breakfast', price: 'KES 650', description: 'Croissants, fruits, yogurt, juice' },
      { name: 'Pancake Stack', price: 'KES 700', description: 'Fluffy pancakes with syrup and berries' },
      { name: 'Omelette', price: 'KES 600', description: 'Three-egg omelette with choice of fillings' }
    ],
    starters: [
      { name: 'Caesar Salad', price: 'KES 750', description: 'Crisp romaine, parmesan, croutons' },
      { name: 'Chicken Wings', price: 'KES 850', description: 'Buffalo or BBQ sauce' },
      { name: 'Soup of the Day', price: 'KES 500', description: 'Chef\'s daily selection' },
      { name: 'Spring Rolls', price: 'KES 600', description: 'Vegetable spring rolls with sweet chili' }
    ],
    mains: [
      { name: 'Grilled Tilapia', price: 'KES 1,400', description: 'Fresh tilapia with vegetables and ugali' },
      { name: 'Beef Steak', price: 'KES 1,800', description: 'Premium cut with fries and pepper sauce' },
      { name: 'Chicken Tikka', price: 'KES 1,200', description: 'Marinated chicken with rice and naan' },
      { name: 'Vegetable Pasta', price: 'KES 1,000', description: 'Penne with seasonal vegetables' },
      { name: 'Nyama Choma', price: 'KES 1,500', description: 'Traditional grilled meat with sides' },
      { name: 'Fish & Chips', price: 'KES 1,100', description: 'Beer-battered fish with fries' }
    ],
    desserts: [
      { name: 'Chocolate Lava Cake', price: 'KES 550', description: 'Warm chocolate cake with ice cream' },
      { name: 'Cheesecake', price: 'KES 500', description: 'Classic New York style' },
      { name: 'Fresh Fruit Platter', price: 'KES 450', description: 'Seasonal tropical fruits' },
      { name: 'Ice Cream', price: 'KES 400', description: 'Three scoops, choice of flavors' }
    ],
    drinks: [
      { name: 'Fresh Juices', price: 'KES 300', description: 'Orange, mango, passion, or mixed' },
      { name: 'Smoothies', price: 'KES 450', description: 'Berry, tropical, or green' },
      { name: 'Soft Drinks', price: 'KES 150', description: 'Assorted sodas' },
      { name: 'Coffee/Tea', price: 'KES 250', description: 'Premium selection' },
      { name: 'Cocktails', price: 'KES 600', description: 'Classic and signature cocktails' },
      { name: 'Wine by Glass', price: 'KES 500', description: 'Red or white' }
    ]
  };

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your reservation request has been received. We will contact you shortly to confirm.');
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[400px]">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1543539571-2d88da875d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzYwNjgxNzA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl mb-4">Restaurant & Bar</h1>
            <p className="text-xl">Exquisite dining experiences</p>
          </div>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl mb-4">Welcome to Our Restaurant</h2>
          <p className="text-gray-700">
            Experience a culinary journey with our diverse menu featuring local and international cuisine. 
            Our chefs use only the freshest ingredients to create memorable dining experiences.
          </p>
        </div>

        {/* Opening Hours */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl mb-2">Breakfast</h3>
              <p className="text-gray-600">7:00 AM - 10:00 AM</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl mb-2">Lunch</h3>
              <p className="text-gray-600">12:00 PM - 3:00 PM</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl mb-2">Dinner</h3>
              <p className="text-gray-600">6:00 PM - 10:00 PM</p>
            </CardContent>
          </Card>
        </div>

        {/* Menu */}
        <div className="mb-16">
          <h2 className="text-3xl text-center mb-8">Our Menu</h2>
          <Tabs defaultValue="mains" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 mb-8">
              <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
              <TabsTrigger value="starters">Starters</TabsTrigger>
              <TabsTrigger value="mains">Mains</TabsTrigger>
              <TabsTrigger value="desserts">Desserts</TabsTrigger>
              <TabsTrigger value="drinks">Drinks</TabsTrigger>
            </TabsList>

            {Object.entries(menuCategories).map(([category, items]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {items.map((item, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg">{item.name}</h4>
                          <span className="text-red-600">{item.price}</span>
                        </div>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl text-center mb-8">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1750943082020-4969b2a63084?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRpbmd8ZW58MXx8fHwxNzYwNzc4NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Gourmet Food"
              className="w-full h-64 object-cover rounded-lg"
            />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1714596428132-08574e996bd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGRyaW5rcyUyMGJhcnxlbnwxfHx8fDE3NjA3NjExMjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Cocktails"
              className="w-full h-64 object-cover rounded-lg"
            />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1543539571-2d88da875d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzYwNjgxNzA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Dining Area"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Reservation Form */}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl mb-6 text-center">Make a Reservation</h2>
              <form onSubmit={handleReservationSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" required placeholder="John Doe" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" required placeholder="+254 700 000 000" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="guests">Number of Guests *</Label>
                    <Input id="guests" type="number" min="1" required defaultValue="2" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {reservationDate ? format(reservationDate, 'PPP') : 'Select date'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={reservationDate}
                          onSelect={setReservationDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label htmlFor="time">Time *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="12:30">12:30 PM</SelectItem>
                        <SelectItem value="13:00">1:00 PM</SelectItem>
                        <SelectItem value="13:30">1:30 PM</SelectItem>
                        <SelectItem value="18:00">6:00 PM</SelectItem>
                        <SelectItem value="18:30">6:30 PM</SelectItem>
                        <SelectItem value="19:00">7:00 PM</SelectItem>
                        <SelectItem value="19:30">7:30 PM</SelectItem>
                        <SelectItem value="20:00">8:00 PM</SelectItem>
                        <SelectItem value="20:30">8:30 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="special">Special Requests</Label>
                  <Textarea
                    id="special"
                    placeholder="Any dietary requirements or special occasions?"
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Submit Reservation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
