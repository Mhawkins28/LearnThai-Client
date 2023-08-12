import api from "./apiConfig.js";

export const getAllNotes = async () => {
  try {
    const response = await api.get("/notes");
    return response.data;
  } catch (error) {
    console.error("Error: Get all Notes", error);
  }
};

export const getOneNote = async (id) => {
  try {
    const response = await api.get(`/notes/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error: Get One Note", error);
  }
};

export const createNote = async (noteData) => {
  try {
    const response = await api.post("/notes", noteData);
    return response.data;
  } catch (error) {
    console.error("Error: Create Note", error);
  }
};

export const updateNote = async (id, noteData) => {
  try {
    const response = await api.put(`/notes/${id}`, noteData);
    return response.data;
  } catch (error) {
    console.error("Error: Update Note", error);
  }
};

export const deleteNote = async (id) => {
  try {
    const response = await api.delete(`/notes/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error: Delete Note", error);
  }
};

