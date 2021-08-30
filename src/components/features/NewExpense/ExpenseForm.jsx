import React, {useState} from 'react'

const ExpenseForm = ({handleAddExpense}) => {
  const [expenseTitle, setExpenseTitle] = useState('')
  const [expenseAmount, setExpenseAmount] = useState('')
  const [expenseType, setExpenseType] = useState('')
  const [expenseDate, setExpenseDate] = useState('')
  const [formValues, setFormValues] = useState({})

  const handleChangeHandler = (e) => {
    const {name, value} = e.target
    if (name === 'expenseTitle') {
      setExpenseTitle(value)
    } else if (name === 'expenseAmount') {
      setExpenseAmount(value)
    } else if (name === 'expenseType') {
      setExpenseType(value)
    } else if (name === 'expenseDate') {
      setExpenseDate(value)
    }
    // const updateFormValues = {
    //   ...formValues,
    //   [e.target.name]: e.target.value
    // }
    // setFormValues(updateFormValues)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    const updatedForm = {
      expenseTitle,
      expenseAmount,
      expenseType,
      expenseDate
    }
    console.log(updatedForm)
    handleAddExpense(updatedForm)
  }
  return (
    <div>
      <div className="card card-raised card-form-horizontal no-transition">
                  <div className="card-body">
                    <form method="" action="" onSubmit={submitHandler}>
                      <div className="row">
                        <div className="col-md-3">
                          <div className="form-group">
                          <input type="text" value={expenseTitle} placeholder="Enter Title of Expense" name="expenseTitle" onChange={handleChangeHandler} className="form-control"/>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <input type="text" value={expenseAmount} placeholder="Enter Amount of Expense" name="expenseAmount" onChange={handleChangeHandler} className="form-control"/>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <input type="text" value={expenseType} placeholder="Enter Type of Expense" name="expenseType" onChange={handleChangeHandler} className="form-control"/>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <input type="text" value={expenseDate} placeholder="Enter Date" name="expenseDate" onChange={handleChangeHandler} className="form-control"/>
                          </div>
                        </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                          <button type="submit" className="btn btn-danger btn-block">Search</button>
                        </div>
            </div>
                    </form>
                  </div>
                </div>
    </div>
  )
}

export default ExpenseForm
