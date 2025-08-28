import React, { useEffect ,useState } from 'react'

export default function Ex6() {
  const [keyPressed, setKeyPressed] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeyPressed(e.key);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <h2>Phím bạn vừa nhấn:</h2>
      <div>
        {keyPressed ? `[ ${keyPressed.toUpperCase()} ]` : "Chưa nhấn phím nào"}
      </div>
    </div>
  );
}
