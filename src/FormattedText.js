// FormattedText.js
import React from 'react';
import { Typography } from '@mui/material';

// Utility function to prevent widows and insert line breaks based on text content
function processText(text) {
  // Define the conjunctions for widow prevention
  const widows = ['and', 'or', 'but', 'for', 'by','nor', 'so', 'yet', 'of', 'an', 'between', 'to', 'off', 'etc.', 'the', 'about'];
  const widowRegex = new RegExp(`\\b(${widows.join('|')})\\s`, 'gi');

  // Extract articles and prepositions from the text for line breaks
  const articlesAndPrepositions = text.match(/\b(?:the|a|by|an|of|in|on|at|to|for|with|by|and|or|but|off|etc.|between)\b/g) || [];
  const uniquePrepositions = [...new Set(articlesAndPrepositions)].join('|'); // Get unique prepositions
  const breakRegex = new RegExp(`\\s+(?=(${uniquePrepositions})\\s*$)`, 'gi');

  // Insert line breaks and prevent widows
  return text.replace(breakRegex, '\n').replace(widowRegex, (match, widow) => `${widow}\u00A0`).split('\n');
}

const FormattedText = ({ text }) => {
  return (
    <>
      {processText(text).map((line, index) => (
        <Typography
          key={index}
          sx={{
            fontFamily: 'Calibre Regular',
            fontSize: '18px',
            lineHeight: 'normal',
            pb: '4px'
          }}
        >
          <span dangerouslySetInnerHTML={{ __html: line }} />
        </Typography>
      ))}
    </>
  );
};

export default FormattedText;
