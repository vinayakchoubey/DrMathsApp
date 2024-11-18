import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>Dr.Maths Institute</h1>
            <span>An institute of Mathematical Science</span>
          </div>

          <div className='social'>
            <a href="https://www.instagram.com/mrrr._chaturvedi/">
            <i className='fab fa-facebook-f icon'></i>
            </a>

            <a href="https://www.instagram.com/mrrr._chaturvedi/">
            <i className='fab fa-instagram icon'></i>
            </a>

            <a href="https://www.youtube.com/@Dr.MathsInstitute">
            <i className='fab fa-youtube icon'></i>
            </a>
            
            <i className='fab fa-twitter icon'></i>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
