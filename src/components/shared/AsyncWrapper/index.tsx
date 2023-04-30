import { ComponentProps, ReactElement, Suspense } from 'react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';

import ErrorBoundary from '../ErrorBoundary';

interface Props {
  children: ReactElement;
  errorFallback: ComponentProps<typeof ErrorBoundary>['fallbackUI'];
  suspenseFallback: ReactElement;
}

function AsyncWrapper(props: Props) {
  const { children, errorFallback, suspenseFallback } = props;
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary fallbackUI={errorFallback} onReset={reset}>
      <Suspense fallback={suspenseFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
}

export default AsyncWrapper;
