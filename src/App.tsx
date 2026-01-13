import { useRef, useState } from "react";
import { Button } from "primereact/button";
import { OverlayPanel } from "primereact/overlaypanel";
import { useArtworks } from "./hooks/useArtworks";
import { ArtworkTable } from "./components/Artworktable";
import { SelectionOverlay } from "./components/selectionoverlay";

const ROWS = 10;

export default function App() {
  const { artworks, total, page, setPage, loading } = useArtworks(ROWS);


  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());


  const overlayRef = useRef<OverlayPanel>(null!);

  const artworksWithSelection = artworks.map(a => ({
    ...a,
    selected: selectedIds.has(a.id),
  }));

  // check if a row is selected
  const isSelected = (id: number) => selectedIds.has(id);

  
  const toggleRow = (id: number, checked: boolean) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      checked ? next.add(id) : next.delete(id);
      return next;
    });
  };

  
  const applyCustomSelection = (count: number) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      artworks.slice(0, count).forEach(a => next.add(a.id));
      return next;
    });
  };

  return (
    <div className="p-4">
      <div  id="button"
      className="flex gap-2 mb-3  ">
        <Button className=""
          label="Custom Select"
          onClick={(e) => overlayRef.current.toggle(e)}
        />
      </div>

      <ArtworkTable
        artworks={artworksWithSelection}
        page={page}
        rows={ROWS}
        total={total}
        loading={loading}
        onPageChange={setPage}
        isSelected={isSelected}
        onToggle={toggleRow}
      />

      <SelectionOverlay
        overlayRef={overlayRef}
        onConfirm={applyCustomSelection}
      />
    </div>
  );
}
