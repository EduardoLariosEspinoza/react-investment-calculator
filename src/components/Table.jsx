import React from "react";
import { TABLE_HEADERS } from "../resources/constResources";

function Table({ result }) {
  let totalInterest = 0;

  return (
    <>
      {result.length > 0 && (
        <table id="result">
          <thead>
            <tr>
              {TABLE_HEADERS.map((headerText, index) => {
                return <th key={index}>{headerText}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {result.map((data, index) => {
              const interestRounded = Math.round(data.interest);
              const valueEndOfTheYearRounded = Math.round(data.valueEndOfYear);
              totalInterest = totalInterest + interestRounded;

              return (
                <tr key={index}>
                  <td>{data.year}</td>
                  <td>{valueEndOfTheYearRounded}</td>
                  <td>{interestRounded}</td>
                  <td>{totalInterest}</td>
                  <td>{valueEndOfTheYearRounded - totalInterest}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Table;
