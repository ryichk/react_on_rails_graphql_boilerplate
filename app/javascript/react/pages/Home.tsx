import { useFetchTestFieldQuery } from "../../generated/graphql";

export const Home = () => {
  {
    const { data, loading, error } = useFetchTestFieldQuery();
    if (loading) {
      return (
        <h1>Loading...</h1>
      )
    }

    if (error) {
      return (
        <h1>Error: {error.message}</h1>
      )
    }

    return (
      <>
        <h1>{data?.testField}</h1>
      </>
    )
  }
};
