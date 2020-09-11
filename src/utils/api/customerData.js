const url = `http://localhost:3001/customerData`;

export const apiFetchCustomers = async () => {
  try {
    const data = await fetch(url);
    return data.json();
  } catch (error) {
    console.log(error);
  }
};

export const apiUpdateCostumer = async (id,obj) => {
  try {
    const data = await fetch(`${url}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(obj),
      headers: { 
        'Content-type': 'application/json'
      }
    });

    return data.json();
  } catch (error) {
    console.log(error);
  }
};
