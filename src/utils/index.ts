export const handleScrollToElement = (targetClass: string) => {
  const element = document.querySelector(`.${targetClass}`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

export const downloadFile = async (
  fileUrl: string,
  fileType: string,
  fileName: string
) => {
  let fileBlob: Blob = await fetch(fileUrl).then((r) => r.blob());
  if (fileBlob) {
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = window.URL.createObjectURL(
      new Blob([fileBlob], { type: fileType })
    );
    a.setAttribute("download", fileName);
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(a.href);
    document.body.removeChild(a);
  }
};
