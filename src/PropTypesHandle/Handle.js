import React from 'react';

function Comment({author,message,likes})
{
  
return(
  <div>
    <div className="author">{author}</div>
    <div className="message">{message}</div>
    <div className="likes">{likes}</div>
  </div>
)

}


 Comment.propTypes = {
  message:PropTypes.string.isRequired,
  author:PropTypes.string.isRequired,
  likes:PropTypes.number
}

//<Comment author="hello" likes={5}/>


function customValidator(props,propName,componentName)
{
  if (props[propName].length !== 3) {
    return new Error(
    'Invalid prop `' + propName + '` supplied to' +
    ' `' + componentName + '`. Length is not 3.'
    );
    }
    
}

const MycustomTest = ({mycustomProp}) => <span>{mycustomProp}</span>
MycustomTest.propTypes={
  mycustomProp:customValidator
}

  
export {Comment , MycustomTest};