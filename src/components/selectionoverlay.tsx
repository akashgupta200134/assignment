import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { useState } from "react";

interface Props {
  overlayRef: React.RefObject<OverlayPanel>;
  onConfirm: (count: number) => void;
}

export const SelectionOverlay = ({ overlayRef, onConfirm }: Props) => {
  const [count, setCount] = useState<number | null>(null);

  const handleConfirm = () => {
    if (!count || count <= 0) {
      alert("Please enter a valid number");
      return;
    }
    onConfirm(count);
    overlayRef.current?.hide();
    setCount(null);
  };

  return (
    <OverlayPanel ref={overlayRef} dismissable>
      <div className="flex flex-col gap-4  p-2">
        <InputNumber className=""
          value={count}
          onValueChange={(e) => setCount(e.value ?? null)}
          placeholder="Enter number of rows"
          min={1}
          showButtons
        />
        <Button label="Select" onClick={handleConfirm} />
      </div>
    </OverlayPanel>
  );
};
