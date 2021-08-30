import React from 'react'

export default function ExpenseItem({ expense }) {
  const { expenseTitle, expenseAmount, expenseType, expenseDate } = expense
  
  return (
    
      <div className="col-md-3">
        <div className="card" data-background="image" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1545094729-5e4860fc9452?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80')` }}>
              <div className="card-body">
                <h6 className="card-category">
              <i className="fa fa-newspaper-o"></i>{ expenseType }</h6>
                <a href="/">
              <h3 className="card-title">{ expenseTitle}</h3>
                </a>
          <p className="card-description">
            <span className="span">Always Remember Pay Your Bills On Time</span>
            <br />
            
          </p><h1 className="title">
              { expenseAmount}</h1>
          
                <div className="card-footer">
                  <div className="author">
                    <a href="/">
                      <img src="./assets/img/faces/kaci-baum-2.jpg" alt="Date" className="avatar img-raised"/>
                <span>{ expenseDate }</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
  )
}
