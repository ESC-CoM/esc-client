import { ComponentProps, ReactElement, Suspense } from 'react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { DefaultProps } from 'src/types/props';

import ErrorBoundary from '../ErrorBoundary';

type Props = {
  errorFallback: ComponentProps<typeof ErrorBoundary>['fallbackUI'];
  suspenseFallback: ReactElement;
} & DefaultProps;

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
