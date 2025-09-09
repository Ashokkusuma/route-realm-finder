import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { NavLink, useSearchParams } from 'react-router-dom';
import { 
  Clock, Users, Star, BookOpen, Play, CheckCircle, 
  Award, Calendar, MessageCircle, Download, Share2,
  User, Globe, Linkedin, Twitter
} from 'lucide-react';

const CourseDetails = () => {
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get('id') || '1';

  // Mock course data - in real app, fetch by courseId
  const course = {
    id: parseInt(courseId),
    title: 'Full-Stack Web Development',
    instructor: {
      name: 'Dr. Sarah Johnson',
      avatar: '/placeholder.svg',
      bio: 'Senior Software Engineer with 10+ years experience at Google and Meta. PhD in Computer Science from Stanford.',
      rating: 4.9,
      students: 15000,
      courses: 8,
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      }
    },
    category: 'Programming',
    level: 'Beginner',
    duration: '12 weeks',
    students: 1200,
    rating: 4.9,
    reviews: 450,
    price: 299,
    originalPrice: 399,
    description: 'Master modern web development with React, Node.js, and database integration. This comprehensive course takes you from beginner to job-ready developer.',
    longDescription: 'This comprehensive full-stack web development course is designed to take you from a complete beginner to a job-ready developer. You\'ll learn modern JavaScript, React for frontend development, Node.js for backend, and MongoDB for database management. The course includes hands-on projects, code reviews, and career guidance.',
    tags: ['React', 'Node.js', 'MongoDB', 'JavaScript', 'HTML', 'CSS'],
    whatYouLearn: [
      'Build responsive web applications with React',
      'Create RESTful APIs with Node.js and Express',
      'Work with MongoDB and database design',
      'Implement user authentication and authorization',
      'Deploy applications to cloud platforms',
      'Follow industry best practices and coding standards'
    ],
    requirements: [
      'Basic computer skills',
      'No prior programming experience required',
      'Computer with internet connection',
      'Willingness to practice coding daily'
    ],
    curriculum: [
      {
        week: 1,
        title: 'HTML & CSS Fundamentals',
        lessons: 8,
        duration: '4 hours',
        topics: ['HTML Structure', 'CSS Styling', 'Responsive Design', 'Flexbox & Grid']
      },
      {
        week: 2,
        title: 'JavaScript Basics',
        lessons: 10,
        duration: '5 hours',
        topics: ['Variables & Data Types', 'Functions', 'Objects & Arrays', 'DOM Manipulation']
      },
      {
        week: 3,
        title: 'Advanced JavaScript',
        lessons: 8,
        duration: '4 hours',
        topics: ['ES6+ Features', 'Async Programming', 'APIs', 'Error Handling']
      },
      {
        week: 4,
        title: 'React Fundamentals',
        lessons: 12,
        duration: '6 hours',
        topics: ['Components', 'Props & State', 'Event Handling', 'Lifecycle Methods']
      },
      {
        week: 5,
        title: 'Advanced React',
        lessons: 10,
        duration: '5 hours',
        topics: ['Hooks', 'Context API', 'Routing', 'State Management']
      },
      {
        week: 6,
        title: 'Node.js & Express',
        lessons: 9,
        duration: '4.5 hours',
        topics: ['Server Setup', 'Routing', 'Middleware', 'File Handling']
      }
    ],
    reviewsList: [
      {
        name: 'Mike Chen',
        avatar: '/placeholder.svg',
        rating: 5,
        date: '2 weeks ago',
        content: 'Excellent course! Sarah explains complex concepts in a very understandable way. The projects are practical and relevant to real-world development.'
      },
      {
        name: 'Lisa Rodriguez',
        avatar: '/placeholder.svg',
        rating: 5,
        date: '1 month ago',
        content: 'This course changed my career. I went from knowing nothing about programming to landing my first developer job. Highly recommended!'
      },
      {
        name: 'David Kim',
        avatar: '/placeholder.svg',
        rating: 4,
        date: '2 months ago',
        content: 'Great content and structure. The hands-on approach really helps solidify the concepts. Would love to see more advanced topics in future modules.'
      }
    ]
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'Intermediate': return 'bg-accent/10 text-accent border-accent/20';
      case 'Advanced': return 'bg-destructive/10 text-destructive border-destructive/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-muted-foreground mb-6">
          <NavLink to="/courses" className="hover:text-primary">Courses</NavLink>
          <span className="mx-2">/</span>
          <span>{course.category}</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">{course.title}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className={getLevelColor(course.level)}>
                  {course.level}
                </Badge>
                <Badge variant="secondary">{course.category}</Badge>
              </div>
              
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{course.description}</p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{course.rating}</span>
                  <span>({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Globe className="h-4 w-4" />
                  <span>English</span>
                </div>
              </div>
            </div>

            {/* Video Preview */}
            <Card className="mb-8">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <Button size="lg" className="rounded-full w-16 h-16 bg-primary/20 hover:bg-primary/30 backdrop-blur-sm">
                  <Play className="h-8 w-8 text-primary" />
                </Button>
              </div>
            </Card>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="mb-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About This Course</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {course.longDescription}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>What You'll Learn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {course.whatYouLearn.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {course.requirements.map((req, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <span className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <div className="flex flex-wrap gap-2">
                  {course.tags.map(tag => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="curriculum">
                <div className="space-y-4">
                  {course.curriculum.map((week) => (
                    <Card key={week.week}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">
                            Week {week.week}: {week.title}
                          </CardTitle>
                          <div className="text-sm text-muted-foreground">
                            {week.lessons} lessons • {week.duration}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {week.topics.map((topic, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="instructor">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4 mb-6">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={course.instructor.avatar} />
                        <AvatarFallback>{course.instructor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{course.instructor.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span>{course.instructor.rating} rating</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{course.instructor.students.toLocaleString()} students</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <BookOpen className="h-4 w-4" />
                            <span>{course.instructor.courses} courses</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Linkedin className="h-4 w-4 mr-1" />
                            LinkedIn
                          </Button>
                          <Button size="sm" variant="outline">
                            <Twitter className="h-4 w-4 mr-1" />
                            Twitter
                          </Button>
                          <Button size="sm" variant="outline">
                            <Globe className="h-4 w-4 mr-1" />
                            Website
                          </Button>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {course.instructor.bio}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Student Reviews</h3>
                    <div className="flex items-center space-x-2">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="font-medium">{course.rating}</span>
                      <span className="text-muted-foreground">({course.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  {course.reviewsList.map((review, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-4">
                          <Avatar>
                            <AvatarImage src={review.avatar} />
                            <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold">{review.name}</h4>
                              <span className="text-sm text-muted-foreground">{review.date}</span>
                            </div>
                            <div className="flex items-center space-x-1 mb-3">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <p className="text-muted-foreground">{review.content}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-primary">${course.price}</span>
                    <span className="text-lg text-muted-foreground line-through">${course.originalPrice}</span>
                  </div>
                  <Badge className="bg-accent/10 text-accent border-accent/20">
                    25% OFF Limited Time
                  </Badge>
                </div>

                <div className="space-y-4 mb-6">
                  <Button className="w-full bg-primary hover:bg-primary-dark" size="lg">
                    Enroll Now
                  </Button>
                  <NavLink to="/consultation" className="block">
                    <Button variant="outline" className="w-full" size="lg">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Free Consultation
                    </Button>
                  </NavLink>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Level</span>
                    <Badge className={getLevelColor(course.level)} variant="outline">
                      {course.level}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Students</span>
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Certificate</span>
                    <Award className="h-4 w-4 text-secondary" />
                  </div>
                </div>

                <div className="border-t pt-4 mt-6">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-1" />
                      Syllabus
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;