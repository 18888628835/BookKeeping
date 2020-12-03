import { useEffect, useState } from "react";
const initialState = [
  { id: 0, name: "衣" },
  { id: 1, name: "食" },
  { id: 2, name: "住" },
  { id: 3, name: "行" },
];
export type X = typeof initialState;
const useTags = () => {
  const [tags, setTags] = useState<X>(
    JSON.parse(localStorage.getItem("tags")!) || initialState
  );
  useEffect(() => {
    localStorage.setItem("tags", JSON.stringify(tags));
  }, [tags]);
  const onAddTags: (tags: X) => void = (tags: X) => {
    const text: string | null = prompt("请输入表签名");
    if (text === null || text.trim() === "") {
      return null;
    }
    setTags([...tags, { id: Math.random(), name: text }]);
  };
  const findIndex = (tag: { id: number; name: string }) => {
    return tags.findIndex((v) => {
      return v === tag;
    });
  };

  const onEditTag = (index: number, name: string) => {
    tags[index].name = name;
    setTags([...tags]);
  };
  const removeTag = (tag: { id: number; name: string }) => {
    const newTags = tags.filter((t) => {
      return t !== tag;
    });
    setTags(newTags);
  };
  const getTagName = (id: number) => {
    return tags.find((t) => {
      return t.id === id;
    });
  };
  return { tags, onAddTags, onEditTag, findIndex, removeTag, getTagName };
};

export default useTags;
