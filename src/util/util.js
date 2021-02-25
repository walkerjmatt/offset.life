import firebase from "./firebase";

export async function apiRequest(path, method = "GET", data) {
  const accessToken = firebase.auth().currentUser
    ? await firebase.auth().currentUser.getIdToken()
    : undefined;

  return fetch(`/api/${path}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: data ? JSON.stringify(data) : undefined,
  })
    .then(async (response) => {
      const test = await response.json();
      return test;
    })
    .then((response) => {
      if (response.status === "error") {
        // Automatically signout user if accessToken is no longer valid
        if (response.code === "auth/invalid-user-token") {
          firebase.auth().signOut();
        }

        throw new CustomError(response.code, response.message);
      } else {
        return response.data ? response.data : response;
      }
    });
}

// Create an Error with custom message and code
export function CustomError(code, message) {
  const error = new Error(message);
  error.code = code;
  return error;
}
