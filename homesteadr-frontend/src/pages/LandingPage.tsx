import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, PiggyBank, TrendingUp, Users } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="border-t-2 mt-2 min-h-screen w-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-12">
            Invest in Real Estate, Simplified
          </h1>
          <p className="text-xl text-gray-600 mb-16">
            Start building your property portfolio today with smart, fractional investments
          </p>
          <div className="space-x-4 mt-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="p-6">
            <CardContent className="space-y-4 pt-4">
              <Building2 className="h-12 w-12 text-blue-600" />
              <h3 className="text-xl font-semibold">Curated Properties</h3>
              <p className="text-gray-600">
                Handpicked real estate opportunities vetted by experts
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="space-y-4 pt-4">
              <PiggyBank className="h-12 w-12 text-blue-600" />
              <h3 className="text-xl font-semibold">Low Minimum</h3>
              <p className="text-gray-600">
                Start investing with as little as $100
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="space-y-4 pt-4">
              <TrendingUp className="h-12 w-12 text-blue-600" />
              <h3 className="text-xl font-semibold">Track Performance</h3>
              <p className="text-gray-600">
                Monitor your investments in real-time
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="space-y-4 pt-4">
              <Users className="h-12 w-12 text-blue-600" />
              <h3 className="text-xl font-semibold">Community</h3>
              <p className="text-gray-600">
                Join thousands of successful investors
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl mb-6">
            Join thousands of investors building their real estate portfolio
          </p>
          <Button size="lg" variant="secondary">
            Create Free Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;