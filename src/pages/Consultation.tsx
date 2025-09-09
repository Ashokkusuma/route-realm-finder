import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  CalendarDays, Clock, MessageCircle, Video, Users, 
  Star, CheckCircle, User, Mail, Phone, Calendar as CalendarIcon
} from 'lucide-react';
import { useState } from 'react';
import { format } from 'date-fns';

const Consultation = () => {
  const [date, setDate] = useState<Date>();
  const [selectedExpert, setSelectedExpert] = useState('');
  const [consultationType, setConsultationType] = useState('');

  const experts = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      specialty: 'Full-Stack Development',
      experience: '10+ years',
      rating: 4.9,
      reviews: 450,
      price: 75,
      avatar: '/placeholder.svg',
      bio: 'Former Google engineer specializing in React, Node.js, and system design.',
      availability: 'Available today'
    },
    {
      id: '2',
      name: 'Prof. Michael Chen',
      specialty: 'Data Science & AI',
      experience: '12+ years',
      rating: 4.8,
      reviews: 320,
      price: 85,
      avatar: '/placeholder.svg',
      bio: 'PhD in Machine Learning, former Tesla AI researcher.',
      availability: 'Available tomorrow'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      specialty: 'Digital Marketing',
      experience: '8+ years',
      rating: 4.9,
      reviews: 280,
      price: 65,
      avatar: '/placeholder.svg',
      bio: 'Marketing Director at top tech companies, growth strategy expert.',
      availability: 'Available this week'
    },
    {
      id: '4',
      name: 'Alex Kim',
      specialty: 'UI/UX Design',
      experience: '9+ years',
      rating: 4.7,
      reviews: 195,
      price: 70,
      avatar: '/placeholder.svg',
      bio: 'Senior Designer at Apple, specializing in mobile and web interfaces.',
      availability: 'Available next week'
    }
  ];

  const consultationTypes = [
    {
      type: 'career-guidance',
      title: 'Career Guidance',
      duration: '45 minutes',
      description: 'Get personalized career advice and roadmap planning',
      icon: Users
    },
    {
      type: 'technical-review',
      title: 'Technical Review',
      duration: '60 minutes',
      description: 'Code review, architecture discussion, and best practices',
      icon: CheckCircle
    },
    {
      type: 'project-consultation',
      title: 'Project Consultation',
      duration: '30 minutes',
      description: 'Discuss your project ideas and get expert feedback',
      icon: MessageCircle
    },
    {
      type: 'interview-prep',
      title: 'Interview Preparation',
      duration: '60 minutes',
      description: 'Mock interviews and technical interview preparation',
      icon: Video
    }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM'
  ];

  const getAvailabilityColor = (availability: string) => {
    if (availability.includes('today')) return 'bg-secondary/10 text-secondary border-secondary/20';
    if (availability.includes('tomorrow')) return 'bg-accent/10 text-accent border-accent/20';
    return 'bg-muted/10 text-muted-foreground border-muted/20';
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Book a Consultation</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get personalized guidance from industry experts. Choose your consultation type and expert to get started.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Consultation Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Consultation Types */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <span>Select Consultation Type</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {consultationTypes.map((type) => (
                    <Card 
                      key={type.type}
                      className={`cursor-pointer transition-smooth border-2 ${
                        consultationType === type.type 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setConsultationType(type.type)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <type.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{type.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{type.description}</p>
                            <Badge variant="secondary" className="text-xs">
                              {type.duration}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Expert Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Choose Your Expert</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {experts.map((expert) => (
                    <Card 
                      key={expert.id}
                      className={`cursor-pointer transition-smooth border-2 ${
                        selectedExpert === expert.id 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedExpert(expert.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <Avatar className="w-16 h-16">
                            <AvatarImage src={expert.avatar} />
                            <AvatarFallback>{expert.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="font-semibold text-lg">{expert.name}</h3>
                                <p className="text-primary font-medium">{expert.specialty}</p>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-primary">${expert.price}</div>
                                <div className="text-sm text-muted-foreground">per session</div>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{expert.bio}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4 text-sm">
                                <div className="flex items-center space-x-1">
                                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                  <span>{expert.rating}</span>
                                  <span className="text-muted-foreground">({expert.reviews})</span>
                                </div>
                                <div className="text-muted-foreground">{expert.experience}</div>
                              </div>
                              <Badge className={getAvailabilityColor(expert.availability)}>
                                {expert.availability}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-primary" />
                  <span>Your Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone (Optional)</label>
                  <Input type="tel" placeholder="Enter your phone number" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">What would you like to discuss?</label>
                  <Textarea 
                    placeholder="Brief description of your goals and what you'd like to get out of this consultation..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  <span>Schedule Your Session</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Date Selection */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Choose Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time Selection */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Choose Time</label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant="outline"
                        size="sm"
                        className="text-xs"
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Summary */}
                {consultationType && selectedExpert && (
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-3">Booking Summary</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Type:</span>
                        <span>{consultationTypes.find(t => t.type === consultationType)?.title}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span>{consultationTypes.find(t => t.type === consultationType)?.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Expert:</span>
                        <span>{experts.find(e => e.id === selectedExpert)?.name}</span>
                      </div>
                      <div className="flex justify-between font-semibold">
                        <span>Total:</span>
                        <span className="text-primary">${experts.find(e => e.id === selectedExpert)?.price}</span>
                      </div>
                    </div>
                  </div>
                )}

                <Button 
                  className="w-full bg-primary hover:bg-primary-dark" 
                  size="lg"
                  disabled={!consultationType || !selectedExpert || !date}
                >
                  Book Consultation
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 inline mr-1" />
                  Free cancellation up to 24 hours before
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;