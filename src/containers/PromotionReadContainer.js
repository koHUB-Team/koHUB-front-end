import { connect } from "react-redux";
import { PromotionRead } from "../pages/Admin";
import { ACTION, MODE } from "../store";

function mapReduxStateToReactProps(state) {
  let { admin } = state;

  return {
    mode: admin.mode,
  };
}

//dispatch 함수를 인자로.
//두번째인자로 상위 컴포넌트의 props도 받기 가능.
//리턴값을 wraped component의 props에서 사용.
function mapReduxDispatchToReactProps(dispatch) {
  return {
    onWriteBtnClick: () => {
      dispatch({
        type: ACTION.ADMIN.CHANGE_MODE,
        mode: MODE.CREATE,
      });
    },
    onUpdateBtnClick: (promotionId) => {
      dispatch({
        type: ACTION.ADMIN.CHANGE_MODE,
        mode: MODE.UPDATE,
      });

      dispatch({
        type: ACTION.ADMIN.CHANGE_PROMOTION_ID,
        selectedPromotionId: promotionId,
      });
    },
  };
}

export default connect(null, mapReduxDispatchToReactProps)(PromotionRead);
