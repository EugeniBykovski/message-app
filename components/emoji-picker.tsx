"use client";

import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import { Smile } from "lucide-react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { useTheme } from "next-themes";

interface EmojiPickerProps {
  onChange: (value: string) => void;
}

const EmojiPicker = ({ onChange }: EmojiPickerProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <Popover>
      <PopoverTrigger>
        <Smile className="hover:text-zinc-600 cursor-pointer text-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-300 transition " />
      </PopoverTrigger>
      <PopoverContent
        side="right"
        sideOffset={40}
        className="bg-transperent border-none shadow-none drop-shadow-none mb-16"
      >
        <Picker
          theme={resolvedTheme}
          data={data}
          onEmojiSelect={(emoji: any) => onChange(emoji.native)}
        />
      </PopoverContent>
    </Popover>
  );
};

export default EmojiPicker;
