import React, { useState } from 'react'
import { useQuery } from 'graphql-hooks'
import Header from './components/Header/Header'
import ExpenseList from './components/features/Expenses/ExpenseList'
import dataLocal from './data/data.json'
import './App.css'

const EXPENSE_QUERY = `query Expense($limit: IntType) {
  allExpenses(first: $limit) {
    id
    title
  }
}`

function App() {
  // const [count, setCount] = useState(0)
  const [expense, setExpense] = useState({})
  const [expenseData, setExpenseData] = useState(dataLocal)

  const handleAddExpense = (expense) => {
    console.log(expense)
    setExpenseData([...expenseData, expense])
  }

  // const { loading, error, data } = useQuery(EXPENSE_QUERY, {
  //   variables: { limit: 10 },
  // })

  // if (loading) return <p>Loading...</p>
  // if (error) return <p>Error :(</p>
  // console.log(data)

  return (
    <div>
      <Header handleAddExpense={ handleAddExpense}/>
      <ExpenseList expenses={ expenseData}/>
    </div>
    )
}

export default App
