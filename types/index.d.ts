export type ImageLink = `${string}.png` | `${string}.jpg` | `${string}.jpeg` | `${string}.gif` | `${string}.svg` | `${string}.webp`;

export interface ToastContent {
    message: string;
    image?: {
        src: ImageLink;
        alt: string;
        width?: number;
        height?: number;
        type?: "round" | "square";
    }
    button?: {
        label: string;
        onClick: () => void;
    }
}

export interface ToastOptions {
    duration?: number;
    type?: "info" | "success" | "warning" | "error";
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    progressBar?: boolean;
    priority?: "high" | "medium" | "low";
}

export interface Toast {
    id: number;
    content: ToastContent;
    options: Omit<ToastOptions, 'priority'> & {
        priority: 0 | 1 | 2;
    };
}