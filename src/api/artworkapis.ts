import { ArtworksApiResponse } from "../models/artwork";


export const fetchArtworks = async (page: number = 1, limit: number = 10): Promise<ArtworksApiResponse> => {
  const response = await fetch(`https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`);
  if (!response.ok) throw new Error("Failed to fetch artworks");
  const data = await response.json();
  return {
    data: data.data,
    pagination: {
      total: data.pagination.total,
      limit: data.pagination.limit,
      current_page: data.pagination.current_page,
    },
  };
};
