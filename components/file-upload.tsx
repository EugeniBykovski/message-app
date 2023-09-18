"use client";

import { UploadDropzone } from "@/lib/uploading";
import { FileIcon, X } from "lucide-react";
import Image from "next/image";
import "@uploadthing/react/styles.css";

interface FileUploadProps {
  value: string;
  endpoint: "messageFile" | "serverImage";
  onChange: (url?: string) => void;
}

const FileUpload = ({ value, endpoint, onChange }: FileUploadProps) => {
  const fileType = value.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image fill src={value} alt="Upload" className="rounded-full" />
        <button
          className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
          type="button"
          onClick={() => onChange("")}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }

  if (value && fileType === "pdf") {
    return (
      <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
        <FileIcon className="w-10 h-10 fill-indigo-200 stroke-indigo-400 hover:underline" />
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-sm text-indigo-50 dark:text-indigo-400 hover:underline"
        >
          {value}
        </a>
        <button
          className="bg-rose-500 text-white p-1 rounded-full absolute -top-2 -right-2 shadow-sm"
          type="button"
          onClick={() => onChange("")}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => onChange(res?.[0].url)}
      onUploadError={(error: Error) => console.log(error)}
    />
  );
};

export default FileUpload;
