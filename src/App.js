import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
const App = () => {
const [markdown, setMarkdown] = useState('');
const [html, setHtml] = useState('');
const handleInputChange = async (event) => {
const newMarkdown = event.target.value;
setMarkdown(newMarkdown);
const response = await axios.post('http://localhost:5000/convert', { markdown: newMarkdown
});
setHtml(response.data.html);
};
return (
<div className="App">
<textarea
value={markdown}
onChange={handleInputChange}
placeholder="Type your Markdown here..."
/>
<div
className="preview"
dangerouslySetInnerHTML={{ __html: html }}
/>
</div>
);
};
export default App;