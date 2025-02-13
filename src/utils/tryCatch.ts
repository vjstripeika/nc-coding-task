export type TryCatchResult<T> = [null, T] | [unknown, null];
type AsyncPromiseResolver<T> = (result: TryCatchResult<T>) => void;
type TryCatchHandler = {
  <T>(callback: () => Promise<T>): Promise<TryCatchResult<T>>;
  <T>(callback: () => T): TryCatchResult<T>;
};

/**
 *
 * @param result a result value that will be used in the promise resolver.
 * @returns a promise resolver that gracefully handles catching errors and other thrown values.
 *
 */
const createAsyncTryCatchPromiseResolver =
  <T>(result: Promise<T>) =>
  async (resolve: AsyncPromiseResolver<T>): Promise<void> => {
    try {
      return resolve([null, await result]);
    } catch (errorLike) {
      return resolve([errorLike, null]);
    }
  };

/**
 *
 * @param callback a callback function which might fail (can be async).
 * @returns An error and value tuple:
 *
 * `[ErrorLike | null, CallbackResult | null]`
 *
 * If a callback argument is async, then returned array is a promise.
 */
const tryCatch: TryCatchHandler = (callback): any => {
  try {
    const result = callback();

    return result instanceof Promise
      ? new Promise(createAsyncTryCatchPromiseResolver(result))
      : [null, result];
  } catch (errorLike) {
    return [errorLike, null];
  }
};

export default tryCatch;
