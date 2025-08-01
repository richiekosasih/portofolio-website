import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
          <div className='text-center text-white'>
            <h2 className='text-2xl font-bold mb-4'>Something went wrong</h2>
            <p className='text-gray-300 mb-4'>
              Please refresh the page to try again
            </p>
            <button
              onClick={() => window.location.reload()}
              className='px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors'
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
