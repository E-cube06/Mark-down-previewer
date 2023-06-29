marked.setOptions({
    breaks:true,
});
const renderer = new marked.Renderer();

function App(){

const [text, setText] = React.useState("# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n")

    return (
        <div className = 'text-center px-4'>
            <header><h1 className='p-4'>My Markdown Previewer</h1></header>
            <h2>coded by <strong><em>Efosa Ernest</em></strong></h2>
            <h3>Markdown Input</h3>
            <textarea 
            name='text'
            id='editor'
            rows='10'
            value={text}
            onChange ={(e) => setText(e.target.value)}
            className='textarea'
            ></textarea>
            <h3 className ="mt-3">Markdown Output</h3>
             <Preview markdown={text}/> 
        </div>
    );
}

function Preview({markdown}){
    return (
        <div dangerouslySetInnerHTML={{
            __html: marked(markdown, { renderer: renderer })
        }} 
        id ="preview"></div>
    );
}
ReactDOM.render(<App/>, document.getElementById('root'));