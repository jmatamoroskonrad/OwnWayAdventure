export type PaymentModalProps = {
    onClose: () => void;
    open: boolean;
    onPaid: () => void;
    total:number;
}