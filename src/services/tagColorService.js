export const colorTag = (tag) => {
    switch (tag) {
        case 'Fullstack': 
            return 'tag-purple';
        case 'Frontend':
            return 'tag-green';
        case 'Backend':
            return 'tag-orange';
        case 'RESTful API':
            return 'tag-teal';
        case 'Tooling':
            return 'tag-pink';
        case 'Ongoing':
            return 'tag-orange';
        case 'Completed':
            return 'tag-purple';
        default:
            return 'tag-teal';
    }
}