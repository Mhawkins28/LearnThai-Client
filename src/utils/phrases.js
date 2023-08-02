import api from "./apiConfig.js";

export const getAllPhrases = async () => {
  try {
    const response = await api.get("/phrases");
    return response.data;
  } catch (error) {
    console.error("Error: Get all phrases", error);
  }
};

export const getOnePhrase = async (id) => {
  try {
    const response = await api.get(`/phrases/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error: Get one phrase", error);
  }
};

export const createPhrase = async (PhraseData) => {
  try {
    const response = await api.post("/phrases", PhraseData);
    return response.data;
  } catch (error) {
    console.error("Error: Create phrase", error);
  }
};

export const updatePhrase = async (id, PhraseData) => {
  try {
    const response = await api.put(`/phrases/${id}`, PhraseData);
    return response.data;
  } catch (error) {
    console.error("Error: Update phrase", error);
  }
};

export const deletePhrase = async (id) => {
  try {
    const response = await api.delete(`/phrases/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error: Delete phrase", error);
  }
};

export const filterCategory = async (category) => {
  try {
    const response = await api.get(`/phrases/category/${category}`);
    return response.data;
  } catch (error) {
    console.error("Error: Filter category", error);
  }
};