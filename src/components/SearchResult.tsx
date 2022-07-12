import React, { useMemo } from "react";
import { ISocketContext } from "../app";
import { useSearch } from "../context/SearchContext";
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";

const SearchResult = () => {
  const { renderArr } = useSearch() as ISocketContext;

  return useMemo(() => {
    return (
      <div className="flex flex-wrap items-center justify-between">
        {!(renderArr.length === 0)
          ? renderArr.map((e) => <Card {...e} key={e.id} />)
          : [...new Array(8)].map((e, index) => <SkeletonCard key={index} />)}
        <div className="w-[448px] h-[520px] min-w-[448px] max-w-md min-h-[448px] max-h-md"></div>
        <div className="w-[448px] h-[520px] min-w-[448px] max-w-md min-h-[448px] max-h-md"></div>
        <div className="w-[448px] h-[520px] min-w-[448px] max-w-md min-h-[448px] max-h-md"></div>
      </div>
    );
  }, [renderArr]);
};

export default SearchResult;
