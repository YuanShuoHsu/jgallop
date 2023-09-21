const fixUTF8Encoding = (string: string) => {
  const byteArray = Array.from(string, (char) => char.charCodeAt(0));
  return new TextDecoder("utf-8").decode(new Uint8Array(byteArray));
};

export { fixUTF8Encoding };
