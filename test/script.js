import toaster from "../dist/index.js"

// Example: show a toast on button click
const getDOM = (id) => document.getElementById(id)

getDOM('low-priority-toast').addEventListener('click', () => {
    toaster.add({
        message: 'Low priority toast',
        image: {
            src: 'https://picsum.photos/200/150?random=1',
            alt: 'Random image',
            width: 50,
            height: 50,
        }
    }, {
         priority: 'low',
    })
})

getDOM('medium-priority-toast').addEventListener('click', () => {
    toaster.add({
        message: 'Medium priority toast',
        image: {
            src: 'https://picsum.photos/200/150?random=1',
            alt: 'Random image',
            width: 50,
            height: 50,
        }
    }, {
        priority: 'medium',
    }
)
})

getDOM('high-priority-toast').addEventListener('click', () => {
    toaster.add({
        message: 'High priority toast',
        image: {
            src: 'https://picsum.photos/200/150?random=1',
            alt: 'Random image',
            width: 50,
            height: 50,
        }
    }, {
        priority: 'high',
    })
})

getDOM('long-duration-toast').addEventListener('click', () => {
    toaster.add({
        message: 'Long duration toast',
        image: {
            src: 'https://picsum.photos/200/150?random=1',
            alt: 'Random image',
            width: 50,
            height: 50,
        }
    }, {
        duration: 50000,
    })
})

getDOM('left-top-toast').addEventListener('click', () => {
    toaster.add({
        message: 'Left top toast',
        image: {
            src: 'https://picsum.photos/200/150?random=1',
            alt: 'Random image',
            width: 50,
            height: 50,
        }
    }, {
        position: 'top-left',
    })
})

getDOM('left-bottom-toast').addEventListener('click', () => {
    toaster.add({
        message: 'Left bottom toast',
        image: {
            src: 'https://picsum.photos/200/150?random=1',
            alt: 'Random image',
            width: 50,
            height: 50,
        }
    }, {
        position: 'bottom-left',
    })
})

getDOM('right-top-toast').addEventListener('click', () => {
    toaster.add({
        message: 'Right top toast',
        image: {
            src: 'https://picsum.photos/200/150?random=1',
            alt: 'Random image',
            width: 50,
            height: 50,
        }
    }, {
        position: 'top-right',
    })
})

getDOM('right-bottom-toast').addEventListener('click', () => {
    toaster.add({
        message: 'Right bottom toast',
        image: {
            src: 'https://picsum.photos/200/150?random=1',
            alt: 'Random image',
            width: 50,
            height: 50,
        }
    }, {
        position: 'bottom-right',
    })
})