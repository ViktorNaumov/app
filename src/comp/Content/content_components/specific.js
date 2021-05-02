import React from "react";
import Styles from "../content.css";
import Button from "./button";
import TableEdit from "./tableEdit";

const Specification = (props) => {

  let sumcost = props.arrayData.map((sc) => sc.cost * sc.Q);
  let summas = props.arrayData.map((sm) => sm.m * sm.Q);
  let Sc = 0;
  let Sm = 0;
  for (let i = 1; i < sumcost.length; i++) {
    Sc = Sc + Number(sumcost[i]);
  }

  for (let i = 1; i < summas.length; i++) {
    Sm = Sm + Number(summas[i]);
  }
  Sm = Sm.toFixed(2);

  let spec = props.arrayData.map((sp,index) => (
    <tbody key={index}>
    <tr key={sp.id}>
      <td> {sp.id} </td>
      <td>{sp.name}</td>
      <td> {sp.Q} </td>
      <td> {sp.m} </td>
      {sp.id == "№п." ? (<td> {sp.summ_m} </td>) : (<td> {(sp.m*sp.Q).toFixed(2)} </td>)}
      <td> {sp.cost} </td>
      {sp.id == "№п." ?  (<td> {sp.summ} </td>) : (<td> {(sp.cost*sp.Q).toFixed(2)} </td>)  }
      {sp.id !== "№п." ? (
        <td>
          <TableEdit tableEdit = {props.tableEdit} id = {sp.id} />
        </td>
      ) : (
        <td>Удалить</td>
      )}
    </tr>
    </tbody>
  ));

  return (
    <div className="specFlex">
      <div className="Spec">
        <div className="Spec1">
          <span>
            <h1>Спецификация</h1>
          </span>
        </div>
        <div className="Specblock">
          <div className="SpecTable">
            <table>{spec}</table>
          </div>
          <div className="SummTable">
            <p>Всего изделий на сумму:</p>
            <output>{Sc.toFixed(2)} руб.</output>
          </div>
          <div className="SummTable">
            <p>Общим весом:</p>
            <output>{Sm} кг.</output>
          </div>
        </div>
        <div>
          <Button
            name={props.title[18].title}
            func={props.apiPush}
            form={props.arrayData}
          />
        </div>
        <div className="dist"></div>
      </div>
    </div>
  );
};
export default Specification;
