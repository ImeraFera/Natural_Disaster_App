
const getDisasterGuides = async (db, id) => {
    const reference = db().ref('guides/' + id);
    const response = reference
        .once('value')
        .then(snapshot => {
        });
    return response;
};

export default getDisasterGuides;