import React, { createContext, useContext, useReducer } from "react";
import { IAction, IState } from "../reducer";

export const StateContext = createContext<any>({});

interface IStateProvider {
    reducer: (state: any, action: IAction) => IState | { user: IState; };
    initialState: IState;
    children: React.ReactNode;
}

export const StateProvider = ({ reducer, initialState, children }: IStateProvider) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
