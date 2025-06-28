
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { toast } = useToast();

  // Dummy transaction data
  const transactions = [
    { id: 1, date: '2024-06-27', description: 'Salary Credit', amount: 5500.00, type: 'Credit', balance: 25750.50 },
    { id: 2, date: '2024-06-26', description: 'Online Purchase - Amazon', amount: -89.99, type: 'Debit', balance: 20250.50 },
    { id: 3, date: '2024-06-25', description: 'ATM Withdrawal', amount: -200.00, type: 'Debit', balance: 20340.49 },
    { id: 4, date: '2024-06-24', description: 'Transfer from Savings', amount: 1000.00, type: 'Credit', balance: 20540.49 },
    { id: 5, date: '2024-06-23', description: 'Utility Bill Payment', amount: -125.50, type: 'Debit', balance: 19540.49 },
  ];

  const handleDownloadStatement = () => {
    toast({
      title: "Statement Download",
      description: "Your account statement is being prepared for download.",
    });
  };

  const handleAction = (action: string) => {
    toast({
      title: action,
      description: `${action} feature will be available soon.`,
    });
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-bank-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Swiss Bank</h1>
                <p className="text-sm text-gray-500">Secure Banking Dashboard</p>
              </div>
            </div>
            <Button onClick={handleLogout} variant="outline" size="sm">
              Secure Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600">Account Number: {user?.accountNumber}</p>
        </div>

        {/* Account Balance Card */}
        <Card className="mb-8 bg-gradient-to-r from-bank-blue-600 to-bank-blue-800 text-white">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 mb-2">Available Balance</p>
                <p className="text-4xl font-bold">${user?.balance.toLocaleString()}</p>
                <p className="text-blue-100 mt-2">Last updated: Today</p>
              </div>
              <div className="text-6xl opacity-20">💳</div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button onClick={() => handleAction('Show Account Statement')} className="w-full justify-start" variant="outline">
                📊 Show Account Statement
              </Button>
              <Button onClick={handleDownloadStatement} className="w-full justify-start" variant="outline">
                📄 Download Account Statement (PDF)
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Additional Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button onClick={() => handleAction('Open Fixed Deposit')} className="w-full justify-start" variant="outline">
                🏦 Open Fixed Deposit (FD)
              </Button>
              <Button onClick={() => handleAction('Apply for Credit Card')} className="w-full justify-start" variant="outline">
                💳 Apply for Credit Card
              </Button>
              <Button onClick={() => handleAction('Contact Bank Support')} className="w-full justify-start" variant="outline">
                📞 Contact Bank Support (Video Call)
              </Button>
              <Button onClick={() => handleAction('Request Chequebook')} className="w-full justify-start" variant="outline">
                📝 Request Chequebook
              </Button>
              <Button onClick={() => handleAction('Update Personal Details')} className="w-full justify-start" variant="outline">
                ⚙️ Update Personal Details
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Last 5 Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Date</th>
                    <th className="text-left py-3 px-2">Description</th>
                    <th className="text-right py-3 px-2">Amount</th>
                    <th className="text-center py-3 px-2">Type</th>
                    <th className="text-right py-3 px-2">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-2 text-sm">{transaction.date}</td>
                      <td className="py-3 px-2 text-sm">{transaction.description}</td>
                      <td className={`py-3 px-2 text-sm text-right font-medium ${
                        transaction.type === 'Credit' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.type === 'Credit' ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                      </td>
                      <td className="py-3 px-2 text-center">
                        <Badge variant={transaction.type === 'Credit' ? 'default' : 'secondary'}>
                          {transaction.type}
                        </Badge>
                      </td>
                      <td className="py-3 px-2 text-sm text-right font-medium">
                        ${transaction.balance.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
