export const getLimit = (params: URLSearchParams): number | undefined => {
  const limit = params.get("limit");
  if (limit == null) {
    return undefined;
  }

  const limitNumber = Number(limit);
  if (isNaN(limitNumber) || limitNumber < 1) {
    return undefined;
  }

  return limitNumber;
};
