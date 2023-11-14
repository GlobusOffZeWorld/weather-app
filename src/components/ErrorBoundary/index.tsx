import { Component, ErrorInfo } from 'react';

import { ErrorBoundaryProps, ErrorBoundaryState } from '@/types/models';

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log('Uncought error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
