
import React from "react";
import Button from "../components/Button";
import Todos from "../components/Todo";

const MyTodosPage = () => {

  return (
    <div className="flex items-center justify-center flex-col pt-10 px-[200px] max-lrg:px-[100px] max-sm:px-[50px] ">
      <div className="w-full mt-[20px] max-sm:mt-1">
        <Todos/>
      </div>
    </div>
  );
};

export default MyTodosPage;
