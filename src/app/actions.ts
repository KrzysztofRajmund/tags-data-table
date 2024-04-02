"use server";

export const getTags = async ({
  page = 1,
  limit = 5,
  order = "desc",
  sort = "popular",
}: {
  page: number;
  limit: number;
  order: string;
  sort: string;
}) => {
  const withTagNameAndCountOnly = "!)sAz6H(B0HuPN5)3LrcU";

  try {
    const result = await fetch(
      `https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${limit}&order=${order}&sort=${sort}&site=stackoverflow&filter=${withTagNameAndCountOnly}`,
    );
    const data = await result.json();
    ///
    console.log("Actions Data:", data);
    ///
    return data;
  } catch (error) {
    return { error };
  }
};
