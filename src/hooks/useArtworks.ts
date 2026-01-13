import { useEffect, useState } from "react";
import type { Artwork, ArtworksApiResponse } from "../models/artwork";

export const useArtworks = (rowsPerPage: number) => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchArtworks = async (pageNumber: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.artic.edu/api/v1/artworks?page=${pageNumber}&limit=${rowsPerPage}`
      );
      const data: ArtworksApiResponse = await response.json();

      setArtworks(data.data);
      setTotal(data.pagination.total);
    } catch (error) {
      console.error("Error fetching artworks:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArtworks(page);
  }, [page]);

  return {
    artworks,
    total,
    page,
    setPage,
    loading,
  };
};
