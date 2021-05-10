import { getMe, getStateAPI, login, postSpec, registration } from "../API/API";
import storeCopy from "./store-copy";
import setAuthorizationToken from "./utils";

const ADD_NEW_TEXT = "ADD-NEW-TEXT";
const CALCULATE = "CALCULATE";
const ADD_DATA = "ADD-DATA";
const API_STATE = "API-STATE";
const PUSH_DATA = "PUSH-DATA";
const PUSH_DATA_LOGIN = "PUSH-DATA-LOGIN";
const ORDER_SHOW = "ORDER-SHOW";
const SET_USER_DATA = "SET-USER-DATA";
const SET_LOGIN_DATA = "SET-LOGIN-DATA";
const SET_LOGOUT_DATA = "SET-LOGOUT-DATA";
const LOGIN_FORM_SHOW = "LOGIN-FORM-SHOW";
const SET_REGISTRATION_DATA = "SET-REGISTRATION-DATA";
const REGISTRATION_FORM_SHOW = "REGISTRATION-FORM-SHOW";
const REG_OK_SHOW = "REG-OK-SHOW";
const ALL_CLOSE = "ALL-CLOSE";
const MAIL_OK_SHOW = "MAIL-OK-SHOW";
const PUSH_OK_SHOW = "PUSH-OK-SHOW";
const SPEC_TABLE_EDIT = "SPEC-TABLE-EDIT";

let initialState = storeCopy.getState();

const reduser = (state = initialState, action) => {
  let stateCopy;
  stateCopy = { ...state };
  let calculate = (form) => {
    let _cutcost = (steel, s) => {
      let filtredArr = [];
      for (let i = 0; i < state.data.costBD.length; i++) {
        if (state.data.costBD[i][0] === steel) {
          filtredArr.push(i);
        }
      }
      let sArr = [];
      for (let i = 0; i < filtredArr.length; i++) {
        let j = filtredArr[i];
        let z = state.data.costBD[j][1].s;
        if (z === +s) {
          sArr.push(state.data.costBD[filtredArr[i]][1].cutcost);
        }
      }
      return sArr[0];
    };
    let _steelcost = (steel, s) => {
      let filtredArr = [];
      for (let i = 0; i < state.data.costBD.length; i++) {
        if (state.data.costBD[i][0] === steel) {
          filtredArr.push(i);
        }
      }
      let sArr = [];
      for (let i = 0; i < filtredArr.length; i++) {
        let j = filtredArr[i];
        let z = state.data.costBD[j][1].s;
        if (z === +s) {
          sArr.push(state.data.costBD[filtredArr[i]][1].steelcost);
        }
      }
      return sArr[0];
    };
    switch (form) {
      case "rec":
        if (
          state.rectangle.newValuesRec[0].newValueSel1 !== "" &&
          state.rectangle.newValuesRec[0].newValueSel2 !== "" &&
          state.rectangle.newValuesRec[0].newValueInp1 !== "" &&
          state.rectangle.newValuesRec[0].newValueInp2 !== "" &&
          state.rectangle.newValuesRec[0].newValueInp3 !== "" &&
          state.errorRecInput.input1 === false &&
          state.errorRecInput.input2 === false
        ) {
          let A = Number(state.rectangle.newValuesRec[0].newValueInp1);
          let B = Number(state.rectangle.newValuesRec[0].newValueInp2);

          stateCopy.rectangle.newArray = {
            ...state.rectangle.newArray,
            type: form,
            steel: state.rectangle.newValuesRec[0].newValueSel1,
            s: Number(state.rectangle.newValuesRec[0].newValueSel2),
            param: { A: A, B: B },
          };
          stateCopy.rectangle.newArray = {
            ...stateCopy.rectangle.newArray,
            name:
              "Пластина " +
              stateCopy.rectangle.newArray.param.A +
              "x" +
              stateCopy.rectangle.newArray.param.B +
              "x" +
              stateCopy.rectangle.newArray.s +
              " " +
              stateCopy.rectangle.newArray.steel,
            Q: Number(state.rectangle.newValuesRec[0].newValueInp3),
            m: Number(
              (
                stateCopy.rectangle.newArray.param.A *
                stateCopy.rectangle.newArray.param.B *
                stateCopy.rectangle.newArray.s *
                0.0000078
              ).toFixed(2)
            ),
            P: Number(
              (
                stateCopy.rectangle.newArray.param.A * 2 +
                stateCopy.rectangle.newArray.param.B * 2
              ).toFixed(2)
            ),
          };

          let res = _cutcost(
            state.rectangle.newArray.steel,
            state.rectangle.newArray.s
          );
          let res1 = _steelcost(
            state.rectangle.newArray.steel,
            state.rectangle.newArray.s
          );

          stateCopy.rectangle.newArray = {
            ...state.rectangle.newArray,
            cost: (
              Math.ceil(state.rectangle.newArray.m * 1.05 * res1 +
                stateCopy.rectangle.newArray.P * 0.001 * res) *
              1.2
            ).toFixed(2),
          };

          stateCopy.rectangle.newValuesRec[0] = {
            ...state.rectangle.newValuesRec[0],
            cost: stateCopy.rectangle.newArray.cost,
          };
        } else {
          stateCopy.rectangle.newValuesRec[0].cost = "";
        }

        return stateCopy;
      case "tri":
        if (
          state.triangle.newValuesTri[0].newValueSel1 !== "" &&
          state.triangle.newValuesTri[0].newValueSel2 !== "" &&
          state.triangle.newValuesTri[0].newValueInp1 !== "" &&
          state.triangle.newValuesTri[0].newValueInp2 !== "" &&
          state.triangle.newValuesTri[0].newValueInp3 !== "" &&
          state.triangle.newValuesTri[0].newValueInp4 !== "" &&
          state.errorTriInput.input1 === false &&
          state.errorTriInput.input2 === false &&
          state.errorTriInput.input3 === false
        ) {
          let sinus = (a) => {
            let b = Math.sin((a * Math.PI) / 180);
            return b;
          };
          let Stri = (A, B, al) => {
            let S = (1 / 2) * A * B * sinus(al);
            return S;
          };
          let VTri = (A, B, al, s) => {
            let V = Stri(A, B, al) * s;
            return V;
          };
          let M = (A, B, al, s, P) => {
            let m = VTri(A, B, al, s) * P;
            m = m.toFixed(2);
            return m;
          };
          const C = (a, b, c) => {
            let kvadC =
              Math.pow(a, 2) +
              Math.pow(b, 2) -
              2 * a * b * Math.cos((c * Math.PI) / 180);
            return Math.sqrt(kvadC);
          };

          stateCopy.triangle.newArray.type = {
            ...state.triangle.newArray.type,
          };
          stateCopy.triangle.newArray.type = form;
          stateCopy.triangle.newArray.steel = {
            ...state.triangle.newArray.steel,
          };
          stateCopy.triangle.newArray.steel =
            state.triangle.newValuesTri[0].newValueSel1;
          stateCopy.triangle.newArray.s = { ...state.triangle.newArray.s };
          stateCopy.triangle.newArray.s = Number(
            state.triangle.newValuesTri[0].newValueSel2
          );
          let At = Number(state.triangle.newValuesTri[0].newValueInp1);
          let Bt = Number(state.triangle.newValuesTri[0].newValueInp2);
          let alpha = Number(state.triangle.newValuesTri[0].newValueInp3);
          stateCopy.triangle.newArray.param.A = {
            ...state.triangle.newArray.param.A,
          };
          stateCopy.triangle.newArray.param.A = At;
          stateCopy.triangle.newArray.param.B = {
            ...state.triangle.newArray.param.B,
          };
          stateCopy.triangle.newArray.param.B = Bt;
          stateCopy.triangle.newArray.param.alpha = {
            ...state.triangle.newArray.param.alpha,
          };
          stateCopy.triangle.newArray.param.alpha = alpha;
          stateCopy.triangle.newArray.name = {
            ...state.triangle.newArray.name,
          };
          stateCopy.triangle.newArray.name =
            "Треугольник " +
            stateCopy.triangle.newArray.param.A +
            "x" +
            stateCopy.triangle.newArray.param.B +
            "x" +
            stateCopy.triangle.newArray.s +
            " " +
            stateCopy.triangle.newArray.param.alpha +
            "ᵒ" +
            " " +
            stateCopy.triangle.newArray.steel;
          stateCopy.triangle.newArray.Q = { ...state.triangle.newArray.Q };
          stateCopy.triangle.newArray.Q = Number(
            state.triangle.newValuesTri[0].newValueInp4
          );
          stateCopy.triangle.newArray.S = { ...state.triangle.newArray.S };
          stateCopy.triangle.newArray.m = { ...state.triangle.newArray.m };
          stateCopy.triangle.newArray.m = M(
            stateCopy.triangle.newArray.param.A,
            stateCopy.triangle.newArray.param.B,
            stateCopy.triangle.newArray.param.alpha,
            stateCopy.triangle.newArray.s,
            0.0000078
          );
          stateCopy.triangle.newArray.P = { ...state.triangle.newArray.P };
          stateCopy.triangle.newArray.P =
            stateCopy.triangle.newArray.param.A +
            stateCopy.triangle.newArray.param.B +
            C(
              stateCopy.triangle.newArray.param.A,
              stateCopy.triangle.newArray.param.B,
              stateCopy.triangle.newArray.param.alpha
            );
          let res = _cutcost(
            stateCopy.triangle.newArray.steel,
            stateCopy.triangle.newArray.s
          );
          let res1 = _steelcost(
            stateCopy.triangle.newArray.steel,
            stateCopy.triangle.newArray.s
          );
          stateCopy.triangle.newArray.cost = {
            ...state.triangle.newArray.cost,
          };
          stateCopy.triangle.newArray.cost =
            (
              Math.ceil(stateCopy.triangle.newArray.m * 1.15 * res1 +
                stateCopy.triangle.newArray.P * 0.001 * res) *
              1.2
            ).toFixed(2);


          stateCopy.triangle.newValuesTri[0].cost = {
            ...state.triangle.newValuesTri[0].cost,
          };
          stateCopy.triangle.newValuesTri[0].cost =
            stateCopy.triangle.newArray.cost;
        } else {
          stateCopy.triangle.newValuesTri[0].cost = "";
        }

        return stateCopy;
      case "cir":
        if (
          state.circle.newValuesCir[0].newValueSel1 !== "" &&
          state.circle.newValuesCir[0].newValueSel2 !== "" &&
          state.circle.newValuesCir[0].newValueInp1 !== "" &&
          state.circle.newValuesCir[0].newValueInp2 !== "" &&
          state.errorCirInput.input1 === false
        ) {
          stateCopy.circle.newArray.type = { ...state.circle.newArray.type };
          stateCopy.circle.newArray.type = form;
          stateCopy.circle.newArray.steel = { ...state.circle.newArray.steel };
          stateCopy.circle.newArray.steel =
            state.circle.newValuesCir[0].newValueSel1;
          stateCopy.circle.newArray.s = { ...state.circle.newArray.s };
          stateCopy.circle.newArray.s = Number(
            state.circle.newValuesCir[0].newValueSel2
          );
          let D = Number(state.circle.newValuesCir[0].newValueInp1);
          stateCopy.circle.newArray.param.D = {
            ...state.circle.newArray.param.D,
          };
          stateCopy.circle.newArray.param.D = D;
          stateCopy.circle.newArray.name = { ...state.circle.newArray.name };
          stateCopy.circle.newArray.name =
            "Диск " +
            stateCopy.circle.newArray.param.D +
            "x" +
            stateCopy.circle.newArray.s +
            " " +
            stateCopy.circle.newArray.steel;
          stateCopy.circle.newArray.Q = { ...state.circle.newArray.Q };
          stateCopy.circle.newArray.Q = Number(
            state.circle.newValuesCir[0].newValueInp2
          );
          state.circle.newArray.m = { ...state.circle.newArray.m };
          stateCopy.circle.newArray.m = Number(
            (
              Math.pow(stateCopy.circle.newArray.param.D / 2, 2) *
              stateCopy.circle.newArray.s *
              0.0000078
            ).toFixed(2)
          );
          stateCopy.circle.newArray.P = { ...state.circle.newArray.P };
          stateCopy.circle.newArray.P = Number(
            (Math.PI * stateCopy.circle.newArray.param.D).toFixed(2)
          );
          let res = _cutcost(
            stateCopy.circle.newArray.steel,
            stateCopy.circle.newArray.s
          );
          let res1 = _steelcost(
            stateCopy.circle.newArray.steel,
            stateCopy.circle.newArray.s
          );
          stateCopy.circle.newArray.cost = { ...state.circle.newArray.cost };
          stateCopy.circle.newArray.cost = (
            Math.ceil(stateCopy.circle.newArray.m * 1.2 * res1 +
              stateCopy.circle.newArray.P * 0.001 * res) *
            1.2
          ).toFixed(2);

          stateCopy.circle.newValuesCir[0].cost = {
            ...state.circle.newValuesCir[0].cost,
          };
          stateCopy.circle.newValuesCir[0].cost =
            stateCopy.circle.newArray.cost;
        } else {
          stateCopy.circle.newValuesCir[0].cost = "";
        }
        return stateCopy;
      case "was":
        let Swas = (D, d) => {
          let r1 = D / 2;
          let r2 = d / 2;
          return Math.PI * Math.pow(r1, 2) - Math.PI * Math.pow(r2, 2);
        };
        if (
          state.washer.newValuesWas[0].newValueSel1 !== "" &&
          state.washer.newValuesWas[0].newValueSel2 !== "" &&
          state.washer.newValuesWas[0].newValueInp1 !== "" &&
          state.washer.newValuesWas[0].newValueInp2 !== "" &&
          state.washer.newValuesWas[0].newValueInp3 !== "" &&
          state.errorWasInput.input1 === false &&
          state.errorWasInput.input2 === false
        ) {
          stateCopy.washer.newArray.type = { ...state.washer.newArray.type };
          stateCopy.washer.newArray.type = form;
          stateCopy.washer.newArray.steel = { ...state.washer.newArray.steel };
          stateCopy.washer.newArray.steel =
            state.washer.newValuesWas[0].newValueSel1;
          stateCopy.washer.newArray.s = { ...state.washer.newArray.s };
          stateCopy.washer.newArray.s = Number(
            state.washer.newValuesWas[0].newValueSel2
          );
          let D1 = Number(state.washer.newValuesWas[0].newValueInp1);
          let d = Number(state.washer.newValuesWas[0].newValueInp2);
          stateCopy.washer.newArray.param.D = {
            ...state.washer.newArray.param.D,
          };
          stateCopy.washer.newArray.param.D = D1;
          stateCopy.washer.newArray.param.d = {
            ...state.washer.newArray.param.d,
          };
          stateCopy.washer.newArray.param.d = d;
          stateCopy.washer.newArray.name = state.washer.newArray.name;
          stateCopy.washer.newArray.name =
            "Шайба " +
            stateCopy.washer.newArray.param.D +
            "x" +
            stateCopy.washer.newArray.param.d +
            "x" +
            stateCopy.washer.newArray.s +
            " " +
            stateCopy.washer.newArray.steel;
          stateCopy.washer.newArray.Q = { ...state.washer.newArray.Q };
          stateCopy.washer.newArray.Q = Number(
            state.washer.newValuesWas[0].newValueInp3
          );

          stateCopy.washer.newArray.m = { ...state.washer.newArray.m };
          stateCopy.washer.newArray.m = Number(
            (
              Swas(
                stateCopy.washer.newArray.param.D,
                stateCopy.washer.newArray.param.d
              ) *
              stateCopy.washer.newArray.s *
              0.0000078
            ).toFixed(2)
          );
          stateCopy.washer.newArray.P = { ...state.washer.newArray.P };
          stateCopy.washer.newArray.P = Number(
            (
              Math.PI * stateCopy.washer.newArray.param.D +
              Math.PI * stateCopy.washer.newArray.param.d
            ).toFixed(2)
          );
          stateCopy.washer.newArray.summ_m = {
            ...state.washer.newArray.summ_m,
          };
          let res = _cutcost(
            stateCopy.washer.newArray.steel,
            stateCopy.washer.newArray.s
          );
          let res1 = _steelcost(
            stateCopy.washer.newArray.steel,
            stateCopy.washer.newArray.s
          );
          stateCopy.washer.newArray.cost = { ...state.washer.newArray.cost };
          stateCopy.washer.newArray.cost = (
            Math.ceil(stateCopy.washer.newArray.m * 1.5 * res1 +
              stateCopy.washer.newArray.P * 0.001 * res) *
            1.2
          ).toFixed(2);
          stateCopy.washer.newValuesWas[0].cost = {
            ...state.washer.newValuesWas[0].cost,
          };
          stateCopy.washer.newValuesWas[0].cost =
            stateCopy.washer.newArray.cost;
        } else {
          stateCopy.washer.newValuesWas[0].cost = "";
        }
        return stateCopy;
      case "sec":
        let Ssec = (d, h, al) => {
          let r2 = d / 2;
          let r1 = r2 + Number(h);
          let S = Math.PI * Math.pow(r1, 2) - Math.PI * Math.pow(r2, 2);
          return Number(((S / 360) * al).toFixed(2));
        };
        let Psec = (d, h, al) => {
          let dsec = d;
          let Dsec = +dsec + h * 2;
          let Csec = Math.PI * Dsec + Math.PI * dsec;
          return Number(((Csec / 360) * al + h * 2).toFixed(2));
        };
        if (
          state.sector.newValuesSec[0].newValueSel1 !== "" &&
          state.sector.newValuesSec[0].newValueSel2 !== "" &&
          state.sector.newValuesSec[0].newValueInp1 !== "" &&
          state.sector.newValuesSec[0].newValueInp2 !== "" &&
          state.sector.newValuesSec[0].newValueInp3 !== "" &&
          state.sector.newValuesSec[0].newValueInp4 !== "" &&
          state.errorSecInput.input1 === false &&
          state.errorSecInput.input2 === false &&
          state.errorSecInput.input3 === false
        ) {
          stateCopy.sector.newArray.type = { ...state.sector.newArray.type };
          stateCopy.sector.newArray.type = form;
          stateCopy.sector.newArray.steel = { ...state.sector.newArray.steel };
          stateCopy.sector.newArray.steel =
            state.sector.newValuesSec[0].newValueSel1;
          stateCopy.sector.newArray.s = { ...state.sector.newArray.s };
          stateCopy.sector.newArray.s = Number(
            state.sector.newValuesSec[0].newValueSel2
          );
          let d1 = Number(state.sector.newValuesSec[0].newValueInp1);
          let h = Number(state.sector.newValuesSec[0].newValueInp2);
          let al = Number(state.sector.newValuesSec[0].newValueInp3);
          stateCopy.sector.newArray.param.d = d1;
          stateCopy.sector.newArray.param.h = h;
          stateCopy.sector.newArray.param.alpha = al;
          stateCopy.sector.newArray.name = { ...state.sector.newArray.name };
          stateCopy.sector.newArray.name =
            "Сектор " +
            stateCopy.sector.newArray.param.d +
            "x" +
            stateCopy.sector.newArray.param.h +
            "x" +
            stateCopy.sector.newArray.s +
            " " +
            stateCopy.sector.newArray.param.alpha +
            "ᵒ" +
            " " +
            stateCopy.sector.newArray.steel;
          stateCopy.sector.newArray.Q = { ...state.sector.newArray.Q };
          stateCopy.sector.newArray.Q = Number(
            state.sector.newValuesSec[0].newValueInp4
          );

          stateCopy.sector.newArray.m = { ...state.sector.newArray.m };
          stateCopy.sector.newArray.m = Number(
            (
              Ssec(
                stateCopy.sector.newArray.param.d,
                stateCopy.sector.newArray.param.h,
                stateCopy.sector.newArray.param.alpha
              ) *
              stateCopy.sector.newArray.s *
              0.0000078
            ).toFixed(2)
          );
          stateCopy.sector.newArray.P = { ...state.sector.newArray.P };
          stateCopy.sector.newArray.P = Psec(
            stateCopy.sector.newArray.param.d,
            stateCopy.sector.newArray.param.h,
            stateCopy.sector.newArray.param.alpha
          );

          let res = _cutcost(
            stateCopy.sector.newArray.steel,
            stateCopy.sector.newArray.s
          );
          let res1 = _steelcost(
            stateCopy.sector.newArray.steel,
            stateCopy.sector.newArray.s
          );
          stateCopy.sector.newArray.cost = { ...state.sector.newArray.cost };
          stateCopy.sector.newArray.cost = Number(
            (
              (state.sector.newArray.m * 1.15 * res1 +
                state.sector.newArray.P * 0.001 * res) *
              1.2
            ).toFixed(2)
          );
          state.sector.newArray.summ = Number(
            (state.sector.newArray.cost * state.sector.newArray.Q).toFixed(2)
          );
          stateCopy.sector.newValuesSec[0].cost = {
            ...state.sector.newValuesSec[0].cost,
          };
          stateCopy.sector.newValuesSec[0].cost =
            stateCopy.sector.newArray.cost;
        } else {
          stateCopy.sector.newValuesSec[0].cost = "";
        }
        return stateCopy;
      default:
        return state;
    }
  };

  switch (action.type) {
    case ADD_NEW_TEXT:
      let addNewText = (text, num, form) => {
        const horda = (d, a) => {
          let L = d * Math.sin((a * Math.PI) / (180 * 2));
          return L;
        };
        let _holders_chenge = (text, form) => {
          switch (form) {
            case "rec":
              let recfiltredArr = [];
              for (let i = 0; i < state.data.costBD.length; i++) {
                if (
                  state.data.costBD[i][0] ===
                  state.rectangle.newValuesRec[0].newValueSel1
                ) {
                  recfiltredArr.push(i);
                }
              }
              let recsArr = [];
              for (let i = 0; i < recfiltredArr.length; i++) {
                let j = recfiltredArr[i];
                let z = state.data.costBD[j][1].s;
                if (z === +text) {
                  recsArr.push(i);
                }
              }
              let recarr = [];
              for (let i = 0; i < recsArr.length; i++) {
                let j = recsArr[i];
                let y = state.data.costBD[j][2].recholders;
                let z = Object.assign({}, y);
                recarr.push(z);
              }
              let recobj = Object.assign({}, recarr[0]);
              stateCopy.rectangle.recholders = {
                ...state.rectangle.recholders,
              };
              stateCopy.rectangle.recholders = Object.assign({}, recobj);
              break;
            case "tri":
              let trifiltredArr = [];
              for (let i = 0; i < state.data.costBD.length; i++) {
                if (
                  state.data.costBD[i][0] ===
                  state.triangle.newValuesTri[0].newValueSel1
                ) {
                  trifiltredArr.push(i);
                }
              }
              let trisArr = [];
              for (let i = 0; i < trifiltredArr.length; i++) {
                let j = trifiltredArr[i];
                let z = state.data.costBD[j][1].s;
                if (z === +text) {
                  trisArr.push(i);
                }
              }
              let triarr = [];
              for (let i = 0; i < trisArr.length; i++) {
                let j = trisArr[i];
                let y = state.data.costBD[j][2].triholders;
                let z = Object.assign({}, y);
                triarr.push(z);
              }
              let triobj = Object.assign({}, triarr[0]);
              stateCopy.triangle.triholders = { ...state.triangle.triholders };
              stateCopy.triangle.triholders = Object.assign({}, triobj);
              break;
            case "cir":
              let cirfiltredArr = [];
              for (let i = 0; i < state.data.costBD.length; i++) {
                if (
                  state.data.costBD[i][0] ===
                  state.circle.newValuesCir[0].newValueSel1
                ) {
                  cirfiltredArr.push(i);
                }
              }
              let cirsArr = [];
              for (let i = 0; i < cirfiltredArr.length; i++) {
                let j = cirfiltredArr[i];
                let z = state.data.costBD[j][1].s;
                if (z === +text) {
                  cirsArr.push(i);
                }
              }
              let cirarr = [];
              for (let i = 0; i < cirsArr.length; i++) {
                let j = cirsArr[i];
                let y = state.data.costBD[j][2].cirholders;
                let z = Object.assign({}, y);
                cirarr.push(z);
              }
              let cirobj = Object.assign({}, cirarr[0]);
              stateCopy.circle.cirholders = { ...state.circle.cirholders };
              stateCopy.circle.cirholders = Object.assign({}, cirobj);
              break;
            case "was":
              let wasfiltredArr = [];
              for (let i = 0; i < state.data.costBD.length; i++) {
                if (
                  state.data.costBD[i][0] ===
                  state.washer.newValuesWas[0].newValueSel1
                ) {
                  wasfiltredArr.push(i);
                }
              }
              let wassArr = [];
              for (let i = 0; i < wasfiltredArr.length; i++) {
                let j = wasfiltredArr[i];
                let z = state.data.costBD[j][1].s;
                if (z === +text) {
                  wassArr.push(i);
                }
              }
              let wasarr = [];
              for (let i = 0; i < wassArr.length; i++) {
                let j = wassArr[i];
                let y = state.data.costBD[j][2].washolders;
                let z = Object.assign({}, y);
                wasarr.push(z);
              }
              let wasobj = Object.assign({}, wasarr[0]);
              stateCopy.washer.washolders = { ...state.washer.washolders };
              stateCopy.washer.washolders = Object.assign({}, wasobj);
              break;
            case "sec":
              let secfiltredArr = [];
              for (let i = 0; i < state.data.costBD.length; i++) {
                if (
                  state.data.costBD[i][0] ===
                  state.sector.newValuesSec[0].newValueSel1
                ) {
                  secfiltredArr.push(i);
                }
              }
              let secsArr = [];
              for (let i = 0; i < secfiltredArr.length; i++) {
                let j = secfiltredArr[i];
                let z = state.data.costBD[j][1].s;
                if (z === +text) {
                  secsArr.push(i);
                }
              }
              let secarr = [];
              for (let i = 0; i < secsArr.length; i++) {
                let j = secsArr[i];
                let y = state.data.costBD[j][2].secholders;
                let z = Object.assign({}, y);
                secarr.push(z);
              }
              let secobj = Object.assign({}, secarr[0]);
              stateCopy.sector.secholders = { ...state.sector.secholders };
              stateCopy.sector.secholders = Object.assign({}, secobj);
              break;
            default:
              alert("Ошибка");
          }
        };
        let _thickness_chenge = (text, form) => {
          switch (form) {
            case "rec":
              state.rectangle.thickness.length = 0;
              stateCopy.rectangle.thickness = [...state.rectangle.thickness];
              for (let i = 0; i < state.data.costBD.length; i++) {
                if (state.data.costBD[i][0] === text) {
                  let d = { s: state.data.costBD[i][1].s };
                  stateCopy.rectangle.thickness.push(d);
                }
              }
              break;
            case "tri":
              state.triangle.thickness.length = 0;
              for (let i = 0; i < state.data.costBD.length; i++) {
                if (state.data.costBD[i][0] === text) {
                  let d = { s: state.data.costBD[i][1].s };
                  stateCopy.triangle.thickness = [...state.triangle.thickness];
                  stateCopy.triangle.thickness.push(d);
                }
              }
              break;
            case "cir":
              state.circle.thickness.length = 0;
              for (let i = 0; i < state.data.costBD.length; i++) {
                if (state.data.costBD[i][0] === text) {
                  let d = { s: state.data.costBD[i][1].s };
                  stateCopy.circle.thickness = [...state.circle.thickness];
                  stateCopy.circle.thickness.push(d);
                }
              }
              break;
            case "was":
              state.washer.thickness.length = 0;
              for (let i = 0; i < state.data.costBD.length; i++) {
                if (state.data.costBD[i][0] === text) {
                  let d = { s: state.data.costBD[i][1].s };
                  stateCopy.washer.thickness = [...state.washer.thickness];
                  stateCopy.washer.thickness.push(d);
                }
              }
              break;
            case "sec":
              state.sector.thickness.length = 0;
              for (let i = 0; i < state.data.costBD.length; i++) {
                if (state.data.costBD[i][0] === text) {
                  let d = { s: state.data.costBD[i][1].s };
                  stateCopy.sector.thickness = [...state.sector.thickness];
                  stateCopy.sector.thickness.push(d);
                }
              }
              break;
              default:
          }
        };
        let add = (text, num, form) => {
          let addNewTextRec = (text, num, form) => {
            switch (num) {
              case "sel1":
                stateCopy.rectangle.newValuesRec = [
                  ...state.rectangle.newValuesRec,
                ];
                stateCopy.rectangle.newValuesRec[0] = {
                  ...state.rectangle.newValuesRec[0],
                };
                stateCopy.rectangle.newValuesRec[0].newValueSel2 = {
                  ...state.rectangle.newValuesRec[0].newValueSel2,
                };
                stateCopy.rectangle.newValuesRec[0].newValueSel1 = {
                  ...state.rectangle.newValuesRec[0].newValueSel1,
                };
                stateCopy.rectangle.newValuesRec[0].newValueSel2 = "";
                stateCopy.rectangle.newValuesRec[0].newValueSel1 = text;
                _thickness_chenge(text, form);
                break;

              case "sel2":
                stateCopy.rectangle.newValuesRec = [
                  ...state.rectangle.newValuesRec,
                ];
                stateCopy.rectangle.newValuesRec[0] = {
                  ...state.rectangle.newValuesRec[0],
                };
                stateCopy.rectangle.newValuesRec[0].newValueSel2 = {
                  ...state.rectangle.newValuesRec[0].newValueSel2,
                };
                stateCopy.rectangle.newValuesRec[0].newValueSel2 = text;
                _holders_chenge(text, form);
                break;

              case "in1":
                stateCopy.rectangle.newValuesRec = [
                  ...state.rectangle.newValuesRec,
                ];
                stateCopy.rectangle.newValuesRec[0] = {
                  ...state.rectangle.newValuesRec[0],
                };
                stateCopy.rectangle.newValuesRec[0].newValueInp1 = {
                  ...state.rectangle.newValuesRec[0].newValueInp1,
                };
                stateCopy.rectangle.newValuesRec[0].newValueInp1 = text;
                if (action.param) {
                  if (
                    Number(text) < action.param.Amin ||
                    Number(text) > action.param.Amax
                  ) {
                    stateCopy.errorRecInput.input1 = true;
                  } else {
                    stateCopy.errorRecInput.input1 = false;
                  }
                }

                return stateCopy;

              case "in2":
                stateCopy.rectangle.newValuesRec = [
                  ...state.rectangle.newValuesRec,
                ];
                stateCopy.rectangle.newValuesRec[0] = {
                  ...state.rectangle.newValuesRec[0],
                };
                stateCopy.rectangle.newValuesRec[0].newValueInp2 = {
                  ...state.rectangle.newValuesRec[0].newValueInp2,
                };
                stateCopy.rectangle.newValuesRec[0].newValueInp2 = text;
                if (action.param) {
                  if (
                    Number(text) < action.param.Bmin ||
                    Number(text) > action.param.Bmax
                  ) {
                    stateCopy.errorRecInput.input2 = true;
                  } else {
                    stateCopy.errorRecInput.input2 = false;
                  }
                }

                return stateCopy;

              case "in3":
                stateCopy.rectangle.newValuesRec = [
                  ...state.rectangle.newValuesRec,
                ];
                stateCopy.rectangle.newValuesRec[0] = {
                  ...state.rectangle.newValuesRec[0],
                };
                stateCopy.rectangle.newValuesRec[0].newValueInp3 = {
                  ...state.rectangle.newValuesRec[0].newValueInp3,
                };
                stateCopy.rectangle.newValuesRec[0].newValueInp3 = text;
                break;

              default:
                alert("ошибка ");
            }
          };
          let addNewTextTri = (text, num, form) => {
            switch (num) {
              case "sel1":
                stateCopy.triangle.newValuesTri = [
                  ...state.triangle.newValuesTri,
                ];
                stateCopy.triangle.newValuesTri[0] = {
                  ...state.triangle.newValuesTri[0],
                };
                stateCopy.triangle.newValuesTri[0].newValueSel1 = {
                  ...state.triangle.newValuesTri[0].newValueSel1,
                };
                stateCopy.triangle.newValuesTri[0].newValueSel1 = text;
                _thickness_chenge(text, form);
                break;

              case "sel2":
                stateCopy.triangle.newValuesTri = [
                  ...state.triangle.newValuesTri,
                ];
                stateCopy.triangle.newValuesTri[0] = {
                  ...state.triangle.newValuesTri[0],
                };
                stateCopy.triangle.newValuesTri[0].newValueSel2 = {
                  ...state.triangle.newValuesTri[0].newValueSel2,
                };
                stateCopy.triangle.newValuesTri[0].newValueSel2 = text;
                _holders_chenge(text, form);
                break;

              case "in1":
                stateCopy.triangle.newValuesTri = [
                  ...state.triangle.newValuesTri,
                ];
                stateCopy.triangle.newValuesTri[0] = {
                  ...state.triangle.newValuesTri[0],
                };
                stateCopy.triangle.newValuesTri[0].newValueInp1 = {
                  ...state.triangle.newValuesTri[0].newValueInp1,
                };
                stateCopy.triangle.newValuesTri[0].newValueInp1 = text;
                if (action.param) {
                  if (
                    Number(text) < action.param.Amin ||
                    Number(text) > action.param.Amax
                  ) {
                    stateCopy.errorTriInput.input1 = true;
                  } else {
                    stateCopy.errorTriInput.input1 = false;
                  }
                }

                return stateCopy;

              case "in2":
                stateCopy.triangle.newValuesTri = [
                  ...state.triangle.newValuesTri,
                ];
                stateCopy.triangle.newValuesTri[0] = {
                  ...state.triangle.newValuesTri[0],
                };
                stateCopy.triangle.newValuesTri[0].newValueInp2 = {
                  ...state.triangle.newValuesTri[0].newValueInp2,
                };
                stateCopy.triangle.newValuesTri[0].newValueInp2 = text;
                if (action.param) {
                  if (
                    Number(text) < action.param.Bmin ||
                    Number(text) > action.param.Bmax
                  ) {
                    stateCopy.errorTriInput.input2 = true;
                  } else {
                    stateCopy.errorTriInput.input2 = false;
                  }
                }

                return stateCopy;

              case "in3":
                stateCopy.triangle.newValuesTri = [
                  ...state.triangle.newValuesTri,
                ];
                stateCopy.triangle.newValuesTri[0] = {
                  ...state.triangle.newValuesTri[0],
                };
                stateCopy.triangle.newValuesTri[0].newValueInp3 = {
                  ...state.triangle.newValuesTri[0].newValueInp3,
                };
                stateCopy.triangle.newValuesTri[0].newValueInp3 = text;
                if (action.param) {
                  if (
                    Number(text) < action.param.alphamin ||
                    Number(text) > action.param.alphamax
                  ) {
                    stateCopy.errorTriInput.input3 = true;
                  } else {
                    stateCopy.errorTriInput.input3 = false;
                  }
                }

                return stateCopy;

              case "in4":
                stateCopy.triangle.newValuesTri = [
                  ...state.triangle.newValuesTri,
                ];
                stateCopy.triangle.newValuesTri[0] = {
                  ...state.triangle.newValuesTri[0],
                };
                stateCopy.triangle.newValuesTri[0].newValueInp4 = {
                  ...state.triangle.newValuesTri[0].newValueInp4,
                };
                stateCopy.triangle.newValuesTri[0].newValueInp4 = text;

                break;

              default:
            }
          };
          let addNewTextCir = (text, num, form) => {
            switch (num) {
              case "sel1":
                stateCopy.circle.newValuesCir = [...state.circle.newValuesCir];
                stateCopy.circle.newValuesCir[0] = {
                  ...state.circle.newValuesCir[0],
                };
                stateCopy.circle.newValuesCir[0].newValueSel1 = {
                  ...state.circle.newValuesCir[0].newValueSel1,
                };
                stateCopy.circle.newValuesCir[0].newValueSel1 = text;
                _thickness_chenge(text, form);
                break;

              case "sel2":
                stateCopy.circle.newValuesCir = [...state.circle.newValuesCir];
                stateCopy.circle.newValuesCir[0] = {
                  ...state.circle.newValuesCir[0],
                };
                stateCopy.circle.newValuesCir[0].newValueSel2 = {
                  ...state.circle.newValuesCir[0].newValueSel2,
                };
                stateCopy.circle.newValuesCir[0].newValueSel2 = text;
                _holders_chenge(text, form);
                break;

              case "in1":
                stateCopy.circle.newValuesCir = [...state.circle.newValuesCir];
                stateCopy.circle.newValuesCir[0] = {
                  ...state.circle.newValuesCir[0],
                };
                stateCopy.circle.newValuesCir[0].newValueInp1 = {
                  ...state.circle.newValuesCir[0].newValueInp1,
                };
                stateCopy.circle.newValuesCir[0].newValueInp1 = text;
                if (action.param) {
                  if (
                    Number(text) < action.param.Dmin ||
                    Number(text) > action.param.Dmax
                  ) {
                    stateCopy.errorCirInput.input1 = true;
                  } else {
                    stateCopy.errorCirInput.input1 = false;
                  }
                }

                return stateCopy;

              case "in2":
                stateCopy.circle.newValuesCir = [...state.circle.newValuesCir];
                stateCopy.circle.newValuesCir[0] = {
                  ...state.circle.newValuesCir[0],
                };
                stateCopy.circle.newValuesCir[0].newValueInp2 = {
                  ...state.circle.newValuesCir[0].newValueInp2,
                };
                stateCopy.circle.newValuesCir[0].newValueInp2 = text;
                break;

              default:
            }
          };
          let addNewTextWas = (text, num, form) => {
            switch (num) {
              case "sel1":
                stateCopy.washer.newValuesWas = [...state.washer.newValuesWas];
                stateCopy.washer.newValuesWas[0] = {
                  ...state.washer.newValuesWas[0],
                };
                stateCopy.washer.newValuesWas[0].newValueSel1 = {
                  ...state.washer.newValuesWas[0].newValueSel1,
                };
                stateCopy.washer.newValuesWas[0].newValueSel1 = text;
                _thickness_chenge(text, form);
                break;

              case "sel2":
                stateCopy.washer.newValuesWas = [...state.washer.newValuesWas];
                stateCopy.washer.newValuesWas[0] = {
                  ...state.washer.newValuesWas[0],
                };
                stateCopy.washer.newValuesWas[0].newValueSel2 = {
                  ...state.washer.newValuesWas[0].newValueSel2,
                };
                stateCopy.washer.newValuesWas[0].newValueSel2 = text;
                _holders_chenge(text, form);
                break;

              case "in1":
                stateCopy.washer.newValuesWas = [...state.washer.newValuesWas];
                stateCopy.washer.newValuesWas[0] = {
                  ...state.washer.newValuesWas[0],
                };
                stateCopy.washer.newValuesWas[0].newValueInp1 = {
                  ...state.washer.newValuesWas[0].newValueInp1,
                };
                stateCopy.washer.newValuesWas[0].newValueInp1 = text;
                if (action.param) {
                  if (
                    Number(text) < action.param.Dmin ||
                    Number(text) > action.param.Dmax
                  ) {
                    stateCopy.errorWasInput.input1 = true;
                  } else {
                    stateCopy.errorWasInput.input1 = false;
                  }


                  if (
                    stateCopy.washer.newValuesWas[0].newValueInp1 <
                    Number(state.washer.newValuesWas[0].newValueInp2) +
                    Number(state.washer.newValuesWas[0].newValueSel2)
                  ) {
                    stateCopy.errorWasInput.input2 = true;
                  } else {
                    stateCopy.errorWasInput.input2 = false;
                  }
                  // }
                }

                return stateCopy;

              case "in2":
                stateCopy.washer.newValuesWas = [...state.washer.newValuesWas];
                stateCopy.washer.newValuesWas[0] = {
                  ...state.washer.newValuesWas[0],
                };
                stateCopy.washer.newValuesWas[0].newValueInp2 = {
                  ...state.washer.newValuesWas[0].newValueInp2,
                };
                stateCopy.washer.newValuesWas[0].newValueInp2 = text;
                if (action.param) {
                  if (
                    Number(text) < action.param.dmin ||
                    Number(text) > action.param.dmax ||
                    stateCopy.washer.newValuesWas[0].newValueInp1 <
                    Number(text) +
                    Number(stateCopy.washer.newValuesWas[0].newValueSel2)
                  ) {
                    stateCopy.errorWasInput.input2 = true;
                  } else {
                    stateCopy.errorWasInput.input2 = false;
                  }
                }

                return stateCopy;

              case "in3":
                stateCopy.washer.newValuesWas = [...state.washer.newValuesWas];
                stateCopy.washer.newValuesWas[0] = {
                  ...state.washer.newValuesWas[0],
                };
                stateCopy.washer.newValuesWas[0].newValueInp3 = {
                  ...state.washer.newValuesWas[0].newValueInp3,
                };
                stateCopy.washer.newValuesWas[0].newValueInp3 = text;
                break;

              default:
            }
          };
          let addNewTextSec = (text, num, form) => {
            switch (num) {
              case "sel1":
                stateCopy.sector.newValuesSec = [...state.sector.newValuesSec];
                stateCopy.sector.newValuesSec[0] = {
                  ...state.sector.newValuesSec[0],
                };
                stateCopy.sector.newValuesSec[0].newValueSel1 = {
                  ...state.sector.newValuesSec[0].newValueSel1,
                };
                stateCopy.sector.newValuesSec[0].newValueSel1 = text;
                _thickness_chenge(text, form);
                break;

              case "sel2":
                stateCopy.sector.newValuesSec = [...state.sector.newValuesSec];
                stateCopy.sector.newValuesSec[0] = {
                  ...state.sector.newValuesSec[0],
                };
                stateCopy.sector.newValuesSec[0].newValueSel2 = {
                  ...state.sector.newValuesSec[0].newValueSel2,
                };
                stateCopy.sector.newValuesSec[0].newValueSel2 = text;
                _holders_chenge(text, form);
                break;

              case "in1":
                stateCopy.sector.newValuesSec = [...state.sector.newValuesSec];
                stateCopy.sector.newValuesSec[0] = {
                  ...state.sector.newValuesSec[0],
                };
                stateCopy.sector.newValuesSec[0].newValueInp1 = {
                  ...state.sector.newValuesSec[0].newValueInp1,
                };
                stateCopy.sector.newValuesSec[0].newValueInp1 = text;
                if (action.param) {
                  if (
                    Number(text) < action.param.dmin ||
                    Number(text) > action.param.dmax
                  ) {
                    stateCopy.errorSecInput.input1 = true;
                  } else {
                    stateCopy.errorSecInput.input1 = false;
                  }

                  if (
                    stateCopy.sector.newValuesSec[0].newValueInp1 !== "" &&
                    stateCopy.sector.newValuesSec[0].newValueInp2 !== "" &&
                    stateCopy.sector.newValuesSec[0].newValueInp3 >
                    action.param.alphamin &&
                    stateCopy.sector.newValuesSec[0].newValueInp3 <
                    action.param.alphamax
                  ) {
                    let d =
                      Number(stateCopy.sector.newValuesSec[0].newValueInp1) +
                      2 * stateCopy.sector.newValuesSec[0].newValueInp2;
                    if (
                      horda(
                        d,
                        Number(stateCopy.sector.newValuesSec[0].newValueInp3)
                      ) > action.param.dmax
                    ) {
                      stateCopy.errorSecInput.input3 = true;
                    } else {
                      stateCopy.errorSecInput.input3 = false;
                    }
                  }
                }

                return stateCopy;

              case "in2":
                stateCopy.sector.newValuesSec = [...state.sector.newValuesSec];
                stateCopy.sector.newValuesSec[0] = {
                  ...state.sector.newValuesSec[0],
                };
                stateCopy.sector.newValuesSec[0].newValueInp2 = {
                  ...state.sector.newValuesSec[0].newValueInp2,
                };
                stateCopy.sector.newValuesSec[0].newValueInp2 = text;
                if (action.param) {
                  if (
                    Number(text) < action.param.hmin ||
                    Number(text) > action.param.hmax
                  ) {
                    stateCopy.errorSecInput.input2 = true;
                  } else {
                    stateCopy.errorSecInput.input2 = false;
                  }

                  if (
                    stateCopy.sector.newValuesSec[0].newValueInp1 !== "" &&
                    stateCopy.sector.newValuesSec[0].newValueInp2 !== "" &&
                    stateCopy.sector.newValuesSec[0].newValueInp3 >
                    action.param.alphamin &&
                    stateCopy.sector.newValuesSec[0].newValueInp3 <
                    action.param.alphamax
                  ) {
                    let d =
                      Number(stateCopy.sector.newValuesSec[0].newValueInp1) +
                      2 * stateCopy.sector.newValuesSec[0].newValueInp2;
                    if (
                      horda(
                        d,
                        Number(stateCopy.sector.newValuesSec[0].newValueInp3)
                      ) > action.param.dmax
                    ) {
                      stateCopy.errorSecInput.input3 = true;
                    } else {
                      stateCopy.errorSecInput.input3 = false;
                    }
                  }
                }

                return stateCopy;

              case "in3":
                stateCopy.sector.newValuesSec = [...state.sector.newValuesSec];
                stateCopy.sector.newValuesSec[0] = {
                  ...state.sector.newValuesSec[0],
                };
                stateCopy.sector.newValuesSec[0].newValueInp3 = {
                  ...state.sector.newValuesSec[0].newValueInp3,
                };
                stateCopy.sector.newValuesSec[0].newValueInp3 = text;
                if (action.param) {
                  if (
                    Number(text) < action.param.alphamin ||
                    Number(text) > action.param.alphamax
                  ) {
                    stateCopy.errorSecInput.input3 = true;
                  } else {
                    stateCopy.errorSecInput.input3 = false;
                  }

                  if (
                    stateCopy.sector.newValuesSec[0].newValueInp1 !== "" &&
                    stateCopy.sector.newValuesSec[0].newValueInp2 !== "" &&
                    stateCopy.sector.newValuesSec[0].newValueInp3 >
                    action.param.alphamin &&
                    stateCopy.sector.newValuesSec[0].newValueInp3 <
                    action.param.alphamax + 1
                  ) {
                    let d =
                      Number(stateCopy.sector.newValuesSec[0].newValueInp1) +
                      2 * stateCopy.sector.newValuesSec[0].newValueInp2;
                    if (
                      horda(
                        d,
                        Number(stateCopy.sector.newValuesSec[0].newValueInp3)
                      ) > action.param.dmax
                    ) {
                      stateCopy.errorSecInput.input3 = true;
                    } else {
                      stateCopy.errorSecInput.input3 = false;
                    }
                  }
                }

                return stateCopy;

              case "in4":
                stateCopy.sector.newValuesSec = [...state.sector.newValuesSec];
                stateCopy.sector.newValuesSec[0] = {
                  ...state.sector.newValuesSec[0],
                };
                stateCopy.sector.newValuesSec[0].newValueInp4 = {
                  ...state.sector.newValuesSec[0].newValueInp4,
                };
                stateCopy.sector.newValuesSec[0].newValueInp4 = text;
                break;

              default:
            }
          };
          switch (form) {
            case "rec":
              addNewTextRec(text, num, form);
              break;
            case "tri":
              addNewTextTri(text, num, form);
              break;
            case "cir":
              addNewTextCir(text, num, form);
              break;
            case "was":
              addNewTextWas(text, num, form);
              break;
            case "sec":
              addNewTextSec(text, num, form);
              break;
            default:

          }
        };
        let f1 = (text, num, form) => {
          let T = text.match(/[0-9]/g);
          let Te = "";

          for (let i = 0; i < T.length; i++) {
            Te = Te + T[i];
          }
          if (text === Te) {
            add(text, num, form);
          }
        };
        let f2 = (text, num, form) => {
          let t = text.match(/[1-9]/);
          let te = "";
          if (t != null) {
            for (let i = 0; i < t.length; i++) {
              te = te + t[i];
            }
            if (text === te) {
              add(text, num, form);
            }
          }
        };
        let f3 = (text, num, form) => {
          add(text, num, form);
        };
        if (text.length === 1) {
          f2(text, num, form);
        } else if (text.length === 0) {
          f3("", num, form);
        } else if (num === "sel2") {
          add(text, num, form);
        } else if (num === "sel1") {
          add(text, num, form);
        } else if (text.length > 1) {
          f1(text, num, form);
        }
      };
      addNewText(action.text, action.num, action.form);
      return stateCopy;
    case CALCULATE:
      calculate(action.form);
      return stateCopy;
    case ADD_DATA:
      stateCopy.rectangle = { ...state.rectangle };
      stateCopy.rectangle.newArray = { ...state.rectangle.newArray };
      stateCopy.rectangle.newArray.param = {
        ...state.rectangle.newArray.param,
      };
      stateCopy.triangle = { ...state.triangle };
      stateCopy.triangle.newArray = { ...state.triangle.newArray };
      stateCopy.triangle.newArray.param = { ...state.triangle.newArray.param };
      stateCopy.circle = { ...state.circle };
      stateCopy.circle.newArray = { ...state.circle.newArray };
      stateCopy.circle.newArray.param = { ...state.circle.newArray.param };
      stateCopy.washer = { ...state.washer };
      stateCopy.washer.newArray = { ...state.washer.newArray };
      stateCopy.washer.newArray.param = { ...state.washer.newArray.param };
      stateCopy.sector = { ...state.sector };
      stateCopy.sector.newArray = { ...state.sector.newArray };
      stateCopy.sector.newArray.param = { ...state.sector.newArray.param };

      calculate(action.form);
      if (action.form === "rec") {
        if (
          state.rectangle.newValuesRec[0].newValueSel1 !== "" &&
          state.rectangle.newValuesRec[0].newValueSel2 !== "" &&
          state.rectangle.newValuesRec[0].newValueInp1 !== "" &&
          state.rectangle.newValuesRec[0].newValueInp2 !== "" &&
          state.rectangle.newValuesRec[0].newValueInp3 !== "" &&
          state.errorRecInput.input1 === false &&
          state.errorRecInput.input2 === false
        ) {
          stateCopy.rectangle.newArray.id = { ...state.rectangle.newArray.id };
          stateCopy.rectangle.newArray.id = state.SpecArray.length;

          let obj = Object.assign({}, stateCopy.rectangle.newArray);
          stateCopy.SpecArray.push(obj);
          localStorage.setItem("array", JSON.stringify(stateCopy.SpecArray));
          stateCopy.rectangle.newValuesRec = [...state.rectangle.newValuesRec];
          stateCopy.rectangle.newValuesRec[0] = {
            ...state.rectangle.newValuesRec[0],
          };
          for (let key in stateCopy.rectangle.newValuesRec[0]) {
            stateCopy.rectangle.newValuesRec[0][key] = {
              ...state.rectangle.newValuesRec[0][key],
            };
            stateCopy.rectangle.newValuesRec[0][key] = "";
          }
          stateCopy.rectangle.recholders = { ...state.rectangle.recholders };
          stateCopy.rectangle.recholders = {};
        }
      } else if (action.form === "tri") {
        if (
          state.triangle.newValuesTri[0].newValueSel1 !== "" &&
          state.triangle.newValuesTri[0].newValueSel2 !== "" &&
          state.triangle.newValuesTri[0].newValueInp1 !== "" &&
          state.triangle.newValuesTri[0].newValueInp2 !== "" &&
          state.triangle.newValuesTri[0].newValueInp3 !== "" &&
          state.errorTriInput.input1 === false &&
          state.errorTriInput.input2 === false &&
          state.errorTriInput.input3 === false
        ) {
          stateCopy.triangle.newArray.id = { ...state.triangle.newArray.id };
          stateCopy.triangle.newArray.id = state.SpecArray.length;

          let obj = Object.assign({}, stateCopy.triangle.newArray);
          stateCopy.SpecArray.push(obj);
          localStorage.setItem("array", JSON.stringify(stateCopy.SpecArray));
          stateCopy.triangle.newValuesTri = [...state.triangle.newValuesTri];
          stateCopy.triangle.newValuesTri[0] = {
            ...state.triangle.newValuesTri[0],
          };

          for (let key in stateCopy.triangle.newValuesTri[0]) {
            stateCopy.triangle.newValuesTri[0][key] = {
              ...stateCopy.triangle.newValuesTri[0][key],
            };
            stateCopy.triangle.newValuesTri[0][key] = "";
          }
          stateCopy.triangle.triholders = { ...state.triangle.triholders };
          stateCopy.triangle.triholders = {};
        }
      } else if (action.form === "cir") {
        if (
          state.circle.newValuesCir[0].newValueSel1 !== "" &&
          state.circle.newValuesCir[0].newValueSel2 !== "" &&
          state.circle.newValuesCir[0].newValueInp1 !== "" &&
          state.circle.newValuesCir[0].newValueInp2 !== "" &&
          state.circle.newValuesCir[0].newValueInp3 !== "" &&
          state.errorCirInput.input1 === false
        ) {
          stateCopy.circle.newArray.id = { ...state.circle.newArray.id };
          stateCopy.circle.newArray.id = state.SpecArray.length;

          let obj = Object.assign({}, stateCopy.circle.newArray);
          stateCopy.SpecArray.push(obj);
          localStorage.setItem("array", JSON.stringify(stateCopy.SpecArray));
          stateCopy.circle.newValuesCir = [...state.circle.newValuesCir];
          stateCopy.circle.newValuesCir[0] = {
            ...state.circle.newValuesCir[0],
          };

          for (let key in stateCopy.circle.newValuesCir[0]) {
            stateCopy.circle.newValuesCir[0][key] = {
              ...state.circle.newValuesCir[0][key],
            };
            stateCopy.circle.newValuesCir[0][key] = "";
          }
          stateCopy.circle.cirholders = { ...stateCopy.circle.cirholders };
          stateCopy.circle.cirholders = {};
        }
      } else if (action.form === "was") {
        if (
          state.washer.newValuesWas[0].newValueSel1 !== "" &&
          state.washer.newValuesWas[0].newValueSel2 !== "" &&
          state.washer.newValuesWas[0].newValueInp1 !== "" &&
          state.washer.newValuesWas[0].newValueInp2 !== "" &&
          state.washer.newValuesWas[0].newValueInp3 !== "" &&
          state.errorWasInput.input1 === false &&
          state.errorWasInput.input2 === false
        ) {
          stateCopy.washer.newArray.id = { ...state.washer.newArray.id };
          stateCopy.washer.newArray.id = state.SpecArray.length;

          let obj = Object.assign({}, stateCopy.washer.newArray);
          stateCopy.SpecArray.push(obj);
          localStorage.setItem("array", JSON.stringify(stateCopy.SpecArray));
          stateCopy.washer.newValuesWas = [...state.washer.newValuesWas];
          stateCopy.washer.newValuesWas[0] = {
            ...state.washer.newValuesWas[0],
          };

          for (let key in stateCopy.washer.newValuesWas[0]) {
            stateCopy.washer.newValuesWas[0][key] = {
              ...state.washer.newValuesWas[0][key],
            };
            stateCopy.washer.newValuesWas[0][key] = "";
          }
          stateCopy.washer.washolders = { ...state.washer.washolders };
          stateCopy.washer.washolders = {};
        }
      } else if (action.form === "sec") {
        if (
          state.sector.newValuesSec[0].newValueSel1 !== "" &&
          state.sector.newValuesSec[0].newValueSel2 !== "" &&
          state.sector.newValuesSec[0].newValueInp1 !== "" &&
          state.sector.newValuesSec[0].newValueInp2 !== "" &&
          state.sector.newValuesSec[0].newValueInp3 !== "" &&
          state.errorSecInput.input1 === false &&
          state.errorSecInput.input2 === false &&
          state.errorSecInput.input3 === false
        ) {
          stateCopy.sector.newArray.id = { ...state.sector.newArray.id };
          stateCopy.sector.newArray.id = state.SpecArray.length;

          let obj = Object.assign({}, stateCopy.sector.newArray);
          stateCopy.SpecArray.push(obj);
          localStorage.setItem("array", JSON.stringify(stateCopy.SpecArray));
          stateCopy.sector.newValuesSec = [...state.sector.newValuesSec];
          stateCopy.sector.newValuesSec[0] = {
            ...state.sector.newValuesSec[0],
          };

          for (let key in stateCopy.sector.newValuesSec[0]) {
            stateCopy.sector.newValuesSec[0][key] = {
              ...state.sector.newValuesSec[0][key],
            };
            stateCopy.sector.newValuesSec[0][key] = "";
          }
          stateCopy.sector.secholders = { ...state.sector.secholders };
          stateCopy.sector.secholders = {};
        }
      } else {
        return state;
      }
      break;
    case API_STATE:

      let BD = [];
      for (let i = 0; i < action.apiState.length; i++) {
        let arrBD = [
          action.apiState[i].steel,
          {
            s: action.apiState[i].thickness,
            steelcost: action.apiState[i].cost,
            cutcost: action.apiState[i].costcut,
          },
          JSON.parse(action.apiState[i].param),
        ];
        BD.push(arrBD);
      }
      stateCopy.data.costBD = BD
      if (action.arr) {
        stateCopy = { ...stateCopy, SpecArray: action.arr };
      }
      let result1 = [];
      let result = [];
      for (let str of stateCopy.data.costBD) {
        if (!result1.includes(str[0])) {
          result1.push(str[0]);
          result.push({ steel: str[0] });
        }
      }
      stateCopy.data.steels = result;

      return stateCopy;
    case PUSH_DATA:
      stateCopy.authorization = {
        ...state.authorization,
        pushOkShow: true,
      };
      stateCopy.SpecArray[0].counter = 0;
      stateCopy.SpecArray = stateCopy.SpecArray.slice(0, 1);

      return stateCopy;
    case PUSH_DATA_LOGIN:
      stateCopy.authorization = {
        ...state.authorization,
        loginForm: true,
      };
      return stateCopy;
    case ORDER_SHOW:
      if (state.SpecArray.length > 1) {
        if (stateCopy.orderShow === false) {
          return { ...stateCopy, ...{ orderShow: true } };
        } else {
          return { ...stateCopy, ...{ orderShow: false } };
        }
      }
      break;
    case SET_USER_DATA:
      stateCopy.authorization = {
        ...state.authorization,
        user_id: action.user_id,
        login: action.email,
        isAuth: true,
      };
      stateCopy.SpecArray[0] = {
        ...state.SpecArray[0],
        email: action.email,
      };

      return stateCopy;
    case SET_LOGIN_DATA:
      stateCopy.authorization = {
        ...state.authorization,
        login: action.values.email,
        isAuth: true,
        loginForm: false,
      };
      stateCopy.SpecArray[0] = {
        ...state.SpecArray[0],
        email: action.values.email,
      };
      return stateCopy;
    case SET_LOGOUT_DATA:
      const logout = new Promise((resolve, reject) => {
        setAuthorizationToken();
        resolve();
      });
      logout.then(() => { });
      stateCopy.authorization = {
        ...state.authorization,
        login: "",
        isAuth: false,
        loginForm: false,
      };
      stateCopy.SpecArray[0] = {
        ...state.SpecArray[0],
        email: "",
      };
      return stateCopy;
    case LOGIN_FORM_SHOW:
      if (state.authorization.loginForm) {
        stateCopy.authorization = {
          ...state.authorization,
          loginForm: false,
        };
      } else {
        stateCopy.authorization = {
          ...state.authorization,
          loginForm: true,
        };
      }
      return stateCopy;
    case SET_REGISTRATION_DATA:
      stateCopy.authorization = {
        ...state.authorization,
        regForm: false,
        regMail: true,
      };
      return stateCopy;
    case REGISTRATION_FORM_SHOW:
      if (state.authorization.regForm) {
        stateCopy.authorization = {
          ...state.authorization,
          regForm: false,
          regOkShow: true,
        };
      } else {
        stateCopy.authorization = {
          ...state.authorization,
          regForm: true,
          loginForm: false,
        };
      }
      return stateCopy;
    case REG_OK_SHOW:
      if (state.authorization.regOkShow) {
        stateCopy.authorization = {
          ...state.authorization,
          regOkShow: false,
          loginForm: true,
        };
      } else {
        stateCopy.authorization = {
          ...state.authorization,
          regOkShow: true,
        };
      }
      return stateCopy;
    case ALL_CLOSE:
      stateCopy.authorization = {
        ...state.authorization,
        loginForm: false,
        regForm: false,
        regOkShow: false,
        regMail: false,
      };
      return stateCopy;
    case MAIL_OK_SHOW:
      stateCopy.authorization = {
        ...state.authorization,
        loginForm: true,
        mailOkShow: false,
      };
      return stateCopy;
    case PUSH_OK_SHOW:
      stateCopy.authorization = {
        ...state.authorization,
        pushOkShow: false,
      };
      return stateCopy;
    case SPEC_TABLE_EDIT:
      stateCopy.SpecArray = [
        ...state.SpecArray.filter(function (row) {
          return row.id !== action.id;
        }),
      ];
      for (let i = 1; i < stateCopy.SpecArray.length; i++) {
        stateCopy.SpecArray[i].id = i;
      }
      localStorage.setItem("array", JSON.stringify(stateCopy.SpecArray));
      return stateCopy;
    default:
      return state;
  }
  return stateCopy;
};

export const addNewTextCreator = (text, num, form, param) => {
  return {
    type: ADD_NEW_TEXT,
    text: text,
    num: num,
    form: form,
    param: param,
  };
};

export const calculateCreator = (form) => {
  return {
    type: CALCULATE,
    form: form,
  };
};

export const addDataCreator = (form) => {
  return {
    type: ADD_DATA,
    form: form,
  };
};

export const apiStateCreator = (apiState, arr) => {
  return {
    type: API_STATE,
    apiState: apiState,
    arr: arr,
  };
};

export const pushDataCreator = () => {
  return {
    type: PUSH_DATA,
  };
};

export const pushDataLoginCreator = () => {
  return {
    type: PUSH_DATA_LOGIN,
  };
};

export const orderShowCreator = () => {
  return {
    type: ORDER_SHOW,
  };
};

export const setUserDataCreator = (data) => {
  return {
    type: SET_USER_DATA,
    user_id: data.user_id,
    email: data.email,
    isAuth: true,
  };
};

export const setLoginDataCreator = (values) => {
  return {
    type: SET_LOGIN_DATA,
    values,
  };
};

export const setLogoutDataCreator = () => {
  return {
    type: SET_LOGOUT_DATA,
  };
};

export const loginFormShowCreator = () => {
  return {
    type: LOGIN_FORM_SHOW,
  };
};

export const setRegistrationDataCreator = () => {
  return {
    type: SET_REGISTRATION_DATA,
  };
};

export const registrationFormShowCreator = () => {
  return {
    type: REGISTRATION_FORM_SHOW,
  };
};

export const regOkShowCreator = () => {
  return {
    type: REG_OK_SHOW,
  };
};

export const mailOkShowCreator = () => {
  return {
    type: MAIL_OK_SHOW,
  };
};

export const allCloseCreator = () => {
  return {
    type: ALL_CLOSE,
  };
};

export const pushOkshowCreator = () => {
  return {
    type: PUSH_OK_SHOW,
  };
};

export const specTableEditCreator = (id) => {
  return {
    type: SPEC_TABLE_EDIT,
    id: id,
  };
};

export const getStateAPIThunkCreator = (length) => {
  return (dispatch) => {
    if (length === 0) {
      getStateAPI()
        .then((response) => {
          let arr = JSON.parse(localStorage.getItem("array"));
          dispatch(apiStateCreator(response.data, arr));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
};

export const pushDataThunkCreator = (SpecArray) => {
  return (dispatch) => {
    if (SpecArray.length > 1) {
      if (SpecArray[0].email) {
        postSpec(SpecArray)
          .then(function (response) {
            if (response.data.resultCode === 0) {
              dispatch(pushDataCreator());
              localStorage.removeItem("array");
            } else {
              dispatch(setLogoutDataCreator())
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        dispatch(pushDataLoginCreator());
      }
    }
  };
};

export const setUserDataThunkCreator = (data) => {
  return (dispatch) => {
    getMe()
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(setUserDataCreator(response.data));
        } else {
          dispatch(setLogoutDataCreator());
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const setLoginDataThunkCreator = (values) => {
  return (dispatch) => {
    login(values)
      .then((response) => {
        if (response) {
          if (response.data) {
            if (response.data.resultCode === 0) {
              const token = response.data.token;
              localStorage.setItem("token", token);
              setAuthorizationToken(token);
              dispatch(setLoginDataCreator(values));
            }
          }
        }
      })
      .catch(function (error) {
        dispatch(setLogoutDataCreator());
      });
  };
};

export const setRegistrationDataThunkCreator = (values) => {
  return (dispatch) => {
    registration(values)
      .then((response) => {
        if (response) {
          if (response.data) {
            if (response.data.resultCode === 0) {
              dispatch(setRegistrationDataCreator());
            }
          }
        }
      })
      .catch(function (error) { });
  };
};

export default reduser;
