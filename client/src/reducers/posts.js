// eslint-disable-next-line import/no-anonymous-default-export
export default (posts= [], action) => {
    switch (action.type) {
        case 'UPDATE':
            return post.map((post) => post._id === action.payload._id ? action.payload : post)
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}