import type { ArtworksApiResponse } from "../models/artwork";


export const fetchArtworks = async (
  page: number,
  limit: number
): Promise<ArtworksApiResponse> => {
  const res = await fetch(
    `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`
  );

  if (!res.ok) throw new Error("API Error");

  const json = await res.json();

  return {
    data: json.data,
    pagination: json.pagination,
  };
};
