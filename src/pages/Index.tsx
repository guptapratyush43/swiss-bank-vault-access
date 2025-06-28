
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white font-uber">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Welcome to
              <span className="text-bank-blue-600 block">Swiss Bank</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Your trusted partner for secure banking solutions. Experience seamless financial management with our comprehensive suite of banking services designed for your peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
                  Login to Your Account
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
                  New user? Contact Bank
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Banking Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our full range of banking solutions designed to meet all your financial needs with the highest standards of security and convenience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-shadow hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-bank-blue-600 to-bank-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Banking Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Swiss Bank for their financial needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button className="bg-white text-bank-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 text-lg w-full sm:w-auto">
                Access Your Account
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-bank-blue-600 font-semibold py-4 px-8 text-lg w-full sm:w-auto transition-all duration-300">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
