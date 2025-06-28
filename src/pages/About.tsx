
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      title: 'Security First',
      description: 'We prioritize the security of your financial information with bank-grade encryption and advanced security protocols.',
      icon: '🔒'
    },
    {
      title: 'Customer Focused',
      description: 'Our customers are at the heart of everything we do. We provide personalized service and support.',
      icon: '🤝'
    },
    {
      title: 'Innovation',
      description: 'We continuously invest in technology to provide you with the best banking experience possible.',
      icon: '💡'
    },
    {
      title: 'Trust & Reliability',
      description: 'Built on decades of trust, we are committed to providing reliable financial services.',
      icon: '⭐'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Swiss Bank</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over 50 years, Swiss Bank has been a trusted financial partner, providing secure and innovative banking solutions to individuals and businesses worldwide.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 1973, Swiss Bank began as a small community bank with a simple mission: to provide secure, reliable financial services with a personal touch. Over the decades, we have grown into a modern financial institution while maintaining our core values of trust, security, and customer service.
              </p>
              <p>
                Today, we serve thousands of customers across multiple countries, offering a comprehensive suite of banking services including personal banking, business solutions, investment services, and digital banking platforms.
              </p>
              <p>
                Our commitment to innovation has led us to develop cutting-edge security measures and user-friendly digital platforms, ensuring that your banking experience is both secure and convenient.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-bank-blue-100 to-bank-blue-200 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🏦</div>
              <h3 className="text-2xl font-bold text-bank-blue-800 mb-2">50+ Years</h3>
              <p className="text-bank-blue-700">Of Trusted Banking Service</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-bank-blue-600 to-bank-blue-800 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-100">
                To provide secure, innovative, and personalized banking solutions that empower our customers to achieve their financial goals while maintaining the highest standards of integrity and service excellence.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-100">
                To be the leading digital-first bank that combines traditional banking values with modern technology, creating lasting relationships and contributing to the financial well-being of our communities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
