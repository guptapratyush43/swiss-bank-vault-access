
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const features = [
    {
      title: 'Secure Online Banking',
      description: 'Access your accounts 24/7 with bank-grade security',
      icon: '🔒'
    },
    {
      title: 'Mobile Banking',
      description: 'Manage your finances on the go with our mobile app',
      icon: '📱'
    },
    {
      title: 'Investment Services',
      description: 'Grow your wealth with our investment solutions',
      icon: '📈'
    },
    {
      title: 'Personal Loans',
      description: 'Quick approval for your personal financing needs',
      icon: '💰'
    },
    {
      title: 'Credit Cards',
      description: 'Flexible payment solutions with rewards',
      icon: '💳'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock customer service',
      icon: '🆘'
    }
  ];

  return (
    <div className="min-h-screen font-uber">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center hero-gradient">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-primary-light/20 rounded-full blur-2xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-in">
            <div className="mb-8">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 text-glow">
                Welcome to
              </h1>
              <h2 className="text-6xl lg:text-8xl font-bold text-gradient mb-6">
                Swiss Bank
              </h2>
            </div>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto animate-slide-up">
              Your trusted partner for <span className="text-gold font-semibold">premium banking solutions</span>. 
              Experience seamless financial management with our comprehensive suite of luxury banking services 
              designed for your <span className="text-gold font-semibold">peace of mind</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
              <Link to="/login">
                <Button className="btn-primary text-lg px-10 py-5 w-full sm:w-auto shadow-2xl">
                  <span className="flex items-center gap-3">
                    🔐 Access Your Account
                  </span>
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="btn-glass text-lg px-10 py-5 w-full sm:w-auto">
                  <span className="flex items-center gap-3">
                    ✨ New Customer? Start Here
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 section-gradient relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
                 backgroundSize: '30px 30px'
               }}>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
              Premium Banking
              <span className="text-gradient block">Services</span>
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Discover our full range of <span className="text-primary font-semibold">luxury banking solutions</span> designed to meet 
              all your financial needs with the highest standards of security and convenience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-luxury group cursor-pointer overflow-hidden" 
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center relative">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                  transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                                  transition-transform duration-1000 ease-out"></div>
                  
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-gold transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Decorative gradient line */}
                  <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-gold 
                                  transition-all duration-500 mx-auto mt-6"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-white rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-1/3 right-1/6 w-48 h-48 bg-gold rounded-full blur-2xl animate-pulse-slow"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white rounded-full blur-lg animate-pulse transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-slide-up">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 text-glow">
              Ready to Start Your
              <span className="text-gold block">Banking Journey?</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who trust Swiss Bank for their 
              <span className="text-gold font-semibold"> premium financial needs</span>. 
              Experience banking excellence like never before.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
              <Link to="/login">
                <Button className="bg-white text-primary hover:bg-gold hover:text-white font-bold py-5 px-10 text-lg w-full sm:w-auto rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-3">
                    🏦 Access Your Account
                  </span>
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="btn-glass font-bold py-5 px-10 text-lg w-full sm:w-auto">
                  <span className="flex items-center gap-3">
                    💬 Contact Us Today
                  </span>
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 pt-16 border-t border-white/20 animate-fade-in">
            <p className="text-white/70 mb-6 text-lg">Trusted by over 50,000+ customers worldwide</p>
            <div className="flex justify-center items-center gap-8 text-white/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                <span>Bank-grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                <span>Premium Services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
