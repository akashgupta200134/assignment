import { DataTable, type DataTablePageEvent } from "primereact/datatable";
import { Column } from "primereact/column";
import type { Artwork } from "../models/artwork";

interface Props {
  artworks: (Artwork & { selected?: boolean })[];
  page: number;
  rows: number;
  total: number;
  loading: boolean;
  onPageChange: (page: number) => void;
  isSelected: (id: number) => boolean;
  onToggle: (id: number, checked: boolean) => void;
}

export const ArtworkTable = ({
  artworks,
  page,
  rows,
  total,
  loading,
  onPageChange,
//   isSelected,
  onToggle,
}: Props) => {
  return (
    <DataTable
      value={artworks}
      dataKey="id"
      lazy
      paginator
      rows={rows}
      totalRecords={total}
      first={(page - 1) * rows}
      loading={loading}
      onPage={(e: DataTablePageEvent) =>
        onPageChange((e.page ?? 0) + 1)
      }
    >
      
      <Column
        header=""
        body={(row) => (
          <input
            type="checkbox"
            checked={row.selected ?? false} 
            onChange={(e) => onToggle(row.id, e.target.checked)}
          />
        )}
      />

      {/* /fields */}
      <Column field="title" header="Title" />
      <Column field="place_of_origin" header="Origin" />
      <Column field="artist_display" header="Artist" />
      <Column field="inscriptions" header="Inscriptions" />
      <Column field="date_start" header="Start" />
      <Column field="date_end" header="End" />
    </DataTable>
  );
};
