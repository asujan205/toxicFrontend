import React from "react";

const OutputBox = ({ data }) => {
  // const resultItems = Object.entries(data).map(([key, value]) => (
  //   <p key={key}>
  //     {key}: {value.toString()}
  //   </p>
  // ));

  if (!data) {
    return null; // If data is not available, don't render anything
  }

  return (
    <>
      <div className="flex flex-col min-w-[500px] min-h-[500px] m-10 border bg-stone-200 border-solid rounded-xl border-cyan-500">
        <div className="flex flex-row p-5">
          {/* <pre>{JSON.stringify(data)}</pre> */}
          <p className="text-2xl font-bold">Toxic: {data.result.toxic}</p>
          {/* <p className="text-2xl font-bold ml-5">
            Severe Toxic: {data.severe_toxic}
          </p>
        </div>
        <div className="flex flex-row p-5">
          <p className="text-2xl font-bold">Obscene: {data.obscene}</p>
          <p className="text-2xl font-bold ml-5">Threat: {data.threat}</p>
        </div>
        <div className="flex flex-row p-5">
          <p className="text-2xl font-bold">Insult: {data.insult}</p>
          <p className="text-2xl font-bold ml-5">
            Identity Hate: {data.identity_hate}
          </p> */}
        </div>
      </div>
    </>
  );
};

export default OutputBox;
