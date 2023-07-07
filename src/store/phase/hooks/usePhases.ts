import { useQuery, gql } from "@apollo/client";

const usePhases = () => {
  const GET_BOOKS = gql`
    query PhasesQuery {
      phases {
        title
        discount
        fee
        items {
          title
          amount
          price
          discount
          total
          tax
          unit
        }
        subtotal
        total
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_BOOKS);

  return {
    list: data,
    loading,
    error,
  };
};

export default usePhases;
