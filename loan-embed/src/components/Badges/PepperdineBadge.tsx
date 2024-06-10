import * as React from "react";

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  return (
    <div className="flex flex-1 gap-0.5">
      {Array.from({ length: 5 }, (_, index) => (
        <img
          key={index}
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4ada7151690075fb4eb78c638a4cde5887f9460416a93e1a47fca2cbfd95cfa?apiKey=aa19eef6d1f1473ba394866de3aadd86&"
          alt=""
          className="shrink-0 w-2.5 aspect-square fill-black"
        />
      ))}
    </div>
  );
};

interface IconPairProps {
  src1: string;
  src2: string;
}

const IconPair: React.FC<IconPairProps> = ({ src1, src2 }) => {
  return (
    <div className="flex flex-col items-start">
      <img
        loading="lazy"
        src={src1}
        alt=""
        className="z-10 aspect-[0.52] fill-neutral-800 w-[13px]"
      />
      <img
        loading="lazy"
        src={src2}
        alt=""
        className="w-4 aspect-[1.33] fill-neutral-800"
      />
    </div>
  );
};

const PepperdineBadge: React.FC = () => {
  return (
    <div className="flex flex-col justify-center bg-white rounded-xl border border-solid border-neutral-400 max-w-[653px]">
      <section className="flex gap-5 px-7 py-7 rounded-xl border border-solid border-zinc-300 max-md:flex-wrap max-md:px-5">
        <div className="flex gap-2 my-auto">
          <IconPair src1="https://cdn.builder.io/api/v1/image/assets/TEMP/c5b5e6598e0c1cfe71994379a072cad18b7ab9e9e0c1b2896570ae6a3cde5585?apiKey=aa19eef6d1f1473ba394866de3aadd86&" src2="https://cdn.builder.io/api/v1/image/assets/TEMP/97518d54c173d549e060991eb29553611bff120b48d803bbc00dfdc0ba8e4408?apiKey=aa19eef6d1f1473ba394866de3aadd86&" />
          <p className="text-lg leading-5 text-center text-neutral-800">
            Top 100
          </p>
          <IconPair src1="https://cdn.builder.io/api/v1/image/assets/TEMP/b47f5b623e9e98ba902e12f9894a80cf200e6f88a4b94b03c8f735b2795c264a?apiKey=aa19eef6d1f1473ba394866de3aadd86&" src2="https://cdn.builder.io/api/v1/image/assets/TEMP/82a059e0d1ba702cb5e0c61ca26dc5b5802a7974bae36c4c5b14bb94d7346110?apiKey=aa19eef6d1f1473ba394866de3aadd86&" />
        </div>
        <div className="flex flex-auto gap-5 max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto text-base leading-5 text-neutral-800">
            Pepperdine University Most Fundable Companies.
          </div>
          <div className="flex flex-col self-start">
            <div className="flex gap-5 justify-between tracking-wide whitespace-nowrap text-neutral-800">
              <p className="text-xl leading-7">5.00</p>
              <p className="text-2xl leading-6">80</p>
            </div>
            <div className="flex gap-5 mt-2.5">
              <Rating rating={5} />
              <p className="text-xs leading-4 text-neutral-800">Reviews</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PepperdineBadge;