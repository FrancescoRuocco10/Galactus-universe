export default function GalactusText() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center z-0">

      {/* GALACTUS colore pieno */}
      <h1 className="text-[220px] font-extrabold text-[#FF00FF] leading-none">
        GALACTUS
      </h1>

      {/* GALACTUS contorno */}
      <h1 className="text-[220px] font-extrabold leading-none" style={{ WebkitTextStroke: "2px #4A90E2", color: "transparent" }}>
        GALACTUS
      </h1>

      {/* GALACTUS contorno */}
      <h1 className="text-[220px] font-extrabold leading-none" style={{ WebkitTextStroke: "2px #FF00FF", color: "transparent" }}>
        GALACTUS
      </h1>
    </div>
  );
}