import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';

const pages = [
  { path: '/', name: 'Home' },
  { path: '/courses', name: 'Courses' },
  { path: '/consultation', name: 'Consultation' },
  { path: '/schedule', name: 'Schedule' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 text-primary font-bold text-xl">
            <BookOpen className="h-8 w-8" />
            <span>EduPlatform</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {pages.map(page => (
              <NavLink
                key={page.path}
                to={page.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm font-medium transition-smooth hover:bg-muted ${
                    isActive ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground'
                  }`
                }
              >
                {page.name}
              </NavLink>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <NavLink to="/login">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Login
              </Button>
            </NavLink>
            <NavLink to="/dashboard">
              <Button className="bg-primary hover:bg-primary-dark">
                Dashboard
              </Button>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {pages.map(page => (
                <NavLink
                  key={page.path}
                  to={page.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md text-sm font-medium transition-smooth ${
                      isActive ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`
                  }
                >
                  {page.name}
                </NavLink>
              ))}
              <div className="flex flex-col space-y-2 pt-2 border-t border-border">
                <NavLink to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
                    Login
                  </Button>
                </NavLink>
                <NavLink to="/dashboard" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary-dark">
                    Dashboard
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;