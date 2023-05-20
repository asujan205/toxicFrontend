import React, { useState, useEffect } from "react";
import axios from "axios";

const InputBox = ({ Comment, handleComment, handleInputChange, disabled }) => {
  const [Loading, setLoading] = useState(false);

  return (
    <>
      <div className="flex   flex-col  min-w-[500px] max-h-[650px] m-10 border  border-solid rounded-xl 	 border-cyan-500">
        <label html-for="chat" className="sr-only">
          Your message
        </label>
        <div className="flex items-center px-3 py-2 rounded-lg  bg-stone-200 border 	border-indigo-500	 border-solid 	 ">
          <textarea
            id="chat"
            rows="1"
            className="block mx-4    p-2.5 w-full min-h-[500px] mt-4 mb-4 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Check for Toxicity"
            value={Comment}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="flex flex-row justify-between m-3">
          {!disabled ? (
            <>
              <button
                onClick={() => {
                  handleComment();
                }}
                disabled={disabled}
                type="button"
                className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4  mt-5 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2"
              >
                Check For Toxicity
              </button>
            </>
          ) : (
            <button
              type="button"
              className="text-gray cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              disabled
            >
              Check For Toxicity In Romanized Text
            </button>
          )}

          <button
            type="button"
            onClick={() => {}}
            className="text-white bg-[#a02e41] hover:bg-[#a02e41]/80 focus:ring-4  mt-5 focus:outline-none focus:ring-[#a02e41]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#a02e41]/80 dark:focus:ring-[#a02e41]/40 mr-2 mb-2"
          >
            Clear Text
          </button>
        </div>
      </div>
    </>
  );
};

export default InputBox;
