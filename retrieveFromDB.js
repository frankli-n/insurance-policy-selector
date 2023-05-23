function retrieveDatabase(table) {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref(table)
      .once('value')
      .then((snapshot) => {
        const results = snapshot.val();
        resolve(results);
      })
      .catch((error) => {
        console.error("Error retrieving data:", error);
        reject(error);
      });
  });
}


