import api from "./api";

export const getRepositories = async () => {
  return await api.get("/repositories");
};

export const applyLike = async (repoId) => {
  return await api.post(`/repositories/${repoId}/like`);
};
