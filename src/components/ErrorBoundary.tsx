import React from 'react';
import { toast } from 'react-hot-toast';

interface Props {
  children: React.ReactNode;
}
interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any) {
    console.error(error);
    toast.error('Something went wrong.');
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center">
          <h1 className="text-2xl font-bold text-red-600">Oops!</h1>
          <p>Global error occurred.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
