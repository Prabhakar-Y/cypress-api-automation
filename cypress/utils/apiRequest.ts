export const apiRequest = (
  method: string,
  url: string,
  body: any = null,
  headers: any = {}
) => {
  return cy.request({
    method,
    url,
    body,
    headers,
    failOnStatusCode: false,
  });
};

export const getRequest = (url: string, headers: any = {}) => {
  return apiRequest("GET", url, null, headers);
};

export const postRequest = (url: string, body: any, headers: any = {}) => {
  return apiRequest("POST", url, body, headers);
};

export const putRequest = (url: string, body: any, headers: any = {}) => {
  return apiRequest("PUT", url, body, headers);
};

export const deleteRequest = (url: string, headers: any = {}) => {
  return apiRequest("DELETE", url, null, headers);
};
