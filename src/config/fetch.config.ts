import { BASE_URL } from './axios.config';

type MethodType = 'GET' | 'POST';

interface IFetchRequest {
  url: string;
  method: MethodType;
  revalidate?: number; //seconds
  cache?: RequestCache;
}

interface IFetchResponse<T> {
  data?: T;
  error?: Error;
}

export default async function fetchConfig<T>({
  url,
  method,
  revalidate,
  cache = undefined,
}: IFetchRequest): Promise<IFetchResponse<T>> {
  try {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      } as HeadersInit,
      next: { revalidate },
      cache: cache,
    });

    if (!res.ok) {
      throw new Error(`HTTP Error! Status: ${res.status}`);
    }

    const data = await res.json();

    return {
      data: data,
    };
  } catch (error) {
    return { error: error as Error };
  }
}
