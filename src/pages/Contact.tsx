import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Mail, Phone, MapPin, Clock, MessageCircle, 
  HelpCircle, Users, BookOpen, Send
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@eduplatform.com',
      description: 'Send us an email anytime!',
      action: 'mailto:hello@eduplatform.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm',
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Education St, Learning City, LC 12345',
      description: 'Come say hello at our HQ',
      action: '#'
    },
    {
      icon: Clock,
      title: 'Support Hours',
      content: 'Monday - Friday: 8am - 6pm PST',
      description: 'Weekend: 10am - 4pm PST',
      action: '#'
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry', icon: MessageCircle },
    { value: 'courses', label: 'Course Questions', icon: BookOpen },
    { value: 'support', label: 'Technical Support', icon: HelpCircle },
    { value: 'partnership', label: 'Partnership Opportunities', icon: Users },
    { value: 'feedback', label: 'Feedback & Suggestions', icon: MessageCircle }
  ];

  const faqs = [
    {
      question: 'How do I enroll in a course?',
      answer: 'You can browse our courses and click "Enroll Now" on any course page. You\'ll need to create an account and complete the payment process.'
    },
    {
      question: 'Can I get a refund if I\'m not satisfied?',
      answer: 'Yes! We offer a 30-day money-back guarantee for all our courses. Contact support if you\'d like to request a refund.'
    },
    {
      question: 'Do you offer certificates upon completion?',
      answer: 'Yes, you\'ll receive a certificate of completion for every course you finish. Our certificates are recognized by industry leaders.'
    },
    {
      question: 'How does the consultation service work?',
      answer: 'You can book one-on-one consultations with our expert instructors. Choose your preferred time slot and receive personalized guidance on your learning journey.'
    },
    {
      question: 'Are there any prerequisites for courses?',
      answer: 'Course prerequisites are listed on each course page. Many of our beginner courses require no prior experience, while advanced courses may have specific requirements.'
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our courses or need support? We're here to help you succeed in your learning journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="h-5 w-5 text-primary" />
                  <span>Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name *</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name *</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Email Address *</label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Phone Number</label>
                  <Input type="tel" placeholder="Enter your phone number (optional)" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Inquiry Type *</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="What can we help you with?" />
                    </SelectTrigger>
                    <SelectContent>
                      {inquiryTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex items-center space-x-2">
                            <type.icon className="h-4 w-4" />
                            <span>{type.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Subject *</label>
                  <Input placeholder="Brief subject line for your inquiry" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message *</label>
                  <Textarea 
                    placeholder="Tell us more about your question or how we can help you..."
                    rows={6}
                  />
                </div>

                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <input type="checkbox" id="newsletter" className="rounded" />
                  <label htmlFor="newsletter">
                    I'd like to receive updates about new courses and educational content
                  </label>
                </div>

                <Button className="w-full bg-primary hover:bg-primary-dark" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We typically respond within 24 hours during business days.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-card hover:shadow-feature transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-foreground font-medium mb-1">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Links */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Browse Courses
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Book Consultation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Help Center
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Student Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Find quick answers to common questions about our courses and services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-start space-x-2">
                    <HelpCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Can't find what you're looking for?
            </p>
            <Button variant="outline">
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact Support
            </Button>
          </div>
        </section>

        {/* Map or Office Hours */}
        <section className="mt-16">
          <Card className="shadow-card">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Visit Our Campus</h3>
                  <p className="text-muted-foreground mb-6">
                    Located in the heart of the tech district, our modern campus features 
                    state-of-the-art classrooms, collaborative spaces, and a vibrant learning environment.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>123 Education Street, Learning City, LC 12345</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>Open Monday - Friday, 8:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contact;