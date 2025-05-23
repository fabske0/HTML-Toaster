import type { ToastContent, ToastOptions } from "../types";
declare class Toaster {
    #private;
    constructor();
    add(content: ToastContent, options?: ToastOptions): number;
    remove(id: number): string;
}
declare const toaster: Toaster;
export default toaster;
