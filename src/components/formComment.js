import React from 'react';

const formComment = ({submit, title, comment, change}) => {
  return (
    <div class="row">
        <form class="col s12" onSubmit={submit}>
          <div class="row">
            <div class="input-field col s6">
              <input type="text" class="validate" name="title" value={title} onChange={change}/>
              <label  className="active" for="first_name">Titulo</label>
            </div>
          </div>
             
          <div class="row">
            <div class="input-field col s6">
              <textarea id="textarea1" class="materialize-textarea" name="comment" value={comment} onChange={change}></textarea>
              <label  className="active" for="textarea1">Comentario</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s6">
            <input type="submit" value="COMENTA!" />
            </div>
          </div>
          
        </form>
      </div>
  );
};

export default formComment;