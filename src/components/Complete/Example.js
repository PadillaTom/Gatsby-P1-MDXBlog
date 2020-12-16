import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDark'

// const exampleCode = `
// (function someDemo() {
//   var test = "Hello World!";
//   console.log(test);
// })();

// return () => <App />;
// `

const Example = props => {
  const className2 = props.children.props.className
  let language
  if (className2 !== undefined) {
    language = className2.replace(/language-/, '')
  }

  console.log(className2)

  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={language || 'jsx'}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default Example
