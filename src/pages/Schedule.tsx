import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Calendar as CalendarIcon, Clock, Video, MessageCircle, 
  Plus, Edit, Trash2, Users, BookOpen, AlertCircle
} from 'lucide-react';
import { useState } from 'react';
import { format, isToday, isTomorrow } from 'date-fns';

const Schedule = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedTab, setSelectedTab] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: 'React Fundamentals - Live Session',
      type: 'course',
      date: new Date(2024, 11, 15, 10, 0),
      duration: 90,
      instructor: 'Dr. Sarah Johnson',
      avatar: '/placeholder.svg',
      attendees: 45,
      status: 'confirmed',
      meetingLink: 'https://meet.example.com/react-session'
    },
    {
      id: 2,
      title: 'Career Guidance Consultation',
      type: 'consultation',
      date: new Date(2024, 11, 16, 14, 30),
      duration: 45,
      instructor: 'Prof. Michael Chen',
      avatar: '/placeholder.svg',
      status: 'confirmed',
      meetingLink: 'https://meet.example.com/career-guidance'
    },
    {
      id: 3,
      title: 'JavaScript Deep Dive - Workshop',
      type: 'workshop',
      date: new Date(2024, 11, 18, 16, 0),
      duration: 120,
      instructor: 'Emily Rodriguez',
      avatar: '/placeholder.svg',
      attendees: 25,
      status: 'pending',
      meetingLink: 'https://meet.example.com/js-workshop'
    },
    {
      id: 4,
      title: 'Code Review Session',
      type: 'consultation',
      date: new Date(2024, 11, 20, 11, 0),
      duration: 60,
      instructor: 'Alex Kim',
      avatar: '/placeholder.svg',
      status: 'confirmed',
      meetingLink: 'https://meet.example.com/code-review'
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'HTML/CSS Basics - Live Session',
      type: 'course',
      date: new Date(2024, 11, 10, 9, 0),
      duration: 90,
      instructor: 'Dr. Sarah Johnson',
      avatar: '/placeholder.svg',
      attendees: 52,
      status: 'completed',
      recording: 'https://recordings.example.com/html-css'
    },
    {
      id: 6,
      title: 'Portfolio Review Consultation',
      type: 'consultation',
      date: new Date(2024, 11, 8, 15, 0),
      duration: 45,
      instructor: 'Alex Kim',
      avatar: '/placeholder.svg',
      status: 'completed',
      notes: 'Great progress on the design system implementation'
    }
  ];

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'course': return BookOpen;
      case 'consultation': return MessageCircle;
      case 'workshop': return Users;
      default: return CalendarIcon;
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'course': return 'bg-primary/10 text-primary border-primary/20';
      case 'consultation': return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'workshop': return 'bg-accent/10 text-accent border-accent/20';
      default: return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'pending': return 'bg-accent/10 text-accent border-accent/20';
      case 'completed': return 'bg-muted/10 text-muted-foreground border-muted/20';
      case 'cancelled': return 'bg-destructive/10 text-destructive border-destructive/20';
      default: return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  const getDateDisplay = (eventDate: Date) => {
    if (isToday(eventDate)) return 'Today';
    if (isTomorrow(eventDate)) return 'Tomorrow';
    return format(eventDate, 'MMM dd, yyyy');
  };

  const selectedDateEvents = upcomingEvents.filter(event => 
    format(event.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
  );

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">My Schedule</h1>
            <p className="text-muted-foreground">
              Manage your upcoming classes, consultations, and workshops
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary-dark">
            <Plus className="h-4 w-4 mr-2" />
            Book New Session
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CalendarIcon className="h-5 w-5 text-primary" />
                  <span>Calendar</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => newDate && setDate(newDate)}
                  className="rounded-md border-0"
                />
              </CardContent>
            </Card>

            {/* Selected Date Events */}
            {selectedDateEvents.length > 0 && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {getDateDisplay(date)} Events
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {selectedDateEvents.map(event => {
                    const EventIcon = getEventTypeIcon(event.type);
                    return (
                      <div key={event.id} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <EventIcon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">{event.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {format(event.date, 'h:mm a')} • {event.duration}min
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            )}

            {/* Quick Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">This Week</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Total Sessions</span>
                    <span className="font-semibold">8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Course Hours</span>
                    <span className="font-semibold">12.5h</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Consultations</span>
                    <span className="font-semibold">3</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="upcoming" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming" className="space-y-4">
                {upcomingEvents.map(event => {
                  const EventIcon = getEventTypeIcon(event.type);
                  return (
                    <Card key={event.id} className="shadow-card hover:shadow-feature transition-smooth">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                              <EventIcon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
                              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                                <CalendarIcon className="h-4 w-4" />
                                <span>{getDateDisplay(event.date)}</span>
                                <Clock className="h-4 w-4 ml-2" />
                                <span>{format(event.date, 'h:mm a')}</span>
                                <span>• {event.duration} min</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Avatar className="w-6 h-6">
                                  <AvatarImage src={event.avatar} />
                                  <AvatarFallback className="text-xs">
                                    {event.instructor.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="text-sm text-muted-foreground">{event.instructor}</span>
                                {event.attendees && (
                                  <>
                                    <Users className="h-4 w-4 ml-2 text-muted-foreground" />
                                    <span className="text-sm text-muted-foreground">{event.attendees}</span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start space-x-2">
                            <Badge className={getEventTypeColor(event.type)} variant="outline">
                              {event.type}
                            </Badge>
                            <Badge className={getStatusColor(event.status)} variant="outline">
                              {event.status}
                            </Badge>
                          </div>
                        </div>

                        {event.status === 'pending' && (
                          <div className="flex items-center space-x-2 mb-4 p-3 bg-accent/10 rounded-lg">
                            <AlertCircle className="h-4 w-4 text-accent" />
                            <span className="text-sm text-accent">Waiting for instructor confirmation</span>
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <div className="flex space-x-2">
                            {event.meetingLink && event.status === 'confirmed' && (
                              <Button size="sm" className="bg-primary hover:bg-primary-dark">
                                <Video className="h-4 w-4 mr-1" />
                                Join Meeting
                              </Button>
                            )}
                            <Button size="sm" variant="outline">
                              <MessageCircle className="h-4 w-4 mr-1" />
                              Message
                            </Button>
                          </div>
                          <div className="flex space-x-1">
                            <Button size="sm" variant="ghost">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </TabsContent>

              <TabsContent value="past" className="space-y-4">
                {pastEvents.map(event => {
                  const EventIcon = getEventTypeIcon(event.type);
                  return (
                    <Card key={event.id} className="shadow-card">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-muted/20 rounded-xl flex items-center justify-center">
                              <EventIcon className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
                              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                                <CalendarIcon className="h-4 w-4" />
                                <span>{format(event.date, 'MMM dd, yyyy')}</span>
                                <Clock className="h-4 w-4 ml-2" />
                                <span>{format(event.date, 'h:mm a')}</span>
                                <span>• {event.duration} min</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Avatar className="w-6 h-6">
                                  <AvatarImage src={event.avatar} />
                                  <AvatarFallback className="text-xs">
                                    {event.instructor.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="text-sm text-muted-foreground">{event.instructor}</span>
                                {event.attendees && (
                                  <>
                                    <Users className="h-4 w-4 ml-2 text-muted-foreground" />
                                    <span className="text-sm text-muted-foreground">{event.attendees}</span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                          <Badge className={getStatusColor(event.status)} variant="outline">
                            {event.status}
                          </Badge>
                        </div>

                        {event.notes && (
                          <div className="mb-4 p-3 bg-muted/30 rounded-lg">
                            <p className="text-sm text-muted-foreground italic">"{event.notes}"</p>
                          </div>
                        )}

                        <div className="flex space-x-2">
                          {event.recording && (
                            <Button size="sm" variant="outline">
                              <Video className="h-4 w-4 mr-1" />
                              View Recording
                            </Button>
                          )}
                          <Button size="sm" variant="outline">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            Feedback
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;