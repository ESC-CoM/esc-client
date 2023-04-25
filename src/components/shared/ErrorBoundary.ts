import { Component, ReactElement } from 'react';

interface ErrorFallbackProps {
  reset: () => void;
}

interface Props {
  children: ReactElement;
  fallback: (props: ErrorFallbackProps) => JSX.Element;
  onReset: () => void;
}

interface State {
  hasError: boolean;
  error?: Error;
}

const initialState = { hasError: false };

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  resetQuery = () => {
    const { onReset } = this.props;
    onReset?.();
    this.setState(initialState);
  };

  render() {
    const { hasError, error } = this.state;
    const { children, fallback } = this.props;
    if (hasError && error) {
      return fallback({ reset: this.resetQuery });
    }

    return children;
  }
}

export default ErrorBoundary;
