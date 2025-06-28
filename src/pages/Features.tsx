
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Features = () => {
  const features = [
    {
      category: 'Digital Banking',
      title: 'Online Banking Platform',
      description: 'Access your accounts 24/7 with our secure online banking platform. Check balances, transfer funds, and manage your finances from anywhere.',
      benefits: ['24/7 Access', 'Real-time Updates', 'Secure Login'],
      icon: '💻'
    },
    {
      category: 'Mobile Banking',
      title: 'Mobile App',
      description: 'Bank on the go with our feature-rich mobile application. Available for iOS and Android devices.',
      benefits: ['Touch/Face ID', 'Mobile Deposits', 'ATM Locator'],
      icon: '📱'
    },
    {
      category: 'Security',
      title: 'Advanced Security',
      description: 'Your security is our priority. We use multi-factor authentication, encryption, and fraud monitoring.',
      benefits: ['256-bit Encryption', '2FA Security', 'Fraud Monitoring'],
      icon: '🔒'
    },
    {
      category: 'Accounts',
      title: 'Savings & Checking',
      description: 'Flexible account options to meet your needs, from basic checking to high-yield savings accounts.',
      benefits: ['No Monthly Fees', 'Competitive Rates', 'Free ATM Access'],
      icon: '💰'
    },
    {
      category: 'Credit Services',
      title: 'Credit Cards & Loans',
      description: 'Access credit when you need it with our range of credit cards and personal loan options.',
      benefits: ['Rewards Program', 'Low Interest Rates', 'Quick Approval'],
      icon: '💳'
    },
    {
      category: 'Investment',
      title: 'Investment Services',
      description: 'Grow your wealth with our investment platform and professional advisory services.',
      benefits: ['Portfolio Management', 'Expert Advice', 'Diverse Options'],
      icon: '📈'
    },
    {
      category: 'Business',
      title: 'Business Banking',
      description: 'Comprehensive business banking solutions for companies of all sizes.',
      benefits: ['Business Accounts', 'Merchant Services', 'Business Loans'],
      icon: '🏢'
    },
    {
      category: 'Support',
      title: '24/7 Customer Support',
      description: 'Get help when you need it with our round-the-clock customer support team.',
      benefits: ['Phone Support', 'Live Chat', 'Video Calls'],
      icon: '🆘'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Banking Features & Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of banking features designed to make your financial life easier, more secure, and more rewarding.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {feature.category}
                  </Badge>
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-green-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-bank-blue-600 to-bank-blue-800 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Swiss Bank?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of satisfied customers who trust us with their financial needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/login" className="bg-white text-bank-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
                Login to Your Account
              </a>
              <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-bank-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Features;
