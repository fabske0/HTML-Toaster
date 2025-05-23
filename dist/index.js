var Priority;
(function (Priority) {
    Priority[Priority["low"] = 0] = "low";
    Priority[Priority["medium"] = 1] = "medium";
    Priority[Priority["high"] = 2] = "high";
})(Priority || (Priority = {}));
class Toaster {
    #container;
    #queue = {
        [Priority.high]: [],
        [Priority.medium]: [],
        [Priority.low]: [],
    };
    #idCounter = 0;
    #active = false;
    constructor() {
        // Dynamically inject style.css if not already present
        if (!document.getElementById("toaster-style-link")) {
            const link = document.createElement("link");
            link.id = "toaster-style-link";
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = "../styles/style.css";
            document.head.appendChild(link);
        }
        this.#container = document.createElement("div");
        this.#container.classList.add("toast-container");
        document.body.appendChild(this.#container);
    }
    add(content, options) {
        const toast = {
            content,
            options: {
                ...options,
                priority: Priority[options?.priority ?? "low"],
            },
            id: this.#idCounter++,
        };
        this.#queue[toast.options.priority].push(toast);
        if (!this.#active)
            this.#render();
        return toast.id;
    }
    remove(id) {
        for (const priority of Object.values(Priority)) {
            const index = this.#queue[priority].findIndex((toast) => toast.id === id);
            if (index !== -1) {
                const toast = this.#queue[priority][index];
                this.#queue[priority].splice(index, 1);
                return `Removed toast ${toast.id}`;
            }
        }
        return `Toast ${id} not found`;
    }
    #render() {
        const item = this.#queue[Priority.high][0] ??
            this.#queue[Priority.medium][0] ??
            this.#queue[Priority.low][0];
        if (!item)
            return;
        this.#active = true;
        const toast = document.createElement("div");
        toast.className = `toast toast-${item.options.type ?? "info"}`;
        item.content.message = this.#formatMessage(item.content.message);
        toast.innerHTML = `
        <div class="toast-content">
            ${item.content.image
            ? `<img src="${item.content.image.src}" class="toast-image toast-image-${item.content.image.type ?? "square"}" alt="${item.content.image.alt ?? ""}" style="width: ${item.content.image.width
                ? item.content.image.width + "px"
                : "auto"}; height: ${item.content.image.height
                ? item.content.image.height + "px"
                : "auto"};"></img>`
            : ""}
            <span class="toast-message">${item.content.message}</span>
            ${item.content.button
            ? `<button class="toast-button">${item.content.button.label}</button>`
            : ""}
        </div>
        `;
        if (item.content.button) {
            toast
                .querySelector(".toast-button")
                ?.addEventListener("click", () => {
                item.content.button?.onClick();
            });
        }
        this.#container.appendChild(toast);
        toast.classList.add("show");
        const timeout = setTimeout(() => {
            toast.classList.remove("show");
            toast.classList.add("hide");
            const removeTimeout = setTimeout(() => {
                this.#container.removeChild(toast);
                this.#queue[item.options.priority].shift();
                this.#active = false;
                this.#render();
            }, 450);
        }, item.options.duration ?? 3000);
    }
    #formatMessage(message) {
        return message.replace(/\r\n/g, "<br>");
    }
}
const toaster = new Toaster();
export default toaster;
