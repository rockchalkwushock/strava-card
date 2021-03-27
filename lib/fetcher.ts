export async function fetcher<T>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> {
  try {
    const res = await fetch(input, init)
    return res.json() as Promise<T>
  } catch (error) {
    throw new Error(error)
  }
}
