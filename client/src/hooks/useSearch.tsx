import React, { useCallback, useState } from "react";
import { debounce } from "lodash";

export default function useSearch() {
  const [keyword, setKeyword] = useState("");

  const handleSearchChange = useCallback(
    debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(event.target.value);
    }, 500),
    []
  );

  return { keyword, handleSearchChange };
}
