import * as React from "react";
import { motion } from "framer-motion";
import RowOfCards from "./RowOfCards";

const Loan: React.FC = () => {
  const handleViewReport = () => {
    window.open('https://paygeon.github.io/Application', '_blank');
    console.log("View report clicked");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div className="main-container static p-2 md:p-3 md:px-4 max-w-[400px]">
        <div className="grid grid-cols-12 gap-3 shadow-2xl">
          <div className="col-span-12">
            <motion.div
              className="rounded-xl bg-zinc-50 my-4 px-3 card"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex gap-0 py-2.5 pr-5 pl-2.5 font-semibold max-md:pr-5">
                <div className="flex flex-auto gap-4 text-sm leading-5 text-black">
                  <img
                    loading="lazy"
                    src="https://vashong.github.io/widgets/images/icons/credit%20score%20(2).svg"
                    alt="Credit score icon"
                    className="shrink-0 w-15 aspect-square"
                  />
                  <div className="flex-auto my-auto">Your Offers</div>
                </div>
                <motion.button
                  className="px-3 py-1 text-xs leading-4 whitespace-nowrap bg-white rounded-md shadow-lg text-indigo-950"
                  onClick={handleViewReport}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Apply For Capital
                </motion.button>
              </div>
              <RowOfCards />
              <br />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Loan;
