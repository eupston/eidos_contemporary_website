import axios from "axios";

const InstagramQuery = async (postNumber) => {
    return (
        axios.get('https://www.instagram.com/eidoscontemporary/?__a=1')
            .then(res => {
                return res.data.graphql.user.edge_owner_to_timeline_media.edges.slice(0, postNumber);
            })
            .catch(err => console.log(err))
    )
};

export default InstagramQuery;