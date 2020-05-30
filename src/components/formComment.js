import React from 'react';

const formComment = ({submit, title, comment, change}) => {
  return (
    <div class="row">
        <form class="col s12" onSubmit={submit}>
          <div class="row">
            <div class="input-field col s6">
              <input id="first_name"  type="text"  name="title"  class="validate" value={title} onChange={change}/>
              <label  for="first_name">Titulo</label>
            </div>
          </div>
             
          <div class="row">
            <div class="input-field col s12">
              <textarea id="textarea1" class="materialize-textarea validate" name="comment" value={comment} onChange={change}></textarea>
              <label  for="textarea1">Comentario</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s6">
            <input class="waves-effect waves-light btn-large textWhite" type="submit" value="COMENTA!" />
            </div>
          </div>
          
        </form>
      </div>
  );
};

export default formComment;