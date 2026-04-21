import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { useAuth } from '../hooks/useAuth';

const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">My Profile</h1>
        <p className="text-gray-600 mb-8">This page is protected and only available to authenticated users.</p>

        <Card className="space-y-5">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="text-xl font-semibold text-gray-900">{user?.name || 'N/A'}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-xl font-semibold text-gray-900">{user?.email || 'N/A'}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">User ID</p>
            <p className="text-sm text-gray-800 break-all">{user?._id || user?.id || 'N/A'}</p>
          </div>

          <div className="pt-4">
            <Button onClick={logout} variant="outline">
              Logout
            </Button>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
