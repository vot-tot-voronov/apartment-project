import React, { ErrorInfo, ReactNode } from 'react';

import { UnexpectedError } from '@/widgets/unexpectedError';

interface IErrorBoundaryProps {
  children?: ReactNode;
}

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(error: Error): IState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.info(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <UnexpectedError />;
    }

    return children;
  }
}

export default ErrorBoundary;
