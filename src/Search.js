import React, {useState, useEffect} from 'react';

function Search({searchTodo}) {
    const [content, setContent] = useState('');

    const handleChange = (e) => {
        setContent(e.target.value);

    };
    useEffect(() => {
    searchTodo(content);
    }, [content]);


        return (
            <div>
                    <label>Search todo</label>
                    <input type="text" value={content} onChange={handleChange}/>
            </div>
        )

}
export default Search