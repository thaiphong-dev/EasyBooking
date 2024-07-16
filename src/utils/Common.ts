export const formatCurrency = (
  money: number | string,
  punc: string = ".",
  fixedNumber: number = 2
) => {
  return Number(money)
    .toFixed(fixedNumber)
    .replace(/./g, function (c, i, a) {
      return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? punc + c : c;
    });
};

export const formatPhoneNumber = (phoneNumber: string) => {
  const cleaned = ("" + phoneNumber).replace(/\D/g, "");
  const match = cleaned.match(/^(\d{1,3}|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    const intlCode = match[1] ? `+${match[1]} ` : "";
    return [intlCode, match[2], "-", match[3], "-", match[4]].join("");
  }
  return null;
};

export const formatterNumber = (value: number | string | undefined) => {
  if (!value) {
    return "";
  }
  const numberValue = parseFloat(value.toString().replace(/\D/g, ""));
  return numberValue.toLocaleString("en");
};

export const formatterPrice = (value: number | string | undefined) => {
  if (!value) {
    return 0;
  }
  const numberValue = parseFloat(value.toString().replace(/\D/g, ""));
  return numberValue.toLocaleString("vi");
};

export const parserNumber = (value: string | undefined) => {
  if (!value) {
    return "";
  }
  const numberValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  return isNaN(numberValue) ? "" : numberValue;
};

export const formatNumberWithDots = (numStr: string): string => {
  // Convert the string to a number and back to a string to remove any non-numeric characters
  const cleanNumStr = parseInt(numStr, 10).toString();

  // Use a regular expression to add dots as thousand separators
  return cleanNumStr.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
export const maskPhoneNumber = (phoneNumber: string): string => {
  // Ensure the input is a valid phone number string
  if (phoneNumber.length < 3) {
    throw new Error("Phone number must have at least 3 digits");
  }

  // Get the part of the phone number to keep
  const visiblePart = phoneNumber.slice(0, -3);

  // Append the asterisks
  const maskedPart = "***";

  // Combine the visible part with the masked part
  return `${visiblePart}${maskedPart}`;
};

export const formatterInput = (value: string | number | undefined) => {
  if (value) {
    return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  return "";
};

export const parserInput = (value: string | undefined) => {
  if (value) {
    return value.replace(/\./g, "");
  }
  return "";
};

export const isObjectEmpty = (objectName: any) => {
  return (
    objectName &&
    Object.keys(objectName).length === 0 &&
    objectName.constructor === Object
  );
};
