import { api, localhost } from './api';

export const signInRequest = async (data) => {
    return api.post('/signIn', data);
};

export const signUpRequest = async (data) => {
    return localhost.post('/sign-up', data);
};

export const getTimelineRequest = async (page) => {
    return api.get(`/timeline/${page}`);
};

export const postTimelineRequest = async (data) => {
    return api.post('/timeline', data);
};

export const searchUsersRequest = async (id, name) => {
    return api.get(`search/${name}/${id}`);
};

export const getPostOfSigleUserByIdRequest = (id, page) => {
    return api.get(`/user-Posts/${id}/${page}`);
};

export const likeDislikeRequest = async (postId) => {
    return api.post(`/Posts/${postId}/likeDislike`);
};

export const deletePostRequest = async (id) => {
    return api.delete(`/delete/${id}`);
};

export const getTrendingRequest = async () => {
    return api.get('/trending');
};

export const getPostsByHashtagRequest = async (hashtag, page) => {
    return api.get(`/hashtag/${hashtag}/${page}`);
};

export const updatePost = async (id, text) => {
    return api.put(`/post/update/${id}`, { text: text });
};

export const getIsFollowedRequest = async () => {
    return api.get('/timeline/isfollowed');
};

export const followRequest = async (id) => {
    return api.post(`/user/${id}/follow`);
};
export const unfollowRequest = async (id) => {
    return api.delete(`/user/${id}/unfollow`);
};

export const checkIsUserFollowed = async (id) => {
    return api.get(`/user/${id}/isFollowed`);
};

export const getCommentsByPostIdRequest = async (id) => {
    return api.get(`/posts/${id}/comments`);
};

export const postCommentRequest = async (id, comment) => {
    return api.post(`/posts/${id}/comments`, { comment });
};

export const createRepost = async (id) => {
    return api.post(`/repost/${id}`);
};

export const getNewPostsRequest = async (timestamp) => {
    return api.get(`/newPosts/${timestamp}`);
};
