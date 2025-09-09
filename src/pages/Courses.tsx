import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { NavLink } from 'react-router-dom';
import { Clock, Users, Star, BookOpen, Search, Filter } from 'lucide-react';
import { useState } from 'react';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'Full-Stack Web Development',
      instructor: 'Dr. Sarah Johnson',
      category: 'Programming',
      level: 'Beginner',
      duration: '12 weeks',
      students: 1200,
      rating: 4.9,
      price: 299,
      image: '/placeholder.svg',
      description: 'Master modern web development with React, Node.js, and database integration.',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Data Science & Analytics',
      instructor: 'Prof. Michael Chen',
      category: 'Data Science',
      level: 'Intermediate',
      duration: '16 weeks',
      students: 850,
      rating: 4.8,
      price: 399,
      image: '/placeholder.svg',
      description: 'Learn Python, machine learning, and data visualization for real-world applications.',
      tags: ['Python', 'ML', 'Pandas']
    },
    {
      id: 3,
      title: 'Digital Marketing Mastery',
      instructor: 'Emily Rodriguez',
      category: 'Marketing',
      level: 'Beginner',
      duration: '8 weeks',
      students: 2100,
      rating: 4.7,
      price: 199,
      image: '/placeholder.svg',
      description: 'Complete guide to social media, SEO, and content marketing strategies.',
      tags: ['SEO', 'Social Media', 'Analytics']
    },
    {
      id: 4,
      title: 'UI/UX Design Fundamentals',
      instructor: 'Alex Kim',
      category: 'Design',
      level: 'Beginner',
      duration: '10 weeks',
      students: 950,
      rating: 4.9,
      price: 249,
      image: '/placeholder.svg',
      description: 'Create beautiful and functional user interfaces with modern design principles.',
      tags: ['Figma', 'Prototyping', 'User Research']
    },
    {
      id: 5,
      title: 'Cloud Computing with AWS',
      instructor: 'David Thompson',
      category: 'Cloud',
      level: 'Advanced',
      duration: '14 weeks',
      students: 600,
      rating: 4.8,
      price: 449,
      image: '/placeholder.svg',
      description: 'Master AWS services and cloud architecture for scalable applications.',
      tags: ['AWS', 'Docker', 'Kubernetes']
    },
    {
      id: 6,
      title: 'Business Analytics',
      instructor: 'Lisa Wang',
      category: 'Business',
      level: 'Intermediate',
      duration: '12 weeks',
      students: 750,
      rating: 4.6,
      price: 329,
      image: '/placeholder.svg',
      description: 'Use data to drive business decisions and improve organizational performance.',
      tags: ['Excel', 'Tableau', 'Statistics']
    }
  ];

  const categories = ['all', 'Programming', 'Data Science', 'Marketing', 'Design', 'Cloud', 'Business'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = categoryFilter === 'all' || course.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

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
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Explore Our Courses</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover expert-led courses designed to help you master new skills and advance your career.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search courses, instructors, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredCourses.length} of {courses.length} courses
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <Card key={course.id} className="shadow-card hover:shadow-feature transition-smooth group">
              <div className="aspect-video bg-muted rounded-t-lg mb-4 flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-muted-foreground" />
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge className={getLevelColor(course.level)}>
                    {course.level}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-smooth">
                  {course.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground mb-3">
                  by {course.instructor}
                </p>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {course.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  {course.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between">
                <div className="text-2xl font-bold text-primary">
                  ${course.price}
                </div>
                <NavLink to={`/course-details?id=${course.id}`}>
                  <Button className="bg-primary hover:bg-primary-dark">
                    View Details
                  </Button>
                </NavLink>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No courses found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search terms or category filter.
            </p>
            <Button
              onClick={() => {
                setSearchTerm('');
                setCategoryFilter('all');
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;