export interface PaintingData {
  id: string;
  name: string;
  imgUrl: string;
  size: string;
  price: number;
  quantity: number;
}

export interface childrenProps {
  children: React.ReactNode;
}

export interface AlertProps {
  openAlert: boolean;
  setOpenAlert: (open: boolean) => void;
  alertMessage: string;
  alertStatus: string;
}

export interface AuthProviderProps {
  alertMessage: string;
  alertStatus: string;
  setAlert: (aStatus: string, aMessage: string) => void;
  openAlert: boolean;
  setOpenAlert: (open: boolean) => void;
  paintings: PaintingData[];
  cartItems: PaintingData[];
  setCartItems: (cartItem: PaintingData[]) => void;
}
