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

getDOM('immediate-toast').addEventListener('click', () => {
    toaster.add({
        message: 'Immediate toast',
        image: {
            src: 'https://picsum.photos/200/150?random=1',
            alt: 'Random image',
            width: 50,
            height: 50,
        }
    }, { 
        priority: 'immediate',
    })
})