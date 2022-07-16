// implement the Action in redux

const BUY_CAKE = 'BUY_CAKE';

function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action',
  };
}
