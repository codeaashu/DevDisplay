const buildUrl = (base_url, params = {}) => {
    const queryString = Object.keys(params)
        .filter((key) => params[key])
        .map((key) => `${key}=${params[key]}`)
        .join("&");

    return queryString === "" ? base_url : `${base_url}/?${queryString}`;
}

export default buildUrl;