// this function is to fetch the old comments and return the list of comments of the book

const SingleComment = (props) => {
  try {
    const data = fetch(url, {
      method: "POST", // method is POST as we want to post the data;
      body: JSON.stringify(myEvent), // object is stringified;
      headers: {
        // headers is the info about the doctype;
        Authorization: key,
        "Content-Type": "application/json",
      },
    }).then();
  } catch (error) {}
};
