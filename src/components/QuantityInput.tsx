import { useState } from "react";

export default function QuantityInput() {
  const [qty, setQty] = useState(1);

  return (
    <div className="flex items-center gap-2 border rounded-full px-3 py-1 w-fit">
      <button
        onClick={() => setQty((prev) => Math.max(1, prev - 1))}
        className="text-lg font-semibold px-2 hover:text-[#D88B4C]"
      >
        −
      </button>

      <span className="w-6 text-center font-medium">{qty}</span>

      <button
        onClick={() => setQty((prev) => prev + 1)}
        className="text-lg font-semibold px-2 hover:text-[#D88B4C]"
      >
        +
      </button>
    </div>
  );
}
                