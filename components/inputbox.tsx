import React, { useState, useEffect } from "react";

const InputBox = () => {
  const [Loading, setLoading] = useState(false);
  return (
    <>
      <div className="flex   flex-col  min-w-[500px] min-h-[500px] m-10 border  border-solid rounded-xl		 border-cyan-500">
        <label html-for="chat" className="sr-only">
          Your message
        </label>
        <div className="flex items-center px-3 py-2 rounded-lg  bg-stone-200 border 	border-indigo-500	 border-solid 	 ">
          <textarea
            id="chat"
            rows="1"
            className="block mx-4    p-2.5 w-full min-h-[500px] mt-4 mb-4 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Check for Toxicity"
          ></textarea>
        </div>
        <div className="flex flex-row justify-between m-3">
          <button
            type="button"
            className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4  mt-5 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2"
          >
            Check For Toxicity
            {/* <svg
              aria-hidden="true"
              class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span> */}
          </button>
          <button
            type="button"
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
