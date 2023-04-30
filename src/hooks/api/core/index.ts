import { useCallback } from "react";
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
} from "@tanstack/react-query";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

export function useCoreQuery<T, U = null>(
  keyName: QueryKey,
  query: QueryFunction<T, QueryKey>,
  options?: Omit<
    UseQueryOptions<T, AxiosError, U extends null ? T : U>,
    "queryKey" | "queryFn"
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
  options?: Omit<UseMutationOptions<T, AxiosError, U>, "mutationKey">
): UseMutationResult<T, AxiosError, U> {
  return useMutation(mutation, {
    onError: (err) => {
      return console.error(err);
    },
    ...options,
  });
}

type UseInfiniteCustomResult<T, U> = Omit<
  UseInfiniteQueryResult<T, AxiosError>,
  "hasNextPage" | "fetchNextPage"
> & { getNextPage: () => void; itemList: U[] | undefined };

type UseInfiniteCustomOptions<T, K> = Omit<
  UseInfiniteQueryOptions<T, AxiosError>,
  "queryKey" | "queryFn"
> & { itemContainingProp?: K };

const isItemList = <T, U, K extends keyof T>(
  items?: T[],
  key?: K
): items is Array<T & Record<K, U[]>> => {
  if (!items || !key) return true;
  return items.every((item) => Array.isArray(item[key]));
};

export function useCoreInfiniteQuery<T, U, K extends keyof T>(
  keyName: QueryKey,
  query: QueryFunction<T, QueryKey>,
  options?: UseInfiniteCustomOptions<T, K>
): UseInfiniteCustomResult<T, U> {
  const { data, isFetchingNextPage, hasNextPage, fetchNextPage, ...rest } =
    useInfiniteQuery(keyName, query, {
      onError: (err) => console.error(err),
      ...options,
    });
  const items = data?.pages;
  const prop = options?.itemContainingProp;

  if (!isItemList<T, U, K>(items, prop)) throw new Error("item[prop] is not iterable"); // items, prop이 있는데 배열이 아니면 error throw
  const itemList =
    items && prop
      ? items.reduce((acc: U[], cur) => [...acc, ...cur[prop]], [])
      : undefined;
  const getNextPage = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) fetchNextPage();
  }, [hasNextPage, isFetchingNextPage]);

  return {
    ...rest,
    data,
    itemList,
    isFetchingNextPage,
    getNextPage,
  };
}
