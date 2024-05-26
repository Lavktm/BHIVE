"use client";
import clsx from "clsx";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { DynamicDropdownList } from "@/components/dynamicComponents";
import { IDropDownProps } from "@/components/ui/dropdown-list";

import SearchIcon from "~/svg/search.svg";
import ISelectArrow from "~/svg/select-arrow.svg";

export interface ISearchableDropdownList
  extends Omit<IDropDownProps, "isOpen" | "parentRef"> {
  containerClassName?: string;
  inputClassName?: string;
  showArrow?: boolean;
  placeholder?: string;
  dropdownOpen?: boolean;
}

const SearchableDropdownList = ({
  items,
  setDropdownOpen,
  className,
  itemClassName,
  itemContainerClassName,
  selectedValue,
  highlightSelectedItem = true,
  multiple = false,
  onSelect,
  onSelectItems,
  showCheckBox = false,
  dropdownOpen = false,
  inputClassName = "",
  showArrow = true,
  placeholder = "Search...",
  containerClassName,
}: ISearchableDropdownList) => {
  const ref = useRef<HTMLInputElement>(null);
  const [searchedItems, setSearchedItems] = useState(items);

  useEffect(() => {
    setSearchedItems(items);
  }, [items]);

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const value = target.value;
    if (value) {
      const searchedItems = items.filter(
        (item: any) => item.value.search(new RegExp(value, "i")) > -1,
      );
      setSearchedItems(searchedItems);
    } else {
      setSearchedItems(items);
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        clsx(
          "relative flex w-[75%] rounded-l-lg  rounded-r-lg bg-white px-2.5 py-3 text-silver-chalice shadow-md dark:bg-shark  dark:text-comet",
          containerClassName,
        ),
      )}
    >
      <button type="submit">
        <SearchIcon className="h-5 w-5 text-silver-chalice dark:text-comet" />
      </button>
      <input
        type="search"
        name="search"
        placeholder={placeholder}
        className={cn(
          clsx(
            "w-full rounded-lg  bg-white px-2.5 text-sm focus:outline-none dark:bg-shark",
            inputClassName,
          ),
        )}
        onChange={(event) => searchHandler(event)}
        onFocus={() => setDropdownOpen(true)}
        onClick={() => setDropdownOpen(true)}
      />

      {showArrow && (
        <button onClick={() => setDropdownOpen(!dropdownOpen)}>
          <ISelectArrow
            className={clsx("text-black-white h-4 w-4", {
              "rotate-180": dropdownOpen,
            })}
          />
        </button>
      )}

      <DynamicDropdownList
        items={searchedItems}
        isOpen={dropdownOpen}
        selectedValue={selectedValue}
        setDropdownOpen={(value: boolean) => setDropdownOpen(value)}
        className={className}
        parentRef={ref}
        multiple={multiple}
        onSelectItems={onSelectItems}
        showCheckBox={showCheckBox}
        onSelect={onSelect}
        highlightSelectedItem={highlightSelectedItem}
        itemClassName={itemClassName}
        itemContainerClassName={itemContainerClassName}
      />
    </div>
  );
};

export default SearchableDropdownList;
