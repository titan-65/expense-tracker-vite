import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <section className="section section-blog cd-section">
      <div className="container">
        <h2 className="title text-center">See all your Expense at a glance</h2>
        <div className="row">
          {expenses.map(expense => {
            return (
              <ExpenseItem expense={expense} key={expense.id}/>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ExpenseList
