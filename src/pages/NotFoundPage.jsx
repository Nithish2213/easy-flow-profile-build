
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-green-300 flex items-center justify-center">
      <Card className="text-center p-8 max-w-md">
        <div className="mb-6 text-5xl font-bold text-green-600">404</div>
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="primary" fullWidth>
            Return to Home
          </Button>
        </Link>
      </Card>
    </div>
  );
}

export default NotFoundPage;
