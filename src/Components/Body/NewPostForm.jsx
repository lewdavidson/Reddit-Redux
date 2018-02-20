import React from 'react';


const NewPostForm = () => {
  let _title = null;
  let _body = null;
  let _pic = null;

  function handleNewPost(event) {
    event.preventDefault();
    console.log(_title.value, _body.value, _pic.value);
  }
  return (
    <div>
      <form onSubmit={handleNewPost}>
        <input
          type='text'
          id='title'
          placeholder='Post Title'
          ref={(input) => {_title = input;}}/>
        <textarea
          type='text'
          id='body'
          placeholder='Post Body'
          ref={(textarea) => {_body = textarea;}}/>
        <input
          type='text'
          id='pic'
          placeholder='Post Pic'
          ref={(input) => {_pic = input;}}/>
        <button type='submit'>Submit your Post</button>
      </form>
    </div>
  );
};

export default NewPostForm;
