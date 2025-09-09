import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { NavLink } from 'react-router-dom';
import { BookOpen, Clock, Trophy, TrendingUp, Calendar, Play, CheckCircle } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { title: 'Courses Enrolled', value: '5', icon: BookOpen, change: '+2 this month' },
    { title: 'Hours Learned', value: '87', icon: Clock, change: '+12 this week' },
    { title: 'Certificates', value: '3', icon: Trophy, change: '1 pending' },
    { title: 'Streak', value: '15 days', icon: TrendingUp, change: 'Keep going!' }
  ];

  const currentCourses = [
    { title: 'React Fundamentals', progress: 75, nextLesson: 'State Management', instructor: 'Dr. Sarah Johnson' },
    { title: 'Node.js Backend', progress: 45, nextLesson: 'Database Integration', instructor: 'Prof. Michael Chen' },
    { title: 'UI/UX Design', progress: 90, nextLesson: 'Final Project', instructor: 'Alex Kim' }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome back, John!</h1>
          <p className="text-muted-foreground">Continue your learning journey</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-secondary">{stat.change}</p>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Current Courses */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Continue Learning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentCourses.map((course, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">{course.instructor}</p>
                    </div>
                    <Badge variant="secondary">{course.progress}%</Badge>
                  </div>
                  <Progress value={course.progress} className="mb-3" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Next: {course.nextLesson}</span>
                    <Button size="sm" className="bg-primary hover:bg-primary-dark">
                      <Play className="h-4 w-4 mr-1" />
                      Continue
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <NavLink to="/courses" className="block">
                <Button className="w-full justify-start" variant="outline">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Explore New Courses
                </Button>
              </NavLink>
              <NavLink to="/consultation" className="block">
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Consultation
                </Button>
              </NavLink>
              <NavLink to="/schedule" className="block">
                <Button className="w-full justify-start" variant="outline">
                  <Clock className="h-4 w-4 mr-2" />
                  View Schedule
                </Button>
              </NavLink>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;