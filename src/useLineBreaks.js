import { useEffect, useState } from 'react';

// Utility function to insert line breaks before articles or prepositions at the end of a line
const insertLineBreaks = (text) => {
  const articlesAndPrepositions = ['the', 'a', 'an', 'of', 'in', 'on', 'at', 'to', 'into', 'for', 'with', 'by', 'and', 'or', 'but', 'between'];
  // Regular expression to find articles or prepositions at the end of a line
  const regex = new RegExp(`\\s+(?=(${articlesAndPrepositions.join('|')})\\s*$)`, 'gi');
  return text.replace(regex, '\n'); // Inserts a newline character before the matched articles or prepositions
};

const useLineBreaks = (text) => {
  const [processedText, setProcessedText] = useState('');

  useEffect(() => {
    const newText = insertLineBreaks(text);
    setProcessedText(newText);
  }, [text]);

  return processedText.split('\n');
};

export default useLineBreaks;
