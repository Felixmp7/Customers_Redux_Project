const url = `http://localhost:3001/customerData`;

export const apiFetchCustomers = async () => {
  try {
    const data = await fetch(url);
    return data.json();
  } catch (error) {
    console.log(error);
  }
};
