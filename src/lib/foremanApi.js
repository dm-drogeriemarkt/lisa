export const status = async (token) => {
  const url = `${process.env.REACT_APP_FOREMAN_URL}/api/v2/status/`
  const headers = {
    'Authorization': `Bearer ${token}`
  }

  try {
    const { ok } = await fetch(url, { headers });

    return ok;
  } catch(error) {
    console.log(error)
    return false;
  }
}
