export const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
  
    // Extract day, month, and year
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
  
    // Format as DD-MM-YYYY
    return `${day}-${month}-${year}`;
};