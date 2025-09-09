import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { NavLink } from 'react-router-dom';
import { BookOpen, Users, Calendar, Award, ArrowRight, CheckCircle, Star } from 'lucide-react';
import heroImage from '@/assets/hero-education.jpg';

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Expert-Led Courses',
      description: 'Learn from industry professionals with years of experience in their fields.'
    },
    {
      icon: Users,
      title: 'Interactive Community',
      description: 'Connect with fellow learners and build your professional network.'
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Book consultations and study sessions that fit your busy lifestyle.'
    },
    {
      icon: Award,
      title: 'Certified Learning',
      description: 'Earn recognized certificates upon successful course completion.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Developer',
      content: 'The courses here transformed my career. The personalized consultation sessions were invaluable.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      content: 'Flexible scheduling and expert instructors made learning while working full-time possible.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX Designer',
      content: 'The community aspect really sets this platform apart. I found my mentor here!',
      rating: 5
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Students' },
    { number: '200+', label: 'Courses' },
    { number: '50+', label: 'Expert Instructors' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                🚀 Transform Your Career Today
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Learn, Grow, and 
                <span className="text-transparent bg-clip-text hero-gradient"> Succeed</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Master new skills with expert-led courses, personalized consultations, and a supportive learning community. Your journey to success starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <NavLink to="/courses">
                  <Button size="lg" className="bg-primary hover:bg-primary-dark shadow-hero transition-bounce">
                    Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </NavLink>
                <NavLink to="/consultation">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Book Consultation
                  </Button>
                </NavLink>
              </div>
            </div>
            <div className="lg:order-2">
              <img 
                src={heroImage} 
                alt="Students learning together in a modern educational environment"
                className="rounded-2xl shadow-hero w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Platform?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide everything you need to accelerate your learning journey and achieve your goals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-feature transition-smooth group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from our successful graduates.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-hero">
            <CardContent className="text-center py-16">
              <h2 className="text-4xl font-bold mb-4">Ready to Start Learning?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of successful students who have transformed their careers with our expert-led courses and personalized guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NavLink to="/courses">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    Browse Courses <BookOpen className="ml-2 h-5 w-5" />
                  </Button>
                </NavLink>
                <NavLink to="/consultation">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    Get Free Consultation
                  </Button>
                </NavLink>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;