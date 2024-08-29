import React from "react";
import { Button } from "@/components/ui/button";
import Hint from "@/components/feedback/Hint";

function EditorPage() {
  return (
    <div className="m-8">
      <Hint label="Hello world" align="center" side="right" sideOffset={10}>
        <Button>+</Button>
      </Hint>
    </div>
  );
}

export default EditorPage;
