export const getProjectListQuery = `
    query {
        getProjectList {
            id
            name
            imageURL
            tags {
                id
                name
            }
        }
    }
`;

export const getTagListQuery = `
    query {
        getTagList {
            id
            name
        }
    }
`;
