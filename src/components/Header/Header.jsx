import React from 'react'
import ExpenseForm from '../features/NewExpense/ExpenseForm'

const Header = ({handleAddExpense}) => {
  return (
    <div>
      <div className="page-header" data-parallax="true" style={{backgroundImage: `url('https://images.unsplash.com/photo-1498475932703-000eb46e6375')`, transform: 'translate3d(0px, 0px, 0px)'}}>
        <div className="filter"></div>
        <div className="content-center">
          <div className="container">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto text-center">
                <h1 className="title"> See you expenses a glance</h1>
                <h5 className="description">Now you have no excuses, it's time to surprise your clients, your competitors, and why not, the world. You probably won't have a better chance to show off all your potential if it's not by designing a website for
                  your own agency or web studio.</h5>
                <br/>
              </div>
              <div className="col-md-10 ml-auto mr-auto">
                <ExpenseForm handleAddExpense={ handleAddExpense}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Header

