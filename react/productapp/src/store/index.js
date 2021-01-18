import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import modelReducer from "./modelReducer";
import stateReducer from "./stateReducer";
import {customReducerEnhancer} from "./customReducerEnhancer";
import {multiActions} from "./multiActionMiddleware";
import {asyncEnhancer} from "./asyncEnhancer";
import {createGraphQLMiddleware} from "../graphql/GraphQLMiddleware";

const enhancedReducer = customReducerEnhancer(
  combineReducers(
    {
      modelData: modelReducer,
      stateData: stateReducer
    })
);

export default createStore(enhancedReducer,
  compose(applyMiddleware(multiActions),
    applyMiddleware(createGraphQLMiddleware()),
    asyncEnhancer(2000)));

export {
  saveProduct, saveSupplier, deleteProduct, deleteSupplier
} from "./modelActionCreators";