
const defaultInput = 
`# Heading

## Sub-heading
### Another deeper heading

Paragraphs are separated
by a blank line.

Text attributes *italic*, **bold**, 
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
    * oranges
      * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

[freeCodeCamp](https://freecodecamp.com/)

> ### Blockquote:
> Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.

### Codeblock:

\`\`\`
const str = "Hello World";
function sayIt (inp) {
  alert(inp);
}
sayIt(str);
\`\`\`

### Image:


![logo](https://avatars0.githubusercontent.com/u/9892522?v=3&s=200 'freeCodeCamp Logo')`;

module.exports = defaultInput;