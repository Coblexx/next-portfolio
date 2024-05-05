// components

// icons
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

export default function Slider() {
  return (
    <div>
      <button>
        <FiArrowLeft />
      </button>
      <button>
        <FiArrowRight />
      </button>
    </div>
  );
}
