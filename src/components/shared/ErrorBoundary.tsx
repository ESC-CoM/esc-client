import { Component, ComponentType, ReactElement } from 'react';

type ErrorFallbackProps = {
  reset: () => void;
  errorMessage?: string;
};

type Props = {
  children: ReactElement;
  fallbackUI: ComponentType<ErrorFallbackProps>;
  onReset: () => void;
  errorMessage?: string;
};

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
    const { children, fallbackUI: FallbackUI, errorMessage } = this.props;

    if (hasError && error) {
      return <FallbackUI reset={this.resetQuery} errorMessage={errorMessage} />;
    }

    return children;
  }
}

export default ErrorBoundary;
