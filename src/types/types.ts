export interface PaintingData {
  id: string;
  name: string;
  imgUrl: string;
  size: string;
  price: number;
  quantity: number;
  price_id: string;
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

export interface GalleryData {
  _id: string;
  name: string;
  image?: string;
  src?: string;
  size: string;
  description?: string;
  bio?: string;
  price: number;
  inventory: number;
  price_id: string;
  cat: string;
}

export interface AuthProviderProps {
  alertMessage: string;
  alertStatus: string;
  setAlert: (aStatus: string, aMessage: string) => void;
  openAlert: boolean;
  setOpenAlert: (open: boolean) => void;
  paintings: PaintingData[];
  cartItems: any;
  setCartItems: (cartItem: PaintingData[]) => void;
  oils: GalleryData[];
  mixedMedia: GalleryData[];
  addToCart: (painting: GalleryData | PaintingData) => void;
  header: string;
  contactPic: string;
  galleryHeader: string;
}
