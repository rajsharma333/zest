import React from 'react';

const QnA = () => {
  return (
      <div className="">
         <ul>
          <li>Q. - Difference in Named and Default Export</li>
          <li>Q. - How to use async await in useEffect hooks</li>
          <li>Q. - How to stop unnecessary re-rendering in useEffect</li>
          <li>Q. - How to display react code snippets in browser/website<br/>
          https://codesandbox.io/s/5kz6kyprxp
          </li>
          <li>Q. - How to import react component while or after import</li>
          <li>Q. - Why should be use Switch in router while we can do it using exact</li>
          <li>Q. - console just after setState shows previous state only</li>
          <li>Q. - How to break a form into multiple components</li>
        </ul><br/><br/>
        <ul>
         <li>By default, React DOM escapes any values embedded in JSX before rendering
         them. Thus it ensures that you can never inject anything that’s not explicitly
         written in your application. Everything is converted to a string before being
         rendered. This helps prevent XSS (cross-site-scripting) attacks.
         </li>
       </ul>
       </div>
  )
}

export default QnA;
