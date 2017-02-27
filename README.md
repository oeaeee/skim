# Skim

Skim modifies the way words are displayed in NYT articles. It hopes to investigate if obscuring characters can enhance reading. [Chrome plugin](https://chrome.google.com/webstore/detail/skim/ooebdnkfnegjknekehpfpjabmkkomejk)

Studies suggest humans can read pretty well even when many characters in a word have been modified. Some studies imply that if the first and last letters of a word are kept intact, the rest can be scrambled without much loss in legibility. Others say we read based on the shapes of whole words rather than letters. Skim is a quick prototype to investigate these ideas.

It provides three ways to view New York Times articles: 
(1) DISEMVOWEL - where vowels are removed,
(2) SCRAMBLE - where interior letters are shuffled,
(3) SHAPES - where interior letters are masked to show only their ascenders and descender.

Skim was built in a day and is imperfect. While it’s intentional that words with three or fewer characters are not modified, things like punctuation were left unaccounted for due to time constraints.
