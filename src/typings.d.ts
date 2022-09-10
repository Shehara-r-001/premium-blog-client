interface ErrorObject {
  msg: string;
}

interface UserData {
  data: {
    token: string;
    user: {
      id: string;
      email: string;
      stripeCustomerID: string;
    };
  };
}

interface User {
  id: string;
  email: string;
}

interface Plan {
  active: boolean;
  unit_amount: number;
  currency: string;
  nickname: string;
  id: string;
  recurring: {
    interval: string;
  };
  product: string;
}

interface Article {
  title: string;
  imgUrl: string;
  desc: string;
  _id: string;
  access: string;
}
