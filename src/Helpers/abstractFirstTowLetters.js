export default function abstractFirstTwoLetters(name) {
    if (typeof name !== 'string' || name.length < 2) {
      // Handle invalid input or names with less than 2 characters
      return 'Invalid Name';
    }
  
    
    const firstTwoLetters = name.substring(0, 2).toUpperCase();
  
    return firstTwoLetters;
  }
  

  