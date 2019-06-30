// types of action
const Types = {
    LIKE_CHARACTER: "LIKE_CHARACTER",
    UNLIKE_CHARACTER: "UNLIKE_CHARACTER"
};
// actions
const likeCharacter = id => ({
    type: Types.LIKE_CHARACTER,
    payload: id
});

const unlikeCharacter = id => ({
    type: Types.UNLIKE_CHARACTER,
    payload: id
});

export default {
    likeCharacter,
    unlikeCharacter,
    Types
};