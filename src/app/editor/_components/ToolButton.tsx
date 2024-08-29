"use client";

import React from "react";
import Hint from "@/components/feedback/Hint";
import { Button } from "@/components/ui/button";

type ToolButtonProps = {
  label: string;
  children: React.ReactNode;
  onClick: () => void;
  isActive?: boolean;
  isDisable?: boolean;
};

function ToolButton({
  label,
  children,
  onClick,
  isActive,
  isDisable,
}: ToolButtonProps) {
  return (
    <Hint label={label} align="start" side="right" sideOffset={15}>
      <Button
        disabled={isDisable}
        onClick={onClick}
        size="icon"
        variant={isActive ? "toolActive" : "tool"}
      >
        {children}
      </Button>
    </Hint>
  );
}

export default ToolButton;
