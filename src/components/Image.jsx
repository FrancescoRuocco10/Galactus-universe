import galactus from '../image/galactus.png';

function Image() {
    return (
        <>
            {/* Galactus in primo piano */}
            <div className="flex justify-center items-center h-full relative z-10">
                <img src={galactus} alt="galactus" className="w-[560px] h-auto mt-[140px] object-contain" />
            </div>
        </>
    );
}

export default Image;