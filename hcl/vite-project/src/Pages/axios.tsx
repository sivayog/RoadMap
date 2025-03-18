import axios from "axios";

const API_URL = "http://localhost:8000/api/posts"; // Base API URL

// Define Post Type
interface Post {
  _id?: string;
  title: string;
  content: string;
}

// Create a new post
export const createPost = async (newPost: Omit<Post, "_id">): Promise<Post> => {
  try {
    const response = await axios.post<Post>(API_URL, newPost);
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

// Edit (Update) a post
export const editPost = async (postId: string, updatedData: Partial<Post>): Promise<Post> => {
  try {
    const response = await axios.put<Post>(`${API_URL}/${postId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating post:", error);
    throw error;
  }
};

// Delete a post
export const deletePost = async (postId: string): Promise<{ message: string }> => {
  try {
    const response = await axios.delete<{ message: string }>(`${API_URL}/${postId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
};
