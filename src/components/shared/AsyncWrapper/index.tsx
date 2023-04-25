import { ComponentProps, ReactElement, Suspense } from 'react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';

import ErrorBoundary from '../ErrorBoundary';

interface Props {
  children: ReactElement;
  errorFallback: ComponentProps<typeof ErrorBoundary>['fallback'];
  suspenseFallback: ReactElement;
}

function AsyncWrapper(props: Props) {
  const { children, errorFallback, suspenseFallback } = props;
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary fallback={errorFallback} onReset={reset}>
      <Suspense fallback={suspenseFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
}

export default AsyncWrapper;
