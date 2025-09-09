import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { NavLink } from 'react-router-dom';
import { 
  Target, Users, Award, BookOpen, Heart, Globe, 
  Linkedin, Twitter, Github, Star, ArrowRight
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: '10,000+', label: 'Students Served', icon: Users },
    { number: '200+', label: 'Courses Available', icon: BookOpen },
    { number: '50+', label: 'Expert Instructors', icon: Award },
    { number: '95%', label: 'Success Rate', icon: Star }
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Founder & CEO',
      specialty: 'Full-Stack Development',
      bio: 'Former Google engineer with a passion for education. PhD in Computer Science from Stanford.',
      avatar: '/placeholder.svg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Head of Data Science',
      specialty: 'Machine Learning & AI',
      bio: 'Former Tesla AI researcher, published 50+ papers in machine learning and data science.',
      avatar: '/placeholder.svg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director of Marketing',
      specialty: 'Digital Marketing',
      bio: 'Marketing expert who helped 100+ companies scale their digital presence.',
      avatar: '/placeholder.svg',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Alex Kim',
      role: 'Lead UX Designer',
      specialty: 'UI/UX Design',
      bio: 'Award-winning designer who worked at Apple, Meta, and leading design agencies.',
      avatar: '/placeholder.svg',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'David Thompson',
      role: 'Cloud Architect',
      specialty: 'DevOps & Cloud',
      bio: 'AWS certified architect with experience building scalable systems at Fortune 500 companies.',
      avatar: '/placeholder.svg',
      social: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Lisa Wang',
      role: 'Business Analyst',
      specialty: 'Business Strategy',
      bio: 'Former McKinsey consultant specialized in business transformation and analytics.',
      avatar: '/placeholder.svg',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence in Education',
      description: 'We are committed to providing the highest quality educational content and experiences that truly transform careers.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We believe in the power of community and peer learning to accelerate growth and success.'
    },
    {
      icon: Heart,
      title: 'Passion for Growth',
      description: 'We are passionate about helping individuals unlock their potential and achieve their dreams.'
    },
    {
      icon: Globe,
      title: 'Accessible Learning',
      description: 'We make high-quality education accessible to everyone, regardless of background or location.'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Started with a mission to democratize quality education and bridge the skills gap in tech.'
    },
    {
      year: '2021',
      title: 'First 1,000 Students',
      description: 'Reached our first major milestone with students from over 30 countries.'
    },
    {
      year: '2022',
      title: 'Partnership Program',
      description: 'Launched partnerships with leading tech companies for job placement assistance.'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded to serve students in over 50 countries with localized content.'
    },
    {
      year: '2024',
      title: '10,000 Graduates',
      description: 'Celebrated 10,000 successful graduates with 95% job placement rate.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Empowering Careers Through 
              <span className="text-transparent bg-clip-text hero-gradient"> Expert Education</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're on a mission to bridge the skills gap and transform careers by providing 
              world-class education, personalized mentorship, and a supportive learning community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink to="/courses">
                <Button size="lg" className="bg-primary hover:bg-primary-dark">
                  Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </NavLink>
              <NavLink to="/contact">
                <Button size="lg" variant="outline">
                  Get in Touch
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-card">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Mission & Values</h2>
            <p className="text-xl text-muted-foreground">
              We believe that everyone deserves access to quality education that can transform their career and life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-card hover:shadow-feature transition-smooth text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our instructors are industry leaders with years of experience at top companies and a passion for teaching.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="shadow-card hover:shadow-feature transition-smooth">
                <CardContent className="pt-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback className="text-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-1">{member.role}</p>
                  <Badge variant="secondary" className="mb-4">{member.specialty}</Badge>
                  
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="flex justify-center space-x-2">
                    {member.social.linkedin && (
                      <Button size="sm" variant="outline">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    )}
                    {member.social.twitter && (
                      <Button size="sm" variant="outline">
                        <Twitter className="h-4 w-4" />
                      </Button>
                    )}
                    {member.social.github && (
                      <Button size="sm" variant="outline">
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              From a small idea to a global platform transforming thousands of careers.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-16 bg-border mt-4"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold">{milestone.title}</h3>
                      <Badge variant="secondary">{milestone.year}</Badge>
                    </div>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="text-center py-16">
              <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Career?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of successful professionals who have accelerated their careers with our expert-led courses and personalized guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NavLink to="/courses">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    Browse Courses <BookOpen className="ml-2 h-5 w-5" />
                  </Button>
                </NavLink>
                <NavLink to="/consultation">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    Free Consultation
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

export default About;