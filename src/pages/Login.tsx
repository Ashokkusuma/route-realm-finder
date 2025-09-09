import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { NavLink } from 'react-router-dom';
import { 
  Mail, Lock, Eye, EyeOff, BookOpen, 
  Chrome, Github, Apple, ArrowRight
} from 'lucide-react';
import { useState } from 'react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="w-full max-w-4xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Welcome Content */}
        <div className="hidden lg:block space-y-6">
          <div className="flex items-center space-x-2 text-primary">
            <BookOpen className="h-8 w-8" />
            <span className="text-2xl font-bold">EduPlatform</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">
              Welcome to Your
              <span className="text-transparent bg-clip-text hero-gradient block">
                Learning Journey
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join thousands of learners who are transforming their careers with expert-led courses, 
              personalized consultations, and a supportive community.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-primary" />
              </div>
              <span className="text-muted-foreground">Access 200+ expert-led courses</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-secondary" />
              </div>
              <span className="text-muted-foreground">Get personalized learning paths</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                <Eye className="h-4 w-4 text-accent" />
              </div>
              <span className="text-muted-foreground">Track your progress and achievements</span>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>Trusted by students from</p>
            <div className="flex items-center space-x-4 mt-2 text-xs">
              <span className="px-2 py-1 bg-muted rounded">Google</span>
              <span className="px-2 py-1 bg-muted rounded">Microsoft</span>
              <span className="px-2 py-1 bg-muted rounded">Apple</span>
              <span className="px-2 py-1 bg-muted rounded">Meta</span>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto">
          <Card className="shadow-hero">
            <CardHeader className="text-center">
              <div className="lg:hidden flex items-center justify-center space-x-2 text-primary mb-4">
                <BookOpen className="h-6 w-6" />
                <span className="text-xl font-bold">EduPlatform</span>
              </div>
              <CardTitle className="text-2xl">
                {isSignUp ? 'Create Your Account' : 'Welcome Back'}
              </CardTitle>
              <p className="text-muted-foreground">
                {isSignUp 
                  ? 'Start your learning journey today' 
                  : 'Sign in to continue your learning journey'
                }
              </p>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Social Login */}
              <div className="space-y-3">
                <Button variant="outline" className="w-full">
                  <Chrome className="h-4 w-4 mr-2" />
                  Continue with Google
                </Button>
                <Button variant="outline" className="w-full">
                  <Github className="h-4 w-4 mr-2" />
                  Continue with GitHub
                </Button>
                <Button variant="outline" className="w-full">
                  <Apple className="h-4 w-4 mr-2" />
                  Continue with Apple
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with email
                  </span>
                </div>
              </div>

              {/* Email/Password Form */}
              <form className="space-y-4">
                {isSignUp && (
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm font-medium">First Name</label>
                      <Input placeholder="John" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Last Name</label>
                      <Input placeholder="Doe" className="mt-1" />
                    </div>
                  </div>
                )}

                <div>
                  <label className="text-sm font-medium">Email Address</label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input 
                      type="email" 
                      placeholder="you@example.com" 
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Password</label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input 
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-10"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {isSignUp && (
                  <div>
                    <label className="text-sm font-medium">Confirm Password</label>
                    <div className="relative mt-1">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input 
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="pl-10"
                      />
                    </div>
                  </div>
                )}

                {!isSignUp && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Remember me</span>
                    </label>
                    <Button variant="link" className="p-0 text-primary">
                      Forgot password?
                    </Button>
                  </div>
                )}

                {isSignUp && (
                  <div className="flex items-start space-x-2 text-sm">
                    <input type="checkbox" className="rounded mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">
                      I agree to the{' '}
                      <Button variant="link" className="p-0 text-primary">Terms of Service</Button>
                      {' '}and{' '}
                      <Button variant="link" className="p-0 text-primary">Privacy Policy</Button>
                    </span>
                  </div>
                )}

                <NavLink to="/dashboard">
                  <Button className="w-full bg-primary hover:bg-primary-dark" size="lg">
                    {isSignUp ? 'Create Account' : 'Sign In'}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </NavLink>
              </form>

              <div className="text-center text-sm">
                <span className="text-muted-foreground">
                  {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                </span>
                <Button 
                  variant="link" 
                  className="p-0 ml-1 text-primary"
                  onClick={() => setIsSignUp(!isSignUp)}
                >
                  {isSignUp ? 'Sign in' : 'Sign up'}
                </Button>
              </div>

              {isSignUp && (
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    By creating an account, you'll get access to our free courses and can upgrade anytime.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mt-6 text-center text-xs text-muted-foreground">
            <p>Protected by industry-standard encryption</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;