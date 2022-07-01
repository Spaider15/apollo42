const endPoint = `https://api.thegraph.com/subgraphs/name/clockride/apollo42-marketplace`;

export const fetchSales = async () => {
  // language=GraphQL
  const query = `
    {
        sales(first: 20) {
            id,
            ownerId,
            price,
        }
    }
  `

  const result = await fetch(endPoint, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        query
    })
  })
  return result.json();
}