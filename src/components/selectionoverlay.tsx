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
      <div className="w-72 rounded-xl bg-white p-5 shadow-xl border border-gray-200 flex flex-col gap-4">
        {/* Title */}
        <h2 className="text-sm font-semibold text-gray-800">
          Select Rows
        </h2>

        {/* Input */}
        <InputNumber
          value={count}
          onValueChange={(e) => setCount(e.value ?? null)}
          placeholder="Enter number"
          min={1}
          showButtons
          className="w-full"
          inputClassName="w-full rounded-md border  border-gray-300  px-3 py-2  text-sm"
        />

        {/* Button */}
        <Button
          label="Confirm"
          onClick={handleConfirm}
          className="
            w-full 
            rounded-md 
            hover:bg-slate-300
            py-2
            text-sm 
            font-medium 
            text-white 
            transition 
          "
        />
      </div>
    </OverlayPanel>
  );
};
