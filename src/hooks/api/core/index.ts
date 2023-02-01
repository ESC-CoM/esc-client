import { useCallback } from 'react';
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export function useCoreQuery<T, U = null>(
  keyName: QueryKey,
  query: QueryFunction<T, QueryKey>,
  options?: Omit<
    UseQueryOptions<T, AxiosError, U extends null ? T : U>,
    'queryKey' | 'queryFn'
  >
): UseQueryResult<U extends null ? T : U, AxiosError> {
  return useQuery(keyName, query, {
    onError: (err) => {
      return console.error(err);
    },
    ...options,
  });
}

export function useCoreMutation<T, U>(
  mutation: MutationFunction<T, U>,
  options?: Omit<UseMutationOptions<T, AxiosError, U>, 'mutationKey'>
): UseMutationResult<T, AxiosError, U> {
  return useMutation(mutation, {
    onError: (err) => {
      return console.error(err);
    },
    ...options,
  });
}

type UseInfiniteCustomResult<T, U> = Omit<
  Partial<UseInfiniteQueryResult<T, AxiosError>>,
  'hasNextPage' | 'fetchNextPage'
> & { getNextPage: () => void; itemList: U[] | undefined };

export function useCoreInfiniteQuery<T extends { [key: string]: any }, U>(
  keyName: QueryKey,
  query: QueryFunction<T, QueryKey>,
  itemContainingProp: string,
  options?: Omit<UseInfiniteQueryOptions<T, AxiosError>, 'queryKey' | 'queryFn'>
): UseInfiniteCustomResult<T, U> {
  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useInfiniteQuery(keyName, query, {
      onError: (err) => {
        return console.error(err);
      },
      ...options,
    });
  const itemList = data?.pages.reduce((acc: U[], cur) => {
    if (!(itemContainingProp in cur)) return [...acc, cur];
    return [...acc, ...cur[itemContainingProp]];
  }, []);
  const getNextPage = useCallback(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, fetchNextPage]);
  return { data, itemList, isLoading, isError, getNextPage };
}
