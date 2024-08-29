"use client";

import ToolButton from "./ToolButton";
import {
  MousePointer2,
  Pencil,
  Circle,
  Square,
  Type,
  StickyNote,
} from "lucide-react";

function Toolbar() {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-4 bg-white shadow-md p-2 rounded-sm flex flex-col space-y-2">
      <ToolButton
        label="Select"
        isActive={false}
        isDisable={false}
        onClick={() => {}}
      >
        <MousePointer2 />
      </ToolButton>

      <ToolButton
        label="Pen"
        isActive={false}
        isDisable={false}
        onClick={() => {}}
      >
        <Pencil />
      </ToolButton>

      <ToolButton
        label="Rectangle"
        isActive={false}
        isDisable={false}
        onClick={() => {}}
      >
        <Square />
      </ToolButton>

      <ToolButton
        label="Note"
        isActive={false}
        isDisable={false}
        onClick={() => {}}
      >
        <StickyNote />
      </ToolButton>

      <ToolButton
        label="Ellipse"
        isActive={false}
        isDisable={false}
        onClick={() => {}}
      >
        <Circle />
      </ToolButton>

      <ToolButton
        label="Text"
        isActive={false}
        isDisable={false}
        onClick={() => {}}
      >
        <Type />
      </ToolButton>
    </div>
  );
}

export default Toolbar;
