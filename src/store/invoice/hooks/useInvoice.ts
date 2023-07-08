import { useQuery, gql } from "@apollo/client";

const useInvoice = () => {
  const GET_INVOICE = gql`
    query GetInvoice {
      invoice {
        number
        partner
        date
        totalCount
        fee
        discount
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
    }
  `;

  const { loading, error, data } = useQuery(GET_INVOICE);

  return {
    list: data,
    loading,
    error,
  };
};

export default useInvoice;
