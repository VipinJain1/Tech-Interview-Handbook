(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return l}),n.d(t,"rightToc",function(){return b}),n.d(t,"default",function(){return s});n(0);var a=n(101);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l={id:"string",title:"String"},b=[],o={rightToc:b},c="wrapper";function s(e){var t=e.components,n=r(e,["components"]);return Object(a.b)(c,i({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Output list of strings representing a page of hostings given a list of CSV strings."),Object(a.b)("li",{parentName:"ul"},"Given a list of words, find the word pairs that when concatenated form a palindrome."),Object(a.b)("li",{parentName:"ul"},"Find the most efficient way to identify what character is out of place in a non-palindrome."),Object(a.b)("li",{parentName:"ul"},"Implement a simple regex parser which, given a string and a pattern, returns a boolean indicating whether the input matches the pattern. By simple, we mean that the regex can only contain the following special characters: ",Object(a.b)("inlineCode",{parentName:"li"},"*")," (star), ",Object(a.b)("inlineCode",{parentName:"li"},".")," (dot), ",Object(a.b)("inlineCode",{parentName:"li"},"+")," (plus). The star means that there will be zero or more of the previous character in that place in the pattern. The dot means any character for that position. The plus means one or more of previous character in that place in the pattern."),Object(a.b)("li",{parentName:"ul"},"Find all words from a dictionary that are x edit distance away."),Object(a.b)("li",{parentName:"ul"},"Given a string IP and number n, print all CIDR addresses that cover that range."),Object(a.b)("li",{parentName:"ul"},"Write a function called ",Object(a.b)("inlineCode",{parentName:"li"},"eval"),", which takes a string and returns a boolean. This string is allowed 6 different characters: ",Object(a.b)("inlineCode",{parentName:"li"},"0"),", ",Object(a.b)("inlineCode",{parentName:"li"},"1"),", ",Object(a.b)("inlineCode",{parentName:"li"},"&"),", ",Object(a.b)("inlineCode",{parentName:"li"},"|"),", ",Object(a.b)("inlineCode",{parentName:"li"},"("),", and ",Object(a.b)("inlineCode",{parentName:"li"},")"),". ",Object(a.b)("inlineCode",{parentName:"li"},"eval")," should evaluate the string as a boolean expression, where ",Object(a.b)("inlineCode",{parentName:"li"},"0")," is ",Object(a.b)("inlineCode",{parentName:"li"},"false"),", ",Object(a.b)("inlineCode",{parentName:"li"},"1")," is ",Object(a.b)("inlineCode",{parentName:"li"},"true"),", ",Object(a.b)("inlineCode",{parentName:"li"},"&")," is an ",Object(a.b)("inlineCode",{parentName:"li"},"and"),", and ",Object(a.b)("inlineCode",{parentName:"li"},"|")," is an ",Object(a.b)("inlineCode",{parentName:"li"},"or"),".",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"E.g ",Object(a.b)("inlineCode",{parentName:"li"},'"(0 | (1 | 0)) & (1 & ((1 | 0) & 0))"')))),Object(a.b)("li",{parentName:"ul"},"Given a pattern string like ",Object(a.b)("inlineCode",{parentName:"li"},'"abba"')," and an input string like ",Object(a.b)("inlineCode",{parentName:"li"},'"redbluebluered"'),", return ",Object(a.b)("inlineCode",{parentName:"li"},"true")," if and only if there's a one to one mapping of letters in the pattern to substrings of the input.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"E.g. ",Object(a.b)("inlineCode",{parentName:"li"},'"abba"')," and ",Object(a.b)("inlineCode",{parentName:"li"},'"redbluebluered"')," should return ",Object(a.b)("inlineCode",{parentName:"li"},"true"),"."),Object(a.b)("li",{parentName:"ul"},"E.g. ",Object(a.b)("inlineCode",{parentName:"li"},'"aaaa"')," and ",Object(a.b)("inlineCode",{parentName:"li"},'"asdasdasdasd"')," should return ",Object(a.b)("inlineCode",{parentName:"li"},"true"),"."),Object(a.b)("li",{parentName:"ul"},"E.g. ",Object(a.b)("inlineCode",{parentName:"li"},'"aabb"')," and ",Object(a.b)("inlineCode",{parentName:"li"},'"xyzabcxzyabc"')," should return ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."))),Object(a.b)("li",{parentName:"ul"},"If you received a file in chunks, calculate when you have the full file. Quite an open-ended question. Can assume chunks come with start and end, or size, etc."),Object(a.b)("li",{parentName:"ul"},"Given a list of names (strings) and the width of a line, design an algorithm to display them using the minimum number of lines."),Object(a.b)("li",{parentName:"ul"},"Design a spell-checking algorithm."),Object(a.b)("li",{parentName:"ul"},"Longest substring with ",Object(a.b)("inlineCode",{parentName:"li"},"K")," unique characters.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"http://blog.gainlo.co/index.php/2016/04/12/find-the-longest-substring-with-k-unique-characters/"}),"Source")))),Object(a.b)("li",{parentName:"ul"},"Given a set of random strings, write a function that returns a set that groups all the anagrams together.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"http://blog.gainlo.co/index.php/2016/05/06/group-anagrams/"}),"Source")))),Object(a.b)("li",{parentName:"ul"},"Given a string, find the longest substring without repeating characters. For example, for string ",Object(a.b)("inlineCode",{parentName:"li"},"'abccdefgh'"),", the longest substring is ",Object(a.b)("inlineCode",{parentName:"li"},"'cdefgh'"),".",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"http://blog.gainlo.co/index.php/2016/10/07/facebook-interview-longest-substring-without-repeating-characters/"}),"Source")))),Object(a.b)("li",{parentName:"ul"},"Given a string, return the string with duplicate characters removed."),Object(a.b)("li",{parentName:"ul"},"Write a function that receives a regular expression (allowed chars = from ",Object(a.b)("inlineCode",{parentName:"li"},"'a'")," to ",Object(a.b)("inlineCode",{parentName:"li"},"'z'"),", ",Object(a.b)("inlineCode",{parentName:"li"},"'*'"),", ",Object(a.b)("inlineCode",{parentName:"li"},"'.'"),") and a string containing lower case english alphabet characters and return ",Object(a.b)("inlineCode",{parentName:"li"},"true")," or ",Object(a.b)("inlineCode",{parentName:"li"},"false")," whether the string matches the regex.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"E.g. ",Object(a.b)("inlineCode",{parentName:"li"},"'ab*a'"),", ",Object(a.b)("inlineCode",{parentName:"li"},"'abbbbba'")," => ",Object(a.b)("inlineCode",{parentName:"li"},"true"),"."),Object(a.b)("li",{parentName:"ul"},"E.g. ",Object(a.b)("inlineCode",{parentName:"li"},"'ab*b.'"),", ",Object(a.b)("inlineCode",{parentName:"li"},"'aba'")," => ",Object(a.b)("inlineCode",{parentName:"li"},"true"),"."),Object(a.b)("li",{parentName:"ul"},"E.g. ",Object(a.b)("inlineCode",{parentName:"li"},"'abc*'"),", ",Object(a.b)("inlineCode",{parentName:"li"},"'acccc'")," => ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."))),Object(a.b)("li",{parentName:"ul"},"Given a rectangular grid with letters, search if some word is in the grid."),Object(a.b)("li",{parentName:"ul"},"Given two strings representing integer numbers (",Object(a.b)("inlineCode",{parentName:"li"},"'123'")," , ",Object(a.b)("inlineCode",{parentName:"li"},"'30'"),") return a string representing the sum of the two numbers: ",Object(a.b)("inlineCode",{parentName:"li"},"'153'"),"."),Object(a.b)("li",{parentName:"ul"},"A professor wants to see if two students have cheated when writing a paper. Design a function ",Object(a.b)("inlineCode",{parentName:"li"},"hasCheated(String s1, String s2, int N)")," that evaluates to ",Object(a.b)("inlineCode",{parentName:"li"},"true")," if two strings have a common substring of length ",Object(a.b)("inlineCode",{parentName:"li"},"N"),".",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Follow up: Assume you don't have the possibility of using ",Object(a.b)("inlineCode",{parentName:"li"},"String.contains()")," and ",Object(a.b)("inlineCode",{parentName:"li"},"String.substring()"),". How would you implement this?"))),Object(a.b)("li",{parentName:"ul"},"Print all permutations of a given string."),Object(a.b)("li",{parentName:"ul"},"Parse a string containing numbers and ",Object(a.b)("inlineCode",{parentName:"li"},"'+'"),", ",Object(a.b)("inlineCode",{parentName:"li"},"'-'")," and parentheses. Evaluate the expression. ",Object(a.b)("inlineCode",{parentName:"li"},"-2+(3-5)")," should return ",Object(a.b)("inlineCode",{parentName:"li"},"-4"),"."),Object(a.b)("li",{parentName:"ul"},"Output a substring with at most ",Object(a.b)("inlineCode",{parentName:"li"},"K")," unique characters.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"E.g. ",Object(a.b)("inlineCode",{parentName:"li"},"'aabc'")," and ",Object(a.b)("inlineCode",{parentName:"li"},"k")," = 2 => ",Object(a.b)("inlineCode",{parentName:"li"},"'aab'"),"."))),Object(a.b)("li",{parentName:"ul"},"Ensure that there are a minimum of ",Object(a.b)("inlineCode",{parentName:"li"},"N")," dashes between any two of the same characters of a string.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"E.g. ",Object(a.b)("inlineCode",{parentName:"li"},"n = 2, string = 'ab-bcdecca'")," => ",Object(a.b)("inlineCode",{parentName:"li"},"'ab--bcdec--ca'"),"."))),Object(a.b)("li",{parentName:"ul"},"Find the longest palindrome in a string."),Object(a.b)("li",{parentName:"ul"},"Give the count and the number following in the series.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"E.g. ",Object(a.b)("inlineCode",{parentName:"li"},"1122344"),", next: ",Object(a.b)("inlineCode",{parentName:"li"},"21221324"),", next: ",Object(a.b)("inlineCode",{parentName:"li"},"12112211121214"),"."),Object(a.b)("li",{parentName:"ul"},"Count and say problem."))),Object(a.b)("li",{parentName:"ul"},"Compress a string by grouping consecutive similar questions together:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"E.g. ",Object(a.b)("inlineCode",{parentName:"li"},"'aaabbbcc' =>"),"'a3b3c2'`."))),Object(a.b)("li",{parentName:"ul"},"You have a string consisting of open and closed parentheses, but parentheses may be imbalanced. Make the parentheses balanced and return the new string."),Object(a.b)("li",{parentName:"ul"},"Given a set of strings, return the smallest subset that contains prefixes for every string.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"E.g. ",Object(a.b)("inlineCode",{parentName:"li"},"['foo', 'foog', 'food', 'asdf']")," => ",Object(a.b)("inlineCode",{parentName:"li"},"['foo', 'asdf']"),"."))),Object(a.b)("li",{parentName:"ul"},"Write a function that would return all the possible words generated when using a phone (pre-smartphone era) numpad to type."),Object(a.b)("li",{parentName:"ul"},"Given a dictionary and a word, find the minimum number of deletions needed on the word in order to make it a valid word.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"http://blog.gainlo.co/index.php/2016/04/29/minimum-number-of-deletions-of-a-string/"}),"Source")))),Object(a.b)("li",{parentName:"ul"},"How to check if a string contains an anagram of another string?",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",i({parentName:"li"},{href:"http://blog.gainlo.co/index.php/2016/04/08/if-a-string-contains-an-anagram-of-another-string/"}),"Source")))),Object(a.b)("li",{parentName:"ul"},"Find all k-lettered words from a string."),Object(a.b)("li",{parentName:"ul"},"Given a string of open and close parentheses, find the minimum number of edits needed to balance a string of parentheses."),Object(a.b)("li",{parentName:"ul"},"Run length encoding - Write a string compress function that returns ",Object(a.b)("inlineCode",{parentName:"li"},"'R2G1B1'")," given ",Object(a.b)("inlineCode",{parentName:"li"},"'RRGB'"),"."),Object(a.b)("li",{parentName:"ul"},"Write a function that finds all the different ways you can split up a word into a concatenation of two other words.")))}s.isMDXComponent=!0}}]);