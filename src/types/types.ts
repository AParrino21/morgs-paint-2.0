export interface PaintingData {
  id: string,
  name: string,
  image: string,
  description: string,
  price: string,
  quantity: string
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
  backgrounds: any[]
  paintings: PaintingData[]
}
