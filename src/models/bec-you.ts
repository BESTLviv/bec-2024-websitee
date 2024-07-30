export  interface ModalWindowProps {
    items: Item[];
    handleClose: () => void
  }
export interface Item{
  title: string;
  text: string;
}
export interface BecYouItemProps {
    title: string;
    text1: string;
    subText: string;
    more: Item[],
}