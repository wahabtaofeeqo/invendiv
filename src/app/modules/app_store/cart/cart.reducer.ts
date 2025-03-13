import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { CartItem } from '../../shared/models/cart-item.model';
import {
  addItemToCart,
  decreaseItemTotal,
  increaseItemTotal,
  removeItemFromCart,
} from './cart.actions';

export interface CartState extends EntityState<CartItem> {}

export const adapter: EntityAdapter<CartItem> = createEntityAdapter<CartItem>();
const initialState: CartState = adapter.getInitialState({});

/**
 * Reducer
 *
 * @param state
 * @param action
 * @returns
 */
export function cartReducer(state = initialState, action: any): CartState {
  switch (action.type) {
    case addItemToCart.type:
      let id = action.item.id;
      let isAdded = state.entities[id];

      if (isAdded) {
        let update = {
          id: action.item.id,
          changes: { ...action.item, total: action.item.total + 1 },
        };

        return {
          ...adapter.updateOne(update, state),
        };
      } else return { ...adapter.addOne(action.item, state) };

    case removeItemFromCart.type:
      return {
        ...adapter.removeOne(action.id, state),
      };

    case increaseItemTotal.type:
      let item = state.entities[action.id];
      if (item) {
        let update = {
          id: item?.id,
          changes: { ...item, total: item.total + 1 },
        };

        return {
          ...adapter.updateOne(update, state),
        };
      }

      return state;

    case decreaseItemTotal.type:
      let model = state.entities[action.id];
      if (model) {
        if (model.total == 1) {
          return {
            ...adapter.removeOne(model.id, state),
          };
        } else {
          let payload = {
            id: model.id,
            changes: { ...model, total: model.total - 1 },
          };

          return {
            ...adapter.updateOne(payload, state),
          };
        }
      }

      return state;

    default:
      return state;
  }
}
