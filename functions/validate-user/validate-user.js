const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const { identity, user } = context.clientContext;
  console.log(identity, user)
  // const userID = user.sub;
  // const userUrl = `${identity.url}/admin/users/{${userID}}`;
  // const adminAuthHeader = "Bearer " + identity.token;

  // try {
  //   return fetch(userUrl, {
  //     method: "GET",
  //     headers: { Authorization: adminAuthHeader }
  //   })
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log("data", JSON.stringify(data));
  //       return { statusCode: 204 };
  //     })
  //     .catch(e => {
  //       console.log("Failed to get user! 500! Internal.");
  //       return {
  //         statusCode: 500,
  //         body: "Internal Server Error: " + e
  //       };
  //     });
  // } catch (e) {
  //   console.log("GOT HERE! 500! outer");
  //   return { statusCode: 500, body: "Internal Server Error: " + e };
  // }
};