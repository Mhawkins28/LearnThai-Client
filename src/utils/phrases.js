import api from "./apiConfig.js";

export const getAllPhrases = async () => {
  try {
    const response = await api.get("/phrases");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getOnePhrase = async (id) => {
  try {
    const response = await api.get(`/phrases/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPhrase = async (PhraseData) => {
  try {
    const response = await api.post("/phrases", PhraseData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePhrase = async (id, PhraseData) => {
  try {
    const response = await api.put(`/phrases/${id}`, PhraseData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePhrase = async (id) => {
  try {
    const response = await api.delete(`/phrases/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
