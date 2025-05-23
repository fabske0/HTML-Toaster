import type { Toast, ToastContent, ToastOptions } from "../types"

enum Priority {
    low = 0,
    medium = 1,
    high = 2,
}

class Toaster {
    #container: HTMLDivElement
    #queue: {
        [key in Priority]: Toast[]
    } = {
        [Priority.high]: [] as Toast[],
        [Priority.medium]: [] as Toast[],
        [Priority.low]: [] as Toast[],
    }
    #idCounter = 0
    #active = false

    constructor() {
        // Dynamically inject style.css if not already present
        if (!document.getElementById("toaster-style-link")) {
            const link = document.createElement("link")
            link.id = "toaster-style-link"
            link.rel = "stylesheet"
            link.type = "text/css"
            link.href = "../styles/style.css"
            document.head.appendChild(link)
        }
        this.#container = document.createElement("div")
        this.#container.classList.add("toast-container")
        document.body.appendChild(this.#container)
    }

    add(content: ToastContent, options?: ToastOptions): number {
        const toast: Toast = {
            content,
            options: {
                ...options,
                priority: Priority[options?.priority ?? "low"],
            },
            id: this.#idCounter++,
        }

        this.#queue[toast.options.priority].push(toast)

        if (!this.#active) this.#render()
        return toast.id
    }

    remove(id: number) {
        for (const priority of Object.values(Priority) as Priority[]) {
            const index = this.#queue[priority].findIndex(
                (toast: Toast) => toast.id === id
            )
            if (index !== -1) {
                const toast = this.#queue[priority][index]
                this.#queue[priority].splice(index, 1)
                return `Removed toast ${toast.id}`
            }
        }
        return `Toast ${id} not found`
    }

    #render() {
        const item =
            this.#queue[Priority.high][0] ??
            this.#queue[Priority.medium][0] ??
            this.#queue[Priority.low][0]
        if (!item) return
        this.#active = true
        const toast = document.createElement("div")
        toast.className = `toast toast-${item.options.type ?? "info"}`
        item.content.message = this.#formatMessage(item.content.message)
        toast.innerHTML = `
        <div class="toast-content">
            ${
                item.content.image
                    ? `<img src="${
                          item.content.image.src
                      }" class="toast-image toast-image-${
                          item.content.image.type ?? "square"
                      }" alt="${item.content.image.alt ?? ""}" style="width: ${
                          item.content.image.width
                              ? item.content.image.width + "px"
                              : "auto"
                      }; height: ${
                          item.content.image.height
                              ? item.content.image.height + "px"
                              : "auto"
                      };"></img>`
                    : ""
            }
            <span class="toast-message">${item.content.message}</span>
            ${
                item.content.button
                    ? `<button class="toast-button">${item.content.button.label}</button>`
                    : ""
            }
        </div>
        `

        if (item.content.button) {
            toast
                .querySelector(".toast-button")
                ?.addEventListener("click", () => {
                    item.content.button?.onClick()
                })
        }

        this.#container.appendChild(toast)
        toast.classList.add("show")

        const timeout = setTimeout(() => {
            toast.classList.remove("show")
            toast.classList.add("hide")
            const removeTimeout = setTimeout(() => {
                this.#container.removeChild(toast)
                this.#queue[item.options.priority].shift()
                this.#active = false
                this.#render()
            }, 450)
        }, item.options.duration ?? 3000)
    }

    #formatMessage(message: string) {
        return message.replace(/\r\n/g, "<br>")
    }
}

const toaster = new Toaster()
export default toaster