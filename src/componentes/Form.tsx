import React, {memo, forwardRef} from 'react'

interface IFormProps {
  name: string,
  method: HTTPMethods,
  children?: React.ReactNode
}

const Form: React.ForwardRefRenderFunction<HTMLFormElement, IFormProps> = (props, ref) => {
  return (
    <div className="form">
      <iframe name={props.name} style={{display: 'none'}} src="about:blank"></iframe>
      <form target={props.name} method={props.method} action="about:blank" ref={ref}
        onKeyPress={(e) => {if(e.key == 'Enter') e.preventDefault()}}>
          {props.children}
      </form>
    </div>
  )
}

export default memo(forwardRef(Form))