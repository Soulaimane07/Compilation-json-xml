export const handleRemoveFile = (index, files, setFiles) => {
    // Create a new array excluding the file at the selected index
    const updatedFiles = files.filter((_, fileIndex) => fileIndex !== index);
    setFiles(updatedFiles);
};

export const formatFileSize = (size) => {
    if (size < 1024) return `${size} B`;
    else if (size < 1024 ** 2) return `${(size / 1024).toFixed(2)} KB`;
    else if (size < 1024 ** 3) return `${(size / 1024 ** 2).toFixed(2)} MB`;
    else return `${(size / 1024 ** 3).toFixed(2)} GB`;
};


export const DownloadFile = (fileContent, filedata) => {
    if (!fileContent || !filedata?.name) {
      console.error("Invalid fileContent or filedata");
      return;
    }
  
    let formattedContent;
    let mimeType;
  
    formattedContent = JSON.stringify({ content: fileContent }, null, 2); // Beautify JSON
    mimeType = "application/json";
  
    const blob = new Blob([formattedContent], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filedata.name;
    link.click();
    URL.revokeObjectURL(url);
  };
  